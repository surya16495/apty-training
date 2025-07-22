let a = 10;
var b = 15;
const c = 20;

const [var_1, var_2, let_1, let_2, const_1, const_2] = [
    document.getElementById("var_1"),
    document.getElementById("var_2"),
    document.getElementById("let_1"),
    document.getElementById("let_2"),
    document.getElementById("const_1"),
    document.getElementById("const_2"),
];
var_1.textContent = `value of var b is ${b}`;
let_1.textContent = `value of let a is ${a}`;
const_1.textContent = `value of const c is ${c}`;

function redeclareVar() {
    try {
        var b = 25;
        var_1.innerText = `var value redclared as ${b}`;
    } catch (e) {
        var_1.innerText = e;
    }
}
function redeclareLet() {
    try {
        let a = 15;
        let_1.innerText = `let value redeclared as ${a}`;
    } catch (e) {
        let_1.innerText = e;
    }
}
function redeclareConst() {
    try {
        var c = 30;
        const_1.innerText = `const value redclared as ${c}`;
    } catch (e) {
        const_1.innerText = e;
    }
}
function reassignVar() {
    b = b + 1;
    var_2.innerText = `Changed value of b is ${b}`;
}
function reassignLet() {
    a = a + 1;
    let_2.innerText = `Changed value of a is ${a}`;
}
function reassignConst() {
    try {
        c = c + 1;
        const_2.innerText = `Changed value of c is ${c}`;
    } catch (e) {
        const_2.innerText = e;
    }

}