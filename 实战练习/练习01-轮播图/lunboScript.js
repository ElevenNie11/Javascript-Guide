// 获取所有图片
const images = document.querySelectorAll('.images img');
// 获取所有小圆点
const dots = document.querySelectorAll('.dots span');
// 获取按钮
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
// 当前图片的下标
let currentIndex = 0;

// 显示指定下标的图片
function showImage(index) {
    // 先把所有图片隐藏
    images.forEach(img => {
        img.classList.remove('active')
    });
    // 先把所有小圆点取消选中
    dots.forEach(dot => {
        dot.classList.remove('active')
    });
    // 再显示指定下标的图片
    images[index].classList.add('active');
    // 激活对应的小圆点
    dots[index].classList.add('active');
    // 更新当前下标
    currentIndex = index;
}

// 下一张
function nextImage() {
    currentIndex++; 
    // 如果当前下标大于等于图片的数量，就回到第一张
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

// 上一张
function prevImage() {
    currentIndex--;
    // 如果当前下标小于0，就回到最后一张
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

// 点击下一张的按钮
// nextButton.addEventListener('click', nextImage()); 【错误写法】：浏览器执行这行代码的时候，首先看到：nextImage()，就会立刻执行这个函数
// 有了()，就会立即执行这个函数，然后返回undefined，最后就变成了：nextButton.addEventListener('click', undefined)，所以点击按钮的时候，就不会有任何反应了
// nextImage不要括号表示：以后用户点击 nextButton 的时候，再调用此函数！！！
nextButton.addEventListener('click', nextImage);
// 点击上一张的按钮
prevButton.addEventListener('click', prevImage);

// 点击小圆点切换图片
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

// 自动轮播5s(5000ms)
// setInterval(nextImage(), 5000);    【错误写法】：错误原因同上
setInterval(nextImage, 5000);