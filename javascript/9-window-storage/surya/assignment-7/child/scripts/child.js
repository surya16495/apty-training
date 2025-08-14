document.getElementById("sendMessageToParent").addEventListener("click", () => {
	if (window.opener) {
        window.opener.postMessage("Hello from Child Window!", "*");
    } else {
        console.warn("No opener window found.");
    }
});

window.addEventListener("message", (event) => {
	document.getElementById(
		"messageFromParent"
	).textContent = `Message from Parent: ${event.data}`;
});