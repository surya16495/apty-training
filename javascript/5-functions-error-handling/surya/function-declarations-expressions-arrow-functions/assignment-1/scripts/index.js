const form = document.getElementById('form');
const result = document.getElementById('result');

function fibonacciSeries(n, num1 = 0, num2 = 1, values = []) {
    if (n === 0) {
        return values;
    }
    values.push(num1);
    return fibonacciSeries(n - 1, num2, num1 + num2, values);
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const num = parseInt(document.getElementById('num').value);
    if (isNaN(num) || num <= 0) {
        result.textContent = "Please enter a valid number.";
        return;
    }
    const values = fibonacciSeries(num);
    result.textContent = `Fibonacci Series: ${values.join(', ')}`;
});
