$(function() {
    $('.hamburgeroff').click(function() {
        setTimeout(function(){
            $('.globalMenuSp').removeClass('active');
            $('.hamburger').removeClass('active');
          }, 700);
    });
});
