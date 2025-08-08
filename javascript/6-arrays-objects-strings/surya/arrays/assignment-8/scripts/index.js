const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('tasks-details')

function check(tasks_details) {
    return tasks_details.filter(task => task.completed).map(task=>task.task);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    result.textContent = "";
    if (!textAreaInput.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let tasks_details = [];
    try {
        tasks_details = JSON.parse(textAreaInput.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    let completedTasks = check(tasks_details)
    result.textContent=JSON.stringify(completedTasks);
})
