#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First Number:",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter Second Number:",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select any operator to perform action",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}.`);
}
else if (answer.Operator === "Subtraction") {
    console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}.`);
}
else if (answer.Operator === "Multiplication") {
    console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}.`);
}
else if (answer.Operator === "Division") {
    console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}.`);
}
else {
    console.log("Please select valid operator");
}
