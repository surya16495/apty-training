const result = document.getElementById('result');
const form = document.getElementById('form');

function perimeter(height=20,width=15){
    const area = (function(height,width){
        return height*width
    })(height,width)
    return [2*(height+width),area];
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input1 = document.getElementById('height').value;
    const height = ((input1 != '') && (!isNaN(Number(input1)))) ? Number(input1) : undefined;
    const input2 = document.getElementById('width').value;
    const width = ((input2 != '') && (!isNaN(Number(input2)))) ? Number(input2) : undefined;
    let [peri,area]= [...perimeter(height,width)];
    result.textContent = `Area = ${area} ; Perimeter = ${peri}`;
})

