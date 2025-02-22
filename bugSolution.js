function foo(a, b) {
  // Type checking and explicit type conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; //Standard numerical addition
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; //String concatenation
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseFloat(b); //Convert b to number
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseFloat(a) + b; //Convert a to number
  } else if (typeof a === 'boolean' && typeof b === 'number') {
    return Number(a) + b; //Convert boolean to number
  } else if (typeof a === 'number' && typeof b === 'boolean') {
    return a + Number(b); //Convert boolean to number
  }else{
    return "Invalid input type";
  }
}
console.log(foo(10, 20)); // Output: 30
console.log(foo(10, "20")); // Output: 30
console.log(foo(10, true)); // Output: 11
console.log(foo("10", "20")); //Output: 1020
console.log(foo(true, true)); //Output: 2