const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('array-elements')

function transpose(input_array){
     matrix=[];
     for (let i=0 ; i<input_array.length ; i++){
        matrix.push(input_array.map(item=>item[i]))
     }
     return matrix;
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
    let transposedMatrix = transpose(input_array);
    result.textContent=JSON.stringify(transposedMatrix);
})
