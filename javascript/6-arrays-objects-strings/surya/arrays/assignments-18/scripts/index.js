const result = document.getElementById('result');
const form = document.getElementById('form');
const arr = document.getElementById('arr');

function combine(arrValues) {
    return arrValues.filter(item=>item%2==0).map(item=>item*2).reduce((acc,item)=>acc+item,0);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    result.textContent = "";
    if (!arr.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let arrValues = [];
    try {
        arrValues = JSON.parse(arr.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    let resultValue = combine(arrValues)
    result.textContent=resultValue;
})
