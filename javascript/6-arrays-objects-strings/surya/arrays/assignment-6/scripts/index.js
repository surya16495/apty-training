const defaultArray = ["Red", "Blue", "Green", "Yellow"];
const result = document.getElementById('result');

function spliceTheArray() {
    defaultArray.splice(1, 2, 'Purple')
    defaultArray.splice(defaultArray.length-1,0,'orange');
    result.textContent = `Spliced Array is : ${defaultArray}`;
}