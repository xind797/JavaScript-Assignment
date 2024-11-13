const candidateCount = parseInt(prompt("The number of candidates:"));
const candidates = [];
for (let i = 1; i <= candidateCount; i++) {
    const name = prompt(`The name of candidate ${i}:`);
    candidates.push({ name: name, votes: 0 });
}

const voterCount = parseInt(prompt("The number of voters:"));
for (let i = 1; i <= voterCount; i++) {
    const vote = prompt(`Voter ${i}, who do you vote for? (Enter candidate's name or leave empty to skip)`).trim();

    if (vote) {
        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes++;
        } else {
            console.log(`Invalid vote: ${vote} (No candidate with this name)`);
        }
    } else {
        console.log(`Voter ${i} chose not to vote.`);
    }
}

candidates.sort((a,b) => b.votes -a.votes);
console.log(`the winner is ${candidates[0].name} with ${candidates[0].votes} votes`);
console.log("Results:");
candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
});










