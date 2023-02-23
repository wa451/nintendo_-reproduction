let slider;
let imageArray;
let activeImageIndex = 0;
let navNumber;
let timeWidth1;
let timeWidth2;
let timeWidth3;
let timeWidth4;
let timeWidth5;
var num = 0;
var num_;
var time;
timeWidth1 = document.getElementById('navtimer1');
timeWidth2 = document.getElementById('navtimer2');
timeWidth3 = document.getElementById('navtimer3');
timeWidth4 = document.getElementById('navtimer4');
timeWidth5 = document.getElementById('navtimer5');

window.onload = function() {//ページが読み込まれたら実行
    slider = document.getElementById('sliderArea');//<div id="sliderArea">の中身を取ってくる
    imageArray = slider.getElementsByTagName('img');//子のタグからimgのみを取得
    imageArray[activeImageIndex].style.display = 'block';
    clearInterval(time);
    timer();
}

function nextImage(){
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    if(activeImageIndex >= imageArray.length - 1){
        activeImageIndex = 0;//画像番号が画像の数より大きくなったら0にする
    }else{
        activeImageIndex += 1;  //それ以外の場合は＋1
    }
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}
function prevImage(){
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    if(activeImageIndex <= 0){
        activeImageIndex = imageArray.length - 1
    }else{
        activeImageIndex -= 1;  
    }
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}
function timer(){
        
        timeWidth1.style.width = '0%';
        timeWidth2.style.width = '0%';
        timeWidth3.style.width = '0%';
        timeWidth4.style.width = '0%';
        timeWidth5.style.width = '0%';
        num=0
        
        time = setInterval(function() {
                num+=50;
                num_=num/40;
                if(activeImageIndex === 0){
                    timeWidth1.style.width = num_ + '%';
                }
                else if(activeImageIndex === 1){
                    timeWidth2.style.width = num_ + '%';
                }
                else if(activeImageIndex === 2){
                    timeWidth3.style.width = num_ + '%';
                }
                else if(activeImageIndex === 3){
                    timeWidth4.style.width = num_ + '%';
                }
                else{
                    timeWidth5.style.width = num_ + '%';
                }
                if(num_===100){
                    clearInterval(time);
                    timeWidth1.style.width = '0%';
                    timeWidth2.style.width = '0%';
                    timeWidth3.style.width = '0%';
                    timeWidth4.style.width = '0%';
                    timeWidth5.style.width = '0%';
                    num=0
                    setTimeout("nextImage()", 0);
                }
            }, 50);
}

navNumber = document.getElementById("nav1");
navNumber.addEventListener("mouseenter", () =>{
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    activeImageIndex=0;
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}, false);
navNumber = document.getElementById("nav2");
navNumber.addEventListener("mouseenter", () =>{
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    activeImageIndex=1;
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}, false);
navNumber = document.getElementById("nav3");
navNumber.addEventListener("mouseenter", () =>{
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    activeImageIndex=2;
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}, false);
navNumber = document.getElementById("nav4");
navNumber.addEventListener("mouseenter", () =>{
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    activeImageIndex=3;
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}, false);
navNumber = document.getElementById("nav5");
navNumber.addEventListener("mouseenter", () =>{
    imageArray[activeImageIndex].style.display = 'none';//非表示にする
    activeImageIndex=4;
    imageArray[activeImageIndex].style.display = 'block';//表示する
    clearInterval(time);
    timer();
    slider.className = 'whiteSlide';
    setTimeout(function() {
        slider.className = '';
    }, 500);
}, false);
