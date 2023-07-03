let leftNum = null;
let operator = null;
let rightNum = null;

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

function add(num1, num2) {
    leftNum = (+num1 + +num2).toString();
    display.textContent = leftNum;
    operator = null;
    rightNum = null;
};

function subtract(num1, num2) {
    leftNum = (+num1 - +num2).toString();
    display.textContent = leftNum;
    operator = null;
    rightNum = null;
};

function multiply(num1, num2) {
    leftNum = (+num1 * +num2).toString();
    display.textContent = leftNum;
    operator = null;
    rightNum = null;
};

function divide(num1, num2) {
    leftNum = (+num1 / +num2).toString();
    display.textContent = leftNum;
    operator = null;
    rightNum = null;
};


function operate(leftNum, operator, rightNum) {
    if (operator === "+") return add(leftNum, rightNum);
    if (operator === "-") return subtract(leftNum, rightNum);
    if (operator === "x") return multiply(leftNum, rightNum);
    if (operator === "÷") return divide(leftNum, rightNum);
};

nums.forEach(num => {
    num.addEventListener("click", (e) => {
        if (operator === null) return leftNumOnClick(e);
        
        rightNumOnClick(e)
    })
})

function leftNumOnClick(e) {
    if (leftNum === null) {
        if (e.srcElement.innerText === "0") return;
        if (e.srcElement.innerText === ".") {
            leftNum = "0.";
            return display.textContent = leftNum;
        }
        leftNum = e.srcElement.innerText;
        return display.textContent = leftNum;
    }

    if (leftNum.includes(".") && e.srcElement.innerText == ".") {
        return
    };

    leftNum += e.srcElement.innerText;
    display.textContent = leftNum;
};

function rightNumOnClick(e) {
    if (rightNum === null) {
        if (e.srcElement.innerText === "0") return;
        if (e.srcElement.innerText === ".") {
            rightNum = "0.";
            return display.textContent = leftNum + operator + rightNum;
        }
        rightNum = e.srcElement.innerText;
        return display.textContent = leftNum + operator + rightNum;
    }

    if (rightNum.includes(".") && e.srcElement.innerText == ".") {
        return
    };

    rightNum += e.srcElement.innerText;
    display.textContent = leftNum + operator + rightNum;
};

operators.forEach(operator => {
    operator.addEventListener("click", operatorOnClick)
});

function operatorOnClick(e) {
    if (leftNum === null) return;
    if (operator === null) {
        operator = e.srcElement.innerText;
        return display.textContent = leftNum + operator
    };
};

clear.addEventListener("click", clearDisplay);

function clearDisplay() {
    display.textContent = 0
    leftNum = null;
    operator = null;
    rightNum = null;
};

equals.addEventListener("click", () => {
    if(rightNum === null) return;
    operate(leftNum, operator, rightNum);
});