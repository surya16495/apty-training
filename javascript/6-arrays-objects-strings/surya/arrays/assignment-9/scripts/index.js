const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('marks-details')

function check(marks_details) {
    if(marks_details.every(marks=>marks.score>35)){
        result.textContent='All Students Passed';
    }else if(marks_details.some(marks=>marks.score>35)){
        result.textContent = 'Some students Passed';
    }else{
        result.textContent = 'All students Failed';
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    result.textContent = "";
    if (!textAreaInput.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let marks_details = [];
    try {
        marks_details = JSON.parse(textAreaInput.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    check(marks_details)
})
