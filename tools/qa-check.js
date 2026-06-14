// tools/qa-check.js
// 在 Node 里 shim window，加载 tank-data.js + tank-renderer.js，渲染全部 82 辆：
//  1) 每辆 SVG 非空、<svg>...</svg> 闭合、标签平衡
//  2) 坐标不严重溢出 viewBox(240x140)
//  3) spec.id 唯一、icon 前缀正确
//  4) 生成 contact-sheet.html 供肉眼复查
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const dataSrc = fs.readFileSync(path.join(ROOT, 'tank-data.js'), 'utf8');
const rendSrc = fs.readFileSync(path.join(ROOT, 'tank-renderer.js'), 'utf8');

// 取出 tankData（tank-data.js 末尾有 helper 函数，整体包一层 return）
const tankData = (new Function(dataSrc + '\n; return tankData;'))();
if (!Array.isArray(tankData) || tankData.length < 82) {
    throw new Error('tankData 长度异常: ' + (tankData && tankData.length));
}

// shim window 并执行渲染器（它是 (function(){...})() IIFE，挂到 window 上）
// 注意：const tankData 是全局词法变量、不是 window 属性，故同时挂到 global 上
global.window = { tankData };
global.tankData = tankData;
// 渲染器里没用到别的 DOM API；console 可用
eval(rendSrc);

if (typeof window.renderTankSVG !== 'function') throw new Error('renderTankSVG 未挂载');

// ---------- 校验 ----------
function tagBalance(svg) {
    const opens = (svg.match(/<[a-zA-Z]/g) || []).length;
    const closes = (svg.match(/<\/[a-zA-Z]/g) || []).length;
    const selfClose = (svg.match(/\/>/g) || []).length;
    return opens - selfClose - closes; // 应为 0
}
function maxCoord(svg) {
    let m = 0;
    // 先剥掉颜色值（#hex / rgb / rgba / 命名色）和 font-size 等，避免误判
    const cleaned = svg
        .replace(/#[0-9a-fA-F]{3,8}/g, '')
        .replace(/rgba?\([^)]*\)/g, '')
        .replace(/(fill|stroke|color)="[^"]*"/g, '');
    // 只看坐标类属性后的数字
    const re = /\b(?:x|y|cx|cy|r|rx|ry|x1|x2|y1|y2|width|height)\s*=\s*"[-+]?\d+(?:\.\d+)?/g;
    let match;
    while ((match = re.exec(cleaned)) !== null) {
        m = Math.max(m, parseFloat(match[0].match(/[-+]?\d+(?:\.\d+)?/)[0]));
    }
    // points/d 里的坐标也扫一下（取上界粗略检查）
    const pd = cleaned.match(/\b(?:points|d)\s*=\s*"([^"]*)"/g) || [];
    pd.forEach(seg => {
        (seg.match(/[-+]?\d+(?:\.\d+)?/g) || []).forEach(n => m = Math.max(m, parseFloat(n)));
    });
    return m;
}

let problems = [];
const idSet = new Set();
const cards = [];
tankData.forEach((t, i) => {
    // id 唯一性 & icon
    if (!t.spec || !t.spec.id) { problems.push(`#${i} 无 spec.id`); return; }
    if (idSet.has(t.spec.id)) problems.push(`#${i} spec.id 重复: ${t.spec.id}`);
    idSet.add(t.spec.id);
    if (!String(t.icon).startsWith('tank:')) problems.push(`#${i} icon 非 tank: 前缀`);

    // 渲染主图 + 缩略图
    const svg = window.renderTankSVG(t);
    const thumb = window.renderTankSVG(t, { width: 160, height: 94, caption: true });
    if (!svg || svg.indexOf('<svg') !== 0 || svg.indexOf('</svg>') < 0) {
        problems.push(`#${i} SVG 结构异常`); return;
    }
    const bal = tagBalance(svg);
    if (bal !== 0) problems.push(`#${i} 标签不平衡(差${bal})`);
    const mc = maxCoord(svg);
    if (mc > 260) problems.push(`#${i} 坐标过大(${mc})，可能溢出`);

    cards.push(`<div class="card"><div class="idx">#${i + 1}</div><div class="img">${thumb}</div><div class="cap">${t.spec.name} · ${t.spec.nation} · ${t.spec.archetype}${t.spec.id !== (t.spec.name) ? '' : ''}<br><span class="lesson">${escapeHTML(t.name)}</span></div></div>`);
});

function escapeHTML(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

console.log('共渲染 ' + cards.length + ' 辆');
console.log(problems.length ? ('⚠️ 发现 ' + problems.length + ' 个问题:\n  ' + problems.join('\n  ')) : '✅ 结构校验全部通过（非空/闭合/平衡/无严重溢出/id唯一/icon前缀）');

// ---------- 联系表 ----------
const html = `<!doctype html><html><head><meta charset="utf-8"><title>Tank contact sheet</title>
<style>body{background:#1a1a2e;color:#eee;font-family:system-ui,sans-serif;padding:16px}
h1{color:#ffd700}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px}
.card{background:#16213e;border-radius:8px;padding:8px;text-align:center}
.idx{color:#888;font-size:12px}.img svg{width:100%;height:auto;background:#0e1430;border-radius:6px}
.cap{font-size:11px;margin-top:6px;color:#cde}.lesson{color:#ffd700}</style></head>
<body><h1>坦克联系表（${cards.length} 辆）</h1><div class="grid">${cards.join('')}</div></body></html>`;
fs.writeFileSync(path.join(ROOT, 'tools', 'contact-sheet.html'), html);
console.log('联系表已生成: tools/contact-sheet.html');
