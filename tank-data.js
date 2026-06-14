// 二战坦克数据 - 从基础训练到进阶挑战
// 包含德国、美国、英国、苏联、意大利、日本等国家的坦克
const tankData = [
    // ========== 基础训练阶段 - 完整键盘覆盖 ==========
    
    // 第一阶段：左手基础行 (Home Row Left)
    {
        name: "第1课 - 单键A",
        icon: "tank:panzer38t",
        description: "练习左手小指按A键",
        words: ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手小指按A键",
        spec: {id:"panzer38t",name:"38(t)轻型坦克",nation:"czech",archetype:"light",hullLen:126,hullH:22,hullSlope:3,turret:{shape:"slab",x:120,w:42,h:18},gun:{len:40,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:["antenna"]}
    },
    {
        name: "第2课 - 单键S",
        icon: "tank:t70",
        description: "练习左手无名指按S键",
        words: ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手无名指按S键",
        spec: {id:"t70",name:"T-70轻型坦克",nation:"ussr",archetype:"light",hullLen:126,hullH:22,hullSlope:6,turret:{shape:"slab",x:120,w:48,h:18},gun:{len:50,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第3课 - 单键D",
        icon: "tank:m3lee",
        description: "练习左手中指按D键",
        words: ["d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手中指按D键",
        spec: {id:"m3lee",name:"M3李将军中型坦克",nation:"usa",archetype:"medium",hullLen:152,hullH:28,hullSlope:19,turret:{shape:"rounded",x:116,w:70,h:22},gun:{len:58,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第4课 - 单键F",
        icon: "tank:valentine",
        description: "练习左手食指按F键",
        words: ["f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指按F键",
        spec: {id:"valentine",name:"瓦伦丁步兵坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:15,turret:{shape:"rounded",x:116,w:61,h:22},gun:{len:68,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第5课 - 左手组合AS",
        icon: "tank:ha_go",
        description: "练习A和S键组合",
        words: ["a", "s", "a", "s", "a", "s", "as", "sa", "a", "s", "as", "sa", "a", "s", "as", "sa"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手小指A，无名指S",
        spec: {id:"ha_go",name:"九五式轻战车",nation:"japan",archetype:"light",hullLen:126,hullH:22,hullSlope:8,turret:{shape:"slab",x:120,w:51,h:18},gun:{len:44,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第6课 - 左手组合AD",
        icon: "tank:m14_41",
        description: "练习A和D键组合",
        words: ["a", "d", "a", "d", "a", "d", "ad", "da", "a", "d", "ad", "da", "a", "d", "ad", "da"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手小指A，中指D",
        spec: {id:"m14_41",name:"M14/41中型坦克",nation:"italy",archetype:"medium",hullLen:152,hullH:28,hullSlope:14,turret:{shape:"rounded",x:116,w:58,h:22},gun:{len:70,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第7课 - 左手组合AF",
        icon: "tank:char_b1",
        description: "练习A和F键组合",
        words: ["a", "f", "a", "f", "a", "f", "af", "fa", "a", "f", "af", "fa", "a", "f", "af", "fa"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手小指A，食指F",
        spec: {id:"char_b1",name:"夏尔B1重型坦克",nation:"france",archetype:"heavy",hullLen:178,hullH:32,hullSlope:9,turret:{shape:"slab",x:110,w:84,h:26},gun:{len:72,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第8课 - 左手组合SD",
        icon: "tank:tp7",
        description: "练习S和D键组合",
        words: ["s", "d", "s", "d", "s", "d", "sd", "ds", "s", "d", "sd", "ds", "s", "d", "sd", "ds"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手无名指S，中指D",
        spec: {id:"tp7",name:"7TP轻型坦克",nation:"poland",archetype:"light",hullLen:126,hullH:22,hullSlope:3,turret:{shape:"slab",x:120,w:54,h:18},gun:{len:56,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第9课 - 左手组合SF",
        icon: "tank:hetzer",
        description: "练习S和F键组合",
        words: ["s", "f", "s", "f", "s", "f", "sf", "fs", "s", "f", "sf", "fs", "s", "f", "sf", "fs"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手无名指S，食指F",
        spec: {id:"hetzer",name:"追猎者歼击车",nation:"czech",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:30,turret:{shape:"none"},gun:{len:84,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第10课 - 左手组合DF",
        icon: "tank:kv2",
        description: "练习D和F键组合",
        words: ["d", "f", "d", "f", "d", "f", "df", "fd", "d", "f", "df", "fd", "d", "f", "df", "fd"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手中指D，食指F",
        spec: {id:"kv2",name:"KV-2重型坦克",nation:"ussr",archetype:"heavy",hullLen:178,hullH:32,hullSlope:11,turret:{shape:"slab",x:110,w:95,h:34},gun:{len:28,bore:9},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第11课 - 左手四键完整",
        icon: "tank:m5_stuart",
        description: "练习左手A S D F四键",
        words: ["a", "s", "d", "f", "as", "ad", "af", "sd", "df", "sf", "asdf", "fdsa", "asdf", "fdsa", "asdf", "fdsa"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手：小指A，无名指S，中指D，食指F",
        spec: {id:"m5_stuart",name:"M5斯图亚特轻型坦克",nation:"usa",archetype:"light",hullLen:126,hullH:22,hullSlope:5,turret:{shape:"slab",x:120,w:42,h:18},gun:{len:50,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    
    // 第二阶段：右手基础行 (Home Row Right)
    {
        name: "第12课 - 单键J",
        icon: "tank:crusader",
        description: "练习右手食指按J键",
        words: ["j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j", "j"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指按J键",
        spec: {id:"crusader",name:"十字军巡洋坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:18,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:58,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:["antenna"]}
    },
    {
        name: "第13课 - 单键K",
        icon: "tank:chi_he",
        description: "练习右手中指按K键",
        words: ["k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手中指按K键",
        spec: {id:"chi_he",name:"一式中战车",nation:"japan",archetype:"medium",hullLen:152,hullH:28,hullSlope:14,turret:{shape:"rounded",x:116,w:70,h:22},gun:{len:68,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第14课 - 单键L",
        icon: "tank:l6_40",
        description: "练习右手无名指按L键",
        words: ["l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l", "l"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手无名指按L键",
        spec: {id:"l6_40",name:"L6/40轻型坦克",nation:"italy",archetype:"light",hullLen:126,hullH:22,hullSlope:7,turret:{shape:"slab",x:120,w:45,h:18},gun:{len:44,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第15课 - 单键;",
        icon: "tank:somua_s35",
        description: "练习右手小指按;键",
        words: [";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手小指按;键",
        spec: {id:"somua_s35",name:"索玛S35骑兵坦克",nation:"france",archetype:"medium",hullLen:152,hullH:28,hullSlope:13,turret:{shape:"rounded",x:116,w:67,h:22},gun:{len:70,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第16课 - 右手组合JK",
        icon: "tank:tks",
        description: "练习J和K键组合",
        words: ["j", "k", "j", "k", "j", "k", "jk", "kj", "j", "k", "jk", "kj", "j", "k", "jk", "kj"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指J，中指K",
        spec: {id:"tks",name:"TKS超轻型坦克",nation:"poland",archetype:"light",hullLen:96,hullH:16,hullSlope:6,turret:{shape:"slab",x:118,w:36,h:14},gun:{len:28,bore:3},roadWheels:4,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第17课 - 右手组合JL",
        icon: "tank:nashorn",
        description: "练习J和L键组合",
        words: ["j", "l", "j", "l", "j", "l", "jl", "lj", "j", "l", "jl", "lj", "j", "l", "jl", "lj"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指J，无名指L",
        spec: {id:"nashorn",name:"犀牛自行反坦克炮",nation:"germany",archetype:"SPG",hullLen:150,hullH:30,hullSlope:13,turret:{shape:"none"},gun:{len:82,bore:6,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第18课 - 右手组合KL",
        icon: "tank:t26",
        description: "练习K和L键组合",
        words: ["k", "l", "k", "l", "k", "l", "kl", "lk", "k", "l", "kl", "lk", "k", "l", "kl", "lk"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手中指K，无名指L",
        spec: {id:"t26",name:"T-26轻型坦克",nation:"ussr",archetype:"light",hullLen:126,hullH:22,hullSlope:5,turret:{shape:"slab",x:120,w:54,h:18},gun:{len:48,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第19课 - 右手四键完整",
        icon: "tank:m10",
        description: "练习右手J K L ;四键",
        words: ["j", "k", "l", ";", "jk", "jl", "kl", "j;", "k;", "l;", "jkl;", ";lkj", "jkl;", ";lkj", "jkl;", ";lkj"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手：食指J，中指K，无名指L，小指;",
        spec: {id:"m10",name:"M10狼獾歼击车",nation:"usa",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:32,turret:{shape:"none"},gun:{len:76,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    
    // 第三阶段：左右手配合 (Home Row Full)
    {
        name: "第20课 - 左右简单配合",
        icon: "tank:comet",
        description: "练习左右手简单配合",
        words: ["fj", "jf", "dk", "kd", "sl", "ls", "fj", "jf", "dk", "kd", "sl", "ls", "fj", "jf", "dk", "kd"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "练习左右手配合",
        spec: {id:"comet",name:"彗星巡洋坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:14,turret:{shape:"rounded",x:116,w:67,h:22},gun:{len:66,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第21课 - 左右进阶配合",
        icon: "tank:ke_ni",
        description: "练习左右手进阶配合",
        words: ["fj", "dk", "sl", "aj", "sk", "dl", "fj", "dk", "sl", "aj", "sk", "dl", "fj", "dk", "sl", "aj"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "练习左右手配合",
        spec: {id:"ke_ni",name:"九八式轻战车",nation:"japan",archetype:"light",hullLen:126,hullH:22,hullSlope:7,turret:{shape:"slab",x:120,w:42,h:18},gun:{len:42,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第22课 - 单键G",
        icon: "tank:sem_75_18",
        description: "练习左手食指按G键",
        words: ["g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g", "g"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指按G键",
        spec: {id:"sem_75_18",name:"75/18突击炮",nation:"italy",archetype:"assault-gun",hullLen:160,hullH:26,hullSlope:19,turret:{shape:"none"},gun:{len:62,bore:5,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第23课 - 单键H",
        icon: "tank:r35",
        description: "练习右手食指按H键",
        words: ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指按H键",
        spec: {id:"r35",name:"雷诺R35步兵坦克",nation:"france",archetype:"light",hullLen:126,hullH:22,hullSlope:6,turret:{shape:"slab",x:120,w:54,h:18},gun:{len:44,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:["antenna"]}
    },
    {
        name: "第24课 - GH组合",
        icon: "tank:panzer35t",
        description: "练习G和H键组合",
        words: ["g", "h", "g", "h", "g", "h", "gh", "hg", "g", "h", "gh", "hg", "g", "h", "gh", "hg"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指G，右手食指H",
        spec: {id:"panzer35t",name:"35(t)轻型坦克",nation:"czech",archetype:"light",hullLen:126,hullH:22,hullSlope:9,turret:{shape:"slab",x:120,w:45,h:18},gun:{len:54,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第25课 - 基础行完整练习",
        icon: "tank:brumbar",
        description: "基础行A S D F G H J K L ;完整练习",
        words: ["asdf", "jkl;", "gh", "fj", "dk", "sl", "asdf", "jkl;", "gh", "fj", "dk", "sl", "asdf", "jkl;", "gh", "fj"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "基础行完整练习",
        spec: {id:"brumbar",name:"灰熊突击坦克",nation:"germany",archetype:"assault-gun",hullLen:160,hullH:26,hullSlope:21,turret:{shape:"none"},gun:{len:28,bore:10,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    
    // 第四阶段：上排键 (Top Row QWERTYUIOP)
    {
        name: "第26课 - 单键Q",
        icon: "tank:bt7",
        description: "练习左手小指按Q键",
        words: ["q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q", "q"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手小指按Q键",
        spec: {id:"bt7",name:"BT-7快速坦克",nation:"ussr",archetype:"light",hullLen:126,hullH:22,hullSlope:8,turret:{shape:"slab",x:120,w:42,h:18},gun:{len:56,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第27课 - 单键W",
        icon: "tank:m36",
        description: "练习左手无名指按W键",
        words: ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手无名指按W键",
        spec: {id:"m36",name:"M36杰克逊歼击车",nation:"usa",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:28,turret:{shape:"none"},gun:{len:84,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第28课 - 单键E",
        icon: "tank:challenger",
        description: "练习左手中指按E键",
        words: ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手中指按E键",
        spec: {id:"challenger",name:"挑战者巡洋坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:17,turret:{shape:"rounded",x:116,w:70,h:22},gun:{len:70,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第29课 - 单键R",
        icon: "tank:chi_to",
        description: "练习左手食指按R键",
        words: ["r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指按R键",
        spec: {id:"chi_to",name:"四式中战车",nation:"japan",archetype:"medium",hullLen:152,hullH:28,hullSlope:13,turret:{shape:"rounded",x:116,w:61,h:22},gun:{len:66,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第30课 - 单键T",
        icon: "tank:sem_90_53",
        description: "练习左手食指按T键",
        words: ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指按T键",
        spec: {id:"sem_90_53",name:"90/53自行反坦克炮",nation:"italy",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:30,turret:{shape:"none"},gun:{len:78,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第31课 - 左手上排组合",
        icon: "tank:h39",
        description: "练习左手上排QWERT组合",
        words: ["q", "w", "e", "r", "t", "qw", "er", "rt", "qwer", "wert", "qwe", "ert", "qwer", "wert", "qwe", "ert"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手上排键练习",
        spec: {id:"h39",name:"哈奇开斯H39轻型坦克",nation:"france",archetype:"light",hullLen:126,hullH:22,hullSlope:9,turret:{shape:"slab",x:120,w:42,h:18},gun:{len:52,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第32课 - 单键Y",
        icon: "tank:wirbelwind",
        description: "练习右手食指按Y键",
        words: ["y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y", "y"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指按Y键",
        spec: {id:"wirbelwind",name:"旋风自行高炮",nation:"germany",archetype:"medium",hullLen:152,hullH:28,hullSlope:15,turret:{shape:"slab",x:116,w:58,h:26},gun:{len:28,bore:8},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第33课 - 单键U",
        icon: "tank:su85",
        description: "练习右手食指按U键",
        words: ["u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指按U键",
        spec: {id:"su85",name:"SU-85歼击车",nation:"ussr",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:32,turret:{shape:"none"},gun:{len:90,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第34课 - 单键I",
        icon: "tank:m22_locust",
        description: "练习右手中指按I键",
        words: ["i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i", "i"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手中指按I键",
        spec: {id:"m22_locust",name:"M22蝗虫空降坦克",nation:"usa",archetype:"light",hullLen:108,hullH:20,hullSlope:4,turret:{shape:"slab",x:120,w:45,h:18},gun:{len:46,bore:3},roadWheels:4,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:["antenna"]}
    },
    {
        name: "第35课 - 单键O",
        icon: "tank:centaur",
        description: "练习右手无名指按O键",
        words: ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手无名指按O键",
        spec: {id:"centaur",name:"半人马巡洋坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:17,turret:{shape:"rounded",x:116,w:67,h:22},gun:{len:72,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第36课 - 单键P",
        icon: "tank:ho_i",
        description: "练习右手小指按P键",
        words: ["p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p", "p"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手小指按P键",
        spec: {id:"ho_i",name:"二式炮战车",nation:"japan",archetype:"medium",hullLen:152,hullH:28,hullSlope:13,turret:{shape:"rounded",x:116,w:58,h:22},gun:{len:64,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第37课 - 右手上排组合",
        icon: "tank:m15_42",
        description: "练习右手上排YUIOP组合",
        words: ["y", "u", "i", "o", "p", "yu", "io", "op", "yuio", "uiop", "yui", "iop", "yuio", "uiop", "yui", "iop"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手上排键练习",
        spec: {id:"m15_42",name:"M15/42中型坦克",nation:"italy",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:56,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第38课 - 上排完整练习",
        icon: "tank:arl44",
        description: "上排QWERTYUIOP完整练习",
        words: ["qwer", "tyui", "op", "qw", "er", "ty", "ui", "op", "qwert", "yuio", "qwe", "iop", "qwer", "tyui", "op", "qw"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "上排键完整练习",
        spec: {id:"arl44",name:"ARL 44重型坦克",nation:"france",archetype:"heavy",hullLen:178,hullH:32,hullSlope:11,turret:{shape:"slab",x:110,w:90,h:26},gun:{len:76,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    
    // 第五阶段：下排键 (Bottom Row ZXCVBNM)
    {
        name: "第39课 - 单键Z",
        icon: "tank:jagdpanzer_iv",
        description: "练习左手小指按Z键",
        words: ["z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手小指按Z键",
        spec: {id:"jagdpanzer_iv",name:"四号歼击车",nation:"germany",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:29,turret:{shape:"none"},gun:{len:78,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:["schurzen"]}
    },
    {
        name: "第40课 - 单键X",
        icon: "tank:su122",
        description: "练习左手无名指按X键",
        words: ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手无名指按X键",
        spec: {id:"su122",name:"SU-122自行火炮",nation:"ussr",archetype:"SPG",hullLen:150,hullH:30,hullSlope:12,turret:{shape:"none"},gun:{len:32,bore:10,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第41课 - 单键C",
        icon: "tank:m4a3e8",
        description: "练习左手中指按C键",
        words: ["c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手中指按C键",
        spec: {id:"m4a3e8",name:"M4A3E8谢尔曼",nation:"usa",archetype:"medium",hullLen:152,hullH:28,hullSlope:14,turret:{shape:"rounded",x:116,w:58,h:22},gun:{len:60,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第42课 - 单键V",
        icon: "tank:bishop",
        description: "练习左手食指按V键",
        words: ["v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指按V键",
        spec: {id:"bishop",name:"主教自行火炮",nation:"uk",archetype:"SPG",hullLen:150,hullH:30,hullSlope:11,turret:{shape:"none"},gun:{len:36,bore:9,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第43课 - 单键B",
        icon: "tank:ho_ni_iii",
        description: "练习左手食指按B键",
        words: ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手食指按B键",
        spec: {id:"ho_ni_iii",name:"三式炮战车",nation:"japan",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:27,turret:{shape:"none"},gun:{len:82,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第44课 - 左手下排组合",
        icon: "tank:fcm36",
        description: "练习左手下排ZXCVB组合",
        words: ["z", "x", "c", "v", "b", "zx", "cv", "vb", "zxc", "cvb", "zxcv", "cvbn", "zxcv", "cvbn", "zxcv", "cvbn"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "左手下排键练习",
        spec: {id:"fcm36",name:"FCM 36步兵坦克",nation:"france",archetype:"light",hullLen:126,hullH:22,hullSlope:6,turret:{shape:"slab",x:120,w:45,h:18},gun:{len:56,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第45课 - 单键N",
        icon: "tank:elefant",
        description: "练习右手食指按N键",
        words: ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指按N键",
        spec: {id:"elefant",name:"象式歼击车",nation:"germany",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:33,turret:{shape:"none"},gun:{len:84,bore:5,muzzleBrake:true},roadWheels:6,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:["antenna"]}
    },
    {
        name: "第46课 - 单键M",
        icon: "tank:isu152",
        description: "练习右手食指按M键",
        words: ["m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m", "m"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手食指按M键",
        spec: {id:"isu152",name:"ISU-152自行火炮",nation:"ussr",archetype:"SPG",hullLen:150,hullH:30,hullSlope:9,turret:{shape:"none"},gun:{len:28,bore:11,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第47课 - 右手下排组合",
        icon: "tank:lvt_a4",
        description: "练习右手下排NM组合",
        words: ["n", "m", "nm", "mn", "nm", "mn", "nm", "mn", "nm", "mn", "nm", "mn", "nm", "mn", "nm", "mn"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手下排键练习",
        spec: {id:"lvt_a4",name:"LVT(A)-4两栖坦克",nation:"usa",archetype:"medium",hullLen:160,hullH:30,hullSlope:18,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:66,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第48课 - 下排完整练习",
        icon: "tank:archer",
        description: "下排ZXCVBNM完整练习",
        words: ["zxcv", "bnm", "zx", "cv", "bn", "nm", "zxc", "vbn", "zxcvb", "cvbnm", "zxcv", "bnm", "zxcv", "bnm", "zx", "cv"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "下排键完整练习",
        spec: {id:"archer",name:"阿契尔歼击车",nation:"uk",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:28,turret:{shape:"none"},gun:{len:78,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    
    // 第六阶段：标点符号 (Punctuation)
    {
        name: "第49课 - 单键,",
        icon: "tank:chi_ri",
        description: "练习右手小指按,键",
        words: [",", ",", ",", ",", ",", ",", ",", ",", ",", ",", ",", ","],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手小指按,键",
        spec: {id:"chi_ri",name:"五式中战车",nation:"japan",archetype:"medium",hullLen:164,hullH:28,hullSlope:17,turret:{shape:"rounded",x:116,w:61,h:22},gun:{len:68,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第50课 - 单键.",
        icon: "tank:m6",
        description: "练习右手无名指按.键",
        words: [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手无名指按.键",
        spec: {id:"m6",name:"M6重型坦克",nation:"usa",archetype:"heavy",hullLen:178,hullH:32,hullSlope:5,turret:{shape:"slab",x:110,w:87,h:26},gun:{len:70,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第51课 - 单键/",
        icon: "tank:stug_iv",
        description: "练习右手小指按/键",
        words: ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "右手小指按/键",
        spec: {id:"stug_iv",name:"四号突击炮",nation:"germany",archetype:"assault-gun",hullLen:160,hullH:26,hullSlope:22,turret:{shape:"none"},gun:{len:64,bore:5,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:["schurzen"]}
    },
    {
        name: "第52课 - 标点符号组合",
        icon: "tank:t28",
        description: "练习标点符号,./组合",
        words: [",", ".", "/", ",.", "./", "/,", ",.", "./", ",./", "/.,", ",./", "/.", ",./", "/.", ",./"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "标点符号练习",
        spec: {id:"t28",name:"T-28中型坦克",nation:"ussr",archetype:"medium",hullLen:172,hullH:28,hullSlope:19,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:62,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    
    // 第七阶段：综合练习 (Comprehensive)
    {
        name: "第53课 - 基础行+上排",
        icon: "tank:covenanter",
        description: "基础行和上排键综合练习",
        words: ["asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer", "asdf", "qwer"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "基础行和上排综合练习",
        spec: {id:"covenanter",name:"盟约者巡洋坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:15,turret:{shape:"rounded",x:116,w:70,h:22},gun:{len:72,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第54课 - 基础行+下排",
        icon: "tank:su76",
        description: "基础行和下排键综合练习",
        words: ["asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv", "asdf", "zxcv"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "基础行和下排综合练习",
        spec: {id:"su76",name:"SU-76自行火炮",nation:"ussr",archetype:"casemate-TD",hullLen:138,hullH:26,hullSlope:32,turret:{shape:"none"},gun:{len:84,bore:5,muzzleBrake:true},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "第55课 - 上排+下排",
        icon: "tank:matilda_i",
        description: "上排和下排键综合练习",
        words: ["qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv", "qwer", "zxcv"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "上排和下排综合练习",
        spec: {id:"matilda_i",name:"马蒂尔达I步兵坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:14,turret:{shape:"rounded",x:116,w:67,h:22},gun:{len:56,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "第56课 - 全键盘基础",
        icon: "tank:t35",
        description: "全键盘基础综合练习",
        words: ["asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv", "asdf", "qwer", "zxcv", "asdf"],
        wordsPerLevel: 16,
        isTraining: true,
        fingerHint: "全键盘基础综合练习",
        spec: {id:"t35",name:"T-35多炮塔坦克",nation:"ussr",archetype:"heavy",hullLen:196,hullH:32,hullSlope:9,turret:{shape:"slab",x:120,w:64,h:22},gun:{len:76,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:["antenna"]}
    },
    
    // ========== 德国坦克进阶挑战 ==========
    {
        name: "一号坦克B型",
        icon: "tank:panzer_i",
        description: "德国轻型坦克 - 简单词练习",
        words: ["cat", "dog", "sun", "run", "fun", "box", "red", "blue", "sky", "sea", "tree", "bird", "fish", "bird", "cat", "dog"],
        wordsPerLevel: 16,
        spec: {id:"panzer_i",name:"一号坦克B型",nation:"germany",archetype:"light",hullLen:126,hullH:22,hullSlope:3,turret:{shape:"slab",x:120,w:48,h:18},gun:{len:42,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "二号山猫轻型坦克",
        icon: "tank:panzer_ii_luchs",
        description: "德国轻型侦察坦克 - 快速反应",
        words: ["fast", "slow", "jump", "play", "game", "tank", "war", "run", "fly", "swim", "walk", "hop", "run", "jump", "play", "game"],
        wordsPerLevel: 16,
        spec: {id:"panzer_ii_luchs",name:"二号山猫轻型坦克",nation:"germany",archetype:"light",hullLen:126,hullH:22,hullSlope:6,turret:{shape:"slab",x:120,w:54,h:18},gun:{len:52,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    {
        name: "三号坦克N型",
        icon: "tank:panzer_iii_n",
        description: "德国中型坦克 - 步兵支援",
        words: ["attack", "battle", "cannon", "defend", "engine", "fighter", "ground", "troop", "force", "army", "unit", "squad", "troop", "force", "army", "unit"],
        wordsPerLevel: 16,
        spec: {id:"panzer_iii_n",name:"三号坦克N型",nation:"germany",archetype:"medium",hullLen:152,hullH:28,hullSlope:19,turret:{shape:"rounded",x:116,w:61,h:22},gun:{len:60,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "四号坦克H型",
        icon: "tank:panzer_iv",
        description: "德国中型坦克 - 全能战士",
        words: ["armored", "battalion", "campaign", "division", "fortress", "grenade", "mechanized", "regiment", "platoon", "brigade", "corps", "company", "regiment", "battalion", "division", "corps"],
        wordsPerLevel: 16,
        spec: {id:"panzer_iv",name:"四号坦克H型",nation:"germany",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:64,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "三号突击炮G型",
        icon: "tank:stug_iii",
        description: "德国突击炮 - 精确打击",
        words: ["assault", "bunker", "destroyer", "flak", "howitzer", "jagd", "mobile", "panzer", "sturm", "geschutz", "gun", "tank", "gun", "tank", "panzer", "sturm"],
        wordsPerLevel: 16,
        spec: {id:"stug_iii",name:"三号突击炮G型",nation:"germany",archetype:"assault-gun",hullLen:160,hullH:26,hullSlope:22,turret:{shape:"none"},gun:{len:58,bore:5,muzzleBrake:false},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:false}
    },
    {
        name: "虎式坦克E型",
        icon: "tank:tiger_i",
        description: "德国重型坦克 - 战场之王",
        words: ["artillery", "barracks", "camouflage", "command", "doctrine", "elite", "frontline", "general", "major", "colonel", "captain", "lieutenant", "general", "major", "colonel", "captain"],
        wordsPerLevel: 16,
        spec: {id:"tiger_i",name:"虎式坦克E型",nation:"germany",archetype:"heavy",hullLen:178,hullH:32,hullSlope:8,turret:{shape:"slab",x:110,w:84,h:26},gun:{len:74,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "虎王坦克",
        icon: "tank:tiger_ii",
        description: "德国重型坦克 - 终极武器",
        words: ["ballistics", "caliber", "detonation", "explosive", "firepower", "grenadier", "heavy", "invincible", "armor", "steel", "iron", "metal", "steel", "iron", "armor", "metal"],
        wordsPerLevel: 16,
        spec: {id:"tiger_ii",name:"虎王坦克",nation:"germany",archetype:"heavy",hullLen:178,hullH:32,hullSlope:8,turret:{shape:"slab",x:110,w:84,h:26},gun:{len:74,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "黑豹坦克G型",
        icon: "tank:panther",
        description: "德国中型坦克 - 均衡设计",
        words: ["advanced", "ballistic", "cannon", "design", "engineering", "firepower", "gun", "heavy", "machine", "weapon", "system", "power", "machine", "weapon", "system", "power"],
        wordsPerLevel: 16,
        spec: {id:"panther",name:"黑豹坦克G型",nation:"germany",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:64,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "猎虎歼击车",
        icon: "tank:jagdtiger",
        description: "德国重型坦克歼击车 - 堡垒破坏者",
        words: ["annihilate", "battleship", "catastrophic", "destruction", "eliminate", "fortification", "gigantic", "howitzer", "destroy", "crush", "smash", "wreck", "destroy", "crush", "smash", "wreck"],
        wordsPerLevel: 16,
        spec: {id:"jagdtiger",name:"猎虎歼击车",nation:"germany",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:30,turret:{shape:"none"},gun:{len:84,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false}
    },
    {
        name: "猎豹歼击车",
        icon: "tank:jagdpanther",
        description: "德国重型坦克歼击车 - 狩猎者",
        words: ["ambush", "camouflage", "deadly", "efficient", "firepower", "guerrilla", "hunter", "invisible", "stealth", "sniper", "track", "stalk", "stealth", "sniper", "track", "stalk"],
        wordsPerLevel: 16,
        spec: {id:"jagdpanther",name:"猎豹歼击车",nation:"germany",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:30,turret:{shape:"none"},gun:{len:84,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false}
    },
    
    // ========== 美国坦克 ==========
    {
        name: "M3斯图亚特轻型坦克",
        icon: "tank:m3_stuart",
        description: "美国轻型坦克 - 侦察先锋",
        words: ["scout", "patrol", "recon", "light", "fast", "agile", "quick", "speed", "rapid", "swift", "alert", "watch", "speed", "rapid", "swift", "alert"],
        wordsPerLevel: 16,
        spec: {id:"m3_stuart",name:"M3斯图亚特轻型坦克",nation:"usa",archetype:"light",hullLen:126,hullH:22,hullSlope:5,turret:{shape:"slab",x:120,w:48,h:18},gun:{len:52,bore:3},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:["antenna"]}
    },
    {
        name: "M4谢尔曼中型坦克",
        icon: "tank:sherman",
        description: "美国中型坦克 - 盟军主力",
        words: ["allied", "armor", "brave", "courage", "duty", "honor", "liberty", "victory", "freedom", "justice", "hero", "glory", "victory", "freedom", "justice", "hero"],
        wordsPerLevel: 16,
        spec: {id:"sherman",name:"M4谢尔曼中型坦克",nation:"usa",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:64,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "M26潘兴重型坦克",
        icon: "tank:m26_pershing",
        description: "美国重型坦克 - 重拳出击",
        words: ["powerful", "strong", "tough", "mighty", "force", "impact", "strike", "dominate", "crush", "smash", "punch", "blast", "crush", "smash", "punch", "blast"],
        wordsPerLevel: 16,
        spec: {id:"m26_pershing",name:"M26潘兴重型坦克",nation:"usa",archetype:"heavy",hullLen:178,hullH:32,hullSlope:6,turret:{shape:"slab",x:110,w:81,h:26},gun:{len:80,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "M18地狱猫歼击车",
        icon: "tank:m18_hellcat",
        description: "美国坦克歼击车 - 闪电战",
        words: ["lightning", "thunder", "storm", "flash", "rapid", "swift", "bolt", "zap", "electric", "shock", "spark", "jolt", "electric", "shock", "spark", "jolt"],
        wordsPerLevel: 16,
        spec: {id:"m18_hellcat",name:"M18地狱猫歼击车",nation:"usa",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:31,turret:{shape:"none"},gun:{len:82,bore:5,muzzleBrake:true},roadWheels:5,interleaved:false,track:"cleated",fender:true,commanderCupola:false,extra:[]}
    },
    
    // ========== 英国坦克 ==========
    {
        name: "马蒂尔达II步兵坦克",
        icon: "tank:matilda_ii",
        description: "英国步兵坦克 - 铁壁防御",
        words: ["shield", "guard", "protect", "defend", "secure", "safety", "barrier", "fortress", "wall", "armor", "block", "cover", "wall", "armor", "block", "cover"],
        wordsPerLevel: 16,
        spec: {id:"matilda_ii",name:"马蒂尔达II步兵坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:13,turret:{shape:"rounded",x:116,w:58,h:22},gun:{len:72,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "丘吉尔步兵坦克",
        icon: "tank:churchill",
        description: "英国重型坦克 - 坚韧不拔",
        words: ["endure", "persist", "resist", "stand", "firm", "steady", "stable", "last", "tough", "strong", "brave", "bold", "tough", "strong", "brave", "bold"],
        wordsPerLevel: 16,
        spec: {id:"churchill",name:"丘吉尔步兵坦克",nation:"uk",archetype:"heavy",hullLen:178,hullH:32,hullSlope:8,turret:{shape:"slab",x:110,w:84,h:26},gun:{len:74,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "克伦威尔巡洋坦克",
        icon: "tank:cromwell",
        description: "英国巡洋坦克 - 快速突击",
        words: ["cruise", "charge", "rush", "dash", "sprint", "race", "speed", "swift", "fast", "quick", "rapid", "zoom", "fast", "quick", "rapid", "zoom"],
        wordsPerLevel: 16,
        spec: {id:"cromwell",name:"克伦威尔巡洋坦克",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:19,turret:{shape:"rounded",x:116,w:70,h:22},gun:{len:56,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "谢尔曼萤火虫",
        icon: "tank:firefly",
        description: "英国坦克歼击车 - 火力支援",
        words: ["flame", "fire", "burn", "blaze", "spark", "ignite", "torch", "flare", "heat", "glow", "flash", "blaze", "heat", "glow", "flash", "blaze"],
        wordsPerLevel: 16,
        spec: {id:"firefly",name:"谢尔曼萤火虫",nation:"uk",archetype:"medium",hullLen:152,hullH:28,hullSlope:15,turret:{shape:"rounded",x:116,w:61,h:22},gun:{len:66,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    
    // ========== 苏联坦克 ==========
    {
        name: "T-34中型坦克",
        icon: "tank:t_34_76",
        description: "苏联中型坦克 - 传奇战车",
        words: ["legend", "famous", "iconic", "classic", "mythic", "epic", "historic", "renowned", "great", "grand", "noble", "heroic", "great", "grand", "noble", "heroic"],
        wordsPerLevel: 16,
        spec: {id:"t_34_76",name:"T-34中型坦克",nation:"ussr",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:64,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "KV-1重型坦克",
        icon: "tank:kv_1",
        description: "苏联重型坦克 - 钢铁巨人",
        words: ["giant", "colossus", "titan", "massive", "enormous", "huge", "vast", "immense", "big", "large", "great", "mighty", "big", "large", "great", "mighty"],
        wordsPerLevel: 16,
        spec: {id:"kv_1",name:"KV-1重型坦克",nation:"ussr",archetype:"heavy",hullLen:178,hullH:32,hullSlope:8,turret:{shape:"slab",x:110,w:84,h:26},gun:{len:74,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "IS-2重型坦克",
        icon: "tank:is_2",
        description: "苏联重型坦克 - 突破先锋",
        words: ["breakthrough", "advance", "progress", "forward", "onward", "ahead", "beyond", "further", "push", "drive", "move", "go", "push", "drive", "move", "go"],
        wordsPerLevel: 16,
        spec: {id:"is_2",name:"IS-2重型坦克",nation:"ussr",archetype:"heavy",hullLen:178,hullH:32,hullSlope:9,turret:{shape:"slab",x:110,w:84,h:26},gun:{len:70,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "SU-100歼击车",
        icon: "tank:su_100",
        description: "苏联坦克歼击车 - 狙击手",
        words: ["sniper", "target", "aim", "shoot", "precision", "accurate", "focus", "hit", "strike", "fire", "shot", "mark", "hit", "strike", "fire", "shot"],
        wordsPerLevel: 16,
        spec: {id:"su_100",name:"SU-100歼击车",nation:"ussr",archetype:"casemate-TD",hullLen:166,hullH:26,hullSlope:27,turret:{shape:"none"},gun:{len:90,bore:5,muzzleBrake:true},roadWheels:7,interleaved:true,track:"cleated",fender:true,commanderCupola:false,extra:["antenna"]}
    },
    
    // ========== 意大利坦克 ==========
    {
        name: "M13/40中型坦克",
        icon: "tank:m13_40",
        description: "意大利中型坦克 - 沙漠之狐",
        words: ["desert", "sand", "dune", "arid", "dry", "hot", "sun", "heat", "warm", "dusty", "sahara", "barren", "warm", "dusty", "sahara", "barren"],
        wordsPerLevel: 16,
        spec: {id:"m13_40",name:"M13/40中型坦克",nation:"italy",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:61,h:22},gun:{len:62,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "P26/40重型坦克",
        icon: "tank:p40",
        description: "意大利重型坦克 - 最后防线",
        words: ["final", "last", "end", "finish", "close", "ultimate", "conclude", "terminate", "complete", "done", "over", "stop", "complete", "done", "over", "stop"],
        wordsPerLevel: 16,
        spec: {id:"p40",name:"P26/40重型坦克",nation:"italy",archetype:"heavy",hullLen:178,hullH:32,hullSlope:11,turret:{shape:"slab",x:110,w:87,h:26},gun:{len:82,bore:5,muzzleBrake:true},roadWheels:8,interleaved:true,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    
    // ========== 日本坦克 ==========
    {
        name: "九七式中战车",
        icon: "tank:chi_ha",
        description: "日本中型坦克 - 亚洲猛虎",
        words: ["asia", "east", "orient", "tiger", "dragon", "samurai", "warrior", "honor", "japan", "tokyo", "ninja", "shogun", "honor", "japan", "tokyo", "ninja"],
        wordsPerLevel: 16,
        spec: {id:"chi_ha",name:"九七式中战车",nation:"japan",archetype:"medium",hullLen:152,hullH:28,hullSlope:16,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:64,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true}
    },
    {
        name: "三式中战车",
        icon: "tank:chi_nu",
        description: "日本中型坦克 - 防御专家",
        words: ["defense", "guard", "protect", "shield", "secure", "safe", "cover", "ward", "block", "defend", "save", "keep", "shield", "secure", "safe", "cover"],
        wordsPerLevel: 16,
        spec: {id:"chi_nu",name:"三式中战车",nation:"japan",archetype:"medium",hullLen:152,hullH:28,hullSlope:18,turret:{shape:"rounded",x:116,w:64,h:22},gun:{len:56,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "谢尔曼萤火虫Vc",
        icon: "tank:firefly_vc",
        description: "英国萤火虫坦克 - 17磅长管炮（M4A4底盘，最常见）",
        words: ["firefly","british","sherman","normandy","bocage","ambush","hunter","panzer","tiger","flash","glow","seventeen","pound","destroy","gunner","vc"],
        wordsPerLevel: 16,
        spec: {id:"firefly_vc",name:"谢尔曼萤火虫Vc",nation:"uk",archetype:"medium",hullLen:160,hullH:30,hullSlope:12,turret:{shape:"rounded",x:114,w:62,h:24},gun:{len:84,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "谢尔曼萤火虫Ic",
        icon: "tank:firefly_ic",
        description: "英国萤火虫坦克 - 17磅长管炮（M4底盘）",
        words: ["firefly","ic","sherman","british","tank","hunter","night","glow","spark","flash","gun","armor","battle","field","crew","range"],
        wordsPerLevel: 16,
        spec: {id:"firefly_ic",name:"谢尔曼萤火虫Ic",nation:"uk",archetype:"medium",hullLen:150,hullH:28,hullSlope:12,turret:{shape:"rounded",x:116,w:60,h:22},gun:{len:80,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "谢尔曼萤火虫Ic混合型",
        icon: "tank:firefly_hybrid",
        description: "英国萤火虫坦克 - 17磅长管炮（M4复合车体）",
        words: ["firefly","hybrid","sherman","british","composite","hull","gunner","flash","night","ambush","panzer","tiger","destroy","range","crew","vc"],
        wordsPerLevel: 16,
        spec: {id:"firefly_hybrid",name:"谢尔曼萤火虫Ic混合型",nation:"uk",archetype:"medium",hullLen:154,hullH:30,hullSlope:8,turret:{shape:"rounded",x:116,w:62,h:23},gun:{len:82,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
    },
    {
        name: "谢尔曼萤火虫IIc",
        icon: "tank:firefly_iic",
        description: "英国萤火虫坦克 - 17磅长管炮（M4A2柴油底盘）",
        words: ["firefly","iic","sherman","british","diesel","m4a2","long","gun","seventeen","pounder","ambush","hunter","flash","glow","tank","crew"],
        wordsPerLevel: 16,
        spec: {id:"firefly_iic",name:"谢尔曼萤火虫IIc",nation:"uk",archetype:"medium",hullLen:156,hullH:28,hullSlope:14,turret:{shape:"rounded",x:114,w:61,h:22},gun:{len:80,bore:4,muzzleBrake:true},roadWheels:6,interleaved:false,track:"cleated",fender:true,commanderCupola:true,extra:[]}
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
