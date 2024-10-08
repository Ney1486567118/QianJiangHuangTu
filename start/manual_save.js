// 从本地存储加载手动存档信息，并显示到页面的存档槽中
function loadManualSaves() {
    const username = localStorage.getItem('username');  // 获取当前登录用户名
    if (!username) {
        console.error('未找到用户名，无法加载存档');
        return;
    }

    // 尝试从本地存储获取手动存档数据
    let saves = JSON.parse(localStorage.getItem(`${username}_manualSaves`)) || [null, null, null];

    // 遍历每个存档槽并显示存档信息
    saves.forEach((save, index) => {
        const saveButton = document.getElementById(`save-button-${index + 1}`);
        if (save) {
            // 如果有存档，则显示存档的时间、标题等信息在按钮内
            
            saveButton.innerHTML = `
                <div class="save-button-title">手动存档 ${index + 1}</div>
                <div class="save-button-content">
                    <div class="save-info">
                        时间: ${save.time}<br><br>
                        标题: ${save.title}<br><br>
                        <div class="attribute-grid">
                            <p>皇帝好感度: ${save.attributes.emperorAffection}</p>
                            <p>军事能力: ${save.attributes.militaryCapability}</p>
                            <p>六艺: ${save.attributes.sixArts}</p>
                            <p>智慧: ${save.attributes.wisdom}</p>
                            <p>声望: ${save.attributes.reputation}</p>
                            <p>才华: ${save.attributes.talent}</p>
                        </div>
                    </div>
                    <div class="save-image">
                        <img src="${save.background}" alt="背景图">
                    </div>
                </div>
            `;
        } else {
            // 如果没有存档，显示“空”字样
            saveButton.innerHTML = '空';
        }
    });
}

// 存档数据保存函数，将当前存档信息保存到指定的存档槽
function saveToSlot(slotNumber, saveData) {
    const username = localStorage.getItem('username');  // 获取当前登录用户名
    if (!username) {
        console.error('未找到用户名，无法存储存档');
        return;
    }

    // 从本地存储中获取当前的手动存档信息
    let saves = JSON.parse(localStorage.getItem(`${username}_manualSaves`)) || [null, null, null];
    
    // 更新指定的存档槽（覆盖原有存档）
    saves[slotNumber] = saveData;
    
    // 将更新后的存档信息保存回本地存储
    localStorage.setItem(`${username}_manualSaves`, JSON.stringify(saves));
    
    // 更新页面上显示的存档信息
    loadManualSaves();
}

// 页面加载时，自动加载并显示现有的存档信息
window.onload = function() {
    loadManualSaves();
    const manualSaveData = JSON.parse(localStorage.getItem('manualSaveData'));
    
    const username = localStorage.getItem('username'); 
    let saves = JSON.parse(localStorage.getItem(`${username}_manualSaves`)) || [null, null, null];
    
    // 存档槽 1 的按钮点击事件
    document.getElementById('save-button-1').addEventListener('click', function() {
        if (saves[0]) {
            const confirmation = confirm("陛下，确定要覆盖这个存档吗？");
            if (confirmation) {
                if (manualSaveData) {
                    saveToSlot(0, manualSaveData);  // 存储到存档槽 1
                }
            }
        } else {
            if (manualSaveData) {
                saveToSlot(0, manualSaveData);  // 存储到存档槽 1
            }
        }
    });

    // 存档槽 2 的按钮点击事件
    document.getElementById('save-button-2').addEventListener('click', function() {
        if (saves[0]) {
            const confirmation = confirm("陛下，确定要覆盖这个存档吗？");
            if (confirmation) {
                if (manualSaveData) {
                    saveToSlot(1, manualSaveData);  // 存储到存档槽 1
                }
            }
        } else {
            if (manualSaveData) {
                saveToSlot(1, manualSaveData);  // 存储到存档槽 1
            }
        }
    });

    // 存档槽 3 的按钮点击事件
    document.getElementById('save-button-3').addEventListener('click', function() {
        if (saves[0]) {
            const confirmation = confirm("陛下，确定要覆盖这个存档吗？");
            if (confirmation) {
                if (manualSaveData) {
                    saveToSlot(2, manualSaveData);  // 存储到存档槽 1
                }
            }
        } else {
            if (manualSaveData) {
                saveToSlot(2, manualSaveData);  // 存储到存档槽 1
            }
        }
    });
};

// 返回
document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();  // 阻止默认的链接跳转行为
    window.history.back();   // 返回到进入此页面之前的页面
});
