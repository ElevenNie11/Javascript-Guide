//============================================================闲谈============================================================
// console.log("你好，欢迎来到我的教程");
// 变量类型：var(ES5) const(ES6) let(ES6)
// let myName = 'eleven';
// let studio = 'Allinsync';
// console.log(myName);
// console.log(studio);
// console.log(myName +" " + "in" + " " +studio);


// alert('你好！请输入你的回答');            警示弹窗
// let fruit = prompt('你最喜欢的水果是？'); 问题弹窗
// let price = prompt('这件商品多少钱？');
// let tip = 100;
// let truePirce = parseInt(price);         回答问题获得的数字实质上是个字符串，必须把它强制转换成int类型
// let total = tip + truePirce;
// console.log(fruit);
// console.log(price);
// console.log(total);


//============================================================流程控制============================================================
//（ctrl + /可以一下子注释完选中的所有行）
// let number = 111;
// let Number = 111;
// let stringNumber = '111';
// if(number == stringNumber){
//     console.log("转换过后的相等（非严格）");
// }else{
//     console.log("false");
// }
// number === stringNumber ? console.log("不严格相等") : console.log("false");
// number === Number ? console.log("严格相等") : console.log("false");



// let key = '全部pass';
// switch (key){
//     case '全部pass':
//         console.log('去西雅图旅行');
//         break;
//     case '挂了一科目':
//         console.log('去印度尼西亚旅行');
//         break;
//     default:
//         console.log('哪都别去');
//         break;
// } 


//============================================================循环============================================================
//for / while / do...while
//九九乘法表
// for(let i = 1; i <= 9; i++){
//     for(let j = 1; j <= 10-i; j++){
//         console.log(i + "*" + j + "=" + i*j);
//         console.log(`${i}*${j}=${i*j}`);
//     }
//     console.log("\n");
// }


//============================================================数组array============================================================
// 创建数组有两种方法：
// 1）字面量
let arr = [1, 2, 3, 4, 5, 6];
// // 2）直接new一个数组对象、
let arr2 = new Array();
for(let i = 0; i <= 10; i++){
    arr2[i] = i;
    // console.log(arr2[i]);
}


// 常用修改数组的方法：
// push(元素);             尾部添加，返回新长度
// pop();                 尾部删除，返回删掉的元素
// unshift(元素);          头部添加
// shift(元素);            头部删除
// splice(startIndex, deletedCount);   增删改: 从startIndex下标开始，删除deletedCount个元素
// sort();                 排序（默认按字符串）
// reverse();              反转
// arr.splice(0, 2);          // 从下标0开始，删除2个元素（包括startIndex对应的元素）：即：1和2
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);  // 控制台打印：3 4 5 6
// }


// // forEach();是纯遍历
// let value = 0;
// arr.forEach((i) => {
//     value += i;
// });
// console.log(value);

// arr2 = [0 ,1 ,2 ,3 ,4, 5, 6, 7, 8, 9, 10]
// 不修改原数组，会返回一个新数组的方法：
// slice(start, end);     截取，end不包含在内
// map();                 遍历，每个元素经过加工以后返回新数组
// filter();              过滤，留下满足条件的元素
arr2.map(x => x*2);
arr2.forEach( i => {
    console.log(arr2[i]); // 控制台打印：0 ,1 ,2 ,3 ,4, 5, 6, 7, 8, 9, 10（因为map会返回一个新数组，必须创建一个新数组来接住它）
});
// 用一个新数组arr3接住返回的新数组
// 当箭头函数只有一句执行语句时,可以不加花括号{}，这是也会自动 return
let arr3 = arr2.map(x => x*2);
arr3.forEach( i => {
    //这里log()里不能写arr3[i]了，因为arr3每次向forEach传的都是数组元素而不是数组下标！！！
    console.log(i); // 控制台打印：0, 2 ,4 ,6, 8, 10, 12, 14, 16, 18, 20
});
console.log("\n");
// 手动 return
let arr4 = arr2.map(x => {
    return x*2;
});
arr4.forEach( i => {
    console.log(i); // 控制台打印：0, 2 ,4 ,6, 8, 10, 12, 14, 16, 18, 20
});


//============================================================函数（方法）============================================================
// 1. 匿名函数：const func = function(a, b){ ... }
// 2. 匿名函数(箭头函数)：const func = (a, b) => { ... }
// 3. 具名函数（非匿名）： function foodOrder(foodName, foodBill) => { ... }

