function foo(a, b) {
  // Handle null and undefined values explicitly
  const numA = a === null || a === undefined ? 0 : a;
  const numB = b === null || b === undefined ? 0 : b;
  return numA + numB; //Correct: handles undefined and null
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(undefined, 2)); //2
console.log(foo(1, undefined)); //1
console.log(foo(undefined, undefined)); //0