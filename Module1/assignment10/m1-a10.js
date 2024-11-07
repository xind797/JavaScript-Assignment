let number = parseInt(prompt("How many dice do you have?"));
let interestSum = parseInt(prompt("Which sum of eye numbers are you interested in?"));

function Probability(number, interestSum) {
    let count = 0;
    let matchCount = 0;

    for (let i = 0; i < 10000; i++) {
        let sum = 0;
        for (let j = 0; j < number; j++) {
            sum += Math.floor(Math.random() * 6 + 1);
        }
        count += 1;
        if (sum === interestSum) {
            matchCount += 1;
        }
    }

    let probability = parseFloat(((matchCount / count) * 100).toFixed(2));
    document.write("Probability to get sum " + interestSum + " with " + number + " dice is " + probability + "%");
}

Probability(number, interestSum);
