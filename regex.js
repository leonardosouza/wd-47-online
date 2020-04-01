console.log("");
console.log("=== REGULAR EXPRESSIONS ===");

// CEP: ^[0-9]{5}\-[0-9]{3}$
// CEP: ^\d{5}\-\d{3}$
// EMAIL: ^[A-z0-9\-\.\$]{1,}\@\w+\.\w{1,4}(\.\D{1,3})?$
// TELEFONE: ^(\+\d{2,3}\s\(\d{2}\)\s)?9?\d{4}\-?\d{4}$

var input = "08030-190";
//var input = prompt("Digite seu CEP:");
console.log(input);

// regex literal
var reCep =  /^([0-9]{5})\-?([0-9]{3})$/;

// api RegExp
// console.log(reCep, reCep.constructor);
console.log("test =>", reCep.test(input) );
console.log("exec =>", reCep.exec(input) );

// api String
console.log("match =>", input.match(reCep) );

// METACARACTERES
/*
^           INICIO DA LINHA
$           FINAL DA LINHA
[i-f]       LISTA PERMITIDA (INTERVALO)
{n}         QUANTIFICADOR ABSOLUTO
{min,max}   QUANTIFICADOR MIN/MAX
\c          ESCAPE (CARACTERES ESPECIAIS)
\d          APENAS DIGITOS
\D          NÃO DIGITO
\w          ALFANUMERICO
+           REPETIDOR
()          AGRUPADOR
?           OPCIONAL
.           CORINGA (QUALQUER COISA)
\s          ESPAÇO
\t          TAB
*/

