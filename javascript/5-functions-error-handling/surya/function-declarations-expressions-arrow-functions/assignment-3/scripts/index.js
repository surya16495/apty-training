let count = document.getElementById('count');

const decrease = () =>{
    let value=parseInt(count.textContent);
    value--;
    count.textContent=value;
}

const reset = () =>{
    count.textContent=0;
}

const increase = () =>{
    let value=parseInt(count.textContent);
    value++;
    count.textContent=value;
}