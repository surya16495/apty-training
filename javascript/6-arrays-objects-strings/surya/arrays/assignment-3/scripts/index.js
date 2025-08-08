const form = document.getElementById("form");
const queueInput = document.getElementById("queueInput");
const queueContents = document.getElementById("queueContents");
const dequeueButton = document.getElementById("dequeueButton");
const peekButton = document.getElementById("peekButton");
const result = document.getElementById("result");
peekButton.addEventListener("click", function () {
    if (queue.length === 0) {
        result.textContent = "Queue is empty, nothing to peek!";
    }
    else {
        const frontElement = queue[0];
        if (frontElement === "") {
            result.textContent = "Front element is empty!";
            return;
        }
        result.textContent = `Front element is: ${frontElement}`;
    }
});

dequeueButton.addEventListener("click", function () {
    if (queue.length === 0) {
        result.textContent = "Queue is empty, nothing to dequeue!";
        return;
    }
    else {
        queue.shift();
        updateQueueContents();
    }
});

const queue = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const elements = queueInput.value.split(",").map(item => item.trim());
    queue.push(...elements);
    updateQueueContents();
    queueInput.value = "";
});

function updateQueueContents() {
    queueContents.textContent = JSON.stringify(queue);
}
