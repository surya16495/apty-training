document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("localStorageOutput").textContent =
		localStorage.getItem("localStorageData") || "No data";
	document.getElementById("sessionStorageOutput").textContent =
		sessionStorage.getItem("sessionStorageData") || "No data";
});

document.getElementById("storageForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const localStorageData = document.getElementById("localStorageData").value;
	const sessionStorageData =
		document.getElementById("sessionStorageData").value;

	localStorage.setItem("localStorageData", localStorageData);
	sessionStorage.setItem("sessionStorageData", sessionStorageData);
});

document.getElementById("get").addEventListener("click", () => {
	document.getElementById("localStorageOutput").textContent =
		localStorage.getItem("localStorageData") || "No data";
	document.getElementById("sessionStorageOutput").textContent =
		sessionStorage.getItem("sessionStorageData") || "No data";
});