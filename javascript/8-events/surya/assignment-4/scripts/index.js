document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    document.getElementById('text').textContent=`Form is submitted with data : ${document.getElementById('name').value} , ${document.getElementById('dob').value}`;
})