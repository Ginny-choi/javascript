//이전 슬라이드 prevSlide()
//다음 슬라이드 nextSlide()

var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap') ;

function nextSlide() {
    cnt++;
    cnt > 3 ? cnt=3 : cnt;
    $slideWrap.style ='left:' + (-1200*cnt) + 'px'; 

} 

function prevSlide() {
    cnt--;
    cnt <0 ? cnt=0 : cnt;
    $slideWrap.style ='left:' + (-1200*cnt) + 'px';
}