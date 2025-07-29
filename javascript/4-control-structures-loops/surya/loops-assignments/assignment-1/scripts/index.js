const output = document.getElementById('output');

function generate() {
    let value1 = document.getElementById('value1').value;
    let result;
    output.textContent='';
    document.getElementById('value1').value = '';
    if (value1 != '') {
        for (let i = 1; i <= 10; i++) {
            result = Number(value1) * i;
            output.innerHTML += `${value1} x ${i} = ${result} <br>`;
        }
    }else{
        output.textContent='Enter a number';
    }
}