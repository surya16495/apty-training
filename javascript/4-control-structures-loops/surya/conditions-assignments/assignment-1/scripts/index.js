const result = document.getElementById('result');

function calculateGrade() {
    const marks = Number(document.getElementById('marks').value);
    let grade;
    if (marks >= 0 && marks <= 100) {
        if (marks >= 90) {
            grade = 'A';
        } else if (marks >= 75 && marks <= 89) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 74) {
            grade = 'C';
        } else if (marks <= 49) {
            grade = 'F';
        }
        result.textContent = `Grade : ${grade}`;
    }else{
        result.textContent='Enter valid marks between 0 to 100.'
    }
    
}