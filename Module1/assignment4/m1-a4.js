let name = prompt("What is your name?");
let school = Math.floor(Math.random() * 4) + 1;

function draw_school(name,school){

    if (school === 1){
        document.write(name + " you are in Gryffindor")
    }else if(school === 2){
        document.write(name + " you are in Slytherin")
    }else if(school === 3){
        document.write(name + " you are in Hufflepuff")
    }else if(school === 4){
        document.write(name + " you are in Ravenclaw")
    }
}
draw_school(name,school);