
/*************** 글로벌 설정 *****************/
var idx = 0		// 현재 맨 위에 나타나는 .slide의 index
var zIdx = 1	// 맨 위에 나타날 .slide의 z-index
var len = $('.slide-wrap .slide').length
var lastIdx = len - 1;
var interval;
var intervalGap = 3000;

init()


/*************** 사용자 함수 *****************/
function init(){
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++);
	for(var i = 0; i<len; i++){
		$('<i class="pager fa fa-circle"></i>').appendTo('.pager-wrapper').on('click', onPagerClick);
	}
	interval = setInterval(onNextClick, intervalGap);
	$('.pager-wrapper .pager').eq(idx).addClass('active');
}
function animation(){
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++).stop().fadeOut(0).fadeIn(500)
    $('.pager-wrapper .pager').removeClass('active');
    $('.pager-wrapper .pager').eq(idx).addClass('active');
}

/*************** 이벤트 등록 *****************/
$('.slide-stage .bt-prev').on('click', onPrevClick)
$('.slide-stage .bt-next').on('click', onNextClick)
$('.slide-stage').on('mouseover', onOver);
$('.slide-stage').on('mouseleave', onLeave);

/*************** 이벤트 콜백 *****************/
function onPagerClick(){

 idx = $(this).index();
 animation();
 console.log(idx);
}

function onPrevClick() {
	idx = (idx === 0) ? lastIdx : idx - 1
	animation();
}

function onNextClick() {
	idx = (idx === lastIdx) ? 0 : idx + 1
	animation: animation();
}
function onOver(){
	clearInterval(interval);
}
function onLeave(){
	interval = setInterval(onNextClick, intervalGap);
}