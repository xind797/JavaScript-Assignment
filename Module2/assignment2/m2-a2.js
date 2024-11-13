function Printnames() {

    let numParticipants = parseInt(prompt("Enter the number of participants:"));

    if (numParticipants > 0) {

        let participants = [];
        for (let i = 1; i <= numParticipants; i++) {
            participants.push(prompt(`Enter the name of participant ${i}:`));
        }
        participants.sort();

        let participantsList = document.getElementById("participantsList");
        participantsList.innerHTML = participants.map(name => `<li>${name}</li>`).join("");
    } else {
        alert("Please enter a valid number of participants.");
    }
}


Printnames();