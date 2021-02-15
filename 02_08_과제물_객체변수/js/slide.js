var slide = {
    init:function(){
        this.slide1();
        this.slide2();
        this.slide3();
        this.slide4();
    },

    slide1:function(){
        var cnt = 0;
        var $slideWrap = document.querySelector('#section1 .slide-wrap');
        var $nextBtn = document.querySelector('#section1 .next-btn');
        var $prevBtn = document.querySelector('#section1 .prev-btn');


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
        
        //버튼 등록 //
        $nextBtn.onclick = function() {
            nextslide();
            
        }
        $prevBtn.onclick = function() {
            prevslide();
        }
    },
    slide2:function(){
        var cnt1 = 0;
        var $slideWrap = document.querySelector('#section2 .left-box .slide-wrap');
        var $nextBtn = document.querySelector('#section2 .left-box .next-btn');
        var $prevBtn = document.querySelector('#section2 .left-box .next-btn');

        function nextSlideFn() {
            cnt1++;
            cnt1 > 3 ? cnt1 = 0 : cnt1; 
            $slideWrap.style = 'left:' + (-400*cnt1) + 'px';
        }


        function prevSlideFn() {
            cnt1--;
            cnt1 < 0 ? cnt1=3 : cnt1;
            $slideWrap.style = 'left:' + (-400*cnt1) + 'px';
        }
        
        //버튼등록
        $nextBtn.onclick = function() {
            nextSlideFn()
        }
        $prevBtn.onclick = function() {
            prevSlideFn()
        }

    },

    slide3:function (){
        var cnt2 = 0;
        var $slideWrap = document.querySelector('#section2 .center-box .slide-wrap');
        var $nextBnt = document.querySelector('#section2 .center-box .next-bnt');
        var $prevBnt = document.querySelector('#section2 .center-box .prev-bnt');

      function nextSlideFn() {
            cnt2++;
            cnt2 > 2 ? cnt2=0 : cnt2;
            $slideWrap.style = 'top:' + (-300*cnt2) + 'px';
        }

        function prevSlideFn() {
            cnt2--;
            cnt2 < 0 ? cnt2=2 : cnt2;
            $slideWrap.style = 'top:' + (-300*cnt2) + 'px';
        }
        //버튼등록
        $nextBnt.onclick = function(){
            nextSlideFn();
        }
        $prevBnt.onclick = function(){
            prevSlideFn();
        }
    },

    slide4:function(){
        var cnt3 = 0;
        var $slideWrap = document.querySelector('a#section2 .right-box .slide-wrap');
        var $nextBtn = document.querySelector('a#section2 .right-box .next-btn')
        var $prevBtn = document.querySelector('a#section2 .right-box .prev-btn')

        function nextSlideFn() {
            cnt3++;
            cnt3 > 3 ? cnt3=0 : cnt3;
            $slideWrap.style = 'right:' + (400*cnt3) + 'px';
        }

        function prevSlideFn() {
            cnt3--;
            cnt3 < 0 ? cnt3=3 : cnt3;
            $slideWrap.style = 'right:' + (400*cnt3) + 'px';
        }

        $nextBtn.onclick = function() {
            nextSlideFn();

        }

        $prevBtn.onclick = function(){
            prevSlideFn();
        }
           


    }




};

slide.init();