const result = document.getElementById('result');
const inputName = document.getElementById('name');
const age = document.getElementById('age');

function combine(){
    if (inputName.value == "" || age.value==""){
        result.textContent = 'Enter some text';
        return;
    }
    result.textContent=`Hello, my name is ${inputName.value} and I am ${age.value} years old.`;
}