function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// This will cause a type error because the return type of the function is number, but it is returning a string
function concatenateStrings(a: number, b: number): number {
  return a.toString() + b.toString();
}