document.addEventListener('DOMContentLoaded', () => {

    // Variables
    let previousOperand;
    let currentOperand;
    let operation;

    // DOM Elements
    const numberButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-opearation]');
    const equalsButton = document.querySelector('[data-equals]');
    const deleteButton = document.querySelector('[data-delete]');
    const clearButton = document.querySelector('[data-clear]');
    const prevOperandTextElement = document.querySelector('[data-prev-operand]');
    const currentOperandTextElement = document.querySelector('[data-current-operand]');

    // Event Listeners
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.innerText);
            updateDisplay();
        })
    })

    // App Logic
    clearExpression();


    // Functions
    function clearExpression() {
        currentOperand = "";
        previousOperand = "";
        operation = undefined;
    }

    function deleteNumber() {

    }

    function appendNumber(number) {
        currentOperand = number;
    }

    function selectOperation(operation) {

    }

    function calculate() {

    }

    function updateDisplay() {
        currentOperandTextElement.innerText = currentOperand;
    }

});