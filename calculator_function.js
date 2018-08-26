let numbers = document.querySelectorAll('.number');
let ops = document.querySelectorAll('.operator');
let equal = document.querySelector('.total');
let del = document.querySelector('.delete');
let screen = document.querySelector('#display')


let inputVal = '';
let outputVal;
let operand;
let operation;

// click events
numbers.forEach(number =>number.addEventListener('click', typeIn));
ops.forEach(operation => operation.addEventListener('click', selectOperation));
equal.addEventListener('click', operate);
del.addEventListener('click', delLast);

function reset(){
	inputVal = '';
	operand = null;
	operation = null;

	display();
}

//get values from arrays or values from buttons
function typeIn(e){
	let value = this.getAttribute('data-value');

	if(value == '.' && inputVal.includes('.')) {
		return false; 
	}
	if(inputVal[0] === '0' && inputVal[1] !== '.' && value !== '.')
		{
			inputVal = ''; 
		}

	inputVal = inputVal.concat(value);

	display();
	console.log(value);
};

// it selects the operations to be performed
function selectOperation(){
	if(inputVal){
		operation = this.getAttribute('data-value');

		operand = inputVal;
		inputVal = '';
		display();
	}
}

// functions to be used in the switch function
function add(a, b){
	return a + b;
}
function subtract(a, b){
	return a - b;
}
function multiply(a, b){
	return a * b;
}
function divide(a, b){
	if(a == 0 || b == 0){
		return 'Come on!! really?'
	} 
	return a / b;
}
// function to switch between operations when the button is clicked

function operate(){
	if(!operation || !operand || !inputVal){
		return;
		}
	let result = '';
	
	switch(operation) {
		case '+':
		result = add(parseFloat(operand), parseFloat(inputVal));
		break;
		case '-':
		  result = subtract(parseFloat(operand), parseFloat(inputVal));
		  break;
		  case '×':
		  result = multiply(parseFloat(operand), parseFloat(inputVal));
		  break;
		  case '÷':
		  result = divide(parseFloat(operand), parseFloat(inputVal));
		  break;

	}	
	reset();
	inputVal = result; 
	display();

}
function delLast(){
	inputVal = inputVal.slice(0, inputVal.length -1);
	display();
	console.log('the shameless kiss of vanity');
}

function display(){
	let output = '';
	if (operand) {output = output.concat(operand); }
	if (operation) {output = output.concat(operation);}
	output = output.concat(inputVal);

	screen.innerText = output;
}




