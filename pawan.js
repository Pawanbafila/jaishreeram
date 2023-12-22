var userInput = prompt("Enter something:");

var numValue = parseInt(userInput);

if (!isNaN(numValue)) {
  console.log("Input is a number");
} else if (typeof userInput === 'string') {
  console.log("Input is a string");
} else {
  console.log("Input is not a string or number");
}
