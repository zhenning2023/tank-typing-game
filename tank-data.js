// 二战坦克数据 - 从基础训练到进阶挑战
// 包含德国、美国、英国、苏联、意大利、日本等国家的坦克
const tankData = [
    // ========== 基础训练阶段 - 完整键盘覆盖 ==========
    
    // 第一阶段：左手基础行 (Home Row Left)
    {
        name: "第1课 - 单键A",
        icon: "images/panzer_i.svg",
        description: "练习左手小指按A键",
        words: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手小指按A键"
    },
    {
        name: "第2课 - 单键S",
        icon: "images/panzer_ii.svg",
        description: "练习左手无名指按S键",
        words: ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手无名指按S键"
    },
    {
        name: "第3课 - 单键D",
        icon: "images/panzer_iii.svg",
        description: "练习左手中指按D键",
        words: ["d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手中指按D键"
    },
    {
        name: "第4课 - 单键F",
        icon: "images/panzer_iv.svg",
        description: "练习左手食指按F键",
        words: ["f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指按F键"
    },
    {
        name: "第5课 - 左手组合AS",
        icon: "images/panther.svg",
        description: "练习A和S键组合",
        words: ["a", "s", "a", "s", "a", "s", "as", "sa", "a", "s", "as", "sa"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手小指A，无名指S"
    },
    {
        name: "第6课 - 左手组合AD",
        icon: "images/stug_iii.svg",
        description: "练习A和D键组合",
        words: ["a", "d", "a", "d", "a", "d", "ad", "da", "a", "d", "ad", "da"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手小指A，中指D"
    },
    {
        name: "第7课 - 左手组合AF",
        icon: "images/tiger_i.svg",
        description: "练习A和F键组合",
        words: ["a", "f", "a", "f", "a", "f", "af", "fa", "a", "f", "af", "fa"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手小指A，食指F"
    },
    {
        name: "第8课 - 左手组合SD",
        icon: "images/tiger_ii.svg",
        description: "练习S和D键组合",
        words: ["s", "d", "s", "d", "s", "d", "sd", "ds", "s", "d", "sd", "ds"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手无名指S，中指D"
    },
    {
        name: "第9课 - 左手组合SF",
        icon: "images/jagdtiger.svg",
        description: "练习S和F键组合",
        words: ["s", "f", "s", "f", "s", "f", "sf", "fs", "s", "f", "sf", "fs"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手无名指S，食指F"
    },
    {
        name: "第10课 - 左手组合DF",
        icon: "images/jagdpanther.svg",
        description: "练习D和F键组合",
        words: ["d", "f", "d", "f", "d", "f", "df", "fd", "d", "f", "df", "fd"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手中指D，食指F"
    },
    {
        name: "第11课 - 左手四键完整",
        icon: "images/panzer_i.svg",
        description: "练习左手A S D F四键",
        words: ["a", "s", "d", "f", "as", "ad", "af", "sd", "df", "sf", "asdf", "fdsa"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手：小指A，无名指S，中指D，食指F"
    },
    
    // 第二阶段：右手基础行 (Home Row Right)
    {
        name: "第12课 - 单键J",
        icon: "images/panzer_ii.svg",
        description: "练习右手食指按J键",
        words: ["j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指按J键"
    },
    {
        name: "第13课 - 单键K",
        icon: "images/panzer_iii.svg",
        description: "练习右手中指按K键",
        words: ["k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手中指按K键"
    },
    {
        name: "第14课 - 单键L",
        icon: "images/panzer_iv.svg",
        description: "练习右手无名指按L键",
        words: ["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手无名指按L键"
    },
    {
        name: "第15课 - 单键;",
        icon: "images/panther.svg",
        description: "练习右手小指按;键",
        words: [";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手小指按;键"
    },
    {
        name: "第16课 - 右手组合JK",
        icon: "images/stug_iii.svg",
        description: "练习J和K键组合",
        words: ["j", "k", "j", "k", "j", "k", "jk", "kj", "j", "k", "jk", "kj"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指J，中指K"
    },
    {
        name: "第17课 - 右手组合JL",
        icon: "images/tiger_i.svg",
        description: "练习J和L键组合",
        words: ["j", "l", "j", "l", "j", "l", "jl", "lj", "j", "l", "jl", "lj"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指J，无名指L"
    },
    {
        name: "第18课 - 右手组合KL",
        icon: "images/tiger_ii.svg",
        description: "练习K和L键组合",
        words: ["k", "l", "k", "l", "k", "l", "kl", "lk", "k", "l", "kl", "lk"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手中指K，无名指L"
    },
    {
        name: "第19课 - 右手四键完整",
        icon: "images/jagdtiger.svg",
        description: "练习右手J K L ;四键",
        words: ["j", "k", "l", ";", "jk", "jl", "kl", "j;", "k;", "l;", "jkl;", ";lkj"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手：食指J，中指K，无名指L，小指;"
    },
    
    // 第三阶段：左右手配合 (Home Row Full)
    {
        name: "第20课 - 左右简单配合",
        icon: "images/jagdpanther.svg",
        description: "练习左右手简单配合",
        words: ["fj", "jf", "dk", "kd", "sl", "ls", "fj", "jf", "dk", "kd", "sl", "ls"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "练习左右手配合"
    },
    {
        name: "第21课 - 左右进阶配合",
        icon: "images/panzer_i.svg",
        description: "练习左右手进阶配合",
        words: ["fj", "dk", "sl", "aj", "sk", "dl", "fj", "dk", "sl", "aj", "sk", "dl"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "练习左右手配合"
    },
    {
        name: "第22课 - 单键G",
        icon: "images/panzer_ii.svg",
        description: "练习左手食指按G键",
        words: ["g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指按G键"
    },
    {
        name: "第23课 - 单键H",
        icon: "images/panzer_iii.svg",
        description: "练习右手食指按H键",
        words: ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指按H键"
    },
    {
        name: "第24课 - GH组合",
        icon: "images/panzer_iv.svg",
        description: "练习G和H键组合",
        words: ["g", "h", "g", "h", "g", "h", "gh", "hg", "g", "h", "gh", "hg"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指G，右手食指H"
    },
    {
        name: "第25课 - 基础行完整练习",
        icon: "images/panther.svg",
        description: "基础行A S D F G H J K L ;完整练习",
        words: ["asdf", "jkl;", "gh", "fj", "dk", "sl", "asdf", "jkl;", "gh", "fj", "dk", "sl"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "基础行完整练习"
    },
    
    // 第四阶段：上排键 (Top Row QWERTYUIOP)
    {
        name: "第26课 - 单键Q",
        icon: "images/stug_iii.svg",
        description: "练习左手小指按Q键",
        words: ["q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手小指按Q键"
    },
    {
        name: "第27课 - 单键W",
        icon: "images/tiger_i.svg",
        description: "练习左手无名指按W键",
        words: ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手无名指按W键"
    },
    {
        name: "第28课 - 单键E",
        icon: "images/tiger_ii.svg",
        description: "练习左手中指按E键",
        words: ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手中指按E键"
    },
    {
        name: "第29课 - 单键R",
        icon: "images/jagdtiger.svg",
        description: "练习左手食指按R键",
        words: ["r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指按R键"
    },
    {
        name: "第30课 - 单键T",
        icon: "images/jagdpanther.svg",
        description: "练习左手食指按T键",
        words: ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指按T键"
    },
    {
        name: "第31课 - 左手上排组合",
        icon: "images/panzer_i.svg",
        description: "练习左手上排QWERT组合",
        words: ["q", "w", "e", "r", "t", "qw", "er", "rt", "qwer", "wert", "qwe", "ert"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手上排键练习"
    },
    {
        name: "第32课 - 单键Y",
        icon: "images/panzer_ii.svg",
        description: "练习右手食指按Y键",
        words: ["y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指按Y键"
    },
    {
        name: "第33课 - 单键U",
        icon: "images/panzer_iii.svg",
        description: "练习右手食指按U键",
        words: ["u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指按U键"
    },
    {
        name: "第34课 - 单键I",
        icon: "images/panzer_iv.svg",
        description: "练习右手中指按I键",
        words: ["i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手中指按I键"
    },
    {
        name: "第35课 - 单键O",
        icon: "images/panther.svg",
        description: "练习右手无名指按O键",
        words: ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手无名指按O键"
    },
    {
        name: "第36课 - 单键P",
        icon: "images/stug_iii.svg",
        description: "练习右手小指按P键",
        words: ["p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手小指按P键"
    },
    {
        name: "第37课 - 右手上排组合",
        icon: "images/tiger_i.svg",
        description: "练习右手上排YUIOP组合",
        words: ["y", "u", "i", "o", "p", "yu", "io", "op", "yuio", "uiop", "yui", "iop"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手上排键练习"
    },
    {
        name: "第38课 - 上排完整练习",
        icon: "images/tiger_ii.svg",
        description: "上排QWERTYUIOP完整练习",
        words: ["qwer", "tyui", "op", "qw", "er", "ty", "ui", "op", "qwert", "yuio", "qwe", "iop"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "上排键完整练习"
    },
    
    // 第五阶段：下排键 (Bottom Row ZXCVBNM)
    {
        name: "第39课 - 单键Z",
        icon: "images/jagdtiger.svg",
        description: "练习左手小指按Z键",
        words: ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手小指按Z键"
    },
    {
        name: "第40课 - 单键X",
        icon: "images/jagdpanther.svg",
        description: "练习左手无名指按X键",
        words: ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手无名指按X键"
    },
    {
        name: "第41课 - 单键C",
        icon: "images/panzer_i.svg",
        description: "练习左手中指按C键",
        words: ["c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手中指按C键"
    },
    {
        name: "第42课 - 单键V",
        icon: "images/panzer_ii.svg",
        description: "练习左手食指按V键",
        words: ["v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指按V键"
    },
    {
        name: "第43课 - 单键B",
        icon: "images/panzer_iii.svg",
        description: "练习左手食指按B键",
        words: ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手食指按B键"
    },
    {
        name: "第44课 - 左手下排组合",
        icon: "images/panzer_iv.svg",
        description: "练习左手下排ZXCVB组合",
        words: ["z", "x", "c", "v", "b", "zx", "cv", "vb", "zxc", "cvb", "zxcv", "cvbn"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "左手下排键练习"
    },
    {
        name: "第45课 - 单键N",
        icon: "images/panther.svg",
        description: "练习右手食指按N键",
        words: ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指按N键"
    },
    {
        name: "第46课 - 单键M",
        icon: "images/stug_iii.svg",
        description: "练习右手食指按M键",
        words: ["m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手食指按M键"
    },
    {
        name: "第47课 - 右手下排组合",
        icon: "images/tiger_i.svg",
        description: "练习右手下排NM组合",
        words: ["n", "m", "nm", "mn", "nm", "mn", "nm", "mn", "nm", "mn", "nm", "mn"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手下排键练习"
    },
    {
        name: "第48课 - 下排完整练习",
        icon: "images/tiger_ii.svg",
        description: "下排ZXCVBNM完整练习",
        words: ["zxcv", "bnm", "zx", "cv", "bn", "nm", "zxc", "vbn", "zxcvb", "cvbnm", "zxcv", "bnm"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "下排键完整练习"
    },
    
    // 第六阶段：标点符号 (Punctuation)
    {
        name: "第49课 - 单键,",
        icon: "images/jagdtiger.svg",
        description: "练习右手小指按,键",
        words: [",", ",", ",", ",", ",", ",", ",", ",", ",", ",", ",", ","],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手小指按,键"
    },
    {
        name: "第50课 - 单键.",
        icon: "images/jagdpanther.svg",
        description: "练习右手无名指按.键",
        words: [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手无名指按.键"
    },
    {
        name: "第51课 - 单键/",
        icon: "images/panzer_i.svg",
        description: "练习右手小指按/键",
        words: ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "右手小指按/键"
    },
    {
        name: "第52课 - 标点符号组合",
        icon: "images/panzer_ii.svg",
        description: "练习标点符号,./组合",
        words: [",", ".", "/", ",.", "./", "/,", ",.", "./", ",./", "/.,", ",./", "/."],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "标点符号练习"
    },
    
    // 第七阶段：综合练习 (Comprehensive)
    {
        name: "第53课 - 基础行+上排",
        icon: "images/panzer_iii.svg",
        description: "基础行和上排键综合练习",
        words: ["asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "基础行和上排综合练习"
    },
    {
        name: "第54课 - 基础行+下排",
        icon: "images/panzer_iv.svg",
        description: "基础行和下排键综合练习",
        words: ["asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "基础行和下排综合练习"
    },
    {
        name: "第55课 - 上排+下排",
        icon: "images/panther.svg",
        description: "上排和下排键综合练习",
        words: ["qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "上排和下排综合练习"
    },
    {
        name: "第56课 - 全键盘基础",
        icon: "images/stug_iii.svg",
        description: "全键盘基础综合练习",
        words: ["asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv"],
        wordsPerLevel: 12,
        isTraining: true,
        fingerHint: "全键盘基础综合练习"
    },
    
    // ========== 德国坦克进阶挑战 ==========
    {
        name: "Panzer I Ausf.B",
        icon: "images/panzer_i.svg",
        description: "德国轻型坦克 - 简单词练习",
        words: ["cat", "dog", "sun", "run", "fun", "box", "red", "blue", "sky", "sea", "tree", "bird"],
        wordsPerLevel: 12
    },
    {
        name: "Panzer II Ausf.L Luchs",
        icon: "images/panzer_ii.svg",
        description: "德国轻型侦察坦克 - 快速反应",
        words: ["fast", "slow", "jump", "play", "game", "tank", "war", "run", "fly", "swim", "walk", "hop"],
        wordsPerLevel: 12
    },
    {
        name: "Panzer III Ausf.N",
        icon: "images/panzer_iii.svg",
        description: "德国中型坦克 - 步兵支援",
        words: ["attack", "battle", "cannon", "defend", "engine", "fighter", "ground", "troop", "force", "army", "unit", "squad"],
        wordsPerLevel: 12
    },
    {
        name: "Panzer IV Ausf.H",
        icon: "images/panzer_iv.svg",
        description: "德国中型坦克 - 全能战士",
        words: ["armored", "battalion", "campaign", "division", "fortress", "grenade", "mechanized", "regiment", "platoon", "brigade", "corps", "company"],
        wordsPerLevel: 12
    },
    {
        name: "StuG III Ausf.G",
        icon: "images/stug_iii.svg",
        description: "德国突击炮 - 精确打击",
        words: ["assault", "bunker", "destroyer", "flak", "howitzer", "jagd", "mobile", "panzer", "sturm", "geschutz", "gun", "tank"],
        wordsPerLevel: 12
    },
    {
        name: "Tiger I Ausf.E",
        icon: "images/tiger_i.svg",
        description: "德国重型坦克 - 战场之王",
        words: ["artillery", "barracks", "camouflage", "command", "doctrine", "elite", "frontline", "general", "major", "colonel", "captain", "lieutenant"],
        wordsPerLevel: 12
    },
    {
        name: "Tiger II Ausf.B King Tiger",
        icon: "images/tiger_ii.svg",
        description: "德国重型坦克 - 终极武器",
        words: ["ballistics", "caliber", "detonation", "explosive", "firepower", "grenadier", "heavy", "invincible", "armor", "steel", "iron", "metal"],
        wordsPerLevel: 12
    },
    {
        name: "Panther Ausf.G",
        icon: "images/panther.svg",
        description: "德国中型坦克 - 均衡设计",
        words: ["advanced", "ballistic", "cannon", "design", "engineering", "firepower", "gun", "heavy", "machine", "weapon", "system", "power"],
        wordsPerLevel: 12
    },
    {
        name: "Jagdtiger",
        icon: "images/jagdtiger.svg",
        description: "德国重型坦克歼击车 - 堡垒破坏者",
        words: ["annihilate", "battleship", "catastrophic", "destruction", "eliminate", "fortification", "gigantic", "howitzer", "destroy", "crush", "smash", "wreck"],
        wordsPerLevel: 12
    },
    {
        name: "Jagdpanther",
        icon: "images/jagdpanther.svg",
        description: "德国重型坦克歼击车 - 狩猎者",
        words: ["ambush", "camouflage", "deadly", "efficient", "firepower", "guerrilla", "hunter", "invisible", "stealth", "sniper", "track", "stalk"],
        wordsPerLevel: 12
    },
    
    // ========== 美国坦克 ==========
    {
        name: "M3 Stuart",
        icon: "images/usa_stuart.svg",
        description: "美国轻型坦克 - 侦察先锋",
        words: ["scout", "patrol", "recon", "light", "fast", "agile", "quick", "speed", "rapid", "swift", "alert", "watch"],
        wordsPerLevel: 12
    },
    {
        name: "M4 Sherman",
        icon: "images/usa_sherman.svg",
        description: "美国中型坦克 - 盟军主力",
        words: ["allied", "armor", "brave", "courage", "duty", "honor", "liberty", "victory", "freedom", "justice", "hero", "glory"],
        wordsPerLevel: 12
    },
    {
        name: "M26 Pershing",
        icon: "images/usa_pershing.svg",
        description: "美国重型坦克 - 重拳出击",
        words: ["powerful", "strong", "tough", "mighty", "force", "impact", "strike", "dominate", "crush", "smash", "punch", "blast"],
        wordsPerLevel: 12
    },
    {
        name: "M18 Hellcat",
        icon: "images/usa_hellcat.svg",
        description: "美国坦克歼击车 - 闪电战",
        words: ["lightning", "thunder", "storm", "flash", "rapid", "swift", "bolt", "zap", "electric", "shock", "spark", "jolt"],
        wordsPerLevel: 12
    },
    
    // ========== 英国坦克 ==========
    {
        name: "Matilda II",
        icon: "images/uk_matilda.svg",
        description: "英国步兵坦克 - 铁壁防御",
        words: ["shield", "guard", "protect", "defend", "secure", "safety", "barrier", "fortress", "wall", "armor", "block", "cover"],
        wordsPerLevel: 12
    },
    {
        name: "Churchill",
        icon: "images/uk_churchill.svg",
        description: "英国重型坦克 - 坚韧不拔",
        words: ["endure", "persist", "resist", "stand", "firm", "steady", "stable", "last", "tough", "strong", "brave", "bold"],
        wordsPerLevel: 12
    },
    {
        name: "Cromwell",
        icon: "images/uk_cromwell.svg",
        description: "英国巡洋坦克 - 快速突击",
        words: ["cruise", "charge", "rush", "dash", "sprint", "race", "speed", "swift", "fast", "quick", "rapid", "zoom"],
        wordsPerLevel: 12
    },
    {
        name: "Firefly",
        icon: "images/uk_firefly.svg",
        description: "英国坦克歼击车 - 火力支援",
        words: ["flame", "fire", "burn", "blaze", "spark", "ignite", "torch", "flare", "heat", "glow", "flash", "blaze"],
        wordsPerLevel: 12
    },
    
    // ========== 苏联坦克 ==========
    {
        name: "T-34",
        icon: "images/ussr_t34.svg",
        description: "苏联中型坦克 - 传奇战车",
        words: ["legend", "famous", "iconic", "classic", "mythic", "epic", "historic", "renowned", "great", "grand", "noble", "heroic"],
        wordsPerLevel: 12
    },
    {
        name: "KV-1",
        icon: "images/ussr_kv1.svg",
        description: "苏联重型坦克 - 钢铁巨人",
        words: ["giant", "colossus", "titan", "massive", "enormous", "huge", "vast", "immense", "big", "large", "great", "mighty"],
        wordsPerLevel: 12
    },
    {
        name: "IS-2",
        icon: "images/ussr_is2.svg",
        description: "苏联重型坦克 - 突破先锋",
        words: ["breakthrough", "advance", "progress", "forward", "onward", "ahead", "beyond", "further", "push", "drive", "move", "go"],
        wordsPerLevel: 12
    },
    {
        name: "SU-100",
        icon: "images/ussr_su100.svg",
        description: "苏联坦克歼击车 - 狙击手",
        words: ["sniper", "target", "aim", "shoot", "precision", "accurate", "focus", "hit", "strike", "fire", "shot", "mark"],
        wordsPerLevel: 12
    },
    
    // ========== 意大利坦克 ==========
    {
        name: "M13/40",
        icon: "images/italy_m13.svg",
        description: "意大利中型坦克 - 沙漠之狐",
        words: ["desert", "sand", "dune", "arid", "dry", "hot", "sun", "heat", "warm", "dusty", "sahara", "barren"],
        wordsPerLevel: 12
    },
    {
        name: "P40",
        icon: "images/italy_p40.svg",
        description: "意大利重型坦克 - 最后防线",
        words: ["final", "last", "end", "finish", "close", "ultimate", "conclude", "terminate", "complete", "done", "over", "stop"],
        wordsPerLevel: 12
    },
    
    // ========== 日本坦克 ==========
    {
        name: "Type 97 Chi-Ha",
        icon: "images/japan_chiha.svg",
        description: "日本中型坦克 - 亚洲猛虎",
        words: ["asia", "east", "orient", "tiger", "dragon", "samurai", "warrior", "honor", "japan", "tokyo", "ninja", "shogun"],
        wordsPerLevel: 12
    },
    {
        name: "Type 3 Chi-Nu",
        icon: "images/japan_chinu.svg",
        description: "日本中型坦克 - 防御专家",
        words: ["defense", "guard", "protect", "shield", "secure", "safe", "cover", "ward", "block", "defend", "save", "keep"],
        wordsPerLevel: 12
    }
];

// 获取当前等级的坦克数据
function getTankData(level) {
    const index = Math.min(level - 1, tankData.length - 1);
    return tankData[index];
}

// 获取随机单词
function getRandomWords(tank, count) {
    const shuffled = [...tank.words].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, tank.words.length));
}
