/******************************* 글로벌 설정 ********************************/
let idx = 0;
/******************************* 사용자 함수 *******************************/
/******************************* 이벤트 등록 ******************************/
$('.bt-prev').on('click', onPrev);
$('.bt-next').on('click', onNext);
/******************************* 이벤트 콜백 *****************************/
function onPrev(){
    if( idx === 0){
        idx = 4
        $('.slide-wrap').css('right', '400%',500)
    }
    
    else{
        idx--
        $('.slide-wrap').css('right', (idx*100)+'%',500)
    }
    console.log(idx);
}
function onNext(){
    if( idx === 4){
        idx = 0
        $('.slide-wrap').css('left',0)
    }
    else{
        idx++
        $('.slide-wrap').css('left', (idx*-100)+'%',500)
    }
    console.log(idx);
}