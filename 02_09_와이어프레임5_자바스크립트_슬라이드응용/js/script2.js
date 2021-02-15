//script2.js

// 함수 생성
// 1.다음 - nextSlide
// 2.이전 - prevSlide


//연결 테스트 성공 

// setInterval(nextSlide, 3000); //3초 후에 한번씩 자동으로 다음 슬라이드 호출
// setTimeout(nextSlideFn, 5000); //  5초 후에 실행하고 끝(타임아웃)


//객체(Object) 기반 
// var obj = new Object(); //객체 생성자(new) 방식
// var obj = {}; //객체 리터럴 방식 - 권장 방식

// 객체 안에 속성(Property)과 속성값은 : 콜론을 사용하여 구분한다.)
// 객체 안에 속성(Property)은 속성값 콤마를 사용하여 구분한다.마지막에는 안쓰기.)
// 속성 값이 문자 또는 문자열을 반드시 인용부용사용하여 감싸준다.'' "" ``
var obj = { //객체 이름
    irum:'김유신', //irum 속성(property) : '김유신' 속성 값(value)
    age:45,
    mill:true,
    result:function(){
            //this 객체이름 obj 객체
            //매서드 안에서는 객체 속성값 뒤에 = 을 사용한다.
            var cnt = 0;
                cnt = 100;
            
            console.log( this.irum, this.age = 30, this.mill );
            console.log('result 메서드 cnt 값 : ', cnt);


    },  
    //this 객체 이름 
    // 메서드 안에서는 객체 속성값 뒤에 = 을 사용한다. 
    //Method(매서드) 또는 리터럴 함수 또는 익명 함수(이름이 없는 함수)
    // 프로퍼티에 function(){} 이 존재하면 메서드가 된다.   

    answer:function(){
        var cnt=0;
            cnt = 50;
            console.log('result 메서드 cnt 값 : ', cnt);
    },

    init:function(){
        this.result();
        this.answer();
    }

};
    obj.init(); //result 메서드 호출 실행 
    
    

//객체 호출 실행
// console.log( obj); //객체
// console.log( obj.irum); //객체.프로퍼티 - 객체.이름 문자열
// console.log( obj.age ); //객체.나이 정수
// console.log( obj.mill); //객체.군복무 참/거짓


// 성적처리 객체 
var sungjuk = {
    init:function(){
        this.tot();
        this.avg();

    },
    irum:'강감찬',
    kor:95,
    eng:90,
    mat:94,
    tot:function(){
        console.log('이름 : ' + this.irum );
        console.log('총점 : ' + (this.kor+this.eng+this.mat) );  //문자열 연결 연산자 뒤에는 괄호를 안해주면 숫자를 문자로 인식함 
    },
    avg:function(){
        console.log('평균 :' + (this.kor+this.eng+this.mat)/3 );

    }
    
}

sungjuk.init(); //객체.init(); 을 불러오면 전체 실행 

var sungjuk2 = {
    init:function(){
        this.tot();
        this.avg();

    },
    irum:'최은정',
    kor:100,
    eng:100,
    mat:90,
    tot:function(){
        console.log('이름 : ' + this.irum);
        console.log('국어점수 : ' + this.kor );
        console.log('영어점수 : ' + this.eng);
        console.log('수학점수 : ' + this.mat);
        console.log('총점 : ' + (this.kor+this.eng+this.mat) );
    },
    avg:function(){
        console.log('평균 : ' + (this.kor+this.mat+this.eng)/3 );
    }

}
sungjuk2.init();



//////////////////////////////////////////////////////////////////////////
////////////////////섹션1 main 슬라이드////////////////////////////


var cnt = 0;

// 증감 변수 등록 & 테스트 성공

var $slideWrap = document.querySelector('#section1 .slide-wrap');
// var $page = document.querySelector('.page');

// 이동할 슬라이드 박스 변수 등록

console.log($slideWrap);

//이름 있는 함수(선언적 함수 )
function nextSlide() {
    cnt++;
    cnt > 3 ? cnt=3 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px'; 
    // $page.innerHTML = cnt+1 + '/4';
    // alert('hola' + cnt );
}

function prevSlide() {
    cnt--;
    cnt < 0 ? cnt=0 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    // $page.innerHTML = cnt+1 + '/4';
 
    // alert('hello' + cnt);
}


///////////////////////////////////////////////////////////////////////////
////////////////////섹션2 left 슬라이드////////////////////////////

var cnt2 = 0;
var $slideWrap2 = document.querySelector('#section2 .left-box .slide-wrap');
// var $slideWrap3 = document.querySelector('#section2 .center-box.slide-wrap');
// var $slideWrap4 = document.querySelector('#section2 .right-box.slide-wrap');

function nextSlide2(){
    cnt2++;
    cnt2 > 3 ? cnt2=0 : cnt2;
    $slideWrap2.style = 'left:' + (-400*cnt2) + 'px'; 
   

}

function prevSlide2() {
    cnt2--;
    cnt2 < 0 ? cnt2=3 : cnt2;
    $slideWrap2.style = 'left:' + (-400*cnt2) + 'px'; 
    
}

///////////////////////////////////////////////////////////////////////////
////////////////////섹션2 center 슬라이드////////////////////////////

var cnt3 = 0 ;
var $slideWrap3 = document.querySelector('#section2 .center-box .slide-wrap');

function nextSlide3(){
    cnt3++;
    cnt3 > 2 ? cnt3=0 : cnt3;
    $slideWrap3.style = 'top:' + (-200*cnt3) + 'px';
}

function prevSlide3() {
    cnt3--;
    cnt3 < 0 ? cnt3=2 : cnt3;
    $slideWrap3.style = 'top:' + (-200*cnt3) + 'px';
}

///////////////////////////////////////////////////////////////////////////
////////////////////섹션2 right 슬라이드////////////////////////////

var cnt4 = 0;
var $slideWrap4 = document.querySelector('#section2 .right-box .slide-wrap');
// var $slideWrap3 = document.querySelector('#section2 .center-box.slide-wrap');
// var $slideWrap4 = document.querySelector('#section2 .right-box.slide-wrap');

function nextSlide4(){
    cnt4++;
    cnt4 > 3 ? cnt4=0 : cnt4;
    $slideWrap4.style = 'left:' + (-400*cnt4) + 'px'; 
   

}

function prevSlide4() {
    cnt4--;
    cnt4 < 0 ? cnt4=3 : cnt4;
    $slideWrap4.style = 'left:' + (-400*cnt4) + 'px'; 
    
}