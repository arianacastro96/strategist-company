$(document).ready(function(){
	$('.icon-nav-btn, .icon-nav-btn-close').click(function() {
		$('#mainNav').fadeToggle();
	})

	$(window).scroll(function(event) {
		if( $(this).scrollTop() >= 100 && !$('body').hasClass('scrolled') )
		{
			$('body').addClass('scrolled');
		}
		else if( $(this).scrollTop() < 100 && $('body').hasClass('scrolled') )
		{
			$('body').removeClass('scrolled');
		}
	});
});