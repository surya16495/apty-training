const output = document.getElementById('output');

function calculate(){
    const value1 = document.getElementById('value1').value;
    let result=0;
    output.textContent='';
    document.getElementById('value1').value = '';
    if(value1 != '' && Number(value1) >0){
        let num1=Number(value1);
        let i =1;
        while(i<=num1){
            result +=i;
            i++;
        }
        output.textContent = `sum of numbers from '1' to '${num1}' is '${result}'`;
    }else{
        output.textContent = 'Enter a valid positive number';
    }
}