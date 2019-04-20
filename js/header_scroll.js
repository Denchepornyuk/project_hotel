$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  

        $('header').addClass("scroll");

    }  else{

        $('header').removeClass("scroll");
    }
});