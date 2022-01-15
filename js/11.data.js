/******************************* 글로벌 설정 ********************************/
let prds									// 상품리스트(배열)
let $listWrap							// $('.list-wrap')
let $list									// $('.list-wrap > .list')
init()
/******************************* 사용자 함수 *******************************/
function init(){
    prds =[
    {
        id:1,
        src:'../img/p1.jpg',
        title:'상큼한 체리',
        desc:'체리'
    },
    {
        id:2,
        src:'../img/p2.jpg',
        title:'맛있는 빵',
        desc:'빵'
    },
    {
        id:3,
        src:'../img/p3.jpg',
        title:'달콤한 팝시클',
        desc:'팝시클'
    },
    {
        id:4,
        src:'../img/p4.jpg',
        title:'감칠맛나는 연어',
        desc:'연어'
    },
    {
        id:5,
        src:'../img/p5.jpg',
        title:'고소한 샌드위치',
        desc:'샌드위치'
    },
    {
        id:6,
        src:'../img/p6.jpg',
        title:'두툼한 스테이크',
        desc:'스테이크'
    },
    {
        id:7,
        src:'../img/p7.jpg',
        title:'향긋한 와인',
        desc:'와인'
    },
    {
        id:8,
        src:'../img/p8.jpg',
        title:'두툼한 스테이크',
        desc:'스테이크'
    },
]
$listWrap = $('.list-wrap')
}
/******************************* 이벤트 등록 ******************************/
$('.bt-create').click(onCreate);
$('.bt-remove').click(onRemove);
/******************************* 이벤트 콜백 *****************************/
function onCreate(){
    let html =""
    $listWrap.empty();
    for( let i = 0; i < prds.length; i++){
        html += '<li class="list card">'
        console.log(html);
      html += '<img class="card-img-top" src="'+prds[i].src+'" alt="">'
      html += '<div class="card-body">'
      html += '<h4 class="card-little">'+prds[i].title+'</h4>'
      html += '<p class="card-text">'+prds[i].desc+'</p>'
      html += '</div>'
      html += '</li>'
    }
    $listWrap.append(html);    

  
}

function onRemove(){
    $listWrap.empty();

}