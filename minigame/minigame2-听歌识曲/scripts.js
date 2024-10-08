// 当前题目索引
let currentQuestion = 0;
// 正确回答的数量
let correctAnswers = 0;
// 总题目数量
const totalQuestions = 15;
// 需要正确回答的题目数量以完成游戏
const requiredCorrectAnswers = 10;

// 问题数组，每个问题包含正确答案和选项
const questions = [
    { correctAnswer: 'A', options: ['暗里着迷', '爱你一万年', '反语', '生死别离'] },
    { correctAnswer: 'B', options: ['万万阙歌', '千千阙歌', '十十阙歌', '徐徐回望'] },
    { correctAnswer: 'C', options: ['月亮之情', '风继续吹', '少女的祈祷', '雨继续下'] },
    { correctAnswer: 'B', options: ['稻香', '青花瓷', '一路向北', '晴天'] },
    { correctAnswer: 'B', options: ['爱你一千年', '爱你一万年', '爱你一百年', '不再爱'] },
    { correctAnswer: 'D', options: ['银临', '挂丝戏', '金丝雀', '牵丝戏'] },
    { correctAnswer: 'C', options: ['坐上高铁去拉萨', '坐上高铁去新疆', '坐上火车去拉萨', '坐上火车去新疆'] },
    { correctAnswer: 'A', options: ['明天会更好', '后天会更好', '明天会更差', '后天会更差'] },
    { correctAnswer: 'B', options: ['因为Web', '因为爱情', '因为仇恨', '所以爱情'] },
    { correctAnswer: 'D', options: ['百年', '八年', '十天', '十年'] },
    { correctAnswer: 'B', options: ['火手', '水手', '爱你', '风雨中'] },
    { correctAnswer: 'C', options: ['泡沫', '一路向北', '光辉岁月', '海阔天空'] },
    { correctAnswer: 'D', options: ['爱你', '音乐', '晴天', '阴天'] },
    { correctAnswer: 'A', options: ['这世界有那么多人', '光辉岁月', '稻香', '晴天'] },
    { correctAnswer: 'B', options: ['向天再借三百年', '向天再借五百年', '做人一地肝胆', '做人何惧艰险'] },
    // 添加更多题目
];

// 用户点击后开始播放音乐
let musicStarted = false;

// 加载当前问题及其选项
function loadQuestion() {
    // 如果题目数量达到总题目数，结束游戏
    if (currentQuestion >= totalQuestions) {
        endGame();
        return;
    }

    // 获取当前问题
    const question = questions[currentQuestion % questions.length];
    
    // 更新选项按钮的文本和 data-answer 属性
    document.querySelectorAll('.option').forEach((button, index) => {
        button.innerText = question.options[index];
        button.dataset.answer = String.fromCharCode(65 + index); // 设置答案字母（A、B、C、D）
        button.style.display = 'block'; // 显示选项按钮
    });

    // 更换音频文件
    const audioSource = document.getElementById('audioSource');
    audioSource.src = `audio/audio-file-${currentQuestion % questions.length}.mp3`;
    document.getElementById('audio').load();
    document.getElementById('result').innerText = ''; // 清空结果提示

    // 显示正确数量和总数
    document.getElementById('score').innerText = `正确答案：${correctAnswers}/${totalQuestions}`;
}

// 播放当前音频
function playAudio() {
    const audio = document.getElementById('audio');
    if (musicStarted) {
        audio.play();
    } else {
        // 在用户点击选项后才开始播放音乐
        musicStarted = true;
        document.getElementById('audio').play();
    }
}

// 检查用户选择的答案是否正确
function checkAnswer(selectedAnswer) {
    // 获取当前问题的正确答案
    const correctAnswer = questions[currentQuestion % questions.length].correctAnswer;
    // 检查用户选择的答案是否与正确答案匹配
    const isCorrect = selectedAnswer === correctAnswer;
    const resultElement = document.getElementById('result');
    resultElement.style.fontFamily = 'SimSun, serif'; // 设置字体为宋体

    // 根据答案是否正确更新结果提示
    if (isCorrect) {
        correctAnswers++;
        resultElement.innerText = '回答正确！';
        // 直接播放下一题的音乐
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
            playAudio();
        }, 1000); // 1秒后加载下一题并播放音乐
    } else {
        resultElement.innerText = '回答错误。';
        // 移动到下一题
        currentQuestion++;;
        setTimeout(() => {
            loadQuestion();
            playAudio();
        }, 2000);
    }
}

// 结束游戏并显示结果
function endGame() {
    if (correctAnswers >= requiredCorrectAnswers) {
        document.getElementById('result').innerText = '恭喜你，游戏完成！';
    } else {
        document.getElementById('result').innerText = '游戏结束，你没有通过。';
    }
    // 隐藏所有选项按钮
    document.querySelectorAll('.option').forEach(button => button.style.display = 'none');
    window.location.href = '../../game/html/2.13.html'; // 替换为你的目标 HTML 文件
}

// 绑定按钮点击事件
document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
        checkAnswer(button.dataset.answer); // 获取按钮的 data-answer 值并检查答案
    });
});

// 添加开始游戏按钮的点击事件
document.getElementById('startGame').addEventListener('click', () => {
    // 隐藏开始游戏按钮
    document.getElementById('startGame').style.display = 'none';
    // 加载问题并播放音乐
    loadQuestion();
    playAudio(); // 播放第一个音频
    // 缩小“跳过所有题目”按钮
    document.getElementById('skipAll').classList.add('small');
});

// 绑定跳过游戏按钮的点击事件
document.getElementById('skipQuestion').addEventListener('click', () => {
    // 跳转到下一个页面
    window.location.href = '../../game/html/2.13.html'; // 替换为你要跳转的目标页面 URL
});


