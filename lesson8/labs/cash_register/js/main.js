var totalamount = 0

document.getElementById("entry").onsubmit = formIsSubmitted;

function formIsSubmitted(e) {
	e.preventDefault();

var userInput = parseFloat(document.getElementById("newEntry").value);

if (isNan(userInput)) {
	document.getElementById("newEntry").innerHTML = "Please Enter A Number";
}	else {
	var newAmount = parseFloat(userInput);
	totalamount = totalamount + newAmount;
	totalamount = twoDecimalPlace(totalamount);
	document.getElementById('total').innerHTML = addDollarSign(totalamount);
	document.getElementById("newEntry").value = "";
}

function addDollarSign(num) {
	return "$" + num;
}

function twoDecimalPlace(num) {
	return num.toFixed(2);
}
