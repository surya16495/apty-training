const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('array-elements')

function removeDuplicates(input_array){
    let arr=[];
    input_array.map((item)=>{
        if (!arr.includes(item)) arr.push(item)
    });
    return arr;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = "";
    if (!textAreaInput.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let input_array = [];
    try {
        input_array = JSON.parse(textAreaInput.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    console.log(input_array)
    let uniqueArray = removeDuplicates(input_array);
    result.textContent=JSON.stringify(uniqueArray);
})
