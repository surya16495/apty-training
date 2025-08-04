const result = document.getElementById('result');
const form = document.getElementById('form');

function sum(...rest) {
    return rest.reduce((num1, num2) => num1 + num2)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValues = document.getElementById('values').value;
    if (inputValues == '') {
        result.textContent = 'Enter some values'
    } else {
        const values = ((inputValues).split(',')).map(num => parseFloat(num));
        result.textContent = `Sum of values = ${sum(...values)}`;
    }
})