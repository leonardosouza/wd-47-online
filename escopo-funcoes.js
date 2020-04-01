console.log("");
console.log("=== ESCOPO FUNCOES ===");

function testScope() {
    escopo = "global"; // ma pratica - global implicita
    var interna = "local"; // boa pratica - controla escopo
    console.log("INTERNO ==>", escopo );
    console.log("INTERNO ==>", interna );
}

testScope();

console.log("EXTERNO ==>", escopo );
console.log("EXTERNO ==>", interna );