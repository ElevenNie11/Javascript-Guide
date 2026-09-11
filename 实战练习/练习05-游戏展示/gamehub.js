// 在HTML里准备一个空容器
//  ↓
// JavaScript获取这个容器
//  ↓
// JavaScript生成游戏卡片
//  ↓
// 放到HTML页面里去

// 获取游戏列表容器
const gameList = document.querySelector('#game-list');
// 显示游戏
function showGames(){
    gameList.innerHTML = '';
    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <h3>${game.workName}</h3>
            <p>类型：${game.category}</p>
            <p>价格：${game.price} 元</p>
            <p>${game.description}</p>
            <button>查看详情</button>
        `;
        gameList.appendChild(gameCard);   // appendChild表示给这个元素添加一个子元素
    });
}
// 初始化游戏大厅
showGames();