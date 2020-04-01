console.log("");
console.log("=== OBJETOS ===");
/*
            OBJETO
        CARACT   AÇÕES()

            pessoa
        altura   ler()
        peso     andar()
        idade    comer()
        sexo     estudar()
        cabelo   trabalhar()
*/

// objeto - literal
var pessoa = {}; // objeto vazio

// objeto - propriedades (caracteristicas)
// objeto.propriedade = "valor";
pessoa.altura = 1.89;
pessoa.peso = 100;

// objeto - métodos (ações)
// objeto.metodo = function() { }
pessoa.andar = function() {
    return "andando...";
}

pessoa.comer = function() {
    return "comendo...";
}

console.log(pessoa);