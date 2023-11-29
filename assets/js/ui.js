// 1. 사이드바 버튼 눌렀을 시 이동
// $('.menu-list-grp .menu-list').on('click', function () {
//   var contt = $(this).attr('data-contt');

//   $('.menu-list-grp .menu-list').removeClass('active');
//   $(this).addClass('active');

//   $('.modal-sidebar-contt').removeClass('active');
//   $('#' + contt).addClass('active');

//   $('.modal-wrapper').scrollTop(0);
// })

// 2. 컨텐츠 내부 버튼 눌렀을 때 컨텐츠 내용 변화 (소셜셀링, 멤버십 혜택보기)
$('.inner-menu-grp .inner-menu-btn').on('click', function () {
  var contt = $(this).attr('data-inner-contt');
  var type = $(this).parents('.modal-sidebar-contt').attr('id');

  $(`#${type} .inner-menu-grp .inner-menu-btn`).removeClass('active');
  $(this).addClass('active');

  $(`#${type} .inner-menu-contt`).removeClass('active');
  $('#' + contt).addClass('active');
})

// 3. 다음버튼
function goStep(contt) {
  $('.menu-list-grp .menu-list').removeClass('active');
  $(`[data-contt="${contt}"]`).addClass('active');

  $('.modal-sidebar-contt').removeClass('active');
  $('#' + contt).addClass('active');

  if (contt == 'minihome-contt') {
    $('#video01').get(0).currentTime = 0;
    setTimeout(function () {
      $('#video01').get(0).play();
    }, 500);
  }

  if (contt == 'store-minihome-contt') {
    $('.video03').get(0).currentTime = 0;
    setTimeout(function () {
      $('.video03').get(0).play();
    }, 500);
  }

  if (contt == 'event-contt') {
    $('#video02').get(0).currentTime = 0;
    $('#video02').get(0).play();
  }

  $('.modal-wrapper').scrollTop(0);
}

// 4. 멤버십 혜택보기 버튼
function goBenefitInnerContt(contt) {
  $(`#benefit-contt .inner-menu-grp .inner-menu-btn`).removeClass('active');
  $(`[data-inner-contt="${contt}"]`).addClass('active');

  $(`#benefit-contt .inner-menu-contt`).removeClass('active');
  $('#' + contt).addClass('active');
}

// 5. 공통 모달 컨트롤 함수 (모달열기)
function openModal(id) {
  $('#' + id).addClass('show');
  $('.modal-backdrop').addClass('show');
}

// 6. 공통 모달 컨트롤 함수 (모달닫기)
function closeModal(id) {
  $('#' + id).removeClass('show');
  $('.modal-backdrop').removeClass('show');
}

// 7. 공통 모달 컨트롤 함수 (모든 모달 닫기)
function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}

// 8. 더콕 멤버스 가이드 팝업
function openGuidePopup(id) {
  openModal(id);
  goStep('minihome-contt');
}

function openStoreGuidePopup(id) {
  openModal(id);
  goStep('store-apply-contt');
}