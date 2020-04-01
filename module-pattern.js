console.log("");
console.log("=== (REVEALING) MODULE PATTERN ===");

// IIFE - Immediately Invoked Function Expression
// Função Imediata
var APP = (function () {
    console.log("starting app...");

    var myAnalytics = {};

    // propriedade
    myAnalytics.count = 0;

    // métodos
    myAnalytics.incrementCount = function() {
        return myAnalytics.count += 1;
    }

    myAnalytics.clearCount = function() {
        return myAnalytics.count = 0;
    }

    // revealing API
    return {
        increment: myAnalytics.incrementCount,
        clear: myAnalytics.clearCount
    };

    // console.log(myAnalytics);
})();