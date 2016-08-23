
$(document).ready(function(){
        
	// super-mega-simple client-side form validator
	function validateForm() {
		var $fields = $(".form-control");
		var $emptyFields = $fields.filter(function() {
	    return $.trim(this.value) === "";
	});
		if (!$emptyFields.length) {
		    alert('Formulario completado con éxito! :)');
		} else {
		    console.log($emptyFields);
		    $emptyFields.parents('.form-group').addClass('invalidInput');
		    $('#camposvacios').slideToggle();
		}
	}
	// run validator on click
	$("#nextStep").click(function () {
	  validateForm();
	  return false;
	});

	// minilabels toggle on input focus
	console.log('minilabels OK');
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

});