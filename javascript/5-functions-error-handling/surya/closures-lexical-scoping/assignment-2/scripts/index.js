const scoping_form=document.getElementById("scoping-form");
scoping_form.addEventListener("submit", function (event) {
        event.preventDefault();

        const outerVariable = document.getElementById("outer-variable").value;
        const middleVariable = document.getElementById("middle-variable").value;
        const innerVariable = document.getElementById("inner-variable").value;

        const outerFunction = () => {
            const outer = outerVariable;

            const middleFunction = () => {
                const middle = middleVariable;

                const innerFunction = () => {
                    const inner = innerVariable;
                    return `[outer , middle , inner] = ${outer} ${middle} ${inner}`;
                };

                return innerFunction();
            };

            return middleFunction();
        };

        document.getElementById("scoping-output").textContent = outerFunction();
    });