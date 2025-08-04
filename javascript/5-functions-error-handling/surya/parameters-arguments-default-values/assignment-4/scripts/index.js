const output = document.getElementById('output');

function callback(str = "Default String"){
    return str.toUpperCase();
}

function processString() {
    const userInput = document.getElementById('string').value;
    const processed = (input) => {
        if (input === "") {
            return callback(); 
        }

        return callback(input);
    };

    output.textContent = processed(userInput);
}
