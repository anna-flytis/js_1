let userInput = process.argv[2];

let numberPicked = Number(userInput);

if (numberPicked < 1 || numberPicked > 6 || isNaN(numberPicked)){
    console.log("You enterd: " + userInput + ". You can only enter a number value betwwen 1 throught 6");
    process.exit();
} else {
    console.log("The number you picked is: " + numberPicked);
}

let numberOfRolls = 0;
const maxNumberOfRolls = 3;
let hasMatch = false;

do {
    numberOfRolls++;
    console.log("Current roll = " + numberOfRolls);
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("The Dice rolled a: " + diceRoll);
    if (diceRoll > numberPicked) {
        console.log("The dice rolled higher than number you picked!");
    } else if (diceRoll < numberPicked){
        console.log("The dice rolled lower than number you picked!");

    } else {
        console.log("The dice rolled  the number that you picked!");
        hasMatch = true;
        break;
    }
} while (numberOfRolls < maxNumberOfRolls);

if (numberOfRolls >= maxNumberOfRolls){
    console.log("You've run out of tries to roll the dice!");
}