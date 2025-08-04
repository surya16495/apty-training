const users = {
    "prakash": { "address": { "city": "Hyderabad" } },
    "surya": { "address": { "city": "Mumbai" } }
}


function getCity() {
    const userName = document.getElementById('username').value.trim()
    const resultElement = document.getElementById('result')

    try {
        const city = users[userName].address.city
        resultElement.innerText = `City: ${city}`
    } catch (error) {
        resultElement.innerText = `Error: User "${userName}" not found or data is missing.`
    }
}