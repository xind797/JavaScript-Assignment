let sides = parseInt(prompt("How many sides your dice have"))

if (isNaN(sides) || sides < 2) {
    alert("Please enter a valid number greater than 1 for the dice sides.");
    } else {
        function rollDice(sides) {


        const rolls=[];
        let roll = 0;

        while (roll !== sides) {
            roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
        }
        const rollList = document.getElementById("rolls");
        rollList.innerHTML = '';
        rolls.forEach((result) => {
            const listItem = document.createElement("li");
            listItem.textContent = result;
            rollList.appendChild(listItem);
        })
        }
        rollDice(sides);
}


