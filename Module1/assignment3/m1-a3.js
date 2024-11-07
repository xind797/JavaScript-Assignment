let number1 = parseFloat(prompt("Please enter the first number:"));
let number2 = parseFloat(prompt("Please enter the second number:"));
let number3 = parseFloat(prompt("Please enter the third number:"));

function calculateResults(number1, number2, number3) {
    let sum = number1 + number2 + number3;
    let product = number1 * number2 * number3;
    let average = sum / 3;

    document.write("Sum: " + sum + "<br>");
    document.write("Product: " + product + "<br>");
    document.write("Average: " + average + "<br>");
}

calculateResults(number1, number2, number3);

