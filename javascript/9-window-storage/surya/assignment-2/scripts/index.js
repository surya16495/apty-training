const dimensions = document.getElementById('dimensions');
window.addEventListener('resize',()=>{
    dimensions.innerHTML=`Screen height : ${screen.height} <br/>
    Screen width : ${screen.width} <br/>
    window InnerHeight : ${window.innerHeight} <br/>
    window InnerWidth : ${window.innerWidth} <br/>
    Screen AvailHeight : ${screen.availHeight}<br/>
    Screen AvailWidth : ${screen.availWidth} <br/>
    Screen colorDepth : ${screen.colorDepth} <br/>
    Screen pixelDepth : ${screen.pixelDepth}`
})