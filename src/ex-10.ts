// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

function reverseArray<T>(arr: Array<T>): Array<T> {
    
    return arr.reverse(); 

} 

const arr1: Array<number> = [1, 2, 3, 4, 5]; 
const arr2: Array<string> = ["1", "2", "3", "4", "5"]; 

console.log(reverseArray(arr1));
console.log(reverseArray(arr2));


// 2. Ge ett exempel på en funktion med två generiska typer.

function twoRandomThings<T, K>(thingOne: T, thingTwo: K): void {
    console.log(`The first thing: ${thingOne}, the second thing: ${thingTwo}`);
}

twoRandomThings("pineapple", true);

// 3. Ge ett exempel på ett interface med en generisk typ.

interface Fruit<T, K> {
    name: T,
    color: K
}

function createFruit<T, K>(name: T, color: K): Fruit<T, K>{

    const fruit: Fruit<T, K> = {
        name: name,
        color: color
    }

    return fruit; 
}

console.log(createFruit(1, "blue"));


