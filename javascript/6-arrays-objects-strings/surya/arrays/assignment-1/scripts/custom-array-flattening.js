const form = document.getElementById("form");
const arrayInput = document.getElementById("arrayInput");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    result.textContent = ""; 
    if (!arrayInput.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let nestedArray = [];
    try {
        nestedArray = JSON.parse(arrayInput.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    console.log("Parsed Nested Array:", nestedArray);
    const flattenedArray = flattenArray(nestedArray);
    result.textContent = JSON.stringify(flattenedArray);
    console.log("Flattened Array:", flattenedArray);
});

function flattenArray(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
