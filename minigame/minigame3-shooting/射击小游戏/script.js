let score = 0;
let currentStage = 1;
let timeRemaining = 30;
let gameInterval;
let timerInterval;
let gameContainer = document.getElementById('game-container');
let target = document.getElementById('target');
let scoreBoard = document.getElementById('score-board');
let timerBoard = document.getElementById('timer-board');
let startScreen = document.getElementById('start-screen');
let gameIntro = document.getElementById('game-intro');
let gameOverScreen = document.getElementById('game-over');
let achievementMessage = document.getElementById('achievement-message');
let introBtn = document.getElementById('intro-btn');
let startBtn = document.getElementById('start-btn');
let backBtn = document.getElementById('back-btn');
let restartBtn = document.getElementById('restart-btn');
let endBtn = document.getElementById('end-btn');

const stageTargets = [10, 15, 20]; // 过关分数

// 开始游戏按钮
startBtn.addEventListener('click', startGame);

// 游戏介绍按钮
introBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    gameIntro.style.display = 'block';
});

// 返回到开始界面按钮
backBtn.addEventListener('click', function() {
    gameIntro.style.display = 'none';
    startScreen.style.display = 'flex';
});

// 重新开始游戏按钮
restartBtn.addEventListener('click', restartGame);

// 结束游戏按钮
endBtn.addEventListener('click', function() {
        endGame(); // 调用 endGame 函数进行页面跳转
    });
    
// 监听空格键结束游戏
function bindSpaceKeyListener() {
    function spaceKeyListener(event) {
        if (event.code === 'Space') {
            document.removeEventListener('keydown', spaceKeyListener); // 移除监听器，避免重复绑定
            endGame();
        }
    }
    document.addEventListener('keydown', spaceKeyListener);
}

// 开始游戏
function startGame() {
    startScreen.style.display = 'none';
    gameIntro.style.display = 'none';
    gameOverScreen.style.display = 'none';
    achievementMessage.style.display = 'none';
    gameContainer.style.display = 'block';

    resetGame();
    startTimer();
    gameInterval = setInterval(moveTarget, 1000); // 每秒随机移动一次目标
}

// 重新开始游戏
function restartGame() {
    // 隐藏游戏结束界面
    gameOverScreen.style.display = 'none';
    
    // 隐藏游戏容器
    gameContainer.style.display = 'none';
    
    // 显示开始界面
    startScreen.style.display = 'flex';
    
    // 重置游戏状态（如果需要在显示首页前重置状态）
    resetGame();  // 可选：你可以在这里重置分数、关卡、计时等
    
    // 注意：这里不会直接开始游戏，用户需要再点击 "开始游戏" 按钮
}

function resetGame() {
        score = 0;
        currentStage = 1;
        timeRemaining = 30; // 每关时间为30秒
        scoreBoard.textContent = `得分: ${score}`;
        timerBoard.textContent = `时间: ${timeRemaining}`;
        moveTarget(); // 初始化目标位置
    }

// 开始计时
function startTimer() {
      timerInterval = setInterval(function() {
           timeRemaining--;
           timerBoard.textContent = `时间: ${timeRemaining}`;
           if (timeRemaining <= 0) {
              clearInterval(timerInterval);
              clearInterval(gameInterval);
               checkGameOver();
            }
        }, 1000);
    }

// 检查游戏是否结束
function checkGameOver() {
    if (score < stageTargets[currentStage - 1]) {
        gameContainer.style.display = 'none';
        gameOverScreen.style.display = 'block';
    } else if (currentStage < 3) {
        currentStage++;
        score = 0;
        timeRemaining = 30; // 下一关时间为30秒
        scoreBoard.textContent = `Score: ${score}`;
        timerBoard.textContent = `Time: ${timeRemaining}`;
        clearInterval(gameInterval); // 清除上一关卡的移动间隔
        startTimer();
        gameInterval = setInterval(moveTarget, 1000); // 重新启动目标移动的间隔
    } else {
        showAchievementMessage();
    }
}

// 显示成就信息并监听空格按键
function showAchievementMessage() {
    gameContainer.style.display = 'none';
    achievementMessage.style.display = 'flex';
    bindSpaceKeyListener(); // 绑定空格键监听器
}

// 移动目标到随机位置
function moveTarget() {
    let containerRect = gameContainer.getBoundingClientRect();
    let targetSize = target.getBoundingClientRect().width;
    
    let maxX = containerRect.width - targetSize;
    let maxY = containerRect.height - targetSize;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

target.addEventListener('click', function() {
        score += 1;
        scoreBoard.textContent = `得分: ${score}`;
        if (score >= stageTargets[currentStage - 1]) {
            clearInterval(timerInterval);
            clearInterval(gameInterval);
            checkGameOver();
        } else {
            moveTarget(); // 点击后立即移动目标
        }
    });

// 结束游戏
function endGame() {
        clearInterval(timerInterval);
        clearInterval(gameInterval);
        achievementMessage.style.display = 'none';
        gameContainer.style.display = 'none';
        // 使用 window.location.href 跳转到下一个网页
        window.location.href = '../../../game/html/6.7.html';  // 在这里填写你想跳转的网页地址
    }
    

// 音量控制相关
document.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('background-music');
    var volumeButton = document.getElementById('volume-button');
    var volumeSlider = document.getElementById('volume-slider');

    // 点击音量按钮时，显示或隐藏音量进度条
    volumeButton.addEventListener('click', function() {
        if (volumeSlider.style.display === 'none') {
            volumeSlider.style.display = 'block';
        } else {
            volumeSlider.style.display = 'none';
        }
    });

    // 通过音量进度条调节背景音乐的音量
    volumeSlider.addEventListener('input', function() {
        backgroundMusic.volume = volumeSlider.value;
    });

    // 确保背景音乐自动播放
    document.getElementById('start-btn').addEventListener('click', function() {
        backgroundMusic.play().then(function() {
            // 背景音乐正常播放
        }).catch(function(error) {
            // 如果自动播放失败，这里捕获错误
            console.error('背景音乐无法播放：', error);
        });
    });
});

document.getElementById('exit-button').addEventListener('click', function() {
    endGame();
});
