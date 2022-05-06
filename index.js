window.setTimeout(function(){
  $("#mov02").removeClass("hidden");
  $("#mov01").addClass("hidden");
}, 4000);
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(window).scroll(function(){
  var top = $("#kigyou").offset().top; // ターゲットの位置取得
  var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
  var position_bottom = top + $("#kigyou").height();  // ターゲットが下からスクロールしたときに見える位置
  if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $("#kigyou").addClass("active");
  }else{
  }
})
$(window).scroll(function(){
  var top = $("#zigyou").offset().top; // ターゲットの位置取得
  var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
  var position_bottom = top + $("#zigyou").height();  // ターゲットが下からスクロールしたときに見える位置
  if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $("#zigyou").addClass("active");
  }else{
  }
})
$(window).scroll(function(){
  var top = $("#service01").offset().top; // ターゲットの位置取得
  var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
  var position_bottom = top + $("#service01").height();  // ターゲットが下からスクロールしたときに見える位置
  if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $("#service01").addClass("active");
  }else{
  }
})
$(window).scroll(function(){
  var top = $("#service02").offset().top; // ターゲットの位置取得
  var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
  var position_bottom = top + $("#service02").height();  // ターゲットが下からスクロールしたときに見える位置
  if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $("#service02").addClass("active");
  }else{
  }
})
$(window).scroll(function(){
  var top = $("#service03").offset().top; // ターゲットの位置取得
  var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
  var position_bottom = top + $("#service03").height();  // ターゲットが下からスクロールしたときに見える位置
  if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $("#service03").addClass("active");
  }else{
  }
})

var windowHeight = document.documentElement.clientHeight;

$(window).scroll(function () {
  if($(window).scrollTop() > windowHeight) {
    $('#nav').addClass('color_change');
  } else {
    $('#nav').removeClass('color_change');
  }
});
$(window).scroll(function () {
  if($(window).scrollTop() > windowHeight/2) {
    $('#header_fixed_text').addClass('color_change');
  } else {
    $('#header_fixed_text').removeClass('color_change');
  }
});