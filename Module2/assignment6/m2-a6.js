function rollDice() {
    const rolls=[];
    let roll = 0;

    while (roll!==6) {
        roll = Math.floor(Math.random()*6)+1;
        rolls.push(roll);
    }
    const rollList = document.getElementById("rolls");
    rolls.forEach((result) => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        rollList.appendChild(listItem);
    })
}
rollDice();


