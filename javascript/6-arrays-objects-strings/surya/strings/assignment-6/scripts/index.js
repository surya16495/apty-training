const result = document.getElementById('result');
const text = document.getElementById('text');

function findUnicode(){
    if (text.value == ""){
        result.textContent = 'Enter some text';
        return;
    }
    let splittedText = text.value;
    result.textContent= JSON.stringify(splittedText.split('').map(item=>splittedText.charCodeAt(splittedText.indexOf(item))));
}