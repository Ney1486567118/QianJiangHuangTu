function startGame() {
    // 跳转到开始游戏的页面
    const username = localStorage.getItem('username');
    const autoSaveData = localStorage.getItem(`${username}_autoSave`);

    if (autoSaveData) {
        const confirmation = confirm("将要覆盖当前自动存档内容，陛下确定要开始吗？");
        if (confirmation) {
            window.location.href ="rules.html";
        }
    } else {
        window.location.href ="rules.html";
    }
}

function loadGame() {
    // 跳转到读取存档的页面
    window.location.href = 'view_save.html';
}

function aboutUs() {
    // 跳转到关于我们的页面
    window.location.href = 'about_us/about_us.html';
}

function viewAchievements() {
    // 跳转到成就一览的页面
    window.location.href = 'Index.html';
}
