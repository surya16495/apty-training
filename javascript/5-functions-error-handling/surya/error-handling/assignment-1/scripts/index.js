function parseAndHandleJSON() {
    const jsonString = document.getElementById('jsonInput').value

    if (!jsonString.trim()) {
        document.getElementById('result').innerText = "Please enter a JSON string!"
        return
    }

    try {
        const parsed = JSON.parse(jsonString)
        document.getElementById('result').innerText = `Parsed JSON: ${JSON.stringify(parsed, null, 2)}`
    } catch (error) {
        document.getElementById('result').innerText = "Invalid JSON! Please check the format and try again."
    }
}
