$(document).ready(function() {
    if ($(window).width() < 719) {

        $('.menu__burger').on('click', function(e) {
            if ($('.menu__list').hasClass('menu__list_active')) {
                $('.menu__list').removeClass('menu__list_active');
                $('.menu').stop().fadeOut(500);
                
            } else {
                $('.menu').stop().fadeIn(500);
                $('.menu__list').addClass('menu__list_active');
            }
        })
        
        $('.menu').on('click', function(e) {
            $('.menu__list').removeClass('menu__list_active');
            $('.menu').stop().fadeOut(500);
        })
    } else {
        $(window).on('scroll', function(e) {
            if ($(window).scrollTop() == 0) {
                $('.header__wrapper').removeClass('header__wrapper_scrolltop')
            } else {
                $('.header__wrapper').addClass('header__wrapper_scrolltop')
    
            }
        })
    }
})