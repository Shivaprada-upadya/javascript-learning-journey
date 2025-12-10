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

// Function with Debouncing
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}
const debouncedFunction = debounce(() => {
    console.log("Debounced function executed");
}, 1000);
debouncedFunction();
debouncedFunction();
debouncedFunction(); // Only the last call will execute after 1 second

// Function with Throttling
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}
const throttledFunction = throttle(() => {
    console.log("Throttled function executed");
}, 2000);
throttledFunction();
throttledFunction();
throttledFunction(); // Only the first call will execute immediately, others will be ignored within 2 seconds

//  Function with Event Handling
function handleClick(event) {
    console.log("Button clicked!", event);
}
document.getElementById("myButton").addEventListener("click", handleClick);
// Make sure to have a button with id "myButton" in your HTML for the above line to work.

//  Function with Recursion and Memoization
function memoizedFibonacci() {
    const cache = {};
    return function fibonacci(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n <= 1) {
            return n;
        }
        const result = fibonacci(n - 1) + fibonacci(n - 2);
        cache[n] = result;
        return result;
    }
}
const fibonacci = memoizedFibonacci();
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610 (computed using cached values)

//      Function with Async Recursion
async function asyncFactorial(n) {
    if (n === 0) {
        return 1;
    }
    const result = await asyncFactorial(n - 1);
    return n * result;
}
asyncFactorial(5).then(result => {
    console.log("Async Factorial of 5:", result); // Output: 120
});

//  Function with Error-First Callback
function readFileCallback(filename, callback) {
    setTimeout(() => {
        if (filename !== "validFile.txt") {
            return callback(new Error("File not found"), null);
        }
        const data = "File content";
        callback(null, data);
    }
    , 1000);
}
readFileCallback("invalidFile.txt", (error, data) => {
    if (error) {
        console.error("Error reading file:", error.message);
    }
    else {
        console.log("File data:", data);
    }
});

readFileCallback("validFile.txt", (error, data) => {
    if (error) {
        console.error("Error reading file:", error.message);
    }
    else {
        console.log("File data:", data);
    }

});
// Output: File data: File content
    
// Function with Promise-based Error Handling
function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (filename !== "validFile.txt") {
                return reject(new Error("File not found"));
            }
            const data = "File content";
            resolve(data);
        }, 1000);
    });
}
readFilePromise("invalidFile.txt")
    .then(data => {
        console.log("File data:", data);
    })
    .catch(error => {
        console.error("Error reading file:", error.message);
    });

readFilePromise("validFile.txt")

    .then(data => {
        console.log("File data:", data);
    }
    )
    .catch(error => {
        console.error("Error reading file:", error.message);
    });
// Output: File data: File content

// Function with Async/Await Error Handling
async function
readFileAsync(filename) {
    try {
        const data = await readFile
        Promise(filename);
        console.log("File data:", data);
    } catch (error) {
        console.error("Error reading file:", error.message);
    }
}
readFileAsync("invalidFile.txt");
readFileAsync("validFile.txt");
// Output: File data: File content

//  Function with Custom Error Class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function riskyFunction() {
    throw new CustomError("This is a custom error message.");
}
try {
    riskyFunction();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a CustomError:", error.message);
    }
    else {
        console.error("Caught an unexpected error:", error);
    }
}
// Output: Caught a CustomError: This is a custom error message.
    
// Function with Function.prototype.bind
const person = {
    name: "Charlie",
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};
const greetPerson = person.greet.bind(person);
greetPerson("Hello"); // Output: Hello, my name is Charlie

// Function with Function.prototype.call
const anotherPerson = {
    name: "Dave"
};
person.greet.call(anotherPerson, "Hi"); // Output: Hi, my name is Dave

//  Function with Function.prototype.apply
person.greet.apply(anotherPerson, ["Hey"]); // Output: Hey, my name is Dave

// Function with Function Composition
function compose(f, g) {
    return function(x) {
        return f(g(x));
    }
}
const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const addThenMultiply = compose(multiplyByThree, addTwo);
console.log(addThenMultiply(5)); // Output: 21 ((5 + 2) * 3)
