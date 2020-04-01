console.log("");
console.log("=== ARRAY ===");

// array literal
var carros = ["Gol", "Fusca"];

// array OOP
var cars = new Array("Corsa", "Palio", "Uno");

// console.log(carros, cars);
// console.log(carros.constructor, cars.constructor);
console.dir(Array.prototype);

// array.comando()
cars.push("Opala"); // add no final do array
cars.unshift("Celta"); // add no começo do array
cars.splice(3, 0, "Spin"); // add na posicao x
// cars.splice(4, 1); // remove na posicao x
cars.splice(2, 1, "Onix"); // substitiu na posicao x
cars.sort(); // organiza alfabeticamente
cars.reverse(); // inverte o array
// cars.pop(); // remove o ultimo item do array
// cars.shift(); // remove o primeiro item do array

console.log( cars );

cars.forEach( function(carName, carIndex) {
    // console.log(arguments);
    console.log(carName, carIndex);
} );

// ["Uno", "Spin", "Opala", "Onix", "Corsa", "Celta"]

// console.log( cars.join(" - ") ); // gera uma string a partir do array

// console.log( cars[3] );
