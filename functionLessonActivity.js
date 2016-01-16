var woodchuck = "The cat is grumpy";

function logging (string) {
	console.log(string);
}

function addReturn (string) {
	console.log(string);
	return "This shit is bananas";
}

function showReturnPower (string) {
	return "Staaahp"; 
	console.log("whatever");
}

logging(woodchuck);
addReturn(woodchuck);
showReturnPower(woodchuck);