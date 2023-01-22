$(document).ready(function() {

	// focus() event : to make something when it gets focus
	$("#sname, #semail, #scountry").focus(function() {
		$(this).css('background-color', 'red');
	});	

	// it is opposite of focus
	// blur() event : to make something when it gets out of focus
	$("#sname, #semail, #scountry").blur(function() {
		$(this).css('background-color', '');
	});

	// change() event : to mostly use with select value
	$("#sname, #semail, #scountry").change(function() {
		// $(this).css('background-color', 'orange');
		var a = $(this).val();
		$("#test").html(a);
	});

	// select() event : only work with inputs
	// if selected inside value of input it will take effect
	$("#sname, #semail").select(function() {
		$(this).css('background-color', 'yellow');
	});

	// submit() event : only work with forms where submit is inside
	// triggers when submit is clicked
	$("#sform").submit(function() {
		// $(this).css('background-color', 'yellow');
		alert("Test");
	});
});