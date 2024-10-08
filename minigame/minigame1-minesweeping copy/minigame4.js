let gameBoard;
let revealedCount = 0; // 记录已揭开的非雷格子数量
let flaggedCount = 0; // 记录已标记的雷格子数量
let startTime, timerInterval;
let totalTime;
const chineseNumbers = ["", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
const rows = 10;
const cols = 10;
const mines = 10;

// 初始化游戏
function initGame() {
    revealedCount = 0; // 记录已揭开的非雷格子数量
    gameBoard = createBoard(rows, cols, mines);
    calculateNeighborMines(gameBoard);
    renderBoard(gameBoard);
    // hideEndGameOptions(); // 隐藏重新开始和退出选项
    startTimer(); // 开始计时
}

// 创建游戏网格
function createBoard(rows, cols, mines) {
    const board = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({
        isMine: false,
        isRevealed: false,
        neighborMines: 0,
    })));

    for (let i = 0; i < mines; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * rows);
            col = Math.floor(Math.random() * cols);
        } while (board[row][col].isMine);
        board[row][col].isMine = true;
    }

    return board;
}

// 渲染游戏网格
function renderBoard(board) {
    const boardElement = document.getElementById('minesweeper-board');
    boardElement.innerHTML = '';
    boardElement.style.gridTemplateColumns = `repeat(${cols}, 40px)`;

    board.forEach((row, rIdx) => {
        row.forEach((cell, cIdx) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', () => handleClick(rIdx, cIdx));
            cellElement.addEventListener('contextmenu', (event) => handleRightClick(rIdx, cIdx, event)); // 右键点击事件
            boardElement.appendChild(cellElement);
        });
    });
}


// 处理点击方格
function handleClick(row, col) {
    const cell = gameBoard[row][col];
    if (cell.isRevealed || cell.isFlagged) return;

    cell.isRevealed = true;
    renderCell(row, col);

    if (cell.isMine) {
        endGame(false); // 游戏结束，踩到雷
        return;
    }

    revealedCount++;

    if (revealedCount === rows * cols - mines) {
        endGame(checkVictory()); // 游戏胜利
        return;
    }

    if (cell.neighborMines === 0) {
        revealNeighbors(row, col);
    }
}


function handleRightClick(row, col, event) {
    event.preventDefault();  // 禁用右键菜单
    const cell = gameBoard[row][col];
    
    if (cell.isRevealed || (flaggedCount >= mines && !cell.isFlagged)) {
        return; // 如果标记数量达到限制，不允许进一步标记
    }

    if (cell.isFlagged) {
        cell.isFlagged = false;
        flaggedCount--; // 取消标记时减少计数
    } else {
        cell.isFlagged = true;
        flaggedCount++; // 新增标记时增加计数
    }

    renderCell(row, col);

    if (checkVictory()) {
        endGame(true);  // 若标记正确，游戏胜利
    }

    document.getElementById('flagged-count').textContent = `已标记: ${flaggedCount}/${mines}`;
}


// 渲染单个方格
function renderCell(row, col) {
    const cellElement = document.getElementById('minesweeper-board').children[row * cols + col];
    const cell = gameBoard[row][col];
    
    if (cell.isFlagged) {
        cellElement.textContent = '🪢';  // 显示标记
        cellElement.classList.add('flagged');
    } else if (cell.isRevealed) {
        cellElement.classList.add('revealed');
        if (cell.isMine) {
            cellElement.textContent = '🪤';
        } else if (cell.neighborMines > 0) {
            cellElement.textContent = chineseNumbers[cell.neighborMines];
        } else {
            cellElement.textContent = '';
        }
    } else {
        cellElement.textContent = '';  // 清除文本
        cellElement.classList.remove('flagged');
    }
}



// 计算相邻地雷数
function calculateNeighborMines(board) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!board[row][col].isMine) {
                let mineCount = 0;
                directions.forEach(([dx, dy]) => {
                    const newRow = row + dx;
                    const newCol = col + dy;
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol].isMine) {
                        mineCount++;
                    }
                });
                board[row][col].neighborMines = mineCount;
            }
        }
    }
}

// 展开空白区域
function revealNeighbors(row, col) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !gameBoard[newRow][newCol].isRevealed) {
            handleClick(newRow, newCol);
        }
    });
}

function checkVictory() {
    let correctlyFlaggedMines = 0;
    let revealedNonMines = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = gameBoard[row][col];
            if (cell.isMine && cell.isFlagged) {
                correctlyFlaggedMines++;
            }
            if (!cell.isMine && cell.isRevealed) {
                revealedNonMines++;
            }
        }
    }

    return (correctlyFlaggedMines === mines || revealedNonMines === rows * cols - mines);
}


// 开始计时
function startTimer() {
    startTime = Date.now(); // 记录开始时间
    clearInterval(timerInterval); // 确保不会有多个计时器
    timerInterval = setInterval(updateTimer, 1000); // 每秒更新一次
}

// 更新计时器显示
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // 计算已过去的秒数
    document.getElementById('timer').textContent = `时间：${elapsedTime}秒`;
}

// 停止计时并返回计时结果
function stopTimer() {
    clearInterval(timerInterval);
    const endTime = Date.now();
    const elapsedTime = Math.floor((endTime - startTime) / 1000);
    return elapsedTime; // 返回总计时秒数
}


// 游戏结束，显示选项
function endGame(won) {
    totalTime = stopTimer(); // 停止计时并获取总时间
    setTimeout(() => {
        if (won) {
            alert("你是个天才皇子！");
        } else {
            alert("你掉进陷阱了！");
        }

        // showEndGameOptions(totalTime); // 显示重新开始和退出按钮
    }, 200);
}




// 重新开始游戏
function restartGame() {
    initGame();
}

// 退出游戏
function exitGame() {
    if (totalTime === undefined) {
        totalTime= 999999; // 默认时间值，设置为一个很大的数
    }
    window.location.href = `../../game/html/r.2.3.1.html?time=${totalTime}`; // 把时间作为参数传递
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('game-rules-modal');
    const closeBtn = document.getElementById('close-modal');
    const startGameBtn = document.getElementById('start-game');
  
    // 页面加载时显示规则弹窗
    modal.style.display = 'block';
  
    // 点击关闭按钮时关闭弹窗
    closeBtn.onclick = function() {
      modal.style.display = 'none';
      initGame();  // 初始化游戏
    }
  
    // 点击"开始游戏"按钮时关闭弹窗并启动游戏
    startGameBtn.onclick = function() {
      modal.style.display = 'none';
      initGame();  // 初始化游戏
    }
  
    // 点击窗口外部时关闭弹窗
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        initGame();  // 初始化游戏
      }
    }
    
  });
  