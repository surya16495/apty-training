const result = document.getElementById('result');
const text = document.getElementById('text');

function findFirstAndLast(){
    if (text.value == ""){
        result.textContent = 'Enter some text';
        return;
    }
    let splittedText = text.value;
    result.textContent= splittedText[0]+" "+splittedText[splittedText.length-1];
}