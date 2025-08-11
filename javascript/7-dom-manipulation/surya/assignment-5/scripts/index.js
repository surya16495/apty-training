const result = document.getElementById('result');

function countElements() {
    const allElements = document.body.children;
    let output = '';
    Array.from(allElements).forEach(parent => {
        let nestedEle = parent.querySelectorAll('*');
        let nestedCount = nestedEle.length;
        output += `${parent.tagName.toLowerCase()} has ${nestedCount} nested elements. <br/>`
    });
    result.innerHTML = output;
}