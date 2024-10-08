document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            window.location.href = '4over.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "大人，副将生前确实与将军发生了争执，争执的原因是副将主张立即进攻，而将军希望再三思量。二人最终不欢而散，夜晚便出了事，场面一度混乱，老臣也不知发生了什么。", character: "文书官", speaker: 1 },
    { text: "至于缺失的那一页，是将军传令于我撕下销毁的，具体原因就不可知了。", character: "文书官", speaker: 1 },
    { text: "将军派何人传令与你的？", character: "玩家", speaker: 2 },
    { text: "一个小厮，老臣年纪大了，不记得其面目。", character: "文书官", speaker: 1 },
    { text: "【失败：文书官的话含糊其辞，并未指明事情的真相。皇帝仍心有疑虑。】", character: "玩家", speaker: 2 }
];

let currentDialogue = 0;
let currentCharIndex = 0;
let isShowingFullText = false;
let dialogueElement = document.getElementById('dialogue-text');
let characterElement = document.getElementById('character-name');
let person1 = document.getElementById('person1');
let person2 = document.getElementById('person2');

function showNextChar() {
    if (currentCharIndex < dialogues[currentDialogue].text.length) {
        dialogueElement.textContent += dialogues[currentDialogue].text[currentCharIndex];
        currentCharIndex++;
        setTimeout(showNextChar, 50); // 控制每个字符出现的速度
    } else {
        isShowingFullText = true; // 当整个对话显示完时
    }
}

function showDialogue() {
    dialogueElement.textContent = ''; // 清空对话框内容
    currentCharIndex = 0;
    characterElement.textContent = dialogues[currentDialogue].character;
    isShowingFullText = false;
    showNextChar();

    if (dialogues[currentDialogue].speaker === 1) {
        person1.style.opacity = "1";
        person2.style.opacity = "0.5";
    } else {
        person1.style.opacity = "0.5";
        person2.style.opacity = "1";
    }
}


// 开始显示第一段对话
showDialogue();