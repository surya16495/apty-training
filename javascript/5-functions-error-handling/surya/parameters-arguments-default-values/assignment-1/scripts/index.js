const result = document.getElementById('result');
const form = document.getElementById('form');

function area(height=20,width=10){
   if (height<0 || width <0){
    return -(height*width);
   }else{
    return height*width;
   }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input1 = document.getElementById('height').value;
    const height = ((input1 != '') && (!isNaN(Number(input1)))) ? Number(input1) : undefined;
    const input2 = document.getElementById('width').value;
    const width = ((input2 != '') && (!isNaN(Number(input2)))) ? Number(input2) : undefined;
    result.textContent=`Area = ${area(height,width)}`;
})
