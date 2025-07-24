let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let output = document.getElementById('output');

function add(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} + ${num2} = ${num1 + num2}`;
};
function subtract(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} - ${num2} = ${num1 - num2}`;
};
function divide(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} / ${num2} = ${num1 / num2}`;
};
function multiply(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} * ${num2} = ${num1 * num2}`;
};
function moduloDivision(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} % ${num2} = ${num1 % num2}`;
};
function increment(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1}++ = ${num1++} & ++${num2} =${++num2}`;
};
function decrement(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1}-- = ${num1--} & --${num2} = ${--num2}`;
};
