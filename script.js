let leftNum;
let operator;
let rightNum;

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

function add(num1, num2) {
    return num1+num2;
};

function subtract(num1, num2) {
    return num1-num2;
};

function multiply(num1, num2) {
    return num1*num2;
};

function divide(num1, num2) {
    return num1/num2;
};


function operate(leftNum, operator, rightNum) {
    return add(leftNum, rightNum)
};

function onClick(e) {
    console.log(display.innerHTML)
    display.textContent += e.srcElement.innerText
};

nums.forEach(num => {
    num.addEventListener("click", onClick)
})

operators.forEach(operator => {
    operator.addEventListener("click", onClick)
})

clear.addEventListener("click", clearDisplay);

function clearDisplay() {
    display.textContent = 0
};
