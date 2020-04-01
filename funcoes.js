console.log("");
console.log("=== FUNCOES ===");

var text = "It's your life";

console.log(text, text.toUpperCase(), text.toLowerCase());

var num = 12.3; // R$ 12,30

// camel case
function converteParaReais(n=0) {
    return "R$ " + n.toFixed(2).replace(".", ",");
}

console.log( converteParaReais() );
console.log( converteParaReais(25.3) );
console.log( converteParaReais(num) );




