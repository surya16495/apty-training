let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let output = document.getElementById('output');

function bitwiseAnd(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} & ${num2} = ${num1 & num2}`;
};
function bitwiseOr(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} | ${num2} = ${num1 | num2}`;
};
function bitwiseXor(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} ^ ${num2} = ${num1 ^ num2}`;
};
function bitwiseNot(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`~${num1} = ${~num1} & ~${num2} =${~num2}`;
};
function bitwiseLeftShift(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} << ${num2} = ${num1 << num2}`;
};
function bitwiseRightShift(){
    let num1=Number(value1.value);
    let num2=Number(value2.value);
    output.textContent=`${num1} >> ${num2} = ${num1 >> num2}`;
};
