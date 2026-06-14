// ============================================================
// tank-renderer.js —— 运行时参数化 SVG 坦克渲染器
// 从每条 tank-data 条目携带的 spec 生成精细矢量侧面图。
//   renderTankSVG(tankOrId, opts)  -> 完整 <svg>…</svg> 字符串
//   renderTankInner(tankOrId, opts)-> 不含外层 <svg>（用于内嵌缩略图）
// spec.id 命中 BESPOKE 则用手绘高级版，否则走参数化生成器。
// ============================================================
(function () {
    // ---------- 各国配色（hull=主色, hullDark=描边/阴影, accent=国籍色条/标题） ----------
    const NATION_COLORS = {
        germany: { hull: '#cdbd7d', hullDark: '#7d7444', accent: '#e0b21a' }, // dunkelgelb 深黄
        ussr:    { hull: '#5d7a4a', hullDark: '#3b502f', accent: '#e23b3b' }, // 苏联绿
        usa:     { hull: '#4e5a2e', hullDark: '#323b1d', accent: '#f0c419' }, // 橄榄褐
        uk:      { hull: '#80744a', hullDark: '#534b30', accent: '#d39a33' }, // 卡其
        japan:   { hull: '#7c5a3a', hullDark: '#513a25', accent: '#c52a2a' }, // 棕
        italy:   { hull: '#6f7852', hullDark: '#484f37', accent: '#3f9e5a' }, // 灰绿
        france:  { hull: '#5a6a7e', hullDark: '#3a4654', accent: '#5a7bd0' }, // 蓝灰
        czech:   { hull: '#6e7058', hullDark: '#474939', accent: '#c25450' }, // 卡其灰
        poland:  { hull: '#6e7058', hullDark: '#474939', accent: '#e0414f' }
    };
    const NATION_FLAGS = {
        germany: '🇩🇪', ussr: '🇷🇺', usa: '🇺🇸', uk: '🇬🇧',
        japan: '🇯🇵', italy: '🇮🇹', france: '🇫🇷', czech: '🇨🇿', poland: '🇵🇱'
    };

    // 通用材质色
    const TRACK = '#2b2b2b', TRACK_DARK = '#141414';
    const METAL = '#3c3c3c', METAL_LIGHT = '#5c5c5c', METAL_DARK = '#222';
    const WHEEL = '#343434', WHEEL_RIM = '#6a6a6a';

    // ---------- 工具 ----------
    function escapeXML(s) {
        return String(s).replace(/[<>&"']/g, c => (
            { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]
        ));
    }
    function findById(id) {
        if (typeof tankData === 'undefined' || !Array.isArray(tankData)) return null;
        const e = tankData.find(t => t.spec && t.spec.id === id);
        return e ? e.spec : null;
    }
    function getSpec(tank) {
        if (tank == null) return null;
        if (typeof tank === 'string') return findById(tank);
        if (tank.spec) return tank.spec;
        if (tank.archetype) return tank; // 裸 spec 对象
        return null;
    }

    // ---------- 画炮管（从 x0,y0 向右） ----------
    function drawGun(out, x0, y0, g, colors) {
        const muzzle = !!g.muzzleBrake;
        const maxLen = 232 - x0 - (muzzle ? 9 : 0); // 保证不溢出 viewBox
        let len = Math.max(20, Math.min(g.len || 60, maxLen));
        const bore = g.bore || 4;
        if (g.mantlet && g.mantlet !== 'none') {
            out.push(`<rect x="${x0 - 3}" y="${y0 - bore / 2 - 3}" width="8" height="${bore + 6}" rx="1.5" fill="${colors.hullDark}"/>`);
        }
        out.push(`<rect x="${x0}" y="${y0 - bore / 2}" width="${len}" height="${bore}" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>`);
        if (muzzle) {
            out.push(`<rect x="${x0 + len - 4}" y="${y0 - bore / 2 - 2}" width="9" height="${bore + 4}" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>`);
        }
    }

    // ---------- 参数化生成器 ----------
    function buildParametric(spec) {
        const colors = NATION_COLORS[spec.nation] || NATION_COLORS.germany;
        const cx = 120;
        const trackTopY = 100, trackBotY = 122;
        const trackH = trackBotY - trackTopY;
        const wheelCY = (trackTopY + trackBotY) / 2;
        const wheelR = 8;
        const hullLen = spec.hullLen || 150;
        const hullH = spec.hullH || 28;
        const hullLeft = cx - hullLen / 2;
        const hullRight = cx + hullLen / 2;
        const deckY = trackTopY - hullH;
        const slope = spec.hullSlope || 0;
        const glacisRun = Math.tan(slope * Math.PI / 180) * hullH;
        const extra = spec.extra || [];
        const out = [];

        // 履带带
        out.push(`<rect x="${hullLeft - 6}" y="${trackTopY}" width="${hullLen + 12}" height="${trackH}" rx="${trackH / 2}" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>`);
        // 履带齿
        if (spec.track === 'cleated') {
            let cleats = '';
            for (let x = hullLeft; x < hullLeft + hullLen + 4; x += 7) {
                cleats += `<line x1="${x}" y1="${trackBotY - 2}" x2="${x}" y2="${trackBotY + 1}" stroke="${TRACK_DARK}" stroke-width="1.4"/>`;
            }
            out.push(cleats);
        }

        // 负重轮
        const nW = spec.roadWheels || 5;
        const sprocketX = hullRight - 2, idlerX = hullLeft + 4;
        const span = sprocketX - idlerX;
        const gap = span / (nW + 1);
        let wheels = '';
        wheels += `<circle cx="${sprocketX}" cy="${wheelCY}" r="${wheelR + 2}" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/>`;
        wheels += `<circle cx="${idlerX}" cy="${wheelCY}" r="${wheelR + 1}" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>`;
        if (spec.interleaved) {
            for (let i = 1; i <= nW; i++) {
                const x = idlerX + gap * i;
                wheels += `<circle cx="${x}" cy="${wheelCY}" r="${wheelR}" fill="${WHEEL}" stroke="${TRACK_DARK}" stroke-width="1"/>`;
            }
            for (let i = 1; i <= nW; i++) {
                const x = idlerX + gap * i + gap / 2;
                wheels += `<circle cx="${x}" cy="${wheelCY}" r="${wheelR}" fill="${METAL}" stroke="${TRACK_DARK}" stroke-width="1" opacity="0.8"/>`;
            }
        } else {
            for (let i = 1; i <= nW; i++) {
                const x = idlerX + gap * i;
                wheels += `<circle cx="${x}" cy="${wheelCY}" r="${wheelR}" fill="${WHEEL}" stroke="${TRACK_DARK}" stroke-width="1"/>`;
                wheels += `<circle cx="${x}" cy="${wheelCY}" r="3" fill="${WHEEL_RIM}"/>`;
            }
        }
        out.push(`<g>${wheels}</g>`);

        // 裙板（遮住负重轮）
        if (extra.includes('schurzen')) {
            out.push(`<rect x="${hullLeft - 5}" y="${trackTopY - 1}" width="${hullLen + 10}" height="13" fill="${colors.hullDark}" stroke="${TRACK_DARK}" stroke-width="1" opacity="0.95"/>`);
        }

        // 车体（前部带倾斜装甲）
        const hullPts = [
            [hullLeft, trackTopY],
            [hullLeft, deckY],
            [hullRight - glacisRun, deckY],
            [hullRight, trackTopY]
        ].map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
        out.push(`<polygon points="${hullPts}" fill="${colors.hull}" stroke="${colors.hullDark}" stroke-width="1.5"/>`);
        // 挡泥板
        if (spec.fender !== false) {
            out.push(`<rect x="${hullLeft - 6}" y="${trackTopY - 3}" width="${hullLen + 12}" height="3" fill="${colors.hullDark}"/>`);
        }
        // 国籍色条
        out.push(`<rect x="${hullLeft + 4}" y="${deckY + 2}" width="16" height="3" fill="${colors.accent}"/>`);
        // 车体细节线
        out.push(`<line x1="${hullLeft + 6}" y1="${deckY + hullH * 0.5}" x2="${hullRight - 8}" y2="${deckY + hullH * 0.5}" stroke="${colors.hullDark}" stroke-width="1" opacity="0.6"/>`);

        // 炮塔 / 战斗室 + 炮
        const t = spec.turret || {};
        const g = spec.gun || {};
        if (t.shape && t.shape !== 'none') {
            const tx = (t.x != null) ? t.x : cx;
            const tw = t.w || 60, th = t.h || 22;
            const ttop = deckY - th;
            const fill = colors.hull;
            if (t.shape === 'rounded' || t.shape === 'cast') {
                out.push(`<rect x="${tx - tw / 2}" y="${ttop}" width="${tw}" height="${th}" rx="7" fill="${fill}" stroke="${colors.hullDark}" stroke-width="1.5"/>`);
            } else if (t.shape === 'hemispherical') {
                out.push(`<path d="M ${tx - tw / 2} ${deckY} A ${tw / 2} ${th} 0 0 1 ${tx + tw / 2} ${deckY} Z" fill="${fill}" stroke="${colors.hullDark}" stroke-width="1.5"/>`);
            } else {
                out.push(`<rect x="${tx - tw / 2}" y="${ttop}" width="${tw}" height="${th}" rx="2" fill="${fill}" stroke="${colors.hullDark}" stroke-width="1.5"/>`);
            }
            drawGun(out, tx + tw / 2 - 2, ttop + th / 2, Object.assign({ mantlet: 'rect' }, g), colors);
            if (spec.commanderCupola) {
                out.push(`<rect x="${tx - 9}" y="${ttop - 7}" width="15" height="8" rx="3" fill="${fill}" stroke="${colors.hullDark}" stroke-width="1"/>`);
                out.push(`<circle cx="${tx - 2}" cy="${ttop - 3}" r="2.5" fill="${colors.hullDark}"/>`);
            }
        } else {
            // 固定战斗室（歼击车/突击炮/自行火炮）
            const isSPG = spec.archetype === 'SPG';
            const isTD = spec.archetype === 'casemate-TD';
            const raise = isSPG ? 16 : (isTD ? 2 : 8); // 战斗室高出车体多少
            const casTop = deckY - raise;
            const casLeft = hullLeft + hullLen * 0.16;
            const casRight = cx + 34;
            const frontCut = isTD ? 14 : 3;
            const casPts = [
                [casLeft, deckY],
                [casLeft + 2, casTop],
                [casRight - frontCut, casTop],
                [casRight, deckY]
            ].map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
            out.push(`<polygon points="${casPts}" fill="${colors.hull}" stroke="${colors.hullDark}" stroke-width="1.5"/>`);
            drawGun(out, casRight - 2, casTop + (deckY - casTop) / 2, Object.assign({ mantlet: 'rect' }, g), colors);
        }

        // 天线
        if (extra.includes('antenna')) {
            out.push(`<line x1="${hullLeft + 14}" y1="${deckY}" x2="${hullLeft + 6}" y2="${deckY - 22}" stroke="${METAL}" stroke-width="1.2"/>`);
        }
        return out.join('');
    }

    // ---------- 12 辆手绘标志性坦克（viewBox 0 0 240 140，朝右） ----------
    const BESPOKE = {
        // Tiger I：方正车体+大炮塔+交错负重轮+88 长炮+炮口制退器
        tiger_i: `<rect x="32" y="100" width="178" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="50" cy="111" r="9" fill="${WHEEL}"/><circle cx="64" cy="111" r="9" fill="${METAL}"/><circle cx="78" cy="111" r="9" fill="${WHEEL}"/><circle cx="92" cy="111" r="9" fill="${METAL}"/><circle cx="106" cy="111" r="9" fill="${WHEEL}"/><circle cx="120" cy="111" r="9" fill="${METAL}"/><circle cx="134" cy="111" r="9" fill="${WHEEL}"/><circle cx="148" cy="111" r="9" fill="${METAL}"/><circle cx="162" cy="111" r="9" fill="${WHEEL}"/></g>
<circle cx="196" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="36" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="28" y="70" width="172" height="32" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/><rect x="28" y="68" width="172" height="4" fill="#e0b21a"/>
<polygon points="178,70 210,86 210,102 188,102" fill="#bcae74" stroke="#7d7444" stroke-width="1.5"/>
<rect x="74" y="44" width="98" height="28" rx="3" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="166" y="50" width="10" height="16" fill="#9c9259"/>
<rect x="172" y="56" width="56" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="224" y="53" width="9" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="92" y="36" width="18" height="10" rx="3" fill="#cdbd7d" stroke="#7d7444"/><circle cx="101" cy="39" r="3" fill="#5a5a3a"/>`,

        // Panther：锐利倾斜前装甲+高后置炮塔+75 长炮
        panther: `<rect x="30" y="100" width="182" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="48" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="62" cy="111" r="8.5" fill="${METAL}"/><circle cx="76" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="90" cy="111" r="8.5" fill="${METAL}"/><circle cx="104" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="118" cy="111" r="8.5" fill="${METAL}"/><circle cx="132" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="146" cy="111" r="8.5" fill="${METAL}"/><circle cx="160" cy="111" r="8.5" fill="${WHEEL}"/></g>
<circle cx="196" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="34" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="26,102 26,70 150,70 206,102" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="26" y="68" width="150" height="4" fill="#e0b21a"/>
<rect x="92" y="42" width="92" height="30" rx="4" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<polygon points="92,42 92,72 80,72 80,48" fill="#bcae74"/>
<rect x="180" y="48" width="10" height="18" fill="#9c9259"/>
<rect x="186" y="55" width="48" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="230" y="52" width="9" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="108" y="34" width="16" height="9" rx="3" fill="#cdbd7d" stroke="#7d7444"/>`,

        // Tiger II（虎王）：倾斜前装甲+巨型炮塔+超长炮
        tiger_ii: `<rect x="30" y="100" width="182" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="50" cy="111" r="9" fill="${WHEEL}"/><circle cx="65" cy="111" r="9" fill="${METAL}"/><circle cx="80" cy="111" r="9" fill="${WHEEL}"/><circle cx="95" cy="111" r="9" fill="${METAL}"/><circle cx="110" cy="111" r="9" fill="${WHEEL}"/><circle cx="125" cy="111" r="9" fill="${METAL}"/><circle cx="140" cy="111" r="9" fill="${WHEEL}"/><circle cx="155" cy="111" r="9" fill="${METAL}"/></g>
<circle cx="196" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="34" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="26,102 26,66 140,66 208,102" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="26" y="64" width="140" height="4" fill="#e0b21a"/>
<polygon points="76,42 168,42 176,70 70,70" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<polygon points="76,42 70,70 60,70 60,50" fill="#bcae74"/>
<rect x="170" y="48" width="11" height="18" fill="#9c9259"/>
<rect x="178" y="54" width="50" height="6" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="224" y="51" width="10" height="12" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="96" y="34" width="20" height="10" rx="3" fill="#cdbd7d" stroke="#7d7444"/>`,

        // Panzer IV：小斜前+前置方炮塔+裙板+75 炮
        panzer_iv: `<rect x="34" y="100" width="176" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="30" y="98" width="184" height="12" fill="#9c9259" stroke="${TRACK_DARK}" stroke-width="1" opacity="0.95"/>
<g stroke="${TRACK_DARK}" stroke-width="1" opacity="0.5"><circle cx="54" cy="111" r="6" fill="${WHEEL}"/><circle cx="74" cy="111" r="6" fill="${METAL}"/><circle cx="94" cy="111" r="6" fill="${WHEEL}"/><circle cx="114" cy="111" r="6" fill="${METAL}"/><circle cx="134" cy="111" r="6" fill="${WHEEL}"/><circle cx="154" cy="111" r="6" fill="${METAL}"/></g>
<circle cx="194" cy="111" r="10" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="38" cy="111" r="9" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="32,102 32,72 178,72 212,90 212,102" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="32" y="70" width="150" height="4" fill="#e0b21a"/>
<rect x="70" y="46" width="90" height="28" rx="2" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="156" y="52" width="10" height="16" fill="#9c9259"/>
<rect x="164" y="57" width="50" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="210" y="54" width="9" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="84" y="38" width="16" height="9" rx="3" fill="#cdbd7d" stroke="#7d7444"/>`,

        // StuG III：无炮塔低战斗室+倾斜前装甲+75 炮+裙板
        stug_iii: `<rect x="34" y="100" width="176" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="30" y="98" width="184" height="12" fill="#9c9259" stroke="${TRACK_DARK}" stroke-width="1" opacity="0.95"/>
<circle cx="194" cy="111" r="10" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="38" cy="111" r="9" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="32,102 32,74 90,74 212,102" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<polygon points="32,74 90,74 100,54 60,54" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="32" y="72" width="60" height="4" fill="#e0b21a"/>
<rect x="92" y="58" width="9" height="14" fill="#9c9259"/>
<rect x="100" y="62" width="60" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="156" y="58" width="9" height="13" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="64" y="46" width="14" height="9" rx="2" fill="#cdbd7d" stroke="#7d7444"/>`,

        // Jagdpanther：低矮流线战斗室+陡峭前装甲+超长 88 固定炮
        jagdpanther: `<rect x="30" y="100" width="184" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="48" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="62" cy="111" r="8.5" fill="${METAL}"/><circle cx="76" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="90" cy="111" r="8.5" fill="${METAL}"/><circle cx="104" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="118" cy="111" r="8.5" fill="${METAL}"/><circle cx="132" cy="111" r="8.5" fill="${WHEEL}"/><circle cx="146" cy="111" r="8.5" fill="${METAL}"/></g>
<circle cx="198" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="34" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="26,102 26,78 70,78 214,102" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<polygon points="26,78 70,78 92,58 50,58" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="26" y="76" width="48" height="3" fill="#e0b21a"/>
<rect x="86" y="62" width="9" height="14" fill="#9c9259"/>
<rect x="94" y="66" width="78" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="168" y="62" width="10" height="13" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>`,

        // Jagdtiger：巨型战斗室+超长 128 炮（最大的歼击车）
        jagdtiger: `<rect x="28" y="100" width="186" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="46" cy="111" r="9" fill="${WHEEL}"/><circle cx="60" cy="111" r="9" fill="${METAL}"/><circle cx="74" cy="111" r="9" fill="${WHEEL}"/><circle cx="88" cy="111" r="9" fill="${METAL}"/><circle cx="102" cy="111" r="9" fill="${WHEEL}"/><circle cx="116" cy="111" r="9" fill="${METAL}"/><circle cx="130" cy="111" r="9" fill="${WHEEL}"/><circle cx="144" cy="111" r="9" fill="${METAL}"/><circle cx="158" cy="111" r="9" fill="${WHEEL}"/></g>
<circle cx="200" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="32" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="24,102 24,70 64,70 216,102" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<polygon points="24,70 64,70 86,50 40,50" fill="#cdbd7d" stroke="#7d7444" stroke-width="1.5"/>
<rect x="24" y="68" width="44" height="3" fill="#e0b21a"/>
<rect x="80" y="54" width="10" height="15" fill="#9c9259"/>
<rect x="88" y="58" width="82" height="6" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="166" y="54" width="11" height="14" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>`,

        // T-34：倾斜前装甲+铸造圆炮塔+长炮+大负重轮（无托带轮）
        t_34_76: `<rect x="32" y="100" width="180" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="52" cy="111" r="10" fill="${WHEEL}"/><circle cx="74" cy="111" r="10" fill="${METAL}"/><circle cx="96" cy="111" r="10" fill="${WHEEL}"/><circle cx="118" cy="111" r="10" fill="${METAL}"/><circle cx="140" cy="111" r="10" fill="${WHEEL}"/><circle cx="162" cy="111" r="10" fill="${METAL}"/></g>
<circle cx="198" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="34" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<polygon points="26,102 26,72 138,72 214,102" fill="#5d7a4a" stroke="#3b502f" stroke-width="1.5"/>
<rect x="26" y="70" width="120" height="3" fill="#e23b3b"/>
<path d="M 92 72 L 96 50 A 34 22 0 0 1 168 50 L 172 72 Z" fill="#5d7a4a" stroke="#3b502f" stroke-width="1.5"/>
<rect x="166" y="56" width="10" height="14" fill="#4a6239"/>
<rect x="174" y="60" width="54" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="224" y="57" width="9" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<circle cx="116" cy="48" r="5" fill="#4a6239"/>`,

        // KV-1：方正重车体+大方炮塔+短 76 炮+大负重轮
        kv_1: `<rect x="30" y="100" width="184" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="50" cy="111" r="9" fill="${WHEEL}"/><circle cx="68" cy="111" r="9" fill="${METAL}"/><circle cx="86" cy="111" r="9" fill="${WHEEL}"/><circle cx="104" cy="111" r="9" fill="${METAL}"/><circle cx="122" cy="111" r="9" fill="${WHEEL}"/><circle cx="140" cy="111" r="9" fill="${METAL}"/><circle cx="158" cy="111" r="9" fill="${WHEEL}"/></g>
<circle cx="198" cy="111" r="11" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="34" cy="111" r="10" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="26" y="64" width="172" height="38" fill="#5d7a4a" stroke="#3b502f" stroke-width="1.5"/>
<polygon points="172,64 210,86 210,102 184,102" fill="#4e6940" stroke="#3b502f" stroke-width="1.5"/>
<rect x="26" y="62" width="160" height="3" fill="#e23b3b"/>
<rect x="66" y="36" width="104" height="30" rx="3" fill="#5d7a4a" stroke="#3b502f" stroke-width="1.5"/>
<rect x="164" y="42" width="11" height="18" fill="#4a6239"/>
<rect x="172" y="48" width="40" height="6" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="208" y="45" width="9" height="12" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="84" y="28" width="20" height="10" rx="3" fill="#5d7a4a" stroke="#3b502f"/>`,

        // Sherman：高窄垂直车体+圆炮塔+中型炮+3 组垂直螺旋悬挂
        sherman: `<rect x="40" y="100" width="168" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="64" cy="111" r="12" fill="${WHEEL}"/><circle cx="64" cy="111" r="5" fill="${METAL_LIGHT}"/><circle cx="124" cy="111" r="12" fill="${WHEEL}"/><circle cx="124" cy="111" r="5" fill="${METAL_LIGHT}"/><circle cx="184" cy="111" r="12" fill="${WHEEL}"/><circle cx="184" cy="111" r="5" fill="${METAL_LIGHT}"/></g>
<circle cx="200" cy="111" r="8" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="46" cy="111" r="8" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="38" y="56" width="150" height="46" fill="#4e5a2e" stroke="#323b1d" stroke-width="1.5"/>
<rect x="38" y="54" width="150" height="4" fill="#f0c419"/>
<rect x="38" y="74" width="150" height="2" fill="#323b1d"/>
<rect x="70" y="28" width="86" height="30" rx="6" fill="#4e5a2e" stroke="#323b1d" stroke-width="1.5"/>
<rect x="152" y="34" width="10" height="18" fill="#3f4a23"/>
<rect x="160" y="40" width="52" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="208" y="37" width="9" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="88" y="20" width="16" height="10" rx="3" fill="#4e5a2e" stroke="#323b1d"/>`,

        // Churchill：超长车体+多小负重轮+前置小炮塔
        churchill: `<rect x="22" y="100" width="196" height="22" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="40" cy="112" r="6" fill="${WHEEL}"/><circle cx="56" cy="112" r="6" fill="${METAL}"/><circle cx="72" cy="112" r="6" fill="${WHEEL}"/><circle cx="88" cy="112" r="6" fill="${METAL}"/><circle cx="104" cy="112" r="6" fill="${WHEEL}"/><circle cx="120" cy="112" r="6" fill="${METAL}"/><circle cx="136" cy="112" r="6" fill="${WHEEL}"/><circle cx="152" cy="112" r="6" fill="${METAL}"/><circle cx="168" cy="112" r="6" fill="${WHEEL}"/><circle cx="184" cy="112" r="6" fill="${METAL}"/></g>
<circle cx="208" cy="112" r="8" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="28" cy="112" r="8" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="20" y="74" width="192" height="28" fill="#80744a" stroke="#534b30" stroke-width="1.5"/>
<rect x="20" y="72" width="192" height="3" fill="#d39a33"/>
<rect x="44" y="46" width="78" height="30" rx="4" fill="#80744a" stroke="#534b30" stroke-width="1.5"/>
<rect x="118" y="52" width="9" height="16" fill="#5d5436"/>
<rect x="125" y="57" width="50" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="171" y="54" width="9" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="58" y="38" width="14" height="9" rx="3" fill="#80744a" stroke="#534b30"/>`,

        // Type 97 Chi-Ha：小型矮粗+偏置小炮塔+短炮
        chi_ha: `<rect x="44" y="102" width="156" height="20" rx="9" fill="${TRACK}" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<g stroke="${TRACK_DARK}" stroke-width="1"><circle cx="62" cy="112" r="7" fill="${WHEEL}"/><circle cx="80" cy="112" r="7" fill="${METAL}"/><circle cx="98" cy="112" r="7" fill="${WHEEL}"/><circle cx="116" cy="112" r="7" fill="${METAL}"/><circle cx="134" cy="112" r="7" fill="${WHEEL}"/><circle cx="152" cy="112" r="7" fill="${METAL}"/></g>
<circle cx="188" cy="112" r="8" fill="#474747" stroke="${TRACK_DARK}" stroke-width="1.5"/><circle cx="50" cy="112" r="7" fill="#3d3d3d" stroke="${TRACK_DARK}" stroke-width="1.5"/>
<rect x="40" y="74" width="156" height="30" fill="#7c5a3a" stroke="#513a25" stroke-width="1.5"/>
<polygon points="172,74 206,88 206,104 184,104" fill="#6a4c30" stroke="#513a25" stroke-width="1.5"/>
<rect x="40" y="72" width="150" height="3" fill="#c52a2a"/>
<rect x="84" y="50" width="76" height="26" rx="4" fill="#7c5a3a" stroke="#513a25" stroke-width="1.5"/>
<rect x="156" y="56" width="9" height="14" fill="#5d432b"/>
<rect x="163" y="60" width="44" height="5" fill="${METAL}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="203" y="57" width="8" height="11" rx="1" fill="${METAL_LIGHT}" stroke="${METAL_DARK}" stroke-width="0.8"/>
<rect x="98" y="42" width="14" height="9" rx="3" fill="#7c5a3a" stroke="#513a25"/>`
    };

    // ---------- 对外 API ----------
    function renderTankInner(tank, opts) {
        const spec = getSpec(tank);
        if (!spec) return '';
        const out = [`<ellipse cx="120" cy="124" rx="96" ry="5" fill="rgba(0,0,0,0.28)"/>`];
        if (BESPOKE[spec.id]) {
            out.push(BESPOKE[spec.id]);
        } else {
            out.push(buildParametric(spec));
        }
        return out.join('');
    }

    function renderTankSVG(tank, opts) {
        opts = opts || {};
        const spec = getSpec(tank);
        if (!spec) return '';
        const colors = NATION_COLORS[spec.nation] || NATION_COLORS.germany;
        const inner = renderTankInner(spec, opts);
        let caption = '';
        if (opts.caption !== false) {
            const flag = NATION_FLAGS[spec.nation] || '';
            const name = spec.name || spec.id || '';
            caption = `<text x="120" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="${colors.accent}">${escapeXML(name)} ${flag}</text>`;
        }
        const sizeAttr = (opts.width && opts.height) ? ` width="${opts.width}" height="${opts.height}"` : '';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 140"${sizeAttr} role="img" aria-label="${escapeXML(spec.name || spec.id || 'tank')}">${inner}${caption}</svg>`;
    }

    // 暴露到全局
    window.renderTankSVG = renderTankSVG;
    window.renderTankInner = renderTankInner;
    window.NATION_COLORS = NATION_COLORS;

    // ---------- spec.id 唯一性自检 ----------
    try {
        if (typeof tankData !== 'undefined' && Array.isArray(tankData)) {
            const ids = tankData.map(t => t.spec && t.spec.id).filter(Boolean);
            const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
            if (dupes.length) console.warn('[tank-renderer] 发现重复 spec.id：', dupes);
            const missing = tankData.filter(t => !t.spec).length;
            if (missing) console.warn('[tank-renderer] 有 ' + missing + ' 条缺少 spec 字段');
        }
    } catch (e) {
        console.warn('[tank-renderer] 自检出错：', e);
    }
})();
