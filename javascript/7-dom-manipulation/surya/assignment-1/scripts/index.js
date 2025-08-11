function changeTextColor() {
    const ids = ["para1", "para2", "para3"];
    ids.forEach(id => {
        const el = document.getElementById(id);
        el.style.color = getRandomColor();
    });
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function toggleClassBg() {
    const elements = document.getElementsByClassName("group");
    for (let el of elements) {
        el.classList.toggle("highlight");
    }
}
function changeSpanText() {
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = "Updated Span " + (i + 1);
    }
}

function toggleDisabled() {
    const inputs = document.querySelectorAll('td:nth-of-type(4) input[type="text"]');
    inputs.forEach(input => {
        input.disabled = !input.disabled;
        input.placeholder = input.disabled ? 'disabled' : 'enabled';
    });
}

function addCustomAttribute() {
    const element = document.querySelector('[data-custom="a2"]');
    element.setAttribute("data-new", "added");
    element.textContent = element.textContent + " (New attr added)";
}