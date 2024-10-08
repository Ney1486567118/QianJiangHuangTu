document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        autoSave();
        window.location.href = nextPageUrl; // 改改改！
    } else if (hadSelectedOption) {
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
        case '是':
            selectedDialogue = "是";
            nextPageUrl = "3.13.1.0.html"; // 改改改！
            break;
        case '否':
            selectedDialogue = "否";
            nextPageUrl = "3.13.2.html"; // 改改改！
            break;
    }
    
    hadSelectedOption = true;
    optionsContainer.style.display = 'none'; // 隐藏选项
    showDialogue(); // 开始显示对话
}

let dialogueText = document.getElementById('dialogue-text');
let currentCharIndex = 0;
let isShowingFullText = false;
let selectedDialogue = ''; // 当前选择的对话内容
let nextPageUrl = ''; // 存储下一个跳转的页面URL
let hadSelectedOption = false;

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
    dialogueText.textContent = "【你帮公主捡起玉佩了吗】"; // 页面加载时显示初始话语
});
