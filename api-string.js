console.log("=== API STRING ===");

var navegador = "Chrome"; // string literal
var browser = new String("Chrome"); // string OOP

console.log(
    navegador.constructor,
    browser.constructor
);

console.dir(String.prototype);
console.log(navegador.bold(), browser.bold());
console.log(navegador.repeat(2), browser.repeat(2));