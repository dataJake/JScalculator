var numDisplay = document.getElementById('display_Text');

var storeNumber1 = "";
var storeNumber2 = "";
var displayContent = "0";


// AC button script
var clearButton = document.getElementById('clearAll');
var clickClear = function() {
    storeNumber1 = "0";
    displayContent = storeNumber1;
    numDisplay.innerText = displayContent;
}
clearButton.addEventListener('click', clickClear);


// Number button script
var updateDisplay = function() {
    storeNumber2 = eval(storeNumber1);
    displayContent = parseFloat(storeNumber2)/*storeNumber1*/.toLocaleString('en-US');
    numDisplay.innerText = displayContent;
}

// Math operator script
var clickOperator = function() {
    storeNumber1 = storeNumber1.toString();
    if (storeNumber1.includes("+") || storeNumber1.includes("-") || storeNumber1.includes("*") || storeNumber1.includes("/")){
        updateDisplay();
        storeNumber1 += " " + this.value + " ";
    }
    else {
        storeNumber1 += storeNumber1 += " " + this.value + " ";

    }
}

// Equals operator script
var clickEquals = function() {
    /*storeNumber1 = eval(storeNumber1);
    displayContent = storeNumber1;
    numDisplay.innerText = displayContent;*/
}


var clickButton = function() {
    if (storeNumber1 === "0"){
        storeNumber1 = this.value;
        updateDisplay();
    }
    else {
        storeNumber1 += this.value;
        updateDisplay();
    }
}

// Decimal button script
var clickDecimal = function() {
    if (displayContent === "0"){
        storeNumber1 = "0.";
        updateDisplay();
    }
    else if (numDisplay.innerText.includes(".") === false){
        storeNumber1 += this.value;
        updateDisplay();
    }
}

// Positive/negative button script
var clickNegPos = function() {
    if (displayContent !== "0") {
        if(storeNumber1.charAt(0) === "-"){
            storeNumber1 = storeNumber1.substring(1);
            updateDisplay();
        }
        else {
            storeNumber1 = "-" + storeNumber1;
            updateDisplay();
        }
    }
}



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
