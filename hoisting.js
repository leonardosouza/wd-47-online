console.log("");
console.log("=== HOISTING / CLOUSURE ===");

// define variavel
var local = "fora";

// cria funcao
function testLocal() {
    console.log(local); // antes "fora" pela clousure / depois undefined -> wtf?
    var local = "dentro"; // hoisting ocorreu aqui
    console.log(local); // dentro
}

// executa funcao
testLocal();