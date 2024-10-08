document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        autoSave();
        window.location.href = "2.17.html"; // 改改改！
    } else if (hasSelectedOption) {
        // 如果对话正在逐字显示
        dialogueText.textContent = selectedDialogue;
        currentCharIndex = selectedDialogue.length;
        isShowingFullText = true;
    }
});
// 显示自定义弹窗，替换 alert
function showCustomModal() {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'flex'; // 显示弹窗

    var closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.onclick = function() {
        modal.style.display = 'none'; // 关闭弹窗
        window.location.href = '2.17.html';
    };
}

// 改改改 对话内容
function selectOption(option) {
    const optionsContainer = document.getElementById('options');
    
    switch(option) {
        case '加入寻找玉佩的队伍':
            selectedDialogue = "【在你的帮助下长公主找回了御赐之物，她很是感谢你】";
            // alert("获得成就：乐于助人");

            var index = window.localStorage.userid;
            users = JSON.parse(localStorage.getItem('users'));
            users[index].achi5 = 1;
            console.log("index:", index); // 确认index的值
            console.log("users:", users); // 确认array是否被正确解析
            console.log("users[index]:", users[index]); // 确认 array[index] 是否有效
            console.log("users[index].achi5:", users[index].achi5);
    
            // window.localStorage.users = JSON.stringify(users);
            localStorage.setItem('users', JSON.stringify(users));
            // alert('恭喜你找到所有不同处！按确认自动跳转。');
            showCustomModal();
            
            break;
        case '安慰公主后便离开':
            selectedDialogue = "安慰公主后便离开";
            
            break;
            case '马上去禀告皇上':
            selectedDialogue = "【皇上听到后倒有些对长公主生气，但是随即也安排了一些人手帮助公主寻找】";
        
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


