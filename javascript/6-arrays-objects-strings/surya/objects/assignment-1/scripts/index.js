const form = document.getElementById('form');
const result = document.getElementById('result');
const inputKey = document.getElementById('key');
const inputvalue = document.getElementById('Value');

let dynamicObject={};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(inputKey.value == '' || inputvalue==''){
        result.textContent='Enter both the Key and value';
        return;
    }
    dynamicObject[inputKey.value]=inputvalue.value;
    result.textContent = JSON.stringify(dynamicObject);
})
