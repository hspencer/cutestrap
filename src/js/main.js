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
		    $emptyFields.parents('.form-group').addClass('invalidInput');
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
		$(this).siblings('.miniLabel').fadeIn();
		$(this).removeAttr('placeholder');
	});

	// boton de ver portabilidad tiene clase on form click
	$('.modulo-morado-alt input').focus(function() {
		$('.btn.btn-disabled').removeClass('btn-disabled').addClass('btn-success');
	});

	// progressbars animadas (primero a 100, luego a aria-value)
	$('.consumoBars').one('inview', function(event, isInView) {
	   	$(this).find('.progress.progress-animated').each(function() {
		  var bar = $(this).children('.progress-bar');
		  var value = bar.attr('aria-valuenow');
		  // hay que ponerle 5 pixeles mas porque el skew hace que se vea más cortito
		  var valueOffset = '5';
		  var valueWidth = (+value) + (+valueOffset);
		  bar.animate({width: "100%"}, 750).delay('200').animate({width: valueWidth + "%"}, 1600);
		});
	});

	// cerrar nav si clicas afuera [desactivado – choca con el resto del js porque los selectores son super genericos]
	// $('body > *').not('nav').click(function() {
	// 	if(!$('button.navbar-toggle').hasClass('collapsed')) {
	// 		$('.navbar-toggle:visible').click();
	// 	}
	// });
	  
});