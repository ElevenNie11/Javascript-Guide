// DOM是文档对象模型
// BOM是浏览器对象模型：alert() 、prompt()...
// div在HTML页面里叫做“标签”
// div被获取之后在JS里叫做“DOM对象”



//========================================获取DOM对象========================================
// document: document是浏览器提供的一个全局对象，表示整个HTML文档
// 括号里必须有' '或者" "

// 1.通过id获取1个DOM对象（这时不用加#）
let div1 = document.getElementById("div1");
console.log(div1);

// 2.通过标签名获取所有符合条件的DOM对象
let div = document.getElementsByTagName("div");
console.log(div);

// 3.通过类名获取所有符合条件的DOM对象（这时不用加.）
let div2 = document.getElementsByClassName("div2");
console.log(div2);

// 4.通过CSS选择器获取DOM对象
// 根据id要加#
// 根据类名要加.
// 根据标签名什么都不用加
let div3 = document.querySelector("#div3");     // 匹配的第一个元素
console.log(div3);

let div4 = document.querySelectorAll(".div4");  // 匹配的所有元素：NodeList对象集合(详见图片：NodeList.png)
console.log(div4);
// 通过CSS选择器获取DOM对象返回值是一个伪数组：有长度有索引但是没有数组的方法，比如push()、pop()等方法，想要得到里面的一个对象就必须通过for遍历来获取

const li = document.querySelectorAll(".projectList li");  // 后代选择器
// 遍历打印每一个对象
for(let i = 0; i < li.length; i++){
    console.log(li[i]);   // 每一个li[i]都是一个DOM对象
}

// 只要是由querySelectorAll()获取的DOM对象集合都是伪数组，想要使用数组的方法就必须先转换成数组
const li2 = Array.from(document.querySelectorAll(".projectList li"));
li2.push("这是一个新的li标签");

// 总结：获取DOM对象
// 最常用的方法时document.querySelector()和document.querySelectorAll()
// 二者的区别就是：第一个是获取匹配的第一个元素（可以直接操作），第二个是获取匹配的所有元素（是伪数组，必须通过for遍历得到每一个元素）
// ()里面的内容是CSS选择器，CSS选择器的语法就是：id前面加#  类名前面加.  标签名什么都不用加
// 记得写双引号



//========================================操作元素内容========================================
// 1.修改DOM对象的内容
// 对象.innerHTML: 获取或设置标签的内容（解析标签！！！）
// 对象.innerText: 获取或设置标签的内容（不解析标签！！！）
const box = document.querySelector("#box > p");
console.log(box.innerText);        // 获取标签的内容（不包括标签）
box.innerText = "这是修改后的内容xxxx,原来的内容请见控制台打印";  // 修改标签的内容（不包括标签）

const box2 = document.querySelector("#box p:nth-child(2)");   // 获取第二个p标签
console.log(box2.innerHTML);      // 获取标签的内容（包括标签）
box2.innerHTML = "<strong>这是修改后的内容xxxx,原来的内容请见控制台打印</strong>";  //可以解析标签：<strong>标签加粗</strong>



//========================================操作元素属性========================================
// 1.获取DOM对象的属性
// 对象.getAttribute("属性名"): 获取DOM对象的属性值
const box3 = document.querySelector("#box p:nth-child(3)");
console.log(box3.getAttribute("class"));   // 获取class属性的值
console.log(box3.getAttribute("id"));      // 获取id属性的值
console.log(box3.getAttribute("style"));   // 获取style属性的值
