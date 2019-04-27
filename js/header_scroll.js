$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("scroll");
        $('ul.submenu').addClass('submenu__scroll');
    }  else{
        $('header').removeClass("scroll");
        $('ul.submenu').removeClass('submenu__scroll');
    }
});