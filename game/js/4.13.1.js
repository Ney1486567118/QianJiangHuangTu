document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            window.location.href = '4.13.1.1.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "【你下到阴暗潮湿的牢狱之中，亲自提审将军的亲兵。】", character: "玩家", speaker: 1 },
    { text: "你可知将军为何与副将发生争执？副将又是因何而亡？", character: "玩家", speaker: 1 },
    { text: "殿下，我虽不知将军他们二人为何争执，却知道他二人情同手足，又怎会相害？", character: "亲兵甲", speaker: 2 },
    { text: "那日副将夜袭敌营，却遭受埋伏，重伤不治而亡。将军当时悲痛欲绝，却又怕消了士气，遂将副将的兵马也召集起来，而后为副将报仇，才又打了场漂亮的胜仗啊！（说着眼泪流了下来）", character: "亲兵甲", speaker: 2 },

    { text: "可这空口无凭，我又如何确定你是不是在维护你们将军呢？", character: "玩家", speaker: 1 }
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