const numberButton = document.querySelectorAll('.number')
const mathSignButton = document.querySelectorAll('.mathSign')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('equals')
const currentNumber = document.querySelector('.currentNumber')
const previousNumber = document.querySelector('.previousNumber')
const sign = document.querySelector('.sign')
const dot = document.querySelector('.dot')
const doubleZero = document.querySelector('.doubleZero')


clearButton.addEventListener('click', clear)
numberButton.forEach((button) => button.addEventListener('click', numbers))
mathSignButton.forEach((button) => button.addEventListener('click', signs))
dot.addEventListener('click', addDot)
doubleZero.addEventListener('click', addDoubleZero)

function numbers() {
    currentNumber.innerHTML += this.innerHTML;
}

function signs() {
    sign.innerHTML = this.innerHTML;
}


function clear() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
}

function addDot() {
    if (currentNumber.innerHTML != '') {
        currentNumber.innerHTML += this.innerHTML
    }
}

function addDoubleZero() {
    if (currentNumber.innerHTML != '') {
        currentNumber.innerHTML += this.innerHTML
    }
}
