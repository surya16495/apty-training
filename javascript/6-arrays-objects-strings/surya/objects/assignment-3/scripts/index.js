function demonstrateInheritance() {
    const outputDiv = document.querySelector(".output");

    const person = {
      name: "John",
      greet: function () {
        return `Hello, ${this.name} the ${this.job}!`;
      },
    };

    const employee = Object.create(person);
    employee.jobId = 123;

    person.Country = "India";

    const result = employee.greet();
    outputDiv.innerHTML = result;

}