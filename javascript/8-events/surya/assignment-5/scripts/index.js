document.getElementById('div1').addEventListener('click',()=>{
    alert('Container 1 event listener triggerd')
})
document.getElementById('div2').addEventListener('click',(event)=>{
    alert('container 2 event listener triggered')
    event.stopPropagation();
})