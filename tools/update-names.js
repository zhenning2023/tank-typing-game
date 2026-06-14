// tools/update-names.js
// 1) 把每条坦克的 spec.name 改成中文（训练课只改 spec 名，保留课次标题）；
//    挑战关(idx 56+) 的条目 .name 也改成中文。
// 2) 末尾追加"萤火虫系列"4 个变体（Vc / Ic / Ic混合型 / IIc），17 磅长管炮为视觉标志。
// 数据安全：不动 words/wordsPerLevel/isTraining/fingerHint 与现有 82 条顺序；
//           仅改 spec.name（自增字段）和挑战关的 .name（仅显示文本），并在末尾追加。
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'tank-data.js');
let src = fs.readFileSync(FILE, 'utf8');

// ---------- 中文名映射（id -> 中文） ----------
const CN = {
    // 训练课 0–55
    panzer38t:'38(t)轻型坦克', t70:'T-70轻型坦克', m3lee:'M3李将军中型坦克', valentine:'瓦伦丁步兵坦克',
    ha_go:'九五式轻战车', m14_41:'M14/41中型坦克', char_b1:'夏尔B1重型坦克', tp7:'7TP轻型坦克',
    hetzer:'追猎者歼击车', kv2:'KV-2重型坦克', m5_stuart:'M5斯图亚特轻型坦克', crusader:'十字军巡洋坦克',
    chi_he:'一式中战车', l6_40:'L6/40轻型坦克', somua_s35:'索玛S35骑兵坦克', tks:'TKS超轻型坦克',
    nashorn:'犀牛自行反坦克炮', t26:'T-26轻型坦克', m10:'M10狼獾歼击车', comet:'彗星巡洋坦克',
    ke_ni:'九八式轻战车', sem_75_18:'75/18突击炮', r35:'雷诺R35步兵坦克', panzer35t:'35(t)轻型坦克',
    brumbar:'灰熊突击坦克', bt7:'BT-7快速坦克', m36:'M36杰克逊歼击车', challenger:'挑战者巡洋坦克',
    chi_to:'四式中战车', sem_90_53:'90/53自行反坦克炮', h39:'哈奇开斯H39轻型坦克', wirbelwind:'旋风自行高炮',
    su85:'SU-85歼击车', m22_locust:'M22蝗虫空降坦克', centaur:'半人马巡洋坦克', ho_i:'二式炮战车',
    m15_42:'M15/42中型坦克', arl44:'ARL 44重型坦克', jagdpanzer_iv:'四号歼击车', su122:'SU-122自行火炮',
    m4a3e8:'M4A3E8谢尔曼', bishop:'主教自行火炮', ho_ni_iii:'三式炮战车', fcm36:'FCM 36步兵坦克',
    elefant:'象式歼击车', isu152:'ISU-152自行火炮', lvt_a4:'LVT(A)-4两栖坦克', archer:'阿契尔歼击车',
    chi_ri:'五式中战车', m6:'M6重型坦克', stug_iv:'四号突击炮', t28:'T-28中型坦克',
    covenanter:'盟约者巡洋坦克', su76:'SU-76自行火炮', matilda_i:'马蒂尔达I步兵坦克', t35:'T-35多炮塔坦克',
    // 挑战关 56–81（spec.name + 条目 .name 都要中文）
    panzer_i:'一号坦克B型', panzer_ii_luchs:'二号山猫轻型坦克', panzer_iii_n:'三号坦克N型',
    panzer_iv:'四号坦克H型', stug_iii:'三号突击炮G型', tiger_i:'虎式坦克E型', tiger_ii:'虎王坦克',
    panther:'黑豹坦克G型', jagdtiger:'猎虎歼击车', jagdpanther:'猎豹歼击车', m3_stuart:'M3斯图亚特轻型坦克',
    sherman:'M4谢尔曼中型坦克', m26_pershing:'M26潘兴重型坦克', m18_hellcat:'M18地狱猫歼击车',
    matilda_ii:'马蒂尔达II步兵坦克', churchill:'丘吉尔步兵坦克', cromwell:'克伦威尔巡洋坦克',
    firefly:'谢尔曼萤火虫', t_34_76:'T-34中型坦克', kv_1:'KV-1重型坦克', is_2:'IS-2重型坦克',
    su_100:'SU-100歼击车', m13_40:'M13/40中型坦克', p40:'P26/40重型坦克', chi_ha:'九七式中战车', chi_nu:'三式中战车'
};

// ---------- 4 个新萤火虫变体（末尾追加） ----------
const FIREFLIES = [
    {
        name: '谢尔曼萤火虫Vc', id: 'firefly_vc',
        desc: '英国萤火虫坦克 - 17磅长管炮（M4A4底盘，最常见）',
        words: ['firefly','british','sherman','normandy','bocage','ambush','hunter','panzer','tiger','flash','glow','seventeen','pound','destroy','gunner','vc'],
        spec: { hullLen:160, hullH:30, hullSlope:12, turret:{shape:'rounded',x:114,w:62,h:24}, gun:{len:84,bore:4,muzzleBrake:true}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:true, extra:[] }
    },
    {
        name: '谢尔曼萤火虫Ic', id: 'firefly_ic',
        desc: '英国萤火虫坦克 - 17磅长管炮（M4底盘）',
        words: ['firefly','ic','sherman','british','tank','hunter','night','glow','spark','flash','gun','armor','battle','field','crew','range'],
        spec: { hullLen:150, hullH:28, hullSlope:12, turret:{shape:'rounded',x:116,w:60,h:22}, gun:{len:80,bore:4,muzzleBrake:true}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:true, extra:[] }
    },
    {
        name: '谢尔曼萤火虫Ic混合型', id: 'firefly_hybrid',
        desc: '英国萤火虫坦克 - 17磅长管炮（M4复合车体）',
        words: ['firefly','hybrid','sherman','british','composite','hull','gunner','flash','night','ambush','panzer','tiger','destroy','range','crew','vc'],
        spec: { hullLen:154, hullH:30, hullSlope:8, turret:{shape:'rounded',x:116,w:62,h:23}, gun:{len:82,bore:4,muzzleBrake:true}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:true, extra:[] }
    },
    {
        name: '谢尔曼萤火虫IIc', id: 'firefly_iic',
        desc: '英国萤火虫坦克 - 17磅长管炮（M4A2柴油底盘）',
        words: ['firefly','iic','sherman','british','diesel','m4a2','long','gun','seventeen','pounder','ambush','hunter','flash','glow','tank','crew'],
        spec: { hullLen:156, hullH:28, hullSlope:14, turret:{shape:'rounded',x:114,w:61,h:22}, gun:{len:80,bore:4,muzzleBrake:true}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:true, extra:[] }
    }
];

function specLit(obj) { return JSON.stringify(obj).replace(/"(\w+)":/g, '$1:'); }

// ---------- 逐条改 spec.name（全部）+ 挑战关改条目 .name ----------
const entryRe = /^    \{[\s\S]*?^    \}/gm;
let idx = 0;
let touchedSpec = 0, touchedEntry = 0;
src = src.replace(entryRe, (block) => {
    const idm = block.match(/id:"([^"]+)"/);
    if (!idm) { idx++; return block; }
    const cn = CN[idm[1]];
    idx++;
    if (!cn) return block;
    let b = block;
    // spec.name（无空格变体）：name:"..."  —— 每条恰好一处
    if (/name:"[^"]*"/.test(b)) { b = b.replace(/name:"[^"]*"/, `name:"${cn}"`); touchedSpec++; }
    // 挑战关(idx 57..82 即数组下标 56+)：条目 .name（有空格变体）name: "..."
    if (idx >= 57 && /name: "[^"]*"/.test(b)) { b = b.replace(/name: "[^"]*"/, `name: "${cn}"`); touchedEntry++; }
    return b;
});
if (idx !== 82) throw new Error('正则匹配到 ' + idx + ' 条，应为 82');
console.log(`已改 spec.name: ${touchedSpec} 条；挑战关条目 .name: ${touchedEntry} 条`);

// ---------- 追加萤火虫系列 ----------
const newEntries = FIREFLIES.map(f => {
    return '    {\n' +
        `        name: "${f.name}",\n` +
        `        icon: "tank:${f.id}",\n` +
        `        description: "${f.desc}",\n` +
        `        words: ${JSON.stringify(f.words)},\n` +
        `        wordsPerLevel: 16,\n` +
        `        spec: ${specLit(Object.assign({ id: f.id, name: f.name, nation: 'uk', archetype: 'medium' }, f.spec))}\n` +
        '    }';
}).join(',\n');

// 最后一条无尾逗号：`    }\n];` -> `    },\n<新条目>\n];`
if (!/\n    \}\n];/.test(src)) throw new Error('未找到数组结尾 `    }\\n];`');
src = src.replace(/\n    \}\n];/, '\n    },\n' + newEntries + '\n];');

// ---------- 写回并校验 ----------
fs.writeFileSync(FILE, src);

const data = (new Function(src + ';return tankData;'))();
if (data.length !== 86) throw new Error('写入后长度应为 86，实际 ' + data.length);
// spec.name 全中文、id 唯一
const idList = data.map(t => t.spec && t.spec.id);
const dup = idList.filter((id, i) => idList.indexOf(id) !== i);
if (dup.length) throw new Error('spec.id 重复: ' + dup);
const nonCn = data.filter(t => !/^[一-鿿]/.test(t.spec.name || ''));
if (nonCn.length) console.log('⚠️ spec.name 非中文开头: ' + nonCn.map(t => t.spec.name).join(', '));
// 训练课条目 .name 仍是"第N课"（未被改）
const badLesson = data.slice(0, 56).filter(t => !/^第\d+课/.test(t.name));
if (badLesson.length) throw new Error('训练课条目 .name 被误改: ' + badLesson.map(t => t.name).join(', '));
// 挑战关 .name 中文
const badCh = data.slice(56, 82).filter(t => !/^[一-鿿]/.test(t.name));
if (badCh.length) throw new Error('挑战关 .name 非中文: ' + badCh.map(t => t.name).join(', '));
// 萤火虫系列在末尾
const ff = data.slice(82).map(t => t.name);
console.log('✅ 总数 ' + data.length + '；末尾追加: ' + ff.join(' / '));
console.log('校验通过。');
