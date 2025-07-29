const output = document.getElementById('output');

function calculate(){
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const time = document.getElementById('time').value;
    let simpleIntrest;
    if (amount == "" || interest == '' || time == ''){
        output.textContent= 'Enter all the values';
    }else{
        simpleIntrest =  (Number(amount) * Number(interest) * Number(time)) / 100;
        output.textContent = `Simple Interest is : ${simpleIntrest}`;
    }
}