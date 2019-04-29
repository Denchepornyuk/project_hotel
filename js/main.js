//add style to header when the user scrolls site
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
		$('header').addClass("scroll");
		$('ul.submenu').addClass('submenu__scroll');
	}else{
		$('header').removeClass("scroll");
		$('ul.submenu').removeClass('submenu__scroll');
	}
});

//smooth transition of links in menu
jQuery(function($){
	$(".js-links").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
});

//automatic flipping of pictures
setInterval(function(){
	let inputs = $('.hero').find('input');
	let next = inputs.filter(":checked").next('input');
	if (next.length){ 
		next.prop('checked', true);
	}
	else 
		inputs.first().prop('checked', true);
}, 4000);

//modal window add comment
jQuery(function($){
	$('.js-people__add').on('click', function(){
		$('.add-person').css('display', 'block');
	});

	$('.add-person__block > i, .add-person__button').on('click', function(){
		$('.add-person').css('display', 'none');
	});

	$(document).mouseup(function (event){ 
		let div = $(".add-person__block");
		if (!div.is(event.target) && div.has(event.target).length == 0){ 
			$('.add-person').css('display', 'none');
		};
	});
});

