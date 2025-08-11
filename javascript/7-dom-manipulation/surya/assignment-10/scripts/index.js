const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    table { border-collapse: collapse; width: 100%; text-align: center; }
                    th, td { border: 1px solid black; padding: 10px; }
                </style>
            </head>
            <body>
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>Row Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Array.from({ length: 10 }, (_, i) => `
                            <tr>
                                <td>Row ${i + 1}</td>
                                <td>
                                    <button>Select</button>
                                </td>
                            </tr>`).join("")}
                    </tbody>
                </table>
            </body>
            </html>
        `;

const shadowContainer = document.getElementById("shadow-container");
const shadowRoot = shadowContainer.attachShadow({ mode: "open" });

const shadowContent = document.createElement("div");
shadowContent.innerHTML = htmlContent;
shadowRoot.appendChild(shadowContent);

shadowRoot.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Select") {
        shadowRoot
            .querySelectorAll("#myTable tbody tr")
            .forEach((row) => row.classList.remove("active"));
        e.target.closest("tr").classList.add("active");
    }
});

document.getElementById("btnUp").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");

    if (!activeRow) return alert("Select a row first!");
    const prevRow = activeRow.previousElementSibling;
    if (prevRow) {
        activeRow.parentNode.insertBefore(activeRow, prevRow);
    }
});

document.getElementById("btnDown").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");
    if (!activeRow) return alert("Select a row first!");
    const nextRow = activeRow.nextElementSibling;
    if (nextRow) {
        activeRow.parentNode.insertBefore(nextRow, activeRow);
    }
});

document.getElementById("btnTop").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");

    if (!activeRow) return alert("Select a row first!");
    const tableBody = activeRow.parentNode;
    tableBody.insertBefore(activeRow, tableBody.firstElementChild);
});

document.getElementById("btnBottom").addEventListener("click", () => {
    const activeRow = shadowRoot.querySelector("#myTable tbody tr.active");

    if (!activeRow) return alert("Select a row first!");
    const tableBody = activeRow.parentNode;
    tableBody.appendChild(activeRow);
});
