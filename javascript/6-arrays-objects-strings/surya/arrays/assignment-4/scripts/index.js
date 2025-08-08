const form = document.getElementById('stringForm');
const result = document.getElementById('result');

function convertToSentence(strings){
    let resultString = strings.join(' ');
    return resultString[0].toUpperCase()+resultString.slice(1);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (document.getElementById('stringInput').value==''){
    result.textContent='Enter Some Valid Text.'
    return;
    }
    let strings = document.getElementById('stringInput').value.split(',').map((val)=>val.trim());
    console.log(strings);
    let resultString = convertToSentence(strings);
    result.textContent = resultString;
})