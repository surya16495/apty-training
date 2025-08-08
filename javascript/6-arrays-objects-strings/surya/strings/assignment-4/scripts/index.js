const result = document.getElementById('result');
const text = document.getElementById('text');

function sortString(){
    if (text.value == ""){
        result.textContent = 'Enter some text';
        return;
    }
    let inputText = text.value.trim();
    result.textContent=inputText.split('').sort().join('');
}