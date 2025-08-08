const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('array-elements')

function chunkArray(input_array,size){
    let arr = []
    for (let i=0 ; i<input_array.length ;i+=size){
        arr.push(input_array.slice(i,i+size));
    }
    return arr;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = "";
    const chunkValue = parseInt(document.getElementById('chunkValue').value);
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
    let chunkedArray = chunkArray(input_array,chunkValue);
    result.textContent=JSON.stringify(chunkedArray);
})
