var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var getNumbers = function() {
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));

  var operation = prompt("Would you like to add, subtract, multiply or divide, or q to quit?");

  if(operation === "add") {
    alert(add(number1, number2));
    getNumbers();
  }
  else if(operation === "subtract") {
    alert(subtract(number1, number2));
    getNumbers();
  }
  else if(operation === "multiply") {
    alert(multiply(number1, number2));
    getNumbers();
  }
  else if(operation === "divide") {
    alert(divide(number1, number2));
    getNumbers();
  }
  else if(operation === "q") {
    return 0;
  }
  else {
    alert("Invalid input. Try again!");
    getNumbers();
  }
};

getNumbers();
