// 이전 슬라이드 = prevslide() / 다음 슬라이드 = nextslide() 
// 섹션 2 레프트 박스 이전 슬라이드 = prevSlideFn() / 다음 슬라이드 = nextSlideFn()
// 섹션 2 센터 박스 이전 슬라이드 = prevSlideFn2() / 다음 슬라이드 = nextSlideFn2()
// 섹션 3 라이트 박스 이전 슬라이드 = prevSlideFn3() / 다음 슬라이드 = nextSlideFn3()

// setInterval(nextslide, 3000);
// setTimeout(nextslide, 5000);

////섹션1 슬라이드////
var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap');


function nextslide() {
    cnt++;
    cnt > 3 ? cnt = 0 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';

}

function prevslide() {
    cnt--;
    cnt < 0 ? cnt= 3 : cnt;
    $slideWrap.style= 'left:' + (-1200*cnt) + 'px';

}

///섹션2 왼쪽 박스 슬라이드 ////
var cnt1 = 0;
var $slideWrap2 = document.querySelector('.slide-wrap2');


function nextSlideFn() {
    cnt1++;
    cnt1 > 3 ? cnt1 = 0 : cnt1; 
    $slideWrap2.style = 'left:' + (-400*cnt1) + 'px';
}


function prevSlideFn() {
    cnt1--;
    cnt1 < 0 ? cnt1=3 : cnt1;
    $slideWrap2.style = 'left:' + (-400*cnt1) + 'px';
}

////섹션 2 센터 박스 슬라이드 ////
///////////////////////////////////
var cnt2 = 0;
var $slideWrap3 = document.querySelector('.slide-wrap3');


function nextSlideFn2() {
    cnt2++;
    cnt2 > 2 ? cnt2=0 : cnt2;
    $slideWrap3.style = 'top:' + (-300*cnt2) + 'px';
}

function prevSlideFn2() {
    cnt2--;
    cnt2 < 0 ? cnt2=2 : cnt2;
    $slideWrap3.style = 'top:' + (-300*cnt2) + 'px';
}



///////////////////섹션2 오른쪽 박스 슬라이드////
//////////////////////////////
var cnt3 = 0;
var $slideWrap4 = document.querySelector('.slide-wrap4');

function nextSlideFn3() {
    cnt3++;
    cnt3 > 3 ? cnt3=0 : cnt3;
    $slideWrap4.style = 'right:' + (400*cnt3) + 'px';
}

function prevSlideFn3() {
    cnt3--;
    cnt3 < 0 ? cnt3=3 : cnt3;
    $slideWrap4.style = 'right:' + (400*cnt3) + 'px';
}