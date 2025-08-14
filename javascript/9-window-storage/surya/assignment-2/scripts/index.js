function displayDimensions() {
    dimensions.innerHTML=`Screen height : ${screen.height} <br/>
    Screen width : ${screen.width} <br/>
    window InnerHeight : ${window.innerHeight} <br/>
    window InnerWidth : ${window.innerWidth} <br/>
    Screen AvailHeight : ${screen.availHeight}<br/>
    Screen AvailWidth : ${screen.availWidth} <br/>
    Screen colorDepth : ${screen.colorDepth} <br/>
    Screen pixelDepth : ${screen.pixelDepth}`;
}
window.addEventListener('resize', displayDimensions);
displayDimensions(); // Call on initial load to show dimensions
