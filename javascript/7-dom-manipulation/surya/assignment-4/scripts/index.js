const result = document.getElementById('result');

function countElements() {
const allElements = document.body.querySelectorAll("*");
    const uniqueTags = [...new Set(
    Array.from(allElements).map(el => el.tagName.toLowerCase())
    )];
    const obj = {};
    uniqueTags.map(tag=>obj[tag]=document.body.querySelectorAll(tag).length);
    result.textContent=JSON.stringify(obj);
}