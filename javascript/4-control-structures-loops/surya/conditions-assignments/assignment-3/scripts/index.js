const output = document.getElementById('output');

function calculate(operator) {
    let value1 = Number(document.getElementById('value1').value);
    let value2 = Number(document.getElementById('value2').value);
    let result;
    switch (operator) {
        case '+': {
            result = value1 + value2;
            break;
        }
        case '-': {
            result = value1 - value2;
            break;
        }
        case '/': {
            result = value1 / value2;
            break;
        }
        case '*': {
            result = value1 * value2;
            break;
        }
        case '%':{
            result = value1 % value2;
            break
        }
        case '++':{
            result = value1++;
            break;
        }
        case '--':{
            result = value1--;
            break;
        }
        default :{
            break;
        }
    }
    output.textContent= `Result is ${result}`;
    
}