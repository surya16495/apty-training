const form = document.getElementById("form");
const stackInput = document.getElementById("stackInput");
const stackContents = document.getElementById("stackContents");
const popButton = document.getElementById("popButton");
const peekButton = document.getElementById("peekButton");
const result = document.getElementById("result");
peekButton.addEventListener("click", function () {
    if (stack.length === 0) {
        result.textContent = "Stack is empty, nothing to peek!";
    }
    else {
        const topElement = stack[stack.length - 1];
        if (topElement === "") {
            result.textContent = "Top element is empty!";
            return;
        }
        result.textContent = `Top element is: ${topElement}`;
    }
});

popButton.addEventListener("click", function () {
    if (stack.length === 0) {
        result.textContent = "Stack is empty, nothing to pop!";
        return;
    }
    else {
        stack.pop();
        updateStackContents();
    }
});

const stack = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const elements = stackInput.value.split(",").map(item => item.trim());
    stack.push(...elements);
    updateStackContents();
    stackInput.value = "";
});

function updateStackContents() {
    stackContents.textContent = JSON.stringify(stack);
}
