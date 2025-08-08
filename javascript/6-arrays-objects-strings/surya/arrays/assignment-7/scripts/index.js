const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('persons-details')

function introduce(persons_details) {
    persons_details.forEach((person)=>{
        result.innerHTML += `${person.name} is ${person.age} years old. <br/>`
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    result.textContent = "";
    if (!textAreaInput.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let persons_details = [];
    try {
        persons_details = JSON.parse(textAreaInput.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    introduce(persons_details)
})