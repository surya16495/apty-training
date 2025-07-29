const output = document.getElementById('output');

function calculate(){
    const value1 = document.getElementById('value1').value;
    let result=1;
    output.textContent='';
    document.getElementById('value1').value = '';
    if(value1 != '' && Number(value1) >0){
        let num1=Number(value1);
        let i=1;
        do{
            result *= i;
            i++;
        }while(i<=num1)
        output.textContent = `Factorial of ${num1} = ${result}`
    }else{
        output.textContent = 'Enter a valid positive number';
    }
}