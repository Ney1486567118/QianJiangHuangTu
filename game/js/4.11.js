document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            window.location.href = '4.12.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "父皇，将军此事颇有蹊跷。请父皇息怒，明察此事。", character: "玩家", speaker: 1 },
    { text: "皇上冷静下来后，也认为此事有古怪，不能轻易定论，遂只是将将军下了狱，并未开始下一步动作。然而对将军的怀疑仍像一根刺一样扎在帝王的心中。】", character: "皇上", speaker: 2 },
    { text: "朕给你三天的时间，彻查此事。若是查不出，将军此次确实犯了王法，朕不会姑息。", character: "皇上", speaker: 2 },
    { text: "谢父皇。儿臣领旨。", character: "玩家", speaker: 1 },
    { text: "【能否扳倒皇后给出的伪证，恢复延禧宫和将军府的地位，就看你这三天的表现了。】", character: "玩家", speaker: 1 }
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