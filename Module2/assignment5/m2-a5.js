function printNumbers() {
    let numbers = new Set();

    while (true) {
        const number = parseInt(prompt("Enter a number:"));

        if (isNaN(number)) {
            console.log("Please enter a valid integer.");
            continue;
        }

        if (numbers.has(number)) {
            console.log("The number has already been given. Stopping the program.");
            break;
        } else {
            numbers.add(number);
        }
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    console.log("All given numbers in ascending order:");
    console.log(sortedNumbers);
}

printNumbers();
