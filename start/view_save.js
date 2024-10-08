window.onload = function() {
    loadAutoSave();
    loadManualSaves();
};

// 读取自动存档数据的函数
function loadAutoSave() {
    // 获取当前用户的用户名
    const username = localStorage.getItem('username');
    if (!username) {
        console.error('用户名未找到');
        return;
    }

    // 从 localStorage 中读取对应用户的自动存档数据
    const autoSaveData = localStorage.getItem(`${username}_autoSave`);
    
    // 获取自动存档按钮元素
    const autoSaveButton = document.getElementById('auto-save-button');

    if (autoSaveData) {
        // 如果有存档，解析并展示存档信息
        const parsedData = JSON.parse(autoSaveData);
        const attributes = parsedData.attributes;

        // 设置存档按钮的文本，显示存档时间和背景图
        autoSaveButton.innerHTML = `
            <div class="save-button-title">自动存档</div>
            <div class="save-button-content">
                <div class="save-info">
                    时间: ${parsedData.time}<br>
                    标题: ${parsedData.title}<br><br>
                    <div class="attribute-grid">
                        <p>皇帝好感度: ${attributes.emperorAffection}</p>
                        <p>智慧: ${attributes.wisdom}</p>
                        <p>军事能力: ${attributes.militaryCapability}</p>
                        <p>声望: ${attributes.reputation}</p>
                        <p>六艺: ${attributes.sixArts}</p>
                        <p>才华: ${attributes.talent}</p>
                    </div>
                </div>
                <div class="save-image">
                    <img src="${parsedData.background}" alt="背景图">
                </div>
            </div>
        `;

        // 点击后跳转到存档时的页面
        autoSaveButton.addEventListener('click', () => {
            const iframe = document.getElementById('musicPlayerIframe');
            const bgmUrl = parsedData.bgm; 

            iframe.contentWindow.postMessage({
                action: 'playMusic',
                musicUrl: bgmUrl,  // 这里是你想要的初始音乐
                resetTime: true                  // 是否重置到起始时间
            }, '*');

            setTimeout(() => {
                window.location.href = parsedData.url;  // 跳转到存档时的页面
            }, 300); 
        });
    } else {
        // 如果没有存档，显示 “空”
        autoSaveButton.innerHTML = '<div class="save-button-title">自动存档</div><p>空</p>';
    }
}


// 读取手动存档并更新页面
function loadManualSaves() {
    const username = localStorage.getItem('username');  // 获取当前登录用户名
    if (!username) {
        console.error('未找到用户名，无法加载手动存档');
        return;
    }

    let saves = JSON.parse(localStorage.getItem(`${username}_manualSaves`)) || [null, null, null];

    for (let i = 0; i < 3; i++) {
        let saveData = saves[i]; // 读取数组中的存档信息
        let saveSlot = document.getElementById(`saveSlot${i}`);

        if (saveData) {
            saveSlot.innerHTML = `
                <div class="save-button-title">手动存档 ${i + 1}</div>
                <div class="save-button-content">
                    <div class="save-info">
                        时间: ${saveData.time}<br>
                        标题: ${saveData.title}<br><br>
                        <div class="attribute-grid">
                            <p>皇帝好感度: ${saveData.attributes.emperorAffection}</p>
                            <p>智慧: ${saveData.attributes.wisdom}</p>
                            <p>军事能力: ${saveData.attributes.militaryCapability}</p>
                            <p>声望: ${saveData.attributes.reputation}</p>
                            <p>六艺: ${saveData.attributes.sixArts}</p>
                            <p>才华: ${saveData.attributes.talent}</p>
                        </div>
                    </div>
                    <div class="save-image">
                        <img src="${saveData.background}" alt="背景图">
                    </div>
                </div>
            `;
            saveSlot.onclick = function() {
                const iframe = document.getElementById('musicPlayerIframe');

                const bgmUrl = saveData.bgm; // 获取存档中的 BGM URL

                iframe.contentWindow.postMessage({
                    action: 'playMusic',
                    musicUrl: bgmUrl,  // 这里是你想要的初始音乐
                    resetTime: true                  // 是否重置到起始时间
                }, '*');

                window.location.href = saveData.url;
            };
        } else {
            saveSlot.innerHTML = '<div class="save-button-title">手动存档</div><p>空</p>';
        }
    }
}


// 返回
document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();  // 阻止默认的链接跳转行为
    window.history.back();   // 返回到进入此页面之前的页面
});
