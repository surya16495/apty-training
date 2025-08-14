function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let cookie of cookiesArray) {
        cookie = cookie.trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Button actions
function setCookieBtn() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const days = document.getElementById("cookieDays").value;
    setCookie(name, value, days);
    document.getElementById("output").textContent = `Cookie "${name}" set!`;
}

function getCookieBtn() {
    const name = document.getElementById("cookieName").value;
    const cookieValue = getCookie(name);
    document.getElementById("output").textContent = cookieValue 
        ? `Cookie "${name}": ${cookieValue}` 
        : `Cookie "${name}" not found.`;
}

function deleteCookieBtn() {
    const name = document.getElementById("cookieName").value;
    deleteCookie(name);
    document.getElementById("output").textContent = `Cookie "${name}" deleted.`;
}