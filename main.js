
// Function

function add(numValue1,numValue2) {
    let result = numValue1 + numValue2;
    return result * 12;
    
}

function mul(numValue1,numValue2) {
    let result = numValue1 * numValue2;
    return result * 12;
    
}

function sub(numValue1,numValue2) {
    let result = numValue1 -numValue2;
    return result * 12;
    
}

console.log(add(5,7)); //144
console.log(mul(5,10)); //600
console.log(sub(8,7)); // 12


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Call Back Function

function calculations(numValue1, numValue2, funcOperation){
    let result = funcOperation(numValue1, numValue2)
    return result * 12;

}


// Addition
let result = calculations(5,7, function(funcNumvalue1, funcNumvalue2){
    return funcNumvalue1 + funcNumvalue2;
    
} )
console.log(result); // 144


// Substraction
 result = calculations(8,7, function(funcNumvalue1, funcNumvalue2){
    return funcNumvalue1 - funcNumvalue2;
    
} )
console.log(result); // 12


// Multiplication
 result = calculations(5,10, function(funcNumvalue1, funcNumvalue2){
    return funcNumvalue1 * funcNumvalue2;
    
} )
console.log(result); // 600


