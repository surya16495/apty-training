const output = document.getElementById('output');

function check(){
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const value3 = parseFloat(document.getElementById('value3').value);
    let largestNumber;
    if (isNaN(value1) || isNaN(value2) || isNaN(value3)){
        output.textContent = 'Enter all the values.'
    }else if((value1 === value2) && (value2 === value3)){
        output.textContent = 'All are equal.'
    }
    else{
        if (value1>value2){
            if (value1>value3){
                largestNumber = value1;
            }else{
                largestNumber = value3
            }
        }else{
            if (value2>value3){
                largestNumber = value2;
            }else{
                largestNumber = value3
            }
        }
        output.textContent = `The largest Number is : ${largestNumber}`;
    }
}