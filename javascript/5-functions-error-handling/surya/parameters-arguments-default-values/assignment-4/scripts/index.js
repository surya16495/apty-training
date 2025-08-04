const output = document.getElementById('output');

function callback(str = "Default String"){
    return str.toUpperCase();
}

function processString() {
    const userInput = document.getElementById('string').value;
    const processed = function (input) {
        if (input === "") {
            return "No input provided";
        }

        return callback(input);
    };

    output.textContent = processed(userInput);
}
