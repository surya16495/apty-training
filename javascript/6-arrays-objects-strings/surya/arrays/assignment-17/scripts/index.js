const form = document.getElementById('form');
const result = document.getElementById('result');
const arr1=document.getElementById('arr1');
const arr2=document.getElementById('arr2');

function merge(a,b){
    let arr=[];
    a.map(item=>{
        if(!b.includes(item)) arr.push(item);
    })
    arr.push(...b);
    return arr
}

form.addEventListener('submit',()=>{
    result.textContent = "";
    if (!arr1.value || !arr2.value) {
        result.textContent = "Please both the arrays.";
        return;
    }
    let a,b;
    try {
        [a,b] = [JSON.parse(arr1.value),JSON.parse(arr2.value)];
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    let mergedArray = merge(a,b);
    result.textContent = mergedArray;
})