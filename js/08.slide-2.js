
/*************** 글로벌 설정 *****************/
var idx = 0		// 현재 맨 위에 나타나는 .slide의 index
var zIdx = 1	// 맨 위에 나타날 .slide의 z-index
var lastIdx = $('.slide-wrap .slide').length - 1
var interval 
var intervalGap = 2000;
$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)


/*************** 사용자 함수 *****************/
function init(){
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++);
	interval = setInterval(onNextClick, intervalGap);
}

/*************** 이벤트 등록 *****************/
$('.slide-stage .bt-prev').on('click', onPrevClick)
$('.slide-stage .bt-next').on('click', onNextClick)
$('.slide-stage').on('mouseover', onOver);
$('.slide-stage').on('mouseleave', onLeave);

/*************** 이벤트 콜백 *****************/
function onPrevClick() {
	idx = (idx === 0) ? lastIdx : idx - 1
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)
	.stop().fadeOut(0).fadeIn(500)
}

function onNextClick() {
	idx = (idx === lastIdx) ? 0 : idx + 1
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)
	.stop().fadeOut(0).fadeIn(500)
}
function onOver(){
	clearInterval(interval);
}
function onLeave(){
	interval = setInterval(onNextClick, intervalGap);
}