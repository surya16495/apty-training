const caution = document.getElementById("caution");
document
    .getElementById("filter-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const numberArrayInput = document.getElementById("number-array").value;
        const limit = parseFloat(document.getElementById("limit").value);

        if (!numberArrayInput || isNaN(limit)) {
            caution.textContent = "Please enter valid numbers and a filter limit.";
            return;
        }

        const numbers = numberArrayInput
            .split(",")
            .map((num) => parseFloat(num.trim()))
            .filter((num) => !isNaN(num));

        if (numbers.length === 0) {
            caution.textContent = "Please enter at least one valid number.";
            return;
        }

        const filterNumbers = (callback, arr) => arr.filter(callback);

        const filtered = filterNumbers((num) => num <= limit, numbers);

        document.getElementById("filtered-output").textContent =
            filtered.join(", ") || "No numbers passed the filter.";
    });