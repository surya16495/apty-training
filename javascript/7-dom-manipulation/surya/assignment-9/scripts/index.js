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
                                    <button onclick="setActiveRow(${i + 1})">Select</button>
                                </td>
                            </tr>`).join("")}
                    </tbody>
                </table>
                <script>
                    let activeRow = null;
                    window.setActiveRow = function(rowNumber) {
                        activeRow = document.querySelectorAll('#myTable tbody tr')[rowNumber - 1];
                    }
                    window.getActiveRow = function() {
                        return activeRow;
                    }
                </script>
            </body>
            </html>
        `;

const iframe = document.getElementById("tableIframe");
let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.open();
iframeDoc.write(htmlContent);
iframeDoc.close();

iframe.onload=()=>{
document.getElementById("btnUp").addEventListener("click", () => {
    const activeRow = iframe.contentWindow.getActiveRow();
    if (!activeRow) return alert("Select a row first!");
    const prevRow = activeRow.previousElementSibling;
    if (prevRow) {
        activeRow.parentNode.insertBefore(activeRow, prevRow);
    }
});

document.getElementById("btnDown").addEventListener("click", () => {
    const activeRow = iframe.contentWindow.getActiveRow();
    if (!activeRow) return alert("Select a row first!");
    const nextRow = activeRow.nextElementSibling;
    if (nextRow) {
        activeRow.parentNode.insertBefore(nextRow, activeRow);
    }
});

document.getElementById("btnTop").addEventListener("click", () => {
    const activeRow = iframe.contentWindow.getActiveRow();
    if (!activeRow) return alert("Select a row first!");
    const tableBody = activeRow.parentNode;
    tableBody.insertBefore(activeRow, tableBody.firstElementChild);
});

document.getElementById("btnBottom").addEventListener("click", () => {
    const activeRow = iframe.contentWindow.getActiveRow();
    if (!activeRow) return alert("Select a row first!");
    const tableBody = activeRow.parentNode;
    tableBody.appendChild(activeRow);
});
}