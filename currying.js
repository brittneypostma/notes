const multiply = (a, b) => a * b;

//currying breaks apart the function, so each piece can be reused
const curriedMultiply = a => b => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

//sometime later
curriedMultiplyBy5(4); //returns 20
