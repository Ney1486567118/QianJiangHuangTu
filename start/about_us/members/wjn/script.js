// 设置网站开始运行的日期
const startDate = new Date('2024-08-23');

// 实时更新运行时间的函数
function updateRunTime() {
    const now = new Date();
    const diffTime = now - startDate; // 毫秒差值
    const diffSeconds = Math.floor(diffTime / 1000); // 总秒数
    const days = Math.floor(diffSeconds / (60 * 60 * 24)); // 天数
    const hours = Math.floor((diffSeconds % (60 * 60 * 24)) / (60 * 60)); // 小时数
    const minutes = Math.floor((diffSeconds % (60 * 60)) / 60); // 分钟数
    const seconds = diffSeconds % 60; // 秒数

    // 将时间格式化成 天:小时:分钟:秒
    document.getElementById('runTime').textContent = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

// 每秒更新一次
setInterval(updateRunTime, 1000);
