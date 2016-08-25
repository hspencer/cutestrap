// js layer para prototipos WOM
// version nunjucks!
// dependencias: muchas, checar gulpfile
// 

$(document).ready(function(){

        
	// super-mega-simple client-side form validator and form next step enabler
	function validateForm() {
		var $fields = $(".form-control:visible");
		var $thisStep = $('.formPaso-stepper:visible');
		var $nextStep = $thisStep.attr('data-nextStep');
		var $emptyFields = $fields.filter(function() {
	    	return $.trim(this.value) === "";
	    });
    	function continueForm() {
	    	// apaga stepper
	    	$('#stepper_portabilidad li').removeClass('active');
	    	// prende stepper correcto
	    	$('#stepper_portabilidad li.stepperLED-' + $nextStep).addClass('active');
	    	// deshabilita este boton
	    	$($thisStep).find('.nextStep').addClass('disabled');
	    	// oculta este paso
	    	$($thisStep).slideUp('1200');
	    	// muestra el paso siguiente
	    	$('#portateForm-' + $nextStep).slideDown('1200');
	    	// habilita el boton a paso siguiente
	    	$('#portateForm-' + $nextStep).find('.nextStep').removeClass('disabled');
	    	// anima el DOM hasta el stepper
	    	$('html, body').animate({scrollTop: $("#stepper_portabilidad").offset().top - 30}, 500);
		    // cancela form button
	    	return false;
	    }
		if (!$emptyFields.length) {
			// if form is ok...
			$('#camposvacios').slideUp();
			continueForm();
		} else {
		    console.log($emptyFields);
		    $emptyFields.parents('.form-group').addClass('invalidInput').removeClass('input-effect');
		    $('#camposvacios').slideToggle();
		    $('html, body').animate({scrollTop: $("#camposvacios").offset().top}, 200);
		}
	}

	// run form validator on click
	$("#portateForm .nextStep").on('click', function () {
	  console.log('valida!');
	  validateForm();
	  return false;
	});

	// minilabels toggle on input focus
	$(".form-group input").focus(function () {
		$(this).siblings('.miniLabel').addClass('visible');
		$(this).parents('.form-group').addClass('active');
		$(this).removeAttr('placeholder');
	});
	$(".form-group input").blur(function () {
		$(this).parents('.form-group').toggleClass('active');
	});

	// boton de ver portabilidad tiene clase on form click
	$('.modulo-morado-alt input').focus(function() {
		$('.btn.btn-disabled').removeClass('btn-disabled').addClass('btn-success');
	});

	// progressbars animadas (primero a 100, luego a aria-value)
	// DEPENDSON inview.js - migrar a wow quiza?
	$('.consumoBars').one('inview', function(event, isInView) {
	   	$(this).find('.progress.progress-animated').each(function() {
		  bar = $(this).children('.progress-bar');
		  value = bar.attr('aria-valuenow');
		  // hay que ponerle 5 pixeles mas porque el skew hace que se vea más cortito
		  valueOffset = '5';
		  valueWidth = (+value) + (+valueOffset);
		  bar.animate({width: "100%"}, 750).delay('200').animate({width: valueWidth + "%"}, 1600);
		});
	});

	// interacciones para el wizard de planes
		// goto Next Step
		function wizardGo () {
			$currentStep = $('#wizardPlanes .wizardPlanes-pasos:visible');
			nextStep = $currentStep.attr('data-nextStep');
			$('#wizardPlanes-' + nextStep).slideDown();
			// anima el DOM hasta el paso que viene
	    	$('html, body').animate({scrollTop: $('#wizardPlanes-' + nextStep).offset().top}, 500);
		}
		// evt handler
		$('#wizardPlanes a:not(.finWizard)').click(function() {
			wizardGo();
		});

		// animando graph bars en wizard-appendix modules
		// DEPENDSON inview.js - migrar a wow quiza?
			$('.wizardPlanes-pasos .wizard-appendix .gigas-bar').one('inview', function(event, isInView) {
				$(this).addClass('visible');
			});

	// cerrar nav si clicas afuera [desactivado – choca con el resto del js porque los selectores son super genericos]
	// $('body > *').not('nav').click(function() {
	// 	if(!$('button.navbar-toggle').hasClass('collapsed')) {
	// 		$('.navbar-toggle:visible').click();
	// 	}
	// });
	  
});