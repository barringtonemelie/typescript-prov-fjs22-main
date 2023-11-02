"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function reverseArray(arr) {
    return arr.reverse();
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["1", "2", "3", "4", "5"];
console.log(reverseArray(arr1));
console.log(reverseArray(arr2));
// 2. Ge ett exempel på en funktion med två generiska typer.
function twoRandomThings(thingOne, thingTwo) {
    console.log(`The first thing: ${thingOne}, the second thing: ${thingTwo}`);
}
twoRandomThings("pineapple", true);
function createFruit(name, color) {
    const fruit = {
        name: name,
        color: color
    };
    return fruit;
}
console.log(createFruit(1, "blue"));
