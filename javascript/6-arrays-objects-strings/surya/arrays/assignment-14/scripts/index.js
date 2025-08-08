const form = document.getElementById('form');
const result = document.getElementById('result');
const val1=document.getElementById('val1');
const val2=document.getElementById('val2');

form.addEventListener('submit',()=>{
    if (isNaN(parseInt(val1.value)) && isNaN(parseInt(val2.value))){
        result.textContent='Enter both the values';
        return;
    }
    let a = val1.value;
    let b = val2.value;

    [a,b]=[b,a]
    result.textContent = `a : ${a} & b : ${b}`;
})