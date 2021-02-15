//전역변수(global)
var $slideWrap  = document.getElementsByClassName('slide-wrap');
var $nextBtn    = document.getElementsByClassName('next-btn');
var $prevBtn    = document.getElementsByClassName('prev-btn');

// console.log('$slideWrap 객체 배열 값 :', $slideWrap.length);
// console.log('$slideWrap 객체', $slideWrap);

// //반복문 반복적인 작업을 손쉽게 한번에 처리한다. 
// for(var i=0; i<$slideWrap.length; i++ ){
//     console.log( $slideWrap[i]);
// }


var slide = {
    init: function(){
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();

    },
    slide1Fn:function(){
        //DOM 
        //1. 요소선택 쿼리 셀렉터 querySelector
        //document.querySelector('#아이디');
        //document.querySelector('.아이디');
        //document.querySelector('태그');

        //2 아이디 #section1 요소 선택 방법
        var $section1 = document.getElementById('section1');
            console.log($section1);
            // $section1.onclick = function(){
                // alert('$section1 클릭 선택');
            // }
            //3 클래스 .slide-wrap 요소 선택 방법 
            // var $slideWrap = document.getElementsByClassName('slide-wrap');
            // console.log($slideWrap);
            // console.log($slideWrap[0]);
            
            // $slideWrap[0].onclick = function(){
            //     alert('#slideWrap[0]')

            // }
            // $slideWrap[1].onclick = function(){
            //     alert('#slideWrap[1]')

            // }
            // $slideWrap[2].onclick = function(){
            //     alert('#slideWrap[2]')

            // }
            // $slideWrap[3].onclick = function(){
            //     alert('#slideWrap[3]')

            // }

            //4 태그 div 요소 선택 방법
            // var $div = document.getElementsByTagName('div');
            // console.log($div);
            
            // console.log($div[10]);
            // console.log($div[1]);




        var cnt = 0;
       
        
        function nextSlide() {
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slideWrap[0].style = 'left:' + (-1200*cnt) + 'px'; 
            
        }
        
        function prevSlide() {
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slideWrap[0].style = 'left:' + (-1200*cnt) + 'px';}


            //버튼 등록 onclick event 등록 
            /*
            $nextBtn[0].onclick = function(event){
                event.preventDefault();
                nextSlide();

            }
            $prevBtn[0].onclick = function(event){
                event.preventDefault();
                prevSlide();

            }
            */

            //버튼 등록 방법 : 버튼 추가(등록)(add) 이벤트(Event) 리스너(Listener)
            // $nextBtn[0].addvenetLister('click,nextSli, fa==)
           
            $nextBtn[0].addEventListener('click',function(){
                nextSlide();
            }, false);

            $prevBtn[0].addEventListener('click',function(){
                prevSlide();

            }, false);





            //버튼 전파 차단 

    },

    slide2Fn:function(){
        var cnt = 0;
       
        
        function nextSlide(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slideWrap[1].style = 'left:' + (-400*cnt) + 'px'; 
        

        }

        function prevSlide() {
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slideWrap[1].style = 'left:' + (-400*cnt) + 'px'; 
        }

        // 버튼 등록 
        // $nextBtn[1].onclick = function(event){
        //     event.preventDefault();
        //     nextSlide();

        // }
        // $prevBtn[1].onclick = function(event){
        //     event.preventDefault();
        //     prevSlide();
        // }

            //버튼 추가(add) 이벤트 리스너 등록
            // $nextBtn[1].addEventlistener('click', nextSlide(), false );
            // $prevBtn[1].addEventlistener('click', prevSlide(), false );

            // $nextBtn[1].addEventListener('click', function(e){
            //     e.preventDefault();
            //     nextSlide();
            // },false;

            
            // $prevBtn[1].addEventListener('click', function(e){
            //     e.preventDefault();
            //     prevSlide();
            // },false;

            $nextBtn[1].onclick = function(event){
                event.preventDefault();
                nextSlide();
            }
            
            $prevBtn[1].onclick = function(event){
                event.preventDefault();
                prevSlide();
            }

        


        

    },
    slide3Fn:function(){
        var cnt = 0 ;
        
        function nextSlide(){
            cnt++;
            cnt > 2 ? cnt=0 : cnt;
            $slideWrap[2].style = 'top:' + (-200*cnt) + 'px';
        }

        function prevSlide() {
            cnt--;
            cnt < 0 ? cnt=2 : cnt;
            $slideWrap[2].style = 'top:' + (-200*cnt) + 'px';
        }

        //버튼 등록

        $nextBtn[2].onclick = function(){
            nextSlide();
        }

               
        $prevBtn[2].onclick = function(){
            prevSlide();
        }
       

    },
    slide4Fn:function(){
        var cnt = 0;
        
        function nextSlide(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slideWrap[3].style = 'left:' + (-400*cnt) + 'px'; 
        
        }

        function prevSlide() {
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slideWrap[3].style = 'left:' + (-400*cnt) + 'px'; 
         }

       //버튼 등록
       $nextBtn[3].onmouseover = function(event) {
           event.preventDefault();
            nextSlide();
       },false;
       $prevBtn[3].onmouseover = function(event) {
           event.preventDefault();
          prevSlide();
       },false;


    }




};
slide.init();