const output = document.getElementById('output');

function check(){
    const value1 = document.getElementById('value1').value;
    if (value1 != ''){
        const num1 = Number(value1);
        if (num1%2 === 0){
            output.textContent=`${num1} is a Even number`;
        }else{
            output.textContent = `${num1} is a Odd number`;
        }
    }else{
        output.textContent ='Enter a value';
    }
}