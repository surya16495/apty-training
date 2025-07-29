const output = document.getElementById('output');

function calculate() {
    const string1 = document.getElementById('string1').value;

    output.textContent = '';
    document.getElementById('string1').value = '';
    if (string1 != '') {
        let charCount = {};
        for (let i in string1) {
            console.log(i);
            let char = string1[i];
            if (char === " ") {
                continue;
            }
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
        for (let char in charCount) {
            output.innerHTML += `Character '${char}' occurs ${charCount[char]} times<br>`;
        }

    } else {
        output.textContent = 'Enter some text'
    }

}