function even(numberArray){
    let evenNumber = [];

    for(i=0;i<numberArray.length;i++){
        if((numberArray[i]) % 2=== 0){
            evenNumber.push(numberArray[i]);
        }
    }
    return evenNumber;
}
const originalArray = [2, 7, 4, 9, 10, 15, 6];
const evenArray = even(originalArray);

console.log(originalArray);
console.log(evenArray);
