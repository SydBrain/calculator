document.addEventListener('DOMContentLoaded', () => {

    // Variables
    let prevOperand = "";
    let currentOperand = "";
    let selectedOperation = "";

    // DOM Elements
    const numberButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');
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
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectOperation(button.innerText);
            updateDisplay();
        })
    });

    equalsButton.addEventListener('click', () => {
        calculate();
        updateDisplay();
    });

    clearButton.addEventListener('click', () => {
        clearExpression();
        updateDisplay();
    });

    deleteButton.addEventListener('click', () => {
        deleteNumber();
        updateDisplay();
    });


    // Functions
    function clearExpression() {
        currentOperand = "";
        prevOperand = "";
        operation = undefined;
    }

    function deleteNumber() {
        currentOperand = currentOperand.toString().slice(0, -1);
    }

    function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand = currentOperand.toString() + number.toString();
    }

    function selectOperation(operation) {
        if (currentOperand === "") return;
        if (prevOperand !== "") {
            calculate();
        }
        selectedOperation = operation;
        prevOperand = currentOperand;
        currentOperand = "";
    }

    function calculate() {
        let computation;
        const prev = parseFloat(prevOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (selectedOperation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                break;
        }
        currentOperand = computation;
        selectedOperation = undefined;
        prevOperand = "";
    }


    function updateDisplay() {
        currentOperandTextElement.innerText = currentOperand;
        if (selectedOperation != null) {
            prevOperandTextElement.innerText =
                `${prevOperand} ${selectedOperation}`;
        } else {
            prevOperandTextElement.innerText = "";
        }

    }

});