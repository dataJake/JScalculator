var numDisplay = document.getElementById('display_Text');

var percentButton = document.getElementById('percent');
var divideButton = document.getElementById('divide');
var multButton = document.getElementById('multiply');
var minusButton = document.getElementById('minus');
var plusButton = document.getElementById('plus');
var decimalButton = document.getElementById('decimal');
var equalsButton = document.getElementById('equals');


var storeNumber = "";

var displayContent = "0";


/* AC button script*/
var clearButton = document.getElementById('clearAll');
var clickClear = function() {
    storeNumber = 0;
    displayContent = storeNumber;
    numDisplay.innerText = displayContent;
}
clearButton.addEventListener('click', clickClear);


/* 1 button script*/
var clickButton = function() {
    /*Need to refactor this to account for length changes
    /*if (displayContent.includes(".")){
      if (this.value !== ".") {
        storeNumber += this.value;
        displayContent = storeNumber;
        numDisplay.innerText = displayContent;
      }
    }*/
    else if (numDisplay.innerText === "0"){
      storeNumber = this.value;
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
decimalButton.addEventListener('click', clickButton);


var clickNegPos = function() {
  if(displayContent.charAt(0) === "-"){
    displayContent = displayContent.substring(1);
    numDisplay.innerText = displayContent;
  }
  else {
    displayContent = "-" + displayContent;
    numDisplay.innerText = displayContent;
  }
}

var negButton = document.getElementById('posNeg');
negButton.addEventListener('click', clickNegPos);
