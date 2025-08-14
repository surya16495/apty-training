let childWindow;

document.getElementById("openChildWindow").addEventListener("click", () => {
	childWindow = window.open(
		"../child/window-relation-child.html",
		"childWindow",
		"width=400,height=300"
	);
});

document.getElementById("sendMessageToChild").addEventListener("click", () => {
	if (childWindow) {
		childWindow.postMessage("Hello from Parent Window!", "*");
	}else {
		console.warn("No child window reference found.");
	}
});

window.addEventListener("message", (event) => {
	document.getElementById(
		"messageFromChild"
	).textContent = `Message from Child: ${event.data}`;
});