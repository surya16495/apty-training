const output = document.getElementById('output');

function find(){
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);

    output.textContent = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
    if(isNaN(start) || isNaN(end)) {
        output.textContent = 'Enter Both the values.'
    } else {
        for (let i=start; i<=end; i++){
            let count = 0;
            for (let j=2; j<i ; j++){
                if (i%j === 0){
                    count++;
                    break;
                }
            }
            if (count == 0){
                output.innerHTML += `${i} , `;
            }
        }
        output.innerHTML += `are the prime numbers between ${start} and ${end}.`
    }
}