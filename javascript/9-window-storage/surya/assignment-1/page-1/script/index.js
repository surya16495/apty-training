const inputUrl = document.getElementById('inputUrl');
const reload = document.getElementById('reload');
const forward = document.getElementById('forward');
const go = document.getElementById('go');

go.addEventListener('click',()=>{
    location.href=inputUrl.value.trim();
})
forward.addEventListener('click',(e)=>{
   history.forward();
});
reload.addEventListener('click',(e)=>{
    location.reload();
});