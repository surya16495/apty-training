const result = document.getElementById('result');
const text = document.getElementById('text');

function checkLength(){
    if (text.value == ""){
        result.textContent = 'Enter some text';
        return;
    }
    let splittedText = text.value.split(' ');
    result.textContent= splittedText.map(item=>item.length).join(' ');
}