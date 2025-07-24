let result= document.getElementById('output');

function checkEligibility(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let age=document.getElementById('age').value;
    result.textContent = (age>=18) ? `Hello ${firstname+lastname} welcome to apty`:`Hello ${firstname+lastname} comeback after ${18 - age} years`
}