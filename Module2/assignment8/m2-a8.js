function concat(stringArray) {
    let result = "";

    for (let i = 0; i < stringArray.length; i++) {
        result += stringArray[i];
    }

    return result;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];// hardcoded the array
const concatenatedString = concat(names);
document.body.innerHTML = `<p>${concatenatedString}</p>`;
