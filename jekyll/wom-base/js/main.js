// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Closes the Responsive Menu on Click outside Menu
$('body > *').not('nav').click(function() {
    if(!$('button.navbar-toggle').hasClass('collapsed')) {
        $('.navbar-toggle:visible').click();
    }
});
// Open overlay
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
 });

$(document).ready(function(){
        
	// super-mega-simple client-side form validator
	function validateForm() {
		var $fields = $(".form-control");
		var $emptyFields = $fields.filter(function() {
	    return $.trim(this.value) === "";
	});
		if (!$emptyFields.length) {
		    window.location.href='paso2.html'
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

});