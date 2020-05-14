var numDisplay = document.getElementById('display_Text');

var storeNumber1 = "";
var storeNumber2 = "";
var storeNumber3 = "";
var displayContent = "0";


// AC button script
var clickClear = function() {
    storeNumber1 = "0";
    displayContent = storeNumber1;
    numDisplay.innerText = displayContent;
}

var updateDisplay = function() {
    if (storeNumber.includes('.'){
        let afterDecimal = storeNumber.substring(indexOf('.'));
        let remainingString = storeNumber.substring(0, indexOf('.'));
        let reformString = "";
        while (remainingString.length >= 4){
            reformString = (',' + remainingString.substring(-3)) + reformString;
            remainingString = remainingString.Substring(0, -3);
        }
        numDisplay.innerText = reformString + afterDecimal;
    }
    else {
        let remainingString = storeNumber;
        let reformString = "";
        while (remainingString.length >= 4){
            reformString = (',' + remainingString.substring(-3)) + reformString;
            remainingString = remainingString.Substring(0, -3);
        }
        numDisplay.innerText = reformString;
    }
}




var clickButton = function() {
    if (storeNumber1 === "0"){
        storeNumber1 = this.value;
        updateDisplay();
    }
    else {
        storeNumber += this.value;
        updateDisplay();
    }
}



var clickDecimal = function() {
    if (storeNumber1 === "0"){
        storeNumber1 = "0.";
    }
    else if (numDisplay.innerText.includes(".") === false){
        storeNumber1 += this.value;
    }
}

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

// Math operator script
var clickOperator = function() {

}

// Equals operator script
var clickEquals = function() {

}

var clearButton = document.getElementById('clearAll');
clearButton.addEventListener('click', clickClear);

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
``
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
