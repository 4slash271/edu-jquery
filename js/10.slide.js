/*************** 글로벌 설정 *****************/
var idx = 0, len, lastIdx
init()

/*************** 사용자 함수 *****************/
function init() {
	$('.slide-wrap').append( $('.slide-wrap > .slide').eq(0).clone() )
	len = $('.slide-wrap .slide').length
	lastIdx = len - 1
}

/*************** 이벤트 등록 *****************/
$('.bt-prev').on('click', onPrev)
$('.bt-next').on('click', onNext)

/*************** 이벤트 콜백 *****************/
function onPrev() {
	if(idx === 0) {//이미지 맨 처음일 때
		idx = lastIdx - 1 //마지막 장의 인덱스로
		$('.slide-wrap').css('top', -(lastIdx * 100) + '%')//css에서 위치값(맨 처음이 더 깊숙히 위로 올라가야함)
	}
	else idx--//이미지가 맨 처음이 아니라면 뒷장으로 하나씩
	$('.slide-wrap').stop().animate({'top': -(idx * 100)+'%'}, 500)//인덱스넘기는 만큼 위로 올라가기(이미지)
    console.log(idx);
}

function onNext() {
	if(idx === lastIdx) {//맨 뒷장이라면
		idx = 1//두번째 장으로--->>>이 경우는 html에서 이미지 높이 값을 위해 더미이미지를 부여했기 때문에 0이 아닌 1로... 0과 6은 동일한 이미지다.
		$('.slide-wrap').css('top', 0)
	}
	else idx++
	$('.slide-wrap').stop().animate({'top': -(idx * 100)+'%'}, 500)
    console.log(idx);
}
