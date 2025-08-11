const result = document.getElementById('result');

function countElements() {
    const allElements = document.body.children;
    Array.from(allElements).forEach(parent => {
        let nestedEle = parent.querySelectorAll('*');
        let nestedCount = nestedEle.length;
        result.innerHTML += `${parent.tagName.toLowerCase()} has ${nestedCount} nested elements. <br/>`
    });
}