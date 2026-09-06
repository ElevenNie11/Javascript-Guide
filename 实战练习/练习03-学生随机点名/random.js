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



// 定时器函数
// setInterval() 和 setTimeout(函数， 时间)
// 1. setInterval(): 每隔一段时间反复执行   （反复）
// 2. setTimeout():  过一段时间以后执行一次 （一次）


// setTimeout(() => {
//     console.log("你好");
// }, 3000);
// 上面这段函数表示：3秒以后，执行这个函数（只执行一次）


// setInterval(() => {
//     console.log("你好");
// }, 1000);
// 每隔一秒执行一次

// Q：为什么setInterval要配合clearInterval？
// A：因为setInterval不会自己停下来，我们需要告诉JS现在可以停下来了
// setInterval会返回一个东西，我们把它保存到const timer这个常量里


// 注意事项：function表示这个函数本身。而function()表示现在立刻执行这个函数