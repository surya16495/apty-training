const result = document.getElementById('result');

function countElements() {
    const allElements = document.body.querySelectorAll("*");
    const tagCounts = {};
    allElements.forEach(el => {
        const tagName = el.tagName.toLowerCase();
        tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
    });
    result.textContent = JSON.stringify(tagCounts);
}