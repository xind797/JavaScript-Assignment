function printDogNames() {
    let dogNames = [];
    for (let i = 1; i <= 6; i++) {
        let name = prompt(`Enter the name of dog ${i}:`);
        dogNames.push(name);
    }

    dogNames.sort().reverse();

    const dogList = document.getElementById("dogList");
    dogList.innerHTML = dogNames.map(name => `<li>${name}</li>`).join("");
}

printDogNames();
