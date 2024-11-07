let startYear = parseInt(prompt("Enter start year"));
let endYear = parseInt(prompt("Enter end year"));

function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

document.write("<ul>");

for (let year = startYear; year <= endYear; year++) {
    if (leapYear(year)) {
        document.write("<li>" + year + "</li>");
    }
}

document.write("</ul>");