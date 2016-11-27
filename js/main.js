function askQuestions() {


	var firstName = prompt ('What is yout first name?');
	var lastName = prompt ('What is yout last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log( 'User is an adult');
	} else {
		console.log( 'User is a child');
	}

	if (firstName == "General" && lastName == "Assembly") {
		console.log( 'Hello!');
	}

	else if (firstName == "General" && lastName !== "Assembly") {
		console.log( 'Hello ' + firstName);
	}

	 else {
		console.log( 'Good bye!');
	}

	var faveColour = prompt ('What is your favourite colour?');

	faveColour = faveColour.toLowerCase().trim(); 

	if (faveColour == 'red' || 
		faveColour == 'blue' || 
		faveColour == 'white') {

		$('h1').css('color', faveColour) 
}
		

}



// When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3').on('click', function() {

		// Toggle the next element
		$(this).next().slideToggle(800);
	
	})


});
