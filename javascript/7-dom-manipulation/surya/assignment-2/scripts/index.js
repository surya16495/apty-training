const assignment1HTML = `
        <style>
            table { border-collapse: collapse; width: 100%; text-align: center; }
            th, td { border: 1px solid black; padding: 10px; vertical-align: top; }
            .highlight { background-color: yellow; }
        </style>
        <table>
            <tr>
                <th>id</th>
                <th>className</th>
                <th>tag</th>
                <th>name</th>
                <th>attribute</th>
            </tr>
            <tr>
                <td>
                    <p id="para1">Paragraph with id para1</p>
                    <p id="para2">Paragraph with id para2</p>
                    <p id="para3">Paragraph with id para3</p>
                </td>
                <td>
                    <p class="group">Class Group Element 1</p>
                    <p class="group">Class Group Element 2</p>
                    <p class="group">Class Group Element 3</p>
                </td>
                <td>
                    <span>Span element 1</span><br>
                    <span>Span element 2</span><br>
                    <span>Span element 3</span><br>
                </td>
                <td>
                    <input type="text" name="input1" value="Name 1"><br>
                    <input type="text" name="input2" value="Name 2"><br>
                    <input type="text" name="input3" value="Name 3"><br>
                </td>
                <td>
                    <p data-custom="a1">Custom Attribute 1</p>
                    <p data-custom="a2">Custom Attribute 2</p>
                    <p data-custom="a3">Custom Attribute 3</p>
                </td>
            </tr>
        </table>
    `;

    const iframeDoc = document.getElementById("myIframe").contentDocument;
    iframeDoc.open();
    iframeDoc.write(assignment1HTML);
    iframeDoc.close();

    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    document.getElementById("iframeBtnId").addEventListener("click", () => {
        ["para1", "para2", "para3"].forEach(id => {
            iframeDoc.getElementById(id).style.color = getRandomColor();
        });
    });

    document.getElementById("iframeBtnClass").addEventListener("click", () => {
        const elements = iframeDoc.getElementsByClassName("group");
        for (let el of elements) {
            el.classList.toggle("highlight");
        }
    });

    document.getElementById("iframeBtnTag").addEventListener("click", () => {
        const spans = iframeDoc.getElementsByTagName("span");
        for (let i = 0; i < spans.length; i++) {
            spans[i].innerHTML = "Updated Span " + (i + 1);
        }
    });

    document.getElementById("iframeBtnName").addEventListener("click", () => {
        const inputs = iframeDoc.querySelectorAll('input[name]');
        inputs.forEach(input => {
            input.disabled = !input.disabled;
        });
    });

    document.getElementById("iframeBtnAttr").addEventListener("click", () => {
        const element = iframeDoc.querySelector('[data-custom="a2"]');
        element.setAttribute("data-new", "added");
        element.textContent += " (New attr added)";
    });