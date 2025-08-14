function sendToParent() {
  let msg = document.getElementById("childMessage").value;
  window.parent.postMessage(msg, "*");
}
 
window.onmessage = function (event) {
  document.getElementById("parentMsg").textContent = event.data;
};
 