// js layer para prototipos WOM
// version nunjucks!
// dependencias: muchas, checar gulpfile

$(document).ready(function(){

        
	// super-mega-simple client-side form validator
	function validateForm() {
		var $fields = $(".form-control");
		var $emptyFields = $fields.filter(function() {
	    return $.trim(this.value) === "";});

	    function continueForm() {
	    	alert('GO!');
	    	return false;
	    }
		if (!$emptyFields.length) {
			//if form is ok...
			continueForm();
		} else {
		    console.log($emptyFields);
		    $emptyFields.parents('.form-group').addClass('invalidInput');
		    $('#camposvacios').slideToggle();
		}
	}

	// run form validator on click
	$("#portateForm .nextStep:not(.disabled)").click(function () {
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

	// cerrar nav si clicas afuera
	$('body > *').not('nav').click(function() {
		if(!$('button.navbar-toggle').hasClass('collapsed')) {
			$('.navbar-toggle:visible').click();
		}
	});

	// progressbars animadas (primero a 100, luego a aria-value)
	$('.consumoBars').one('inview', function(event, isInView) {
	   	$(this).find('.progress.progress-animated').each(function() {
		  var bar = $(this).children('.progress-bar');
		  var value = bar.attr('aria-valuenow');
		  bar.animate({width: "100%"}, 500).delay('420').animate({width: value + "%"}, 1600);
		});
	});
	  
});