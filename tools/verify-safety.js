// 数据安全校验（追加感知）。
// 真正受保护（决定存档 level 下标语义）的字段：words/wordsPerLevel/isTraining/fingerHint，
// 以及训练课(0-55)的 .name 课次标题（课次标识）。
// 挑战关(56+)的 .name 改成中文是用户要求的显示文本改动，不影响 level 下标语义，故不算违规。
// 末尾追加新关卡（长度增长）安全：已存档 level 下标仍指向同一关同一份打字内容。
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const old = (new Function(execSync('git show :tank-data.js', { cwd: ROOT }).toString() + ';return tankData;'))();
const neu = (new Function(fs.readFileSync(path.join(ROOT, 'tank-data.js'), 'utf8') + ';return tankData;'))();

const fields = ['words', 'wordsPerLevel', 'isTraining', 'fingerHint'];
const diffs = [];
const n = Math.min(old.length, neu.length);
for (let i = 0; i < n; i++) {
    for (const f of fields) {
        if (JSON.stringify(old[i][f]) !== JSON.stringify(neu[i][f])) diffs.push(`第${i + 1}条 [${f}] 变了`);
    }
    // 仅训练课(0-55)的课次标题受保护
    if (i < 56 && old[i].name !== neu[i].name) diffs.push(`第${i + 1}条 训练课课次标题变了`);
}
const grown = neu.length - old.length;
const iconOk = neu.every(t => String(t.icon).startsWith('tank:'));
const specOk = neu.every(t => t.spec && t.spec.id);
const ids = neu.map(t => t.spec.id), dup = ids.filter((id, i) => ids.indexOf(id) !== i);

if (diffs.length) {
    console.log('❌ ' + diffs.length + ' 处受保护字段被改:\n' + diffs.join('\n'));
    process.exit(1);
}
console.log(`✅ 数据安全通过：前 ${n} 条受保护字段(words/wordsPerLevel/isTraining/fingerHint + 训练课课次标题)全部逐字节未变。` +
    (grown >= 0 ? ` 末尾安全追加 ${grown} 条（总 ${neu.length}），已存档 level 下标仍指向同一关、同一份打字内容。` : ''));
console.log(`icon 前缀: ${iconOk ? '✅' : '❌'} | spec 齐全: ${specOk ? '✅' : '❌'} | spec.id 唯一: ${dup.length === 0 ? '✅' : '❌ ' + dup}`);
