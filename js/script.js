var sliderOptions, $slider, $contactBtn, $nameInput, $emailInput, $telNumberInput, $companyInput;

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

	// Inicializa el slider
	sliderOptions = {
		controls: false,
		auto: true,
		autoControls: false,
		stopAutoOnClick: true,
		pager: false,
		minSlides: 4
	};

	$slider = $('.slider').bxSlider(sliderOptions);
	

	$('#sliderArrowLeft').click(function(){
		$slider.goToPrevSlide();
	});

	$('#sliderArrowRight').click(function(){
		$slider.goToNextSlide();
	});

	$nameInput = $('#nameInput');
	$emailInput = $('#emailInput');
	$telNumberInput = $('#telNumberInput');
	$companyInput = $('#companyInput');

	$contactBtn = $('#contactBtn');
	$contactBtn.click(function(e){
		e.preventDefault();
		validInputs();
	});
});

function validInputs(){
	var errors = false;

	$nameInput.parent().removeClass('error');
	$emailInput.parent().removeClass('error');
	$telNumberInput.parent().removeClass('error');
	$companyInput.parent().removeClass('error');

	if($nameInput.val() == ""){
		$nameInput.parent().addClass('error');
		errors = true;
	}

	if($emailInput.val() == ""){
		$emailInput.parent().addClass('error');
		errors = true;
	}

	if($telNumberInput.val() == "" || isNaN($telNumberInput.val())){
		$telNumberInput.parent().addClass('error');
		errors = true;
	}

	if($companyInput.val() == ""){
		$companyInput.parent().addClass('error');
		errors = true;
	}

	if(errors == false){
		$('#contact').hide();
		$('#contactThankYou').show();
	}
}