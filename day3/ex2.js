const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 3)); 


let globalVar = "I am global"; 

function testScope() {
    let localVar = "I am local"; 
    console.log(globalVar); 
    console.log(localVar);  
}

testScope();
console.log(globalVar); 
console.log(localVar); 

console.log(declaredFunction()); // isn not hoisted 

function declaredFunction() {
    return "I am a function declaration!";
}


console.log(expressionFunction()); // will not work because it is expression function and when function is assigned to variable it is not hoisted

const expressionFunction = function() {
    return "I am a function expression!";
};
