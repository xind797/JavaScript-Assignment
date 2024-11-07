let year = parseInt(prompt("Enter a year"));
function loopYear(year) {
     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.write(year + " is a leap year");
    } else {
        document.write(year + " is not a leap year");
    }
}
loopYear(year);