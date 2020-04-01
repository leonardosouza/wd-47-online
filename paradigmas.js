console.log("=== PARADIGMAS ===");

// string - literal - menos expressivo / implicito
var empresa = "Caelum";
// number - literal
var idade = 12;

// string - OOP - mais expressivo / explicito
var company = new String("Caelum");
// number - OOP
var age = new Number(12);

console.log(
    "empresa", empresa, typeof empresa, empresa.constructor
);
console.log(
    "company", company, typeof company, company.constructor
);