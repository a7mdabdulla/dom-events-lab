/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let input = ""
let number1 = null
let operator = null

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const val = event.target.innerText

        if (event.target.classList.contains('number')) {
            getNumber(val)
        } else if (event.target.classList.contains('operator')) {
            getOperator(val)
        } else if (event.target.classList.contains('equals')) {
            calcResult()
        }
    })
})
/*-------------------------------- Functions --------------------------------*/
const getResult = (value) => {
    display.textContent = value || "0"
}

const getNumber = (number) => {  
    input += number
    getResult(input)
}

const getOperator = (opr) => {
    if (opr === "C") {
        clearCalc()
    }
    
    if (input) {
        number1 = parseInt(input)
        operator = opr
        input =''
    }
}

const clearCalc = () => {
    input = ''
    operator = null
    number = null
    getResult('0')
}

const calcResult = () => {
    if (number1 !== null && operator && input) {
        const number2 = parseInt(input)
        let result

        if (operator === "+") {
            result = number1 + number2
        } else if (operator === "-") {
            result = number1 - number2
        } else if (operator === "*") {
            result = number1 * number2
        } else if (operator === "/") {
            result = number1 / number2
        } else {
            result = "Invalid Input"
        }
        getResult(result)
    }
}
