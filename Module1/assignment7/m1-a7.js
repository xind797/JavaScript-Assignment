let times = parseInt(prompt("How many times you want to roll the dice?"))

function sum(times) {
    let result = 0;
    for (let i = 0; i < times; i++) {
        let number = Math.floor(Math.random() * 6+1);
        result += number;
    }
     document.write("the sum of the results of the dice rolls is " + result)
}

sum(times);