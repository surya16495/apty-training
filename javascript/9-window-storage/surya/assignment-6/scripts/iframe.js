const childInput = document.getElementById("childInput");
const childLog = document.getElementById("childLog");
 
document.getElementById("sendToParentBtn").addEventListener("click", () => {
  const msg = childInput.value || "(empty)";
  window.top.postMessage({ surya: "iframe", text: msg },"*");
});
 
window.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || typeof data !== "object") return;
  childLog.textContent = `Received in Iframe: ${JSON.stringify(data)}`;
});

wind