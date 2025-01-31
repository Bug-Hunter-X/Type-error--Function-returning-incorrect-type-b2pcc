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

// Correcting the type error
function concatenateStrings(a: number, b: number): string {
  return a.toString() + b.toString();
}

//Alternative solution: Change logic to return a number
function addStringsAsNumbers(a:number, b: number): number{
  return parseInt(a.toString()) + parseInt(b.toString());
}