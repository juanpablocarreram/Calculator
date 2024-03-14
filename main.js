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
let currentNumber="0";
let identifySign="+";
let resultFirstNumber="0";
let signDisplay= document.querySelector(".minus");
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
let result="";
let repeat="false";
let lengthOfResult = 0;


function saveFirstNumber(){
    if(resultFirstNumber==0)
    {
        if(identifySign=="-"){
            resultFirstNumber=Number(currentNumber)*-1;
        }
        else if (identifySign=="+"){
            resultFirstNumber=Number(currentNumber)*1;
        }
        else{

        }
        currentNumber=0;
    }
    else{
    currentNumber=0;
    }
    identifySign="+";
}
/* Show the user they are making adition and process the addition */
function displaySymbolAddition(){
    repeat=false;
    ADDITION.style.background= "grey";
    SUBSTRACTION.style.background= "white";
    MULTIPLICATION.style.background= "white";
    DIVITION.style.background= "white";
    MODULUS.style.background= "white";
    signDisplay.textContent="";
    calculatorDisplay.textContent = "+";
    operation="+";
    saveFirstNumber();
   
}
/* Show the user they are making substraction and process the substraction */
function displaySymbolSubstraction(){
    repeat=false;
    SUBSTRACTION.style.background= "grey";
    MULTIPLICATION.style.background= "white";
    DIVITION.style.background= "white";
    MODULUS.style.background= "white";
    ADDITION.style.background= "white";
    signDisplay.textContent="";
    calculatorDisplay.textContent = "-"; 
    operation="-"
    saveFirstNumber();
    
}
/* Show the user they are making adition and process the multiplication */
function displaySymbolMultiplication(){
    repeat=false;
    MULTIPLICATION.style.background= "grey";
    DIVITION.style.background= "white";
    MODULUS.style.background= "white";
    ADDITION.style.background= "white";
    SUBSTRACTION.style.background= "white";
    signDisplay.textContent="";
    calculatorDisplay.textContent = "x"; 
    operation="*"
    saveFirstNumber();
}
/* Show the user they are making division and process the diviion */
function displaySymbolDivision(){
    repeat=false;
    DIVITION.style.background= "grey";
    MODULUS.style.background= "WHITE";
    ADDITION.style.background= "white";
    SUBSTRACTION.style.background= "white";
    MULTIPLICATION.style.background= "white";
    signDisplay.textContent="";
    calculatorDisplay.textContent = "÷"; 
    operation="/"
    saveFirstNumber();
}
function displaySymbolModulus(){
    repeat=false;   
    MODULUS.style.background= "grey";
    ADDITION.style.background= "white";
    SUBSTRACTION.style.background= "white";
    MULTIPLICATION.style.background= "white";
    DIVITION.style.background= "white";
    signDisplay.textContent="";
    calculatorDisplay.textContent = "%"; 
    operation="%"
    saveFirstNumber();
}

function restartCalculator(){
    repeat=false;
    calculatorDisplay.textContent=0;
    operation = undefined;
    currentNumber = "0";
    resultFirstNumber="0";
    signDisplay.textContent="";
   restartColors();
}
/* Displays the calculator in the original style state */
function restartColors(){
    SUBSTRACTION.style.background= "white";
    MULTIPLICATION.style.background= "white";
    DIVITION.style.background= "white";
    MODULUS.style.background= "white";
    ADDITION.style.background= "white";
}
function concatenateDigit0(){
    if(currentNumber=="0"){
        currentNumber="0"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="0";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit1(){
    if(currentNumber=="0"){
        currentNumber="1"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="1";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit2(){
    if(currentNumber=="0"){
        currentNumber="2"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="2";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit3(){
    if(currentNumber=="0"){
        currentNumber="3"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="3";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit4(){
    if(currentNumber=="0"){
        currentNumber="4"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="4";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit5(){
    if(currentNumber=="0"){
        currentNumber="5"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="5";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit6(){
    if(currentNumber=="0"){
        currentNumber="6"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="6";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit7(){
    if(currentNumber=="0"){
        currentNumber="7"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="7";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit8(){
    if(currentNumber=="0"){
        currentNumber="8"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="8";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigit9(){
    if(currentNumber=="0"){
        currentNumber="9"
        calculatorDisplay.textContent=currentNumber;
    }
    else if(repeat===true){
    }
    else{
        currentNumber+="9";
        calculatorDisplay.textContent=currentNumber;
    }
}
function concatenateDigitPoint(){
    if(currentNumber.includes(".")){
    }
    else{
        currentNumber+=".";
        calculatorDisplay.textContent=currentNumber;
    }
}
/* OutPuts in WebApp the actual sign of the expression */
function negativeIdentifier (){
    if(identifySign=="+"){
        signDisplay.innerHTML="-";
        identifySign="-";
    }
    else{
        signDisplay.innerHTML="";
        identifySign="+";
    }
   
        
}
/* It decreases the size as needed */
function changeDisplaySize(){
    result = result.toFixed(6);
        lengthOfResult =String(result).length;
        if(lengthOfResult>7){
            calculatorDisplay.style.fontSize = "2rem";
        }
        else{
            calculatorDisplay.style.fontSize = "4rem";
        }
}
/* Displays the operation result */
function displayResult(){
    /* Makes the addition operation */
    if(operation==="+"){
       if(identifySign=="-"){
        currentNumber=Number(currentNumber)*-1;
       }
       else{
        currentNumber=1*Number(currentNumber);
       }
       signDisplay.textContent="";
       result=resultFirstNumber + currentNumber;
        changeDisplaySize();
        calculatorDisplay.textContent= result;
        restartColors();
        currentNumber=result;
        identifySign="+";
        resultFirstNumber=0;
        operation=undefined;
    }
    /* Makes the substraction operation */
    else if(operation==="-"){
        if(identifySign=="-"){
            currentNumber=Number(currentNumber)*-1;
           }
           else{
            currentNumber=1*Number(currentNumber);
           }
           signDisplay.textContent="";
           result=resultFirstNumber - currentNumber;
        changeDisplaySize();
        calculatorDisplay.textContent= result;
        restartColors();
        currentNumber=result;
            identifySign="+";
        resultFirstNumber=0;
        operation=undefined;
    }
    /* Makes the multiplication operation */
    else if(operation==="*"){
        if(identifySign=="-"){
            currentNumber=Number(currentNumber)*-1;
           }
           else{
            currentNumber=1*Number(currentNumber);
           }
           signDisplay.textContent="";
        result = resultFirstNumber * currentNumber;
       changeDisplaySize();
        calculatorDisplay.textContent= result;
        restartColors();
        currentNumber=result;
         identifySign="+";
        resultFirstNumber=0;
        operation=undefined;
    }
    /* Makes the division operation */
    else if(operation==="/"){
        if(identifySign=="-"){
            currentNumber=Number(currentNumber)*-1;
           }
           else{
            currentNumber=1*Number(currentNumber);
           }
           signDisplay.textContent="";
        result = resultFirstNumber / currentNumber;
        changeDisplaySize();
        calculatorDisplay.textContent= result;
        restartColors();
        currentNumber=result;
        identifySign="+";
        resultFirstNumber=0;
        operation=undefined;
    }
    /* Makes the modulus operation */
    else if(operation==="%"){
        if(identifySign=="-"){
            currentNumber=Number(currentNumber)*-1;
           }
           else{
            currentNumber=1*Number(currentNumber);
           }
           signDisplay.textContent="";
        result = resultFirstNumber % currentNumber;
        changeDisplaySize();
        calculatorDisplay.textContent= result;
        restartColors();
        currentNumber=result;
        identifySign="+";
        resultFirstNumber=0;
        operation=undefined;
    }
    else{
        calculatorDisplay.textContent= currentNumber;
    }
    
 repeat=true;
    
}
/* Perform each button functionalities */
ADDITION.addEventListener("click",displaySymbolAddition);
SUBSTRACTION.addEventListener("click",displaySymbolSubstraction);
MULTIPLICATION.addEventListener("click",displaySymbolMultiplication);
DIVITION.addEventListener("click",displaySymbolDivision);
MODULUS.addEventListener("click",displaySymbolModulus);
AC.addEventListener("click", restartCalculator);
SIGN.addEventListener("click", negativeIdentifier);
EQUAL.addEventListener("click", displayResult);


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
