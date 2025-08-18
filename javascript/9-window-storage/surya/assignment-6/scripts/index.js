const TARGET_ORIGIN = "*";

const frame = document.getElementById("childFrame");
const parentInput = document.getElementById("parentInput");
const parentLog = document.getElementById("parentLog");
const sendBtn = document.getElementById("sendToIframeBtn");

sendBtn.addEventListener("click", () => {
  const msg = parentInput.value || "(empty)";
  frame.contentWindow.postMessage({ from: "parent", text: msg }, TARGET_ORIGIN);
});

window.addEventListener("message", (event) => {
  console.log(event);
  const data = event.data;
  console.log(event.data);
  if (!data || typeof data !== "object" ) return;
  const {surya, text} = event.data;
  if(surya){
    parentLog.textContent += `\nReceived in Parent: ${surya} ${text}`;
  }
});