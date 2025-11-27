function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5


//Arrow function example
const add1 = (a,b)=>{
    console.log("a + b = ",(a+b));
}

add1(10,20);


//self invoking function
(()=>{
    console.log("This is a self-invoking function");
})();

// Callback Functions
function num(n, callback) {
    return callback(n);
}
​
const double = (n) => n * 2;
​
console.log(num(5, double));

// Function Expression
const multiply = function(x, y) {
    return x * y;
};

// Using the function expression
console.log(multiply(4, 5)); // Output: 20

// imediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE");
})();

// arrow function with implicit return
const square = n => n * n;
console.log(square(6)); // Output: 36

// promise-based function
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 2000);
    });
}

// Using the promise-based function
fetchData()
    .then(data => {
        console.log("Data fetched:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Async/Await function
async function getData() {
    try {
        const data = await fetchData();
        console.log("Async/Await Data fetched:", data);
    } catch (error) {
        console.error("Error fetching data with Async/Await:", error);
    }
}

// Using the async/await function
getData();  

// Recursive Function
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}       
console.log(factorial(5)); // Output: 120   

//  Higher-Order Function
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}           
const sum = (x, y) => x + y;
const product = (x, y) => x * y;        
console.log(operateOnNumbers(3, 4, sum));      // Output: 7 
console.log(operateOnNumbers(3, 4, product));  // Output: 12

// Function with Default Parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}   
greet();           // Output: Hello, Guest!
greet("Alice");    // Output: Hello, Alice!

// Closure Example
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {  
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }
}
const newFunction = outerFunction("outside");
newFunction("inside");

// Function with Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//  Function with Spread Operator
function displayColors(color1, color2, color3) {
    console.log(`Colors: ${color1}, ${color2}, ${color3}`);
}   
const colors = ["Red", "Green", "Blue"];
displayColors(...colors); // Output: Colors: Red, Green, Blue   

// Function with Object Destructuring
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "Bob", age: 30 };
printUser(user); // Output: Name: Bob, Age: 30

//   Function with Array Destructuring
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}
const coordinates = [10, 20];
printCoordinates(coordinates); // Output: X: 10, Y: 20

// Function with Callback and Error Handling
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = { id: 2, name: "Jane Doe" };
        callback(null, data);
    }, 1000);
}
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Error fetching data:", error);
    } else {    
        console.log("Data fetched with callback:", data);
    }
});

// Function with Error Handling using Try/Catch
function riskyOperation() {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}
riskyOperation();

// Function with Method Definition in Object
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5)); 

//  Function with Method Definition using Shorthand Syntax
const advancedCalculator = {
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

};
console.log(advancedCalculator.multiply(10, 5));
console.log(advancedCalculator.divide(10, 2));

//      Function with Generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// Function with Memoization
function memoizedFactorial() {
    const cache = {};
    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) {
            return 1;
        }
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }
}
const factorialMemo = memoizedFactorial();
console.log(factorialMemo(5)); // Output: 120
console.log(factorialMemo(6)); // Output: 720 (computed using cached value for 5)

// Function with Currying
function curryAdd(a) {
    return function(b) {
        return a + b;
    }
}
const addFive = curryAdd(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

// Function with Partial Application
function partialMultiply(a, b) {
    return function(c) {
        return a * b * c;
    }
}
const multiplyByTwoAndThree = partialMultiply(2, 3);
console.log(multiplyByTwoAndThree(4));

// Output: 24
console.log(multiplyByTwoAndThree(5)); // Output: 30
// Function with Type Checking
function safeAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }
    return a + b;
}
console.log(safeAdd(10, 20)); // Output: 30
//console.log(safeAdd(10, "20")); // Throws Error: Both arguments must be numbers.

// Function with Logging
function loggedMultiply(a, b) {
    const result = a * b;
    console.log(`Multiplying ${a} and ${b} gives ${result}`);
    return result;
}
loggedMultiply(4, 5); // Output: Multiplying 4 and 5 gives 20



