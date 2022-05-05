$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
            $('.active_opacity').addClass('active');
            $('.active_black').addClass('active');
            $('#body').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
            $('.active_opacity').removeClass('active');
            $('.active_black').removeClass('active');
            $('#body').removeClass('active');
        } 
      
    });
    $('.hamburgeroff').click(function() {
        $('.hamburger').removeClass('active');
        $('.globalMenuSp').removeClass('active');
        $('.active_opacity').removeClass('active');
        $('.active_black').removeClass('active');
        $('#body').removeClass('active');
    });
});
