function sortNumbers() {
    let numbers = [];

    while (true) {
        let input = parseFloat(prompt("Enter a number (or enter 0 to finish):"));
        if (input === 0) {
            break;
        }
        numbers.push(input);
    }

    numbers.sort((a, b) => b - a);

    console.log("Numbers from largest to smallest:");
    console.log(numbers.join(", "));
}

sortNumbers();
