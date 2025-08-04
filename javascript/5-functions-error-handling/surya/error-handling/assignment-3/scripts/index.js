const users = {
    "surya": { "address": { "city": "Hyderabad" } },
    "prakash": { "address": { "city": "Mumbai" } }
}

const default_city = "Pune"

function getCity() {
    const userName = document.getElementById('username').value.trim()
    const resultElement = document.getElementById('result')
    let city

    try {
        city = users[userName].address.city
        resultElement.innerText = `City: ${city}`

    } catch (error) {

        resultElement.innerText = `Error: User "${userName}" not found or data is missing.`

    } finally {

        if (!city) {
            resultElement.innerText += `\nDefault City: ${default_city}`
        }
    }
}