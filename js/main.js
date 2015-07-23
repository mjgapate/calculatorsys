

var current = 0;
var memory = 0;
var sample = 0;

var stateTextBox = document.getElementById("display"); 

/*function displayValue (source) {

	console.log(source.value);
	display.value = source.value;


}*/
function nineValue() {
	var nine = document.getElementById('nine').value;
	stateTextBox.value = nine;
	console.log(stateTextBox.value);
	return stateTextBox.value;
	displayValue();
}

function eightValue() {
	var eight = document.getElementById('eight').value;
	stateTextBox.value = eight;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function sevenValue() {
	var seven = document.getElementById('seven').value;
	stateTextBox.value = seven;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function sixValue() {
	var six = document.getElementById('six').value;
	stateTextBox.value = six;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function fiveValue() {
	var five = document.getElementById('five').value;
	stateTextBox.value = five;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function fourValue() {
	var four = document.getElementById('four').value;
	stateTextBox.value = four;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function threeValue() {
	var three = document.getElementById('three').value;
	stateTextBox.value = three;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function twoValue() {
	var two = document.getElementById('two').value;
	stateTextBox.value = two;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function oneValue() {
	var one = document.getElementById('one').value;
	stateTextBox.value = one;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function zeroValue() {
	var zero = document.getElementById('zero').value;
	stateTextBox.value = zero;
	console.log(stateTextBox.value);
	return stateTextBox;
}


function clearText(){
	if(stateTextBox.value > 1){
		document.getElementById("display").value = 0;
		outPut.innerHTML = 0;
	}

	return stateTextBox;
	console.log(stateTextBox.value);
}


function displayValue(){
	
	console.log("VALUE:" + stateTextBox.value);

}