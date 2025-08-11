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
    let names = ['input1','input2','input3'];
    for (let i=0; i<names.length;i++){
        document.getElementsByName(names[i])[0].disabled=true;
        document.getElementsByName(names[i])[0].placeholder='disabled';
    }
    
}

function addCustomAttribute() {
    const element = document.querySelector('[data-custom="a2"]');
    element.setAttribute("data-new", "added");
    element.textContent = element.textContent + " (New attr added)";
}