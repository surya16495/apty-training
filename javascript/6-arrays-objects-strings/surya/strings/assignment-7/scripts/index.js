const result = document.getElementById('result');
const text = document.getElementById('text');

function addPadding(){
    if (text.value == ""){
        result.textContent = 'Enter some text';
        return;
    }
    let splittedText = text.value;
    result.textContent= splittedText.padStart(10,'0');
}