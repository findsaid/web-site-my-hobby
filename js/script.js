$(document).ready(function(){
	// Меню бургер
	$('.menu_burger').click(function(){
        $('.menu_burger, .header_menu').toggleClass('active_menu');
        $('body').toggleClass('lock');
	});
    $('.header_link').click(function(){
        $('.menu_burger, .header_menu').removeClass('active_menu');
    });
    $('.header_link._1').click(function(){
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 1000);
        return false;
    });
    $('.header_link._2').click(function(){
        $('html, body').animate({
            scrollTop: $('#aboutme').offset().top
        }, 1000);
        return false;
    });
    $('.header_link._3').click(function(){
        $('html, body').animate({
            scrollTop: $('#myproject').offset().top
        }, 1000);
        return false;
    });
    $('.header_link._4').click(function(){
        $('html, body').animate({
            scrollTop: $('#blog').offset().top
        }, 1000);
        return false;
    });
    $('.header_link._5').click(function(){
        $('html, body').animate({
            scrollTop: $('#contacts').offset().top
        }, 1000);
        return false;
    });
    // Кнопка скролла
	$('.up_link').removeClass('active');
    $(window).scroll(function(){        
        if($(this).scrollTop()>$('.container').height()){
            $('.up_link').addClass('active_up_link').fadeIn('slow');
            $('.header').addClass('active_header').fadeIn('slow');
            $('.next_box').addClass('inactive_next_box').fadeIn('slow');
        }else{
            $('.up_link').removeClass('active_up_link').fadeIn('slow');
            $('.header').removeClass('active_header').fadeIn('slow');
            $('.next_box').removeClass('inactive_next_box').fadeIn('slow');
        };                
    });
    // Скролл вверх
    $('.up_link').click(function(){
        $('html, body').animate({
            scrollTop: $('.wrapper').offset().top
        }, 1000);
        return false;
    });
    // Переход в следующий раздел
    $('.next_box').click(function(){
        $('html, body').animate({
            scrollTop: $('#aboutme').offset().top
        }, 1000);
        return false;
    });

});