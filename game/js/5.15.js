document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            window.location.href = '5.16.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "迷药? 什么迷药?", character: "玩家", speaker: 2 },
    { text: "三弟，我查出来发现你敬大皇子的那杯酒里有少许的迷药残留，不知道你有没有什么解释啊?", character: "大皇子", speaker: 1 },
    { text: "我怎么可能会给二哥下药? 大哥，你这是污蔑!", character: "玩家", speaker: 2 },
    { text: "请父皇明鉴，如今太子与异邦如此交往密切，甚至和香妃娘娘......之事已经坐实", character: "大皇子", speaker: 1 },
    { text: "儿臣不敢随意定夺，还请父皇决定。而三弟向来是谦谦君子，儿臣相信三弟是被冤枉的，只是儿臣愚钝，查不出实证来。", character: "大皇子", speaker: 1 },

    { text: "【你看着言之凿凿的大哥，只觉得他面目全非。你欲争辩，可惜清楚自己早已失去先机，无法挽救。】", character: "玩家", speaker: 2 }
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