function captureScreenshotAndSave() {
    const username = localStorage.getItem('username');
    if (!username) {
        console.error('用户名未找到');
        return;
    }

    // 获取当前网页路径并移除.html后缀作为标题
    const urlPath = window.location.pathname;
    const pageTitle = urlPath.substring(urlPath.lastIndexOf('/') + 1).replace('.html', '');

    // 获取当前页面的背景图
    let background = getComputedStyle(document.body).backgroundImage;
    background = background.replace(/url\(["']?/, '').replace(/["']?\)$/, '');

    // 获取当前页面的属性数值
    const attributes = {
        emperorAffection: localStorage.getItem(`${username}-emperorAffection`) || 0,
        militaryCapability: localStorage.getItem(`${username}-militaryCapability`) || 0,
        sixArts: localStorage.getItem(`${username}-sixArts`) || 0,
        wisdom: localStorage.getItem(`${username}-wisdom`) || 0,
        reputation: localStorage.getItem(`${username}-reputation`) || 0,
        talent: localStorage.getItem(`${username}-talent`) || 0
    };

    const currentBgm = localStorage.getItem('bgmSrc');

    // 构建完整的手动存档数据对象
    const manualSaveData = {
        url: window.location.href,  // 当前网页地址
        title: pageTitle,            // 使用文件名作为标题
        time: new Date().toLocaleString(),  // 存档时间
        background: background,     // 当前页面背景图
        attributes: attributes,    // 当前属性数值
        bgm: {
            src: currentBgm, // 保存当前 BGM 的 URL
            //time: currentTime // 保存当前 BGM 的播放时间
        }
    };

    // 保存手动存档数据到 localStorage 中（临时存储）
    localStorage.setItem('manualSaveData', JSON.stringify(manualSaveData));
    // 完成存档操作后跳转到 score.html
    window.location.href = '../../start/score.html';
}

// 点击事件绑定
document.getElementById('pause-btn').addEventListener('click', function() {
    // 直接调用手动存档功能
    localStorage.setItem('previousStoryUrl', window.location.href);
    captureScreenshotAndSave();
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});
