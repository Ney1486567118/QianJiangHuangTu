function autoSave() {
    // 获取当前用户的用户名
    const username = localStorage.getItem('username');
    if (!username) {
        console.error('用户名未找到');
        return;
    }

    const urlPath = window.location.pathname;
    const pageTitle = urlPath.substring(urlPath.lastIndexOf('/') + 1).replace('.html', '');
    let background = getComputedStyle(document.body).backgroundImage;
    background = background.replace(/url\(["']?/, '').replace(/["']?\)$/, '');

    const attributes = {
        emperorAffection: localStorage.getItem(`${username}-emperorAffection`) || 0,
        militaryCapability: localStorage.getItem(`${username}-militaryCapability`) || 0,
        sixArts: localStorage.getItem(`${username}-sixArts`) || 0,
        wisdom: localStorage.getItem(`${username}-wisdom`) || 0,
        reputation: localStorage.getItem(`${username}-reputation`) || 0,
        talent: localStorage.getItem(`${username}-talent`) || 0
    };

    // 获取当前音乐的播放信息
    const currentBgm = localStorage.getItem('bgmSrc');
    const absoluteBgmUrl = new URL(currentBgm, window.location.href).href;

    const autoSaveData = {
        url: window.location.href, // 当前网页地址
        title: pageTitle, // 当前网页标题
        time: new Date().toLocaleString(), // 当前时间，格式为字符串
        background: background,
        attributes: attributes,
        bgm: absoluteBgmUrl, // 保存当前 BGM 的 URL
    };

    // 使用用户名作为前缀将自动存档数据保存到 localStorage 中
    localStorage.setItem(`${username}_autoSave`, JSON.stringify(autoSaveData));


}