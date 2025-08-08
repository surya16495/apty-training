const result = document.getElementById('result');
function escape(){
    const InputDeviceInfo = document.getElementById('text').value;
    const converted = InputDeviceInfo.replace(/\\n/g,"\\\\n").replace(/\\t/g,"\\\\t");
    result.textContent=converted
}
