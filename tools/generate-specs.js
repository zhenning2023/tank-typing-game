// tools/generate-specs.js
// 一次性脚本：给 tank-data.js 的每条数据插入 spec（坦克型号+国籍+archetype+几何），
// 并把 icon 从 images/xxx.svg 改为 "tank:<id>"。
// 关键：解析现有文件、逐字节保留 words/wordsPerLevel/isTraining/fingerHint/name/description
// 及数组顺序与长度（82），只在每条末尾新增 spec 字段、改写 icon 行。
//
// 运行： node tools/generate-specs.js
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'tank-data.js');
const src = fs.readFileSync(FILE, 'utf8');

// ---------- archetype 几何预设 ----------
const PRESET = {
    light:   { hullLen:126, hullH:22, hullSlope:6,  turret:{shape:'slab',x:120,w:48,h:18}, gun:{len:48,bore:3}, roadWheels:5, interleaved:false, track:'cleated', fender:true, commanderCupola:false },
    medium:  { hullLen:152, hullH:28, hullSlope:16, turret:{shape:'rounded',x:116,w:64,h:22}, gun:{len:64,bore:4,muzzleBrake:true}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:true },
    heavy:   { hullLen:178, hullH:32, hullSlope:8,  turret:{shape:'slab',x:110,w:84,h:26}, gun:{len:74,bore:5,muzzleBrake:true}, roadWheels:8, interleaved:true, track:'cleated', fender:true, commanderCupola:true },
    td:      { hullLen:166, hullH:26, hullSlope:30, turret:{shape:'none'}, gun:{len:84,bore:5,muzzleBrake:true}, roadWheels:7, interleaved:true, track:'cleated', fender:true, commanderCupola:false },
    assault: { hullLen:160, hullH:26, hullSlope:22, turret:{shape:'none'}, gun:{len:58,bore:5,muzzleBrake:false}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:false },
    spg:     { hullLen:150, hullH:30, hullSlope:10, turret:{shape:'none'}, gun:{len:30,bore:9,muzzleBrake:false}, roadWheels:6, interleaved:false, track:'cleated', fender:true, commanderCupola:false }
};
const ARCH = { light:'light', medium:'medium', heavy:'heavy', td:'casemate-TD', assault:'assault-gun', spg:'SPG' };

function tank(id, name, nation, key, over) {
    const preset = JSON.parse(JSON.stringify(PRESET[key]));
    return Object.assign({ id, name, nation, archetype: ARCH[key] }, preset, over || {});
}

// 手绘标志性坦克 id（这些条目的 spec.id 用对应 key，渲染器会走 BESPOKE）
const BESPOKE_IDS = new Set(['tiger_i','panther','tiger_ii','panzer_iv','stug_iii','jagdtiger','jagdpanther','t_34_76','kv_1','sherman','churchill','chi_ha']);

// ---------- 82 条 roster（数组顺序 = tankData 顺序） ----------
// idx 0–55：训练课，每关一辆不同的真实坦克（参数化渲染）
// idx 56–81：坦克挑战，保留原有型号名（含 12 辆手绘版）
const ROSTER = [
    // ===== 训练课 0–55 =====
    tank('panzer38t','Panzer 38(t)','czech','light'),
    tank('t70','T-70','ussr','light'),
    tank('m3lee','M3 Lee','usa','medium'),
    tank('valentine','Valentine','uk','medium'),
    tank('ha_go','Type 95 Ha-Go','japan','light'),
    tank('m14_41','M14/41','italy','medium'),
    tank('char_b1','Char B1','france','heavy'),
    tank('tp7','7TP','poland','light'),
    tank('hetzer','Hetzer','czech','td'),
    tank('kv2','KV-2','ussr','heavy',{turret:{shape:'slab',x:110,w:92,h:34},gun:{len:34,bore:9}}),
    tank('m5_stuart','M5 Stuart','usa','light'),
    tank('crusader','Crusader','uk','medium'),
    tank('chi_he','Type 1 Chi-He','japan','medium'),
    tank('l6_40','L6/40','italy','light'),
    tank('somua_s35','Somua S35','france','medium'),
    tank('tks','TKS','poland','light',{hullLen:96,hullH:16,roadWheels:4,turret:{shape:'slab',x:118,w:34,h:14},gun:{len:20,bore:3}}),
    tank('nashorn','Nashorn','germany','spg',{gun:{len:74,bore:6,muzzleBrake:true}}),
    tank('t26','T-26','ussr','light'),
    tank('m10','M10 Wolverine','usa','td'),
    tank('comet','Comet','uk','medium'),
    tank('ke_ni','Type 98 Ke-Ni','japan','light'),
    tank('sem_75_18','Semovente 75/18','italy','assault'),
    tank('r35','Renault R35','france','light'),
    tank('panzer35t','Panzer 35(t)','czech','light'),
    tank('brumbar','Brummbär','germany','assault',{gun:{len:24,bore:10,muzzleBrake:false}}),
    tank('bt7','BT-7','ussr','light'),
    tank('m36','M36 Jackson','usa','td'),
    tank('challenger','Challenger','uk','medium',{gun:{len:78,bore:4,muzzleBrake:true}}),
    tank('chi_to','Type 4 Chi-To','japan','medium'),
    tank('sem_90_53','Semovente 90/53','italy','td'),
    tank('h39','Hotchkiss H39','france','light'),
    tank('wirbelwind','Wirbelwind','germany','medium',{turret:{shape:'slab',x:116,w:58,h:26},gun:{len:18,bore:8}}),
    tank('su85','SU-85','ussr','td'),
    tank('m22_locust','M22 Locust','usa','light',{hullLen:108,hullH:20,roadWheels:4}),
    tank('centaur','Centaur','uk','medium'),
    tank('ho_i','Type 2 Ho-I','japan','medium'),
    tank('m15_42','M15/42','italy','medium'),
    tank('arl44','ARL 44','france','heavy'),
    tank('jagdpanzer_iv','Jagdpanzer IV','germany','td',{extra:['schurzen']}),
    tank('su122','SU-122','ussr','spg',{gun:{len:28,bore:10,muzzleBrake:false}}),
    tank('m4a3e8','M4A3E8','usa','medium'),
    tank('bishop','Bishop','uk','spg'),
    tank('ho_ni_iii','Ho-Ni III','japan','td'),
    tank('fcm36','FCM 36','france','light'),
    tank('elefant','Elefant','germany','td',{roadWheels:6,interleaved:true}),
    tank('isu152','ISU-152','ussr','spg',{gun:{len:30,bore:11,muzzleBrake:false}}),
    tank('lvt_a4','LVT(A)-4','usa','medium',{hullLen:160,hullH:30}),
    tank('archer','Archer','uk','td'),
    tank('chi_ri','Type 5 Chi-Ri','japan','medium',{hullLen:164}),
    tank('m6','M6 Heavy','usa','heavy'),
    tank('stug_iv','StuG IV','germany','assault',{extra:['schurzen']}),
    tank('t28','T-28','ussr','medium',{hullLen:172}),
    tank('covenanter','Covenanter','uk','medium'),
    tank('su76','SU-76','ussr','td',{hullLen:138,roadWheels:5,interleaved:false}),
    tank('matilda_i','Matilda I','uk','medium'),
    tank('t35','T-35','ussr','heavy',{hullLen:196,roadWheels:8,turret:{shape:'slab',x:120,w:70,h:22}}),

    // ===== 坦克挑战 56–81 =====
    tank('panzer_i','Panzer I Ausf.B','germany','light'),
    tank('panzer_ii_luchs','Panzer II Luchs','germany','light'),
    tank('panzer_iii_n','Panzer III Ausf.N','germany','medium'),
    tank('panzer_iv','Panzer IV Ausf.H','germany','medium'),              // 手绘
    tank('stug_iii','StuG III Ausf.G','germany','assault'),               // 手绘
    tank('tiger_i','Tiger I Ausf.E','germany','heavy'),                   // 手绘
    tank('tiger_ii','Tiger II King Tiger','germany','heavy'),             // 手绘
    tank('panther','Panther Ausf.G','germany','medium'),                  // 手绘
    tank('jagdtiger','Jagdtiger','germany','td'),                         // 手绘
    tank('jagdpanther','Jagdpanther','germany','td'),                     // 手绘
    tank('m3_stuart','M3 Stuart','usa','light'),
    tank('sherman','M4 Sherman','usa','medium'),                          // 手绘
    tank('m26_pershing','M26 Pershing','usa','heavy'),
    tank('m18_hellcat','M18 Hellcat','usa','td',{roadWheels:5,interleaved:false}),
    tank('matilda_ii','Matilda II','uk','medium'),
    tank('churchill','Churchill','uk','heavy'),                           // 手绘
    tank('cromwell','Cromwell','uk','medium'),
    tank('firefly','Sherman Firefly','uk','medium'),
    tank('t_34_76','T-34','ussr','medium'),                               // 手绘
    tank('kv_1','KV-1','ussr','heavy'),                                   // 手绘
    tank('is_2','IS-2','ussr','heavy'),
    tank('su_100','SU-100','ussr','td'),
    tank('m13_40','M13/40','italy','medium'),
    tank('p40','P26/40','italy','heavy'),
    tank('chi_ha','Type 97 Chi-Ha','japan','medium'),                     // 手绘
    tank('chi_nu','Type 3 Chi-Nu','japan','medium')
];

if (ROSTER.length !== 82) {
    throw new Error('ROSTER 长度应为 82，实际 ' + ROSTER.length);
}
// id 唯一性检查
const ids = ROSTER.map(r => r.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) throw new Error('ROSTER 有重复 id: ' + dupes.join(', '));

// ---------- 对参数化（非手绘）条目加确定性微扰，避免同 archetype 雷同 ----------
function jitter(spec, idx) {
    if (BESPOKE_IDS.has(spec.id)) return spec; // 手绘不需要
    spec.hullSlope = Math.max(0, (spec.hullSlope || 0) + ((idx * 3) % 7) - 3);
    if (spec.gun) spec.gun.len = Math.max(28, (spec.gun.len || 60) + (((idx * 5) % 9) - 4) * 2);
    if (spec.turret && spec.turret.shape !== 'none') spec.turret.w = Math.max(36, (spec.turret.w || 60) + (((idx * 2) % 5) - 2) * 3);
    if (!spec.extra) spec.extra = (((idx * 4) % 11) === 0) ? ['antenna'] : [];
    return spec;
}
ROSTER.forEach(jitter);

// ---------- 序列化 spec 为 JS 字面量（键去引号） ----------
function specLiteral(spec) {
    return JSON.stringify(spec).replace(/"(\w+)":/g, '$1:');
}

// ---------- 文本变换：逐条插入 spec、改 icon ----------
const entryRe = /^    \{[\s\S]*?^    \}/gm;
let idx = 0;
let missingIcon = 0;
const newSrc = src.replace(entryRe, (entry) => {
    const spec = ROSTER[idx++];
    // 1) 改 icon
    let e = entry.replace(/icon:\s*"images\/[^"]*"/, () => {
        return 'icon: "tank:' + spec.id + '"';
    });
    if (e === entry) missingIcon++;
    // 2) 在闭合 } 前插入 spec
    e = e.replace(/\n    \}$/, ',\n        spec: ' + specLiteral(spec) + '\n    }');
    return e;
});

if (idx !== 82) throw new Error('正则只匹配到 ' + idx + ' 条，应为 82');
if (missingIcon > 0) console.warn('警告：' + missingIcon + ' 条未找到 icon 行');

// ---------- 安全校验：确认 words 等关键字段仍在、数组长度不变 ----------
const verifySrc = '(function(){' + newSrc + '\n; return tankData;})';
const data = eval(verifySrc)();
if (!Array.isArray(data) || data.length !== 82) throw new Error('写入后 tankData 长度异常: ' + (data && data.length));
data.forEach((t, i) => {
    if (!Array.isArray(t.words) || t.words.length === 0) throw new Error('第 ' + i + ' 条 words 丢失');
    if (typeof t.wordsPerLevel !== 'number') throw new Error('第 ' + i + ' 条 wordsPerLevel 丢失');
    if (!t.spec || !t.spec.id) throw new Error('第 ' + i + ' 条 spec 未写入');
    if (t.icon.indexOf('tank:') !== 0) throw new Error('第 ' + i + ' 条 icon 未改为 tank: 前缀');
});
console.log('校验通过：82 条，words/wordsPerLevel 保留，spec 已写入，icon 已更新。');

fs.writeFileSync(FILE, newSrc);
console.log('已写入 ' + FILE);
console.log('样例（第 0 条 spec）:', specLiteral(ROSTER[0]));
