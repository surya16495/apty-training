document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
})
const nameError = document.getElementById('nameError');
const mailError = document.getElementById('mailError');
const passwordError = document.getElementById('passwordError');
document.getElementById('name').addEventListener('input',(e)=>{
    if(e.target.value.trim().length < 4){
        nameError.textContent='Enter a valid name';
        nameError.style.color='red';
    }else{
        nameError.textContent='';
    }
})
document.getElementById('email').addEventListener('input',(e)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(e.target.value.trim())) {
        mailError.textContent = "Please enter a valid email. ex: 'surya@apty.io'";
        mailError.style.color='red'
    }else{
    mailError.textContent = "";
    }
})
document.getElementById('password').addEventListener('input',(e)=>{
    if(e.target.value.trim().length < 6){
        passwordError.textContent='Enter a valid password of minimum 6 characters';
        passwordError.style.color='red';
    }else{
        passwordError.textContent='';
    }
})