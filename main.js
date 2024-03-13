const ZERO = document.querySelector(".butt-zero");
const ONE = document.querySelector(".butt-one");
const TWO = document.querySelector(".butt-two");
const THREE = document.querySelector(".butt-three");
const FOUR = document.querySelector(".butt-four");
const FIVE = document.querySelector(".butt-five");
const SIX = document.querySelector(".butt-six");
const SEVEN = document.querySelector(".butt-seven");
const EIGHT = document.querySelector(".butt-eight");
const NINE =document.querySelector(".butt-nine")
const EQUAL = document.querySelector(".butt-equal");
const ADDITION = document.querySelector(".butt-addition");
const SUBSTRACTION = document.querySelector(".butt-substraction");
const MULTIPLICATION = document.querySelector(".butt-multiplication");
const DIVITION = document.querySelector(".butt-divition");
const MODULUS = document.querySelector(".butt-modulus");
const SIGN = document.querySelector(".butt-sign");
const AC = document.querySelector(".butt-ac");
let resultConcat1;
let resultConcat2;
let operation;
let calculatorDisplay = document.querySelector("p");


function displaySymbolAddition(){
    calculatorDisplay.textContent = "+";
    operation="+"
}
function displaySymbolSubstraction(){
    calculatorDisplay.textContent = "-"; 
    operation="-"
}
function displaySymbolMultiplication(){
    calculatorDisplay.textContent = "x"; 
    operation="*"
}
function displaySymbolDivition(){
    calculatorDisplay.textContent = "÷"; 
    operation="/"
}
function displaySymbolModulus(){
    calculatorDisplay.textContent = "%"; 
    operation="%"
}
function restartCalculator(){
    calculatorDisplay.textContent=0;
}

ADDITION.addEventListener("click",displaySymbolAddition);
SUBSTRACTION.addEventListener("click",displaySymbolSubstraction);
MULTIPLICATION.addEventListener("click",displaySymbolMultiplication);
DIVITION.addEventListener("click",displaySymbolDivition);
MODULUS.addEventListener("click",displaySymbolModulus);
AC.addEventListener("click", restartCalculator);

/* function concat number
 */
/* 
ZERO.addEventListener("click",
ONE.addEventListener("click",
TWO.addEventListener("click",
THREE.addEventListener("click",
FOUR.addEventListener("click",
FIVE.addEventListener("click",
SIX.addEventListener("click",
SEVEN.addEventListener("click",
EIGHT.addEventListener("click",
NINE.addEventListener("click", */