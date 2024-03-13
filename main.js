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
let concat1="0";
let concat2="0";
let resultConcat1, resultConcat2;
let minusOrPlus= document.querySelector(".minus");
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
    operation="+";
    minusOrPlus.textContent="";
    resultConcat1=+(minusOrPlus.textContent + concat1)
}
function displaySymbolSubstraction(){
    calculatorDisplay.textContent = "-"; 
    operation="-"
    minusOrPlus.textContent="";
   
}
function displaySymbolMultiplication(){
    calculatorDisplay.textContent = "x"; 
    operation="*"
    minusOrPlus.textContent="";
}
function displaySymbolDivition(){
    calculatorDisplay.textContent = "÷"; 
    operation="/"
    minusOrPlus.textContent="";
}
function displaySymbolModulus(){
    calculatorDisplay.textContent = "%"; 
    operation="%"
    minusOrPlus.textContent="";
}
function restartCalculator(){
    calculatorDisplay.textContent=0;
    operation = undefined;
    concat1 = "0";
    minusOrPlus.textContent="";
}
function concatenateDigit0(){
    if(concat1=="0"){
        concat1="0"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="0";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit1(){
    if(concat1=="0"){
        concat1="1"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="1";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit2(){
    if(concat1=="0"){
        concat1="2"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="2";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit3(){
    if(concat1=="0"){
        concat1="3"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="3";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit4(){
    if(concat1=="0"){
        concat1="4"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="4";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit5(){
    if(concat1=="0"){
        concat1="5"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="5";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit6(){
    if(concat1=="0"){
        concat1="6"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="6";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit7(){
    if(concat1=="0"){
        concat1="7"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="7";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit8(){
    if(concat1=="0"){
        concat1="8"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="8";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigit9(){
    if(concat1=="0"){
        concat1="9"
        calculatorDisplay.textContent=concat1;
    }
    else{
        concat1+="9";
        calculatorDisplay.textContent=concat1;
    }
}
function concatenateDigitPoint(){
    if(concat1.includes(".")){
    }
    else{
        concat1+=".";
        calculatorDisplay.textContent=concat1;
    }
}
function negativeIdentifier (){
    if(minusOrPlus.innerHTML===""){
        minusOrPlus.textContent="-";
    }
    else{
        minusOrPlus.textContent="";
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
POINT.addEventListener("click",concatenateDigitPoint);
SIGN.addEventListener("click", negativeIdentifier);