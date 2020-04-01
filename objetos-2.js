console.log("");
console.log("=== OBJETOS 2 ===");

// objeto - literal
var carro = {};

// dot notation
// objeto.propriedade = "valor";
carro.cor = "azul";

// objeto.metodo = function() {}
carro.ligar = function() {
    return "ON";
}

// bracket notation
// objeto["propriedade"] = "valor";
carro["modelo"] = "Fox";

// objeto["metodo"] = function() {}
carro["desligar"] = function() {
    return "OFF";
}

console.log(carro);
console.log(carro["cor"]);
console.log(carro.modelo);
console.log(carro.ligar(), carro.desligar());