const output = document.getElementById('output');

function calculate() {
    const array1 = document.getElementById('array1').value;

    let result = 0;
    output.textContent = '';
    document.getElementById('array1').value = '';
    if (array1 != '') {
        const array = array1.split(',');
        for (let i of array) {
            let num = Number(i);
            if(!isNaN(num)){
                result+=num;
            }
        };
        let average =  result / array.length;
        output.textContent = `Sum of values in given array ${array} = ${result} & Average is ${average}`;
    }else{
        output.textContent = 'Enter some values'
    }
    
}