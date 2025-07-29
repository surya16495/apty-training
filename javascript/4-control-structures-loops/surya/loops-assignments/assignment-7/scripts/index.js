const output = document.getElementById('output');

function create(){
    const count = parseInt(document.getElementById('count').value);
    document.getElementById('count').value='';
    output.textContent='';
    if (isNaN(count)){
        output.textContent = 'Enter a value';
    }
    else{
        console.log(count);
        for (let i=0; i<count ; i++){
            output.innerHTML += `${"  ".repeat(count-i-1)}${"* ".repeat(i*2+1)}<br>`
        }
    }
}