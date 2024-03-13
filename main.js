const ZERO = document.querySelector(".butt-zero");
const ONE = document.querySelector(".butt-one");
const TWO = document.querySelector(".butt-two");
const THREE = document.querySelector(".butt-three");
const FOUR = document.querySelector(".butt-four");
const FIVE = document.querySelector(".butt-five");
const SIX = document.querySelector(".butt-six");
const SEVEN = document.querySelector(".butt-seven");
const EIGHT = document.querySelector(".butt-eight");
const NINE =document.querySelector(".butt-nine");
const EQUAL = document.querySelector(".butt-equal");
const ADDITION = document.querySelector(".butt-addition");
const SUBSTRACTION = document.querySelector(".butt-substraction");
const MULTIPLICATION = document.querySelector(".butt-multiplication");
const DIVITION = document.querySelector(".butt-divition");
const MODULUS = document.querySelector(".butt-modulus");
const SIGN = document.querySelector(".butt-sign");
const POINT = document.querySelector(".butt-point");
const AC = document.querySelector(".butt-ac");
let resultConcat1="0";
let resultConcat2="0";
let operation = undefined;
let calculatorDisplay = document.querySelector("p");
let one = "1";
let two ="2";
let three ="3";
let four = "4";
let five="5";
let six="6";
let seven = "7";
let eight = "8"; 
let nine = "9";
let zero = "0";
let point = ".";


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
    operation = undefined;
    resultConcat1 = 0;
}
function concatenateDigit0(){
    if(resultConcat1==="0"){
        resultConcat1="0"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="0";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit1(){
    if(resultConcat1==="0"){
        resultConcat1="1"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="1";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit2(){
    if(resultConcat1==="0"){
        resultConcat1="2"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="2";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit3(){
    if(resultConcat1==="0"){
        resultConcat1="3"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="3";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit4(){
    if(resultConcat1==="0"){
        resultConcat1="4"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="4";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit5(){
    if(resultConcat1==="0"){
        resultConcat1="5"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="5";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit6(){
    if(resultConcat1==="0"){
        resultConcat1="6"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="6";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit7(){
    if(resultConcat1==="0"){
        resultConcat1="7"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="7";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit8(){
    if(resultConcat1==="0"){
        resultConcat1="8"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="8";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigit9(){
    if(resultConcat1==="0"){
        resultConcat1="9"
        calculatorDisplay.textContent=resultConcat1;
    }
    else{
        resultConcat1+="9";
        calculatorDisplay.textContent=resultConcat1;
    }
}
function concatenateDigitPoint(){
    if(resultConcat1.includes(".")){
    }
    else{
        resultConcat1+=".";
        calculatorDisplay.textContent=resultConcat1;
    }
}
ADDITION.addEventListener("click",displaySymbolAddition);
SUBSTRACTION.addEventListener("click",displaySymbolSubstraction);
MULTIPLICATION.addEventListener("click",displaySymbolMultiplication);
DIVITION.addEventListener("click",displaySymbolDivition);
MODULUS.addEventListener("click",displaySymbolModulus);
AC.addEventListener("click", restartCalculator);


ZERO.addEventListener("click",concatenateDigit0);
ONE.addEventListener("click",concatenateDigit1);
TWO.addEventListener("click",concatenateDigit2);
THREE.addEventListener("click",concatenateDigit3);
FOUR.addEventListener("click",concatenateDigit4);
FIVE.addEventListener("click",concatenateDigit5);
SIX.addEventListener("click",concatenateDigit6);
SEVEN.addEventListener("click",concatenateDigit7);
EIGHT.addEventListener("click",concatenateDigit8);
NINE.addEventListener("click",concatenateDigit9);
POINT.addEventListener("click",concatenateDigitPoint)