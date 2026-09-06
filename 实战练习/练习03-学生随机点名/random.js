// 学生名单（数组）
const student = ['梅西', '恩佐', '马丁内斯', '阿尔瓦雷斯', '劳塔罗', '德保罗', '罗梅罗', '蒙铁尔', '麦卡利斯特', '帕雷德斯'];
// 获取用于显示姓名的html元素
const studentName = document.querySelector('#name');
// 获取开始点名按钮
const startButton = document.querySelector('#startButton');
// 监听按钮点击事件
startButton.addEventListener('click', () => {
    // 防止重复点击
    startButton.disabled = true; // 点击一次后立刻将按钮禁用

    // 每间隔100ms显示一个名字
    const timer = setInterval(() => {
        // 随机生成一个数组下标
    const randomIndex = Math.floor(Math.random() * student.length);
    // 获取学生姓名
    const randomName = student[randomIndex];
    // 将姓名显示在html页面上
    studentName.innerText = randomName;
    }, 100);

    // 3秒以后停止随机播放，确定最终名字
    setTimeout(() => {
        // 停止定时器
        clearInterval(timer);
        // 恢复按钮
        startButton.disabled = false; // 启用
    }, 3000);
});