/********************* 글로벌 설정 *********************/
$('.modal-wrapper').hide()
/********************* 사용자 함수 **********************/
/********************* 이벤트 등록 **********************/
$('.bt-win').on('click', onWinClick);
$('.bt-link').on('click', onLinkClick)
$('.bt-popup').on('click', onPopupClick)
$('.bt-modal').on('click', onModalClick)
$('.modal-wrapper').on('click', onModalWrapperClick)
$('.modal-wrapper .modal-wrap').on('click', onModalWrapClick)
$('.modal-wrapper .bt-close, .modal-wrapper .bt-close2').on('click', onModalCloseClick)

/********************* 이벤트 콜백 **********************/
function onWinClick(){
    window.open('../html/07.window-popup.html')
}
function onLinkClick() {
	location.href = '../html/07.window-popup.html'
}
function onPopupClick() {
	let options = 'width=200, height=200, top=300, left=300'
	window.open('../html/07.window-popup.html', 'popup', options)
}

function onModalClick() {
	$('.modal-wrapper').show()
}

function onModalWrapperClick() {
	$(this).hide()
}

function onModalWrapClick(e) {
	e.stopPropagation()
}

function onModalCloseClick() {
	$('.modal-wrapper').hide()
}
