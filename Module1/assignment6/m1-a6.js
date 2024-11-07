let question = "Should I calculate the square root?";
let userConfirmation = confirm(question);

if (userConfirmation) {
    let number = parseFloat(prompt("Enter a number"));

    function squareRoot(number){
        if (number >= 0){
            let result = Math.sqrt(number)
            document.write("The square root of the " + number + " is " + result)
        }else if (number < 0){
            document.write("The square root of a negative number is not defined")
        }
    }

    squareRoot(number);

}else{
    document.write("The square root is not calculated")
}

