const result = document.getElementById('result');

function merge(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key]) &&
        typeof obj1[key] === "object" &&
        obj1[key] !== null &&
        !Array.isArray(obj1[key])
      ) {
        obj1[key] = merge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}
 
function operation() {
  try {
    let [obj1,obj2] = [JSON.parse(document.getElementById("obj1").value),JSON.parse(document.getElementById("obj2").value)];
 
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
      result.textContent = "Both inputs must be valid objects.";
      return;
    }
 
    const mergedObj = merge(obj1, obj2);
    result.textContent = JSON.stringify(mergedObj);
  } catch (e) {
    result.textContent = "Invalid JSON input: " + e.message;
  }
}
 
 