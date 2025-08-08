const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('array-objects')

function validateArray(input_array) {
    return input_array.every((item => {
        return (
            typeof item.name === 'string' &&
            item.name.trim() !== '' &&
            typeof item.score === 'number' &&
            !isNaN(item.score)
        );
    }))
}

function sortingArray(input_array){
    return input_array.sort((a,b)=>b.score - a.score);
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
    if (!validateArray(input_array)) {
        result.textContent = 'Enter Valid Details';
        return;
    }
    let sortedArray = sortingArray(input_array);
    result.textContent = JSON.stringify(sortedArray);
})
