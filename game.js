// 游戏状态
let gameState = {
    level: 1,
    score: 0,
    currentWordIndex: 0,
    words: [],
    currentTank: null,
    isPlaying: false,
    currentUser: null
};

// 用户管理
let users = [];

// 音效系统
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'correct':
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialDecayTo = 0.01;
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'incorrect':
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
            break;
        case 'levelComplete':
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;
        case 'type':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
            break;
    }
}

// DOM 元素
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    levelComplete: document.getElementById('level-complete-screen'),
    gameOver: document.getElementById('game-over-screen')
};

const elements = {
    level: document.getElementById('level'),
    score: document.getElementById('score'),
    currentTank: document.getElementById('current-tank'),
    progress: document.getElementById('progress'),
    tankImage: document.getElementById('tank-image'),
    tankName: document.getElementById('tank-name'),
    tankDescription: document.getElementById('tank-description'),
    fingerHint: document.getElementById('finger-hint'),
    wordDisplay: document.getElementById('word-display'),
    wordInput: document.getElementById('word-input'),
    feedback: document.getElementById('feedback'),
    progressFill: document.getElementById('progress-fill'),
    finalScore: document.getElementById('final-score'),
    finalLevel: document.getElementById('final-level'),
    newTankInfo: document.getElementById('new-tank-info'),
    virtualKeyboard: document.querySelector('.virtual-keyboard'),
    userSelect: document.getElementById('user-select'),
    createUserBtn: document.getElementById('create-user-btn'),
    createUsername: document.getElementById('new-username'),
    saveUserBtn: document.getElementById('save-user-btn'),
    cancelUserBtn: document.getElementById('cancel-user-btn'),
    userSelection: document.getElementById('user-selection'),
    createUserForm: document.getElementById('create-user-form')
};

// 按钮事件
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-level-btn').addEventListener('click', nextLevel);
document.getElementById('restart-btn').addEventListener('click', restartGame);

// 用户管理事件
elements.createUserBtn.addEventListener('click', showCreateUserForm);
elements.saveUserBtn.addEventListener('click', createUser);
elements.cancelUserBtn.addEventListener('click', hideCreateUserForm);
elements.userSelect.addEventListener('change', selectUser);

// 初始化用户列表
loadUsers();
updateUserSelect();

// 输入事件
elements.wordInput.addEventListener('input', (e) => {
    if (e.data) {
        playSound('type');
    }
    checkInput();
});
elements.wordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkInput();
    }
});

// 显示指定屏幕
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

// 开始游戏
function startGame() {
    // 检查是否选择了用户
    if (!gameState.currentUser) {
        alert('请先选择一个用户！');
        return;
    }
    
    // 尝试加载保存的进度
    const savedProgress = loadProgress(gameState.currentUser);
    if (savedProgress) {
        gameState.level = savedProgress.level;
        gameState.score = savedProgress.score;
    } else {
        gameState.level = 1;
        gameState.score = 0;
    }
    
    gameState.isPlaying = true;
    
    // 恢复音频上下文（浏览器要求用户交互后才能播放音频）
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    initLevel();
    showScreen('game');
}

// 初始化等级
function initLevel() {
    gameState.currentTank = getTankData(gameState.level);
    gameState.words = getRandomWords(gameState.currentTank, gameState.currentTank.wordsPerLevel);
    gameState.currentWordIndex = 0;
    
    // 确保虚拟键盘可见
    if (elements.virtualKeyboard) {
        elements.virtualKeyboard.style.display = 'block';
        console.log('Virtual keyboard found and made visible');
    } else {
        console.error('Virtual keyboard element not found');
    }
    
    updateUI();
    displayWord();
    elements.wordInput.value = '';
    elements.wordInput.focus();
}

// 更新UI
function updateUI() {
    elements.level.textContent = gameState.level;
    elements.score.textContent = gameState.score;
    elements.currentTank.textContent = gameState.currentTank.name;
    elements.progress.textContent = `${gameState.currentWordIndex}/${gameState.currentTank.wordsPerLevel}`;
    
    // 显示真实坦克图片
    elements.tankImage.src = gameState.currentTank.icon;
    elements.tankName.textContent = gameState.currentTank.name;
    elements.tankDescription.textContent = gameState.currentTank.description;
    
    // 显示手指提示（如果是训练模式）
    if (gameState.currentTank.isTraining && gameState.currentTank.fingerHint) {
        elements.fingerHint.textContent = gameState.currentTank.fingerHint;
        elements.fingerHint.style.display = 'block';
    } else {
        elements.fingerHint.style.display = 'none';
    }
    
    const progressPercent = (gameState.currentWordIndex / gameState.currentTank.wordsPerLevel) * 100;
    elements.progressFill.style.width = `${progressPercent}%`;
}

// 显示单词
function displayWord() {
    if (gameState.currentWordIndex < gameState.words.length) {
        const word = gameState.words[gameState.currentWordIndex];
        elements.wordDisplay.textContent = word;
        highlightKey(word[0].toLowerCase());
    } else {
        levelComplete();
    }
}

// 检查输入
function checkInput() {
    if (!gameState.isPlaying) return;
    
    const input = elements.wordInput.value.trim().toLowerCase();
    const targetWord = gameState.words[gameState.currentWordIndex].toLowerCase();
    
    // 更新键盘高亮
    if (input.length < targetWord.length) {
        highlightKey(targetWord[input.length]);
    }
    
    if (input === targetWord) {
        // 正确
        playSound('correct');
        elements.feedback.textContent = '正确! 🎉';
        elements.feedback.className = 'feedback correct';
        gameState.score += 10 * gameState.level;
        gameState.currentWordIndex++;
        
        // 保存进度
        saveProgress();
        
        setTimeout(() => {
            elements.feedback.textContent = '';
            elements.wordInput.value = '';
            updateUI();
            displayWord();
        }, 500);
    } else if (input.length >= targetWord.length) {
        // 错误
        playSound('incorrect');
        elements.feedback.textContent = '再试一次! 💪';
        elements.feedback.className = 'feedback incorrect';
        elements.wordInput.value = '';
        
        setTimeout(() => {
            elements.feedback.textContent = '';
        }, 1000);
    }
}

// 等级完成
function levelComplete() {
    gameState.isPlaying = false;
    playSound('levelComplete');
    
    if (gameState.level < tankData.length) {
        // 显示下一关信息
        const nextTank = getTankData(gameState.level + 1);
        elements.newTankInfo.innerHTML = `
            <h3>🎖️ 新坦克解锁!</h3>
            <p><strong><img src="${nextTank.icon}" style="width: 50px; height: auto; vertical-align: middle; margin-right: 10px;">${nextTank.name}</strong></p>
            <p>${nextTank.description}</p>
        `;
        showScreen('levelComplete');
    } else {
        // 游戏通关
        gameComplete();
    }
}

// 下一关
function nextLevel() {
    gameState.level++;
    gameState.isPlaying = true;
    saveProgress();
    initLevel();
    showScreen('game');
}

// 游戏通关
function gameComplete() {
    elements.finalScore.textContent = gameState.score;
    elements.finalLevel.textContent = gameState.level;
    document.querySelector('#game-over-screen h2').textContent = '🏆 游戏通关!';
    document.querySelector('#game-over-screen p').textContent = '恭喜你成为打字大师!';
    showScreen('gameOver');
}

// 重新开始
function restartGame() {
    // 清除保存的进度
    localStorage.removeItem('tankTypingGameProgress');
    
    document.querySelector('#game-over-screen h2').textContent = '💥 游戏结束';
    document.querySelector('#game-over-screen p').innerHTML = '最终分数: <span id="final-score">0</span><br>达到等级: <span id="final-level">1</span>';
    elements.finalScore = document.getElementById('final-score');
    elements.finalLevel = document.getElementById('final-level');
    startGame();
}

// 高亮键盘按键
function highlightKey(key) {
    // 清除所有高亮
    const allKeys = document.querySelectorAll('.key');
    allKeys.forEach(k => {
        k.classList.remove('highlight', 'correct', 'incorrect');
    });
    
    // 高亮当前需要按的键
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add('highlight');
    }
}

// 保存进度
function saveProgress() {
    if (!gameState.currentUser) return;
    
    const progress = {
        level: gameState.level,
        score: gameState.score
    };
    localStorage.setItem(`tankTypingGameProgress_${gameState.currentUser}`, JSON.stringify(progress));
}

// 加载进度
function loadProgress(username) {
    const savedProgress = localStorage.getItem(`tankTypingGameProgress_${username}`);
    if (savedProgress) {
        try {
            return JSON.parse(savedProgress);
        } catch (e) {
            console.error('Failed to load progress:', e);
            return null;
        }
    }
    return null;
}

// 加载用户列表
function loadUsers() {
    const savedUsers = localStorage.getItem('tankTypingGameUsers');
    if (savedUsers) {
        try {
            users = JSON.parse(savedUsers);
        } catch (e) {
            console.error('Failed to load users:', e);
            users = [];
        }
    }
}

// 保存用户列表
function saveUsers() {
    localStorage.setItem('tankTypingGameUsers', JSON.stringify(users));
}

// 更新用户选择下拉框
function updateUserSelect() {
    elements.userSelect.innerHTML = '<option value="">-- 选择用户 --</option>';
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        elements.userSelect.appendChild(option);
    });
}

// 显示创建用户表单
function showCreateUserForm() {
    elements.userSelection.style.display = 'none';
    elements.createUserForm.style.display = 'block';
    elements.createUsername.value = '';
    elements.createUsername.focus();
}

// 隐藏创建用户表单
function hideCreateUserForm() {
    elements.userSelection.style.display = 'block';
    elements.createUserForm.style.display = 'none';
}

// 创建新用户
function createUser() {
    const username = elements.createUsername.value.trim();
    
    if (!username) {
        alert('请输入用户名！');
        return;
    }
    
    if (users.includes(username)) {
        alert('该用户名已存在！');
        return;
    }
    
    users.push(username);
    saveUsers();
    updateUserSelect();
    elements.userSelect.value = username;
    selectUser();
    hideCreateUserForm();
}

// 选择用户
function selectUser() {
    const selectedUser = elements.userSelect.value;
    if (selectedUser) {
        gameState.currentUser = selectedUser;
    } else {
        gameState.currentUser = null;
    }
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameState.isPlaying) {
        // 可以添加暂停功能
    }
    
    // 虚拟键盘按键反馈
    const keyElement = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);
    if (keyElement) {
        keyElement.classList.add('correct');
        setTimeout(() => {
            keyElement.classList.remove('correct');
        }, 200);
    }
});
