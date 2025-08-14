function sendToIframe() {
  let msg = document.getElementById("parentMessage").value;
  document.getElementById("myFrame").contentWindow.postMessage(msg, window.location.origin);
}
 
window.onmessage = function (event) {
  document.getElementById("iframeMsg").textContent = event.data;
};
 