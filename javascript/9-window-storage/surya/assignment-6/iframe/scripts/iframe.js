function sendToParent() {
  let msg = document.getElementById("childMessage").value;
  window.parent.postMessage(msg, window.location.origin);
}
 
window.onmessage = function (event) {
  if (event.origin !== window.location.origin) {
    return;
  }
  document.getElementById("parentMsg").textContent = event.data;
};
 