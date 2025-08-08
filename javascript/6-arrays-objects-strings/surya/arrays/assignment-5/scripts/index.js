const defaultArray = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];
const result = document.getElementById('result');

function sliceTheArray() {
    result.textContent = `1st part is : '${defaultArray.splice(0, 3).join(' ')}' ; 
    2nd part is : '${defaultArray.splice(-2).join(' ')}'`
}