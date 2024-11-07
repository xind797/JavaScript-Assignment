let number = parseInt(prompt("Enter a number"));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

if (isPrime(number)) {
    document.write(number + " is a prime number.");
} else {
    document.write(number + " is not a prime number.");
}


