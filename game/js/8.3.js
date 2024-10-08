document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        autoSave();
        window.location.href = nextPageUrl; // 改改改！
    } else if (hasSelectedOption) {
        // 如果对话正在逐字显示
        dialogueText.textContent = selectedDialogue;
        currentCharIndex = selectedDialogue.length;
        isShowingFullText = true;
    }
});


// 改改改 对话内容
function selectOption(option) {
    const optionsContainer = document.getElementById('options');
    
    switch(option) {
        case '按民众投诉多少依次排查':
            selectedDialogue = "【你决定从民众投诉最多的地区开始排查。却发现投诉涉及基建、政策等多个方面，工作复杂和繁重。你带领调查团队首先前往投诉最多的郡县，发现基建工程严重滞后，资金去向不明。】";
            nextPageUrl = "8.3.1.html"; // 改改改！
            break;
        case '按财政波动大小依次排查':
            selectedDialogue = "【你带领调查团队首先前往财政波动最大的郡县，发现该地的税收收入与支出存在巨大差异。】";
            nextPageUrl = "8.3.2.html"; // 改改改！
            break;
    }
    
    hasSelectedOption = true;
    optionsContainer.style.display = 'none'; // 隐藏选项
    showDialogue(); // 开始显示对话
}

let dialogueText = document.getElementById('dialogue-text');
let currentCharIndex = 0;
let isShowingFullText = false;
let selectedDialogue = ''; // 当前选择的对话内容
let nextPageUrl = ''; // 存储下一个跳转的页面URL
let hasSelectedOption = false;

function showNextChar() {
    if (currentCharIndex < selectedDialogue.length) {
        dialogueText.textContent += selectedDialogue[currentCharIndex];
        currentCharIndex++;
        setTimeout(showNextChar, 50); // 控制每个字符出现的速度
    } else {
        isShowingFullText = true; // 当整个对话显示完时
    }
}

function showDialogue() {
    dialogueText.textContent = ''; // 清空对话框内容
    currentCharIndex = 0;
    isShowingFullText = false;
    showNextChar(); // 开始逐字符显示对话
}


document.addEventListener('DOMContentLoaded', () => {
    dialogueText.textContent = "【你选择】"; // 页面加载时显示初始话语
});
