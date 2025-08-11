let current = 0
function toggleDivs() {
    const divs = document.getElementsByTagName('div');
    const currentDiv = divs[current];

    if (currentDiv.style.visibility === "hidden") {
        currentDiv.style.visibility = "visible"
    } else {
        currentDiv.style.visibility = "hidden"
    }
    current = (current + 1) % divs.length;
}