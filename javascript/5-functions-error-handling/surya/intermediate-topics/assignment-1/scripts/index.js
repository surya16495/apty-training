const caution = document.getElementById("caution");
document
    .getElementById("repeat-action-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const itemText = document.getElementById("item-text").value;
        const repeatCount = parseInt(
            document.getElementById("repeat-count").value
        );
        const itemList = document.getElementById("item-list");

        itemList.innerHTML = "";

        if (!itemText || isNaN(repeatCount) || repeatCount < 1) {
            caution.textContent = "Please enter valid text and a positive number.";
            return;
        }

        const repeatAction = (action, n) => {
            for (let i = 0; i < n; i++) {
                action();
            }
        };

        repeatAction(() => {
            const li = document.createElement("li");
            li.textContent = itemText;
            itemList.appendChild(li);
        }, repeatCount);
    });