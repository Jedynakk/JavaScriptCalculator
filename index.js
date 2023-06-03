const numberButton = document.querySelectorAll('.number')
const mathSignButton = document.querySelectorAll('.mathSign')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')
const currentNumber = document.querySelector('.currentNumber')
const previousNumber = document.querySelector('.previousNumber')
const sign = document.querySelector('.sign')
const doubleZero = document.querySelector('.doubleZero')


clearButton.addEventListener('click', clear)
numberButton.forEach((button) => button.addEventListener('click', numbers))
mathSignButton.forEach((button) => button.addEventListener('click', signs))
doubleZero.addEventListener('click', addDoubleZero)
equalsButton.addEventListener('click', showResult)

function numbers() {
    if (this.textContent === "." && currentNumber.innerHTML.includes('.')) return;
    currentNumber.innerHTML += this.innerHTML;
}

function signs() {
    if (currentNumber.innerHTML != '') {
        sign.innerHTML = this.innerHTML;
        previousNumber.innerHTML = currentNumber.innerHTML
        currentNumber.innerHTML = '';
    }
}


function clear() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
}


function addDoubleZero() {
    if (currentNumber.innerHTML != '') {
        currentNumber.innerHTML += this.innerHTML
    }
}


function showResult() {
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let mSign = sign.innerHTML;
    switch (mSign) {
        case '+':
            currentNumber.innerHTML = b + a;
            break;
        case '-':
            currentNumber.innerHTML = b - a;
            break;
        case ':':
            currentNumber.innerHTML = b / a;
            break;
        case 'x':
            currentNumber.innerHTML = b * a;
            break;
        case '2^':
            currentNumber.innerHTML = b ** a;
            break;
        case '%':
            currentNumber.innerHTML = (b * 0.01) * a;
            break;

    }
    previousNumber.innerHTML = "";
    sign.innerHTML = "";
}