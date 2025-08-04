function calculate(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input.")
    }

    if (!["+", "-", "*", "/", "%"].includes(operator)) {
        throw new Error("Unsupported operator. Please use +, -, *, /, or %.")
    }

    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            if (num2 === 0) throw new Error("Division by zero is not allowed.")
            return num1 / num2;
        case "%":
            return num1 % num2
        default:
            throw new Error("Unknown error.")
    }
}

function performCalculation() {
    const num1 = parseFloat(document.getElementById("number1").value.trim())
    const num2 = parseFloat(document.getElementById("number2").value.trim())
    const operator = document.getElementById("operator").value.trim()
    const resultElement = document.getElementById("result")

    try {
        const result = calculate(num1, num2, operator)
        resultElement.innerText = `Result: ${result}`
    } catch (error) {
        resultElement.innerText = `Error: ${error.message}`
    }
}