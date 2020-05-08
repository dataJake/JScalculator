var numDisplay = document.getElementById('display_Text');

var storeNumber = "";

var displayContent = "0";


// AC button script
var clearButton = document.getElementById('clearAll');
var clickClear = function() {
    storeNumber = "0";
    displayContent = storeNumber;
    numDisplay.innerText = displayContent;
}
clearButton.addEventListener('click', clickClear);


// number button script
var clickButton = function() {

    if (numDisplay.innerText === "0") {
        storeNumber = this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else if (numDisplay.innerText.includes(".")) {
        storeNumber += this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else if (storeNumber.length === 3){
        storeNumber = storeNumber.substring(0, 1) + "," + storeNumber.substring(1) + this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else if (storeNumber.length === 5) {
        storeNumber = storeNumber.substring(0, 1) + storeNumber.substring(2, 3) + "," + storeNumber.substring(3, 5) + this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else if (storeNumber.length === 6) {
        storeNumber = storeNumber.substring(0, 2) + storeNumber.substring(3, 4) + "," + storeNumber.substring(4, 6) + this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else if (storeNumber.length === 7) {
        storeNumber = storeNumber.substring(0, 1) +  "," + storeNumber.substring(1,3) + storeNumber.substring(4,5) + "," + storeNumber.substring(5, 7) + this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else if (storeNumber.length === 9) {
        storeNumber = storeNumber.substring(0, 1) + storeNumber.substring(0, 1) + "," + storeNumber.substring(3, 5) + storeNumber.substring(6, 7) + "," + storeNumber.substring(7, 9) + this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else {
        storeNumber += this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
}

//Decimal button script
var clickDecimal = function() {
    if (displayContent === "0"){
        storeNumber = "0.";
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
    else {
        storeNumber += this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
    }
}

// Positive/negative button script
var clickNegPos = function() {
    if (displayContent !== "0") {
        if(displayContent.charAt(0) === "-"){
            displayContent = displayContent.substring(1);
            numDisplay.innerText = displayContent;
        }
        else {
            displayContent = "-" + displayContent;
            numDisplay.innerText = displayContent;
        }
    }
}

/* Math operator script
var clickOperator = function() {
    if (storeNumber.includes("+") || storeNumber.includes("-") || storeNumber.includes("*") || storeNumber.includes("/")) {
        clickEquals();
        storeNumber += this.value;
    }
    else {
        storeNumber += this.value;
    }
}

// Equals operator script
var clickEquals = function() {
    storeNumber = eval(storeNumber);
    displayContent = storeNumber;
    numDisplay.innerText = displayContent;
}*/


var oneButton = document.getElementById('one');
oneButton.addEventListener('click', clickButton);

var twoButton = document.getElementById('two');
twoButton.addEventListener('click', clickButton);

var threeButton = document.getElementById('three');
threeButton.addEventListener('click', clickButton);

var fourButton = document.getElementById('four');
fourButton.addEventListener('click', clickButton);

var fiveButton = document.getElementById('five');
fiveButton.addEventListener('click', clickButton);

var sixButton = document.getElementById('six');
sixButton.addEventListener('click', clickButton);

var sevenButton = document.getElementById('seven');
sevenButton.addEventListener('click', clickButton);

var eightButton = document.getElementById('eight');
eightButton.addEventListener('click', clickButton);

var nineButton = document.getElementById('nine');
nineButton.addEventListener('click', clickButton);

var zeroButton = document.getElementById('zero');
zeroButton.addEventListener('click', clickButton);

var decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', clickDecimal);

var plusButton = document.getElementById('plus');
plusButton.addEventListener('click', clickOperator);

var subtractButton = document.getElementById('minus');
subtractButton.addEventListener('click', clickOperator);

var multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', clickOperator);

var divideButton = document.getElementById('divide');
divideButton.addEventListener('click', clickOperator);

var equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', clickEquals);

var percentButton = document.getElementById('percent');



var negButton = document.getElementById('posNeg');
negButton.addEventListener('click', clickNegPos);
