

var current = 0;
var past = 0;



function nineValue() {
	var nine = document.getElementById('nine').value;
	console.log(nine);
	return nine;
}

function eightValue() {
	var eight = document.getElementById('eight').value;
	console.log(eight);
	return eight;
}

function sevenValue() {
	var seven = document.getElementById('seven').value;
	console.log(seven);
	return seven;
}

function sixValue() {
	var six = document.getElementById('six').value;
	console.log(six);
}

function fiveValue() {
	var five = document.getElementById('five').value;
	console.log(five);
}

function fourValue() {
	var four = document.getElementById('four').value;
	console.log(four);
}

function threeValue() {
	var three = document.getElementById('three').value;
	console.log(three);
}

function twoValue() {
	var two = document.getElementById('two').value;
	console.log(two);
}

function oneValue() {
	var one = document.getElementById('one').value;
	console.log(one);
}

function zeroValue() {
	var zero = document.getElementById('zero').value;
	console.log(zero);
}



/**/
function clearText() {
	var ce = document.getElementById('clear').value;
	console.log(ce);
}


/*display*/

function displayValue(){
	
}


  












  (function () {
    // Enables stricter rules for JavaScript
    "use strict";

    // Reference two buttons, and a textbox

    var stateTextBox = document.getElementById("display"),
    	nine = document.getElementById("nine"),
        eight = document.getElementById("eight"),
        seven = document.getElementById("seven"),
        six = document.getElementById("six"),
        five = document.getElementById("five"),
        four = document.getElementById("four"),
        three = document.getElementById("three"),
        two = document.getElementById("two"),
        one = document.getElementById("one"),
        zero = document.getElementById("zero");

    // Function that changes the value of our stateTextBox
    function changeState(event) {
        stateTextBox.value = event.target.value;
    }

    // Event handlers for when we click on a button
    nine.addEventListener("click", changeState, false);
    eight.addEventListener("click", changeState, false);
    seven.addEventListener("click", changeState, false);
    six.addEventListener("click", changeState, false);
    five.addEventListener("click", changeState, false);
    four.addEventListener("click", changeState, false);
    three.addEventListener("click", changeState, false);
    two.addEventListener("click", changeState, false);
    one.addEventListener("click", changeState, false);
    zero.addEventListener("click", changeState, false);


}());








function nineValue() {
	var nine = document.getElementById('nine').value;
	stateTextBox.value = nine;
	console.log(stateTextBox.value);
	return stateTextBox;
}

function eightValue() {
	var eight = document.getElementById('eight').value;
	console.log(eight);
	return eight;
}

function sevenValue() {
	var seven = document.getElementById('seven').value;
	console.log(seven);
	return seven;
}

function sixValue() {
	var six = document.getElementById('six').value;
	console.log(six);
}

function fiveValue() {
	var five = document.getElementById('five').value;
	console.log(five);
}

function fourValue() {
	var four = document.getElementById('four').value;
	console.log(four);
}

function threeValue() {
	var three = document.getElementById('three').value;
	console.log(three);
}

function twoValue() {
	var two = document.getElementById('two').value;
	console.log(two);
}

function oneValue() {
	var one = document.getElementById('one').value;
	console.log(one);
}

function zeroValue() {
	var zero = document.getElementById('zero').value;
	console.log(zero);
}







var stateTextBox = document.getElementById("display"),
    nine = document.getElementById("nine"),
    eight = document.getElementById("eight"),
    seven = document.getElementById("seven"),
    six = document.getElementById("six"),
    five = document.getElementById("five"),
    four = document.getElementById("four"),
    three = document.getElementById("three"),
    two = document.getElementById("two"),
    one = document.getElementById("one"),
    zero = document.getElementById("zero");



    function addSameState(event) {
        stateTextBox.value = event.target.value += event.target.value;
        console.log(stateTextBox.value);
    }



    nine.addEventListener("click", addSameState, false);
    eight.addEventListener("click", addSameState, false);
    seven.addEventListener("click", addSameState, false);
    six.addEventListener("click", addSameState, false);
    five.addEventListener("click", addSameState, false);
    four.addEventListener("click", addSameState, false);
    three.addEventListener("click", addSameState, false);
    two.addEventListener("click", addSameState, false);
    one.addEventListener("click", addSameState, false);
    zero.addEventListener("click", addSameState, false);

/**/
function clearText() {
	var ce = document.getElementById('clear').value;
	console.log(ce);
}


/*display*/


function resetform() {
document.getElementById("myform").reset();
}
