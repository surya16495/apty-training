function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector(".output");
    const userInput = document.querySelector("#object_input").value.trim();

    if (!userInput) {
      output_div.innerText = "Please provide an object to clone.";
      return;
    }

    try {
      const inputObject = JSON.parse(userInput);

      const clonedObject = deepClone(inputObject);

      clonedObject.b.c = 3;

      output_div.innerHTML = `
        <strong>Original Object:</strong><br>${JSON.stringify(inputObject,)}<br><br>
        <strong>Cloned Object (after modification):</strong><br>${JSON.stringify(clonedObject)}
      `;
    } catch (error) {
      output_div.innerText = "Invalid JSON format. Please check your input.";
    }
  }

  function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj; 
    }

    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }

    const cloned = {};
    for (let key in obj) {
        cloned[key] = deepClone(obj[key]);
    }

    return cloned;
  }

