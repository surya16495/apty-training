const [direction_x,direction_y] = [document.getElementById('direction-x'),document.getElementById('direction-y')];
const [go,up,down] = [document.getElementById('go'),document.getElementById('up'),document.getElementById('down')];

go.addEventListener('click',()=>{
    window.scrollTo(Number(direction_x.value), Number(direction_y.value));
})
up.addEventListener('click',()=>{
    window.scrollBy(0,-10);
})
down.addEventListener('click',()=>{
    window.scrollBy(0,10);
})