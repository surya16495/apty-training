const [div1,div2] = [document.getElementById('div1'),document.getElementById('div2')];

function formatKeyCombination(event){
    let keys = [];

    if (event.ctrlKey && event.key !== 'Control') keys.push('Ctrl');
    if (event.shiftKey && event.key !== 'Shift') keys.push('Shift');
    if (event.altKey && event.key !== 'Alt') keys.push('Alt');
    
    keys.push(event.key);

    return keys.join('+');
}
window.addEventListener('keydown',(event)=>{
    if (event.repeat) return;

    div1.innerText += `${formatKeyCombination(event)} \n`;
});
window.addEventListener('keyup',(event)=>{
    div2.innerText += `${formatKeyCombination(event)} \n`;
});