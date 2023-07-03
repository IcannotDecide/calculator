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

nums.forEach(num => {
    num.addEventListener("click", numOnClick)
})

function numOnClick(e) {
    if (leftNum === undefined) {
        if (e.srcElement.innerText === "0") return ;
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

operators.forEach(operator => {
    operator.addEventListener("click", operatorOnClick)
});

function operatorOnClick(e) {

}

clear.addEventListener("click", clearDisplay);

function clearDisplay() {
    display.textContent = 0
};
