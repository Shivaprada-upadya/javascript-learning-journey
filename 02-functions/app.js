-
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

// Function with Tail Recursion
function tailRecursiveFactorial(n, accumulator = 1) {
    if (n === 0) {
        return accumulator;
    }
    return tailRecursiveFactorial(n - 1, n * accumulator);
}
console.log(tailRecursiveFactorial(5)); // Output: 120

//      Function with Variadic Parameters
function variadicSum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(variadicSum(1, 2, 3, 4, 5)); // Output: 15
console.log(variadicSum(10, 20)); // Output: 30

// Function with Named Parameters using Object
function createUser({ name, age, email }) {
    return {
        name,
        age,
        email
    };
}
const newUser = createUser({ name: "Eve", age: 28, email: "eve@example.com" });
console.log(newUser); // Output: { name: 'Eve', age: 28, email: 'eve@example.com' }

// Function with Function Overloading Simulation
function overloadedFunction() {
    if (arguments.length === 1) {
        return `One argument: ${arguments[0]}`;
    }
    else if (arguments.length === 2) {
        return `Two arguments: ${arguments[0]}, ${arguments[1]}`;
    }
    else {
        return `No arguments or more than two arguments`;
    }
}
console.log(overloadedFunction(10)); // Output: One argument: 10
console.log(overloadedFunction(10, 20)); // Output: Two arguments: 10, 20
console.log(overloadedFunction()); // Output: No arguments or more than two arguments

// Function with Side Effects
let counter = 0;
function incrementCounter() {
    counter++;
    console.log("Counter:", counter);
}
incrementCounter(); // Output: Counter: 1
incrementCounter(); // Output: Counter: 2
incrementCounter(); // Output: Counter: 3

// Pure Function Example
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(3, 4)); // Output: 7
console.log(pureAdd(3, 4)); // Output: 7
console.log(pureAdd(5, 6)); // Output: 11
    
//  Function with Event Emitter Pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
}
const emitter = new EventEmitter();
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});
emitter.emit("greet", "Frank"); // Output: Hello, Frank!

// Function with Function.prototype.toString
function sampleFunction() {
    return "This is a sample function.";
}
console.log(sampleFunction.toString());
// Output: function sampleFunction() {
//             return "This is a sample function.";
//         }

//  Function with Function Length Property
function funcWithThreeParams(a, b, c) {
    return a + b + c;
}
console.log(funcWithThreeParams.length); // Output: 3
    
// Function with Function Name Property
function namedFunction() {
    return "This function has a name.";
}
console.log(namedFunction.name); // Output: namedFunction

// Function with Function.prototype.apply for Array Manipulation
function findMaxInArray(arr) {
    return Math.max.apply(null, arr);
}
const numbersArray = [3, 5, 1, 8, 2];
console.log(findMaxInArray(numbersArray)); // Output: 8

// Function with Function.prototype.call for Array Manipulation
function findMinInArray(arr) {
    return Math.min.call(null, ...arr);
}
const numsArray = [7, 4, 9, 2, 6];
console.log(findMinInArray(numsArray)); // Output: 2

//  Function with Function.prototype.bind for Partial Application
function power(base, exponent) {
    return Math.pow(base, exponent);
}
const square = power.bind(null, undefined, 2);
console.log(square(5)); // Output: 25
console.log(square(10)); // Output: 100

//  Function with Function.prototype.apply for Method Borrowing
const arrayLikeObject = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};
const toArray = Array.prototype.slice.apply(arrayLikeObject);
console.log(toArray); // Output: ['a', 'b', 'c']

//  Function with Function.prototype.call for Method Borrowing
const anotherArrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
const toArrayUsingCall = Array.prototype.slice.call(anotherArrayLikeObject);
console.log(toArrayUsingCall); // Output: [1, 2, 3]

// Function with Function.prototype.bind for Event Handling
const button = {
    label: "Submit",
    click: function() {
        console.log(`Button ${this.label} clicked!`);
    }
};
const boundClick = button.click.bind(button);
boundClick(); // Output: Button Submit clicked!

// Function with Function.prototype.toString for Debugging
function debugFunction() {
    return "Debugging function.";
}
console.log(debugFunction.toString());
// Output: function debugFunction() {
//             return "Debugging function.";
//         }

//  Function with Function Length Property for Validation
function validateParams(a, b, c) {
    if (arguments.length !== validateParams.length) {
        throw new Error(`Expected ${validateParams.length} arguments, but got ${arguments.length}`);
    }
    return true;
}
try {
    validateParams(1, 2); // Throws Error
}
catch (error) {
    console.error(error.message); // Output: Expected 3 arguments, but got 2
}
console.log(validateParams(1, 2, 3)); // Output: true

//  Function with Function Name Property for Logging
function logFunctionName() {
    console.log(`Function name is: ${logFunctionName.name}`);
}
logFunctionName(); // Output: Function name is: logFunctionName

//  Function with Recursion Depth Limiting
function limitedDepthFactorial(n, depth = 0, maxDepth = 10) {
    if (depth > maxDepth) {
        throw new Error("Maximum recursion depth exceeded");
    }
    if (n === 0) {
        return 1;
    }
    return n * limitedDepthFactorial(n - 1, depth + 1, maxDepth);
}
console.log(limitedDepthFactorial(5)); // Output: 120
//console.log(limitedDepthFactorial(15)); // Throws Error: Maximum recursion depth exceeded

// Function with Async/Await and Timeout
function timeoutPromise(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchDataWithTimeout() {
    console.log("Fetching data...");
    await timeoutPromise(2000);
    console.log("Data fetched after timeout.");
}
fetchDataWithTimeout();
// Output: Fetching data...
//         Data fetched after timeout.

//  Function with Callback and Timeout
function fetchDataWithCallbackAndTimeout(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback("Data fetched after timeout.");
    }, 2000);
}
fetchDataWithCallbackAndTimeout((data) => {
    console.log(data);
}
);
// Output: Fetching data...
//         Data fetched after timeout.

// Function with Promise and Timeout
function fetchDataWithPromiseAndTimeout() {
    console.log("Fetching data...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched after timeout.");
        }, 2000);
    });
}
fetchDataWithPromiseAndTimeout().then((data) => {
    console.log(data);
}
);
// Output: Fetching data...
//         Data fetched after timeout.

//  Function with Event Listener and Timeout
function setupButtonWithTimeout() {
    const button = document.getElementById("timeoutButton");
    button.addEventListener("click", () => {
        console.log("Button clicked, starting timeout...");
        setTimeout(() => {
            console.log("Timeout completed after button click.");
        }
        , 2000);
    }
    );
}
setupButtonWithTimeout();
// Make sure to have a button with id "timeoutButton" in your HTML for the above line to work.
// Output on button click: Button clicked, starting timeout...
//                         Timeout completed after button click.
    

//  Function with Debounced Event Listener
function setupDebouncedButton() {
    const button = document.getElementById("debounceButton");
    const debouncedClick = debounce(() => {
        console.log("Debounced button click executed.");
    }
    , 1000);
    button.addEventListener("click", debouncedClick);
}
setupDebouncedButton();
// Make sure to have a button with id "debounceButton" in your HTML for the above line to work.
// Output: Debounced button click executed. (only once if clicked multiple times within 1 second)

// Function with Throttled Event Listener
function setupThrottledButton() {
    const button = document.getElementById("throttleButton");
    const throttledClick = throttle(() => {
        console.log("Throttled button click executed.");
    }
    , 2000);
    button.addEventListener("click", throttledClick);
}

setupThrottledButton();

// Make sure to have a button with id "throttleButton" in your HTML for the above line to work.
// Output: Throttled button click executed. (only once every 2 seconds if clicked multiple times)

//  Function with Recursive Timeout
function recursiveTimeout(count) {
    if (count <= 0) {
        console.log("Recursive timeout completed.");
        return;
    }
    console.log(`Timeout count: ${count}`);
    setTimeout(() => {
        recursiveTimeout(count - 1);
    }
    , 1000);
}
recursiveTimeout(5);
// Output: Timeout count: 5
//         Timeout count: 4
//         Timeout count: 3
//         Timeout count: 2
//         Timeout count: 1
//         Recursive timeout completed.

// Function with Async/Await and Recursive Timeout
async function asyncRecursiveTimeout(count) {
    if (count <= 0) {
        console.log("Async recursive timeout completed.");
        return;
    }
    console.log(`Timeout count: ${count}`);
    await timeoutPromise(1000);
    await asyncRecursiveTimeout(count - 1);
}   
asyncRecursiveTimeout(5);
// Output: Timeout count: 5
//         Timeout count: 4
//       Timeout count: 3
//         Timeout count: 2
//         Timeout count: 1
//         Async recursive timeout completed.

// Function with Promise and Recursive Timeout
function promiseRecursiveTimeout(count) {
    return new Promise((resolve) => {
        if (count <= 0) {
            console.log("Promise recursive timeout completed.");
            return resolve();
        }
        console.log(`Timeout count: ${count}`);
        setTimeout(() => {
            promiseRecursiveTimeout(count - 1).then(resolve);
        }
        , 1000);
    });
}

promiseRecursiveTimeout(5);
// Output: Timeout count: 5
//         Timeout count: 4
//         Timeout count: 3
//         Timeout count: 2
//         Timeout count: 1
//         Promise recursive timeout completed.

// Function with Event Listener and Recursive Timeout
function setupButtonWithRecursiveTimeout() {
    const button = document.getElementById("recursiveTimeoutButton");
    button.addEventListener("click", () => {
        console.log("Button clicked, starting recursive timeout...");
        recursiveTimeout(5);
    }
    );
}
setupButtonWithRecursiveTimeout();
// Make sure to have a button with id "recursiveTimeoutButton" in your HTML for the above line to work.
// Output on button click: Button clicked, starting recursive timeout...
//                         Timeout count: 5
//                         Timeout count: 4
//                         Timeout count: 3
//                         Timeout count: 2
//                         Timeout count: 1
//                         Recursive timeout completed.

//  Function with Currying and Timeout
function curryWithTimeout(a) {
    return function(b) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a + b);
            }
            , 1000);
        });
    }
}
const addWithTimeout = curryWithTimeout(5);
addWithTimeout(10).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 15
}
);
addWithTimeout(20).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 25
}
);

// Function with Partial Application and Timeout
function partialWithTimeout(a, b) {
    return function(c) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a * b * c);
            }
            , 1000);
        });
    }       
}
const multiplyWithTimeout = partialWithTimeout(2, 3);
multiplyWithTimeout(4).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 24
}
);
multiplyWithTimeout(5).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 30
}
);

// Function with Type Checking and Timeout
function safeAddWithTimeout(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error("Both arguments must be numbers."));
            }
            resolve(a + b);
        }, 1000);
    }
    );
}
safeAddWithTimeout(10, 20).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 30
}
).catch((error) => {
    console.error("Error:", error.message);
}
);
safeAddWithTimeout(10, "20").then((result) => {
    console.log("Result after timeout:", result);
}
).catch((error) => {
    console.error("Error:", error.message); // Output: Error: Both arguments must be numbers.
}
);

//  Function with Logging and Timeout
function loggedMultiplyWithTimeout(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = a * b;
            console.log(`Multiplying ${a} and ${b} gives ${result}`);
            resolve(result);
        }
        , 1000);
    }
    );
}
loggedMultiplyWithTimeout(4, 5).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 20
}
);
// Output: Multiplying 4 and 5 gives 20

//  Function with Debouncing and Timeout
function debounceWithTimeout(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}
const debouncedFunctionWithTimeout = debounceWithTimeout(() => {
    console.log("Debounced function executed after timeout");
}
, 1000);
debouncedFunctionWithTimeout();
debouncedFunctionWithTimeout();
debouncedFunctionWithTimeout(); // Only the last call will execute after 1 second

//  Function with Throttling and Timeout
function throttleWithTimeout(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        }
        else {
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
const throttledFunctionWithTimeout = throttleWithTimeout(() => {
    console.log("Throttled function executed after timeout");
}
, 2000);
throttledFunctionWithTimeout();
throttledFunctionWithTimeout();
throttledFunctionWithTimeout(); // Only the first call will execute immediately, others will be ignored within 2 seconds

// Function with Event Handling and Timeout
function handleClickWithTimeout(event) {
    console.log("Button clicked!", event);
    setTimeout(() => {
        console.log("Timeout after button click.");
    }
    , 1000);
}
document.getElementById("myTimeoutButton").addEventListener("click", handleClickWithTimeout);
// Make sure to have a button with id "myTimeoutButton" in your HTML for the above line to work.
// Output on button click: Button clicked! [object MouseEvent]
//                         Timeout after button click.

//  Function with Recursion and Timeout
function factorialWithTimeout(n) {
    return new Promise((resolve) => {
        if (n === 0) {
            return resolve(1);
        }
        factorialWithTimeout(n - 1).then((result) => {
            setTimeout(() => {
                resolve(n * result);
            }
            , 1000);
        }
        );
    }
    );
}
factorialWithTimeout(5).then((result) => {
    console.log("Factorial with timeout:", result); // Output: Factorial with timeout: 120
}
);
// Output with 1 second delay between each multiplication step

//  Function with Higher-Order Function and Timeout
function operateOnNumbersWithTimeout(a, b, operation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(operation(a, b));
        }
        , 1000);
    }
    );
}
const sumWithTimeout = (x, y) => x + y;
const productWithTimeout = (x, y) => x * y;
operateOnNumbersWithTimeout(3, 4, sumWithTimeout).then((result) => {
    console.log("Sum with timeout:", result); // Output: Sum with timeout: 7
}
);
operateOnNumbersWithTimeout(3, 4, productWithTimeout).then((result) => {
    console.log("Product with timeout:", result); // Output: Product with timeout: 12
}
);

//  Function with Default Parameters and Timeout
function greetWithTimeout(name = "Guest") {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }
        , 1000);
    }
    );
}
greetWithTimeout().then((message) => {
    console.log(message); // Output: Hello, Guest!
}
);
greetWithTimeout("Alice").then((message) => {
    console.log(message); // Output: Hello, Alice!
}
);


// Function with Closure and Timeout
function outerFunctionWithTimeout(outerVariable) {
    return function innerFunctionWithTimeout(innerVariable) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Outer Variable: ${outerVariable}, Inner Variable: ${innerVariable}`);
            }
            , 1000);
        }
        );
    }
}
const newFunctionWithTimeout = outerFunctionWithTimeout("outside");
newFunctionWithTimeout("inside").then((message) => {
    console.log(message); // Output: Outer Variable: outside, Inner Variable: inside
}
);

//  Function with Rest Parameters and Timeout
function sumAllWithTimeout(...numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = numbers.reduce((acc, curr) => acc + curr, 0);
            resolve(result);
        }
        , 1000);
    }
    );
}
sumAllWithTimeout(1, 2, 3, 4, 5).then((result) => {
    console.log("Sum with timeout:", result); // Output: Sum with timeout: 15
}
);
sumAllWithTimeout(10, 20).then((result) => {
    console.log("Sum with timeout:", result); // Output: Sum with timeout: 30
}
);

//  Function with Spread Operator and Timeout
function displayColorsWithTimeout(color1, color2, color3) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Colors: ${color1}, ${color2}, ${color3}`);
        }
        , 1000);
    }
    );
}
const colorsWithTimeout = ["Red", "Green", "Blue"];
displayColorsWithTimeout(...colorsWithTimeout).then((message) => {
    console.log(message); // Output: Colors: Red, Green, Blue
}
);

//  Function with Object Destructuring and Timeout
function printUserWithTimeout({ name, age }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Name: ${name}, Age: ${age}`);
        }
        , 1000);
    }
    );
}

const userWithTimeout = { name: "Bob", age: 30 };
printUserWithTimeout(userWithTimeout).then((message) => {
    console.log(message); // Output: Name: Bob, Age: 30
}
);  

//  Function with Array Destructuring and Timeout
function printCoordinatesWithTimeout([x, y]) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`X: ${x}, Y: ${y}`);
        }
        , 1000);
    }   
    );
}
const coordinatesWithTimeout = [10, 20];
printCoordinatesWithTimeout(coordinatesWithTimeout).then((message) => {
    console.log(message); // Output: X: 10, Y: 20
}
);

// Function with Callback and Error Handling with Timeout
function fetchDataWithCallbackAndTimeoutError(callback) {
    setTimeout(() => {
        const data = { id: 2, name: "Jane Doe" };
        callback(null, data);
    }
    , 1000);
}
fetchDataWithCallbackAndTimeoutError((error, data) => {
    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log("Data fetched with callback:", data);
    }
}
);
// Output: Data fetched with callback: { id: 2, name: 'Jane Doe' }

//  Function with Error Handling using Try/Catch with Timeout
function riskyOperationWithTimeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Something went wrong!");
            } catch (error) {
                reject(error);
            }
        }
        , 1000);
    }
    );
}
riskyOperationWithTimeout()
    .then(() => {
        console.log("Operation succeeded.");
    })
    .catch((error) => {
        console.error("Caught an error:", error.message);
    }
    );
// Output: Caught an error: Something went wrong!

//  Function with Method Definition in Object with Timeout
const calculatorWithTimeout = {
    add: function(a, b) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a + b);
            }
            , 1000);
        }
        );
    },
    subtract: function(a, b) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a - b);
            }
            , 1000);
        }
        );
    }
};
calculatorWithTimeout.add(10, 5).then((result) => {
    console.log(result); // Output: 15
}
);
calculatorWithTimeout.subtract(10, 5).then((result) => {
    console.log(result); // Output: 5
}
);

//  Function with Method Definition using Shorthand Syntax with Timeout
const calculatorWithTimeoutShorthand = {
    add(a, b) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a + b);
            }
            , 1000);
        }
        );
    },
    subtract(a, b) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a - b);
            }
            , 1000);
        }
        );
    }
};
calculatorWithTimeoutShorthand.add(10, 5).then((result) => {
    console.log(result); // Output: 15
}
);
calculatorWithTimeoutShorthand.subtract(10, 5).then((result) => {
    console.log(result); // Output: 5
}
);

//      Function with Generator and Timeout
function* idGeneratorWithTimeout() {
    let id = 1;
    while (true) {
        yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(id++);
            }
            , 1000);
        });
    }
}
const genWithTimeout = idGeneratorWithTimeout();
genWithTimeout.next().value.then((value) => {
    console.log(value); // Output: 1
}
);
genWithTimeout.next().value.then((value) => {
    console.log(value); // Output: 2
}
);
genWithTimeout.next().value.then((value) => {

    console.log(value); // Output: 3
}
);

//  Function with Memoization and Timeout

function memoizeWithTimeout(fn, timeout = 1000) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        setTimeout(() => {
            cache.delete(key);
        }, timeout);
        return result;
    };
}

const slowFunctionWithTimeout = memoizeWithTimeout((x) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 1000);
    });
});

slowFunctionWithTimeout(5).then((result) => {
    console.log(result); // Output: 10
}
);

// Subsequent call within timeout period retrieves from cache
slowFunctionWithTimeout(5).then((result) => {
    console.log(result); // Output: 10 (from cache)
}
);
// Call after timeout period recomputes the result
setTimeout(() => {
    slowFunctionWithTimeout(5).then((result) => {
        console.log(result); // Output: 10 (recomputed)
    }
    );
}, 1500);

const multiplyByTwoAndThree = partialWithTimeout(2, 3);
multiplyByTwoAndThree(5).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 30
}
);
multiplyByTwoAndThree(6).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 36
}
);

// Function with Type Checking and Timeout
function safeAddWithTimeout(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error("Both arguments must be numbers."));
            }
            resolve(a + b);
        }, 1000);
    }
    );
}
safeAddWithTimeout(10, 20).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 30
}
).catch((error) => {
    console.error("Error:", error.message);
}
);
safeAddWithTimeout(10, "20").then((result) => {
    console.log("Result after timeout:", result);
}
).catch((error) => {
    console.error("Error:", error.message); // Output: Error: Both arguments must be numbers.
}
);

//  Function with Logging and Timeout
function loggedMultiplyWithTimeout(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = a * b;
            console.log(`Multiplying ${a} and ${b} gives ${result}`);
            resolve(result);
        }
        , 1000);
    }
    );
}
loggedMultiplyWithTimeout(4, 5).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 20
}
);
// Output: Multiplying 4 and 5 gives 20

//  Function with Debouncing and Timeout

function debounceWithTimeout(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}
const debouncedFunctionWithTimeout = debounceWithTimeout(() => {
    console.log("Debounced function executed after timeout");
}
, 1000);
debouncedFunctionWithTimeout();
debouncedFunctionWithTimeout();
debouncedFunctionWithTimeout(); // Only the last call will execute after 1 second

//  Function with Throttling and Timeout
function throttleWithTimeout(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        }
        else {
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
const throttledFunctionWithTimeout = throttleWithTimeout(() => {
    console.log("Throttled function executed after timeout");
}
, 2000);
throttledFunctionWithTimeout();
throttledFunctionWithTimeout();
throttledFunctionWithTimeout(); // Only the first call will execute immediately, others will be ignored within 2 seconds

// Function with Callback-based Error Handling
function readFileCallback(filename, callback) {
    setTimeout(() => {
        if (filename !== "validFile.txt") {
            return callback(new Error("File not found"), null);
        }
        const data = "File content";
        callback(null, data);
    }, 1000);
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

//  Function with Promise-based Error Handling
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
    }
    )
    .catch(error => {
        console.error("Error reading file:", error.message);
    }
);
readFilePromise("validFile.txt")
    .then(data => {
        console.log("File data:", data);
    }
    )
    .catch(error => {
        console.error("Error reading file:", error.message);
    }
);
// Output: File data: File content

//  Function with Async/Await and Error Handling
async function readFileAsync(filename) {
    try {
        const data = await readFilePromise(filename);
        console.log("File data:", data);
    }
    catch (error) {
        console.error("Error reading file:", error.message);
    }
}
readFileAsync("invalidFile.txt"); // Output: Error reading file: File not found
readFileAsync("validFile.txt"); // Output: File data: File content
    
//  Function with Custom Error Class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function throwCustomError() {
    throw new CustomError("This is a custom error message.");
}
try {
    throwCustomError();
}
catch (error) {
    if (error instanceof CustomError) {
        console.log("Caught a custom error:", error.message);
    } else {
        console.log("Caught an error:", error.message);
    }
}
// Output: Caught a custom error: This is a custom error message.

//  Function with Multiple Catch Blocks (Simulated with If Statements)
function simulateMultipleCatch(error) {
    if (error instanceof TypeError) {
        console.error("Caught a TypeError:", error.message);
    }
    else if (error instanceof ReferenceError) {
        console.error("Caught a ReferenceError:", error.message);
    }
    else {
        console.error("Caught an unknown error:", error.message);
    }
}
try {
    throw new TypeError("This is a type error.");
}
catch (error) {
    simulateMultipleCatch(error);
}
try {
    throw new ReferenceError("This is a reference error.");
}
catch (error) {
    simulateMultipleCatch(error);
}
try {
    throw new Error("This is a general error.");
}
catch (error) {
    simulateMultipleCatch(error);
}
// Output: Caught a TypeError: This is a type error.
//         Caught a ReferenceError: This is a reference error.
//         Caught an unknown error: This is a general error.

//  Function with Finally Block
function functionWithFinally() {
    try {
        console.log("Executing try block.");
        throw new Error("An error occurred.");
    }   catch (error) {
        console.error("Caught an error:", error.message);
    }   finally {
        console.log("Executing finally block.");
    }
}
functionWithFinally();
// Output: Executing try block.
//         Caught an error: An error occurred.
//         Executing finally block.

//  Function with Nested Try/Catch
function nestedTryCatch() {
    try {
        console.log("Outer try block.");
        try {
            console.log("Inner try block.");
            throw new Error("Error in inner try block.");
        } catch (innerError) {
            console.error("Caught inner error:", innerError.message);
            throw new Error("Error rethrown from inner catch.");
        }
    } catch (outerError) {
        console.error("Caught outer error:", outerError.message);
    }
}
nestedTryCatch();
// Output: Outer try block.
//         Inner try block.
//         Caught inner error: Error in inner try block.
//         Caught outer error: Error rethrown from inner catch.

//  Function with Error Propagation
function levelOne() {
    levelTwo();
}
function levelTwo() {
    levelThree();
}
function levelThree() {
    throw new Error("Error in level three.");
}
try {
    levelOne();
}
catch (error) {
    console.error("Caught an error:", error.message);
}
// Output: Caught an error: Error in level three.


//  Function with Error Logging
function errorLoggingFunction() {
    try {
        throw new Error("An error to log.");
    } catch (error) {
        console.error("Logged error:", error.message);
    }
}
errorLoggingFunction();
// Output: Logged error: An error to log.

//  Function with Error Rethrowing
function errorRethrowingFunction() {
    try {
        throw new Error("Initial error.");
    } catch (error) {
        console.error("Caught error:", error.message);
        throw new Error("Rethrown error.");
    }
}
try {
    errorRethrowingFunction();
}
catch (error) {
    console.error("Caught rethrown error:", error.message);
}
// Output: Caught error: Initial error.
//         Caught rethrown error: Rethrown error.

//  Function with Asynchronous Error Handling
async function asyncErrorHandlingFunction() {
    try {
        await new Promise((_, reject) => reject(new Error("Async error occurred.")));
    } catch (error) {
        console.error("Caught async error:", error.message);
    }
}
asyncErrorHandlingFunction();
// Output: Caught async error: Async error occurred.

//  Function with Error Handling in Event Listeners
function setupErrorHandlingButton() {
    const button = document.getElementById("errorHandlingButton");
    button.addEventListener("click", () => {
        try {
            throw new Error("Error in event listener.");
        } catch (error) {
            console.error("Caught error in event listener:", error.message);
        }
    });
}
setupErrorHandlingButton();
// Make sure to have a button with id "errorHandlingButton" in your HTML for the above line to work.
// Output on button click: Caught error in event listener: Error in event listener.


// Function with Error Handling in Promises 
function promiseWithErrorHandling() {
    return new Promise((_, reject) => {
        reject(new Error("Promise error occurred."));
    });
}
promiseWithErrorHandling()
    .then(() => {
        console.log("Promise resolved successfully.");
    })
    .catch((error) => {
        console.error("Caught promise error:", error.message);
    });
// Output: Caught promise error: Promise error occurred.

//  Function with Error Handling in Async/Await
async function asyncFunctionWithErrorHandling() {
    try {
        await Promise.reject(new Error("Async/Await error occurred."));
    } catch (error) {
        console.error("Caught async/await error:", error.message);
    }
}
asyncFunctionWithErrorHandling();
// Output: Caught async/await error: Async/Await error occurred.


//  Function with Error Handling in Generators
function* generatorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in generator.");
    } catch (error) {
        console.error("Caught error in generator:", error.message);
        yield 2;
    }
}
const gen = generatorWithErrorHandling();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2

//  Function with Error Handling in Higher-Order Functions
function higherOrderFunctionWithErrorHandling(fn) {
    return function(...args) {
        try {
            return fn(...args);
        } catch (error) {
            console.error("Caught error in higher-order function:", error.message);
        }
    }
}
const safeFunction = higherOrderFunctionWithErrorHandling((x) => {
    if (x < 0) {
        throw new Error("Negative value not allowed.");
    }
    return x * 2;
});
console.log(safeFunction(5)); // Output: 10
console.log(safeFunction(-5)); // Output: Caught error in higher-order function: Negative value not allowed.
    
//  Function with Error Handling in Object Methods
const objWithErrorHandling = {
    methodWithError() {
        try {
            throw new Error("Error in object method.");
        } catch (error) {
            console.error("Caught error in object method:", error.message);
        }
    }
};
objWithErrorHandling.methodWithError();
// Output: Caught error in object method: Error in object method.

//  Function with Error Handling in Class Methods
class MyClassWithErrorHandling {
    methodWithError() {
        try {
            throw new Error("Error in class method.");
        } catch (error) {
            console.error("Caught error in class method:", error.message);
        }
    }
}
const myClassInstance = new MyClassWithErrorHandling();
myClassInstance.methodWithError();
// Output: Caught error in class method: Error in class method.

//  Function with Error Handling in Async Iterators
async function* asyncIteratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async iterator.");
    } catch (error) {
        console.error("Caught error in async iterator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncIteratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async iterator: Error in async iterator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Error Handling in Event Loop
function eventLoopErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in event loop.");
        } catch (error) {
            console.error("Caught error in event loop:", error.message);
        }
    }, 1000);
}
eventLoopErrorHandling();
// Output after 1 second: Caught error in event loop: Error in event loop.

//  Function with Error Handling in Web APIs

function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }
//         Caught error in fetch: HTTP error! status: 404

//  Function with Error Handling in Timers
function timerWithErrorHandling() {
    setTimeout(() => {
        
        try {
            throw new Error("Error in timer.");
        } catch (error) {
            console.error("Caught error in timer:", error.message);
        }
    }, 1000);
}
timerWithErrorHandling();
// Output after 1 second: Caught error in timer: Error in timer.

//  Function with Error Handling in Web Workers
// Note: This code should be placed in a separate file (e.g., worker.js) and run in a web worker context.
self.addEventListener('message', (event) => {
    try {
        if (event.data === 'throwError') {
            throw new Error("Error in web worker.");
        }
        self.postMessage("Message processed successfully.");
    } catch (error) {
        self.postMessage(`Caught error in web worker: ${error.message}`);
    }
});
// In the main thread, you would create a web worker and post messages to it:
const worker = new Worker('worker.js');
worker.postMessage('throwError'); // This will trigger the error handling in the worker

//  Function with Error Handling in Service Workers
// Note: This code should be placed in a service worker file (e.g., service-worker.js) and registered in the main thread.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error("Caught error in service worker fetch:", error.message);
            return new Response("Service is currently unavailable.", {
                status: 503,
                statusText: "Service Unavailable"
            });
        })
    );
});

//  Function with Error Handling in WebSockets
const socket = new WebSocket('ws://example.com/socket');
socket.addEventListener('open', () => {
    console.log("WebSocket connection opened.");
}); 
socket.addEventListener('message', (event) => {
    try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
    }
    catch (error) {
        console.error("Caught error in WebSocket message handling:", error.message);
    }
});
socket.addEventListener('error', (error) => {
    console.error("Caught WebSocket error:", error.message);
});

//  Function with Error Handling in Fetch API
function fetchDataWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchDataWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchDataWithErrorHandling("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }

// Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();
    
//  Function with Error Handling in Web Workers
// Note: This code should be placed in a separate file (e.g., worker.js) and run in a web worker context.
self.addEventListener('message', (event) => {
    try {
        if (event.data === 'throwError') {
            throw new Error("Error in web worker.");
        }
        self.postMessage("Message processed successfully.");
    } catch (error) {
        self.postMessage(`Caught error in web worker: ${error.message}`);
    }
});
// In the main thread, you would create a web worker and post messages to it:
const worker = new Worker('worker.js');
worker.postMessage('throwError'); // This will trigger the error handling in the worker
        
//  Function with Error Handling in Service Workers
// Note: This code should be placed in a service worker file (e.g., service-worker.js) and registered in the main thread.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error("Caught error in service worker fetch:", error.message);
            return new Response("Service is currently unavailable.", {
                status: 503,
                statusText: "Service Unavailable"
            });
        })
    );
});
    
//  Function with Error Handling in WebSockets 
const socket = new WebSocket('ws://example.com/socket');
socket.addEventListener('open', () => {
    console.log("WebSocket connection opened.");
});
socket.addEventListener('message', (event) => {
    try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
    } catch (error) {
        console.error("Caught error in WebSocket message handling:", error.message);
    }
});
socket.addEventListener('error', (error) => {
    console.error("Caught WebSocket error:", error.message);
});
    
//  Function with Error Handling in Timers
function timerWithErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in timer.");
        } catch (error) {
            console.error("Caught error in timer:", error.message);
        }
    }, 1000);
}
timerWithErrorHandling();
// Output after 1 second: Caught error in timer: Error in timer.

//  Function with Error Handling in Event Loop
function eventLoopErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in event loop.");
        } catch (error) {
            console.error("Caught error in event loop:", error.message);
        }
    }, 1000);
}
eventLoopErrorHandling();
// Output after 1 second: Caught error in event loop: Error in event loop.

//  Function with Error Handling in Web APIs
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/invalid-url"); // Invalid URL
// Output: Fetched data: { userId: 1, id: 1, title: '...', body: '...' }

//  Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    }
    catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Error Handling in Timers
function timerWithErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in timer.");
        } catch (error) {
            console.error("Caught error in timer:", error.message);
        }
    }, 1000);
}
timerWithErrorHandling();
// Output after 1 second: Caught error in timer: Error in timer.

// Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();
    
//  Function with Error Handling in Web Workers
// Note: This code should be placed in a separate file (e.g., worker.js) and run in a web worker context.
self.addEventListener('message', (event) => {
    try {
        if (event.data === 'throwError') {
            throw new Error("Error in web worker.");
        }
        self.postMessage("Message processed successfully.");
    } catch (error) {
        self.postMessage(`Caught error in web worker: ${error.message}`);
    }
});

//  In the main thread, you would create a web worker and post messages to it:
const worker = new Worker('worker.js');
worker.postMessage('throwError'); // This will trigger the error handling in the worker

//  Function with Error Handling in Service Workers
// Note: This code should be placed in a service worker file (e.g., service-worker.js) and registered in the main thread.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error("Caught error in service worker fetch:", error.message);
            return new Response("Service is currently unavailable.", {
                status: 503,
                statusText: "Service Unavailable"
            });
        })
    );
});
    
//  Function with Error Handling in WebSockets
const socket1 = new WebSocket('ws://example.com/socket');
socket1.addEventListener('open', () => {
    console.log("WebSocket connection opened.");
});
socket1.addEventListener('message', (event) => {
    try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
    } catch (error) {
        console.error("Caught error in WebSocket message handling:", error.message);
    }
});
socket1.addEventListener('error', (error) => {
    console.error("Caught WebSocket error:", error.message);
});

//  Function with Error Handling in Fetch API
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        }
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Error Handling in Timers

function timerWithErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in timer.");
        } catch (error) {
            console.error("Caught error in timer:", error.message);
        }
    }, 1000);
}
timerWithErrorHandling();
// Output after 1 second: Caught error in timer: Error in timer.

//  Function with Error Handling in Event Loop
function eventLoopErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in event loop.");
        } catch (error) {
            console.error("Caught error in event loop:", error.message);
        }
    }, 1000);
}
eventLoopErrorHandling();
// Output after 1 second: Caught error in event loop: Error in event loop.

//  Function with Error Handling in Web APIs
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL


//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL


//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
}
)();
    
//  Function with Error Handling in Web Workers
// Note: This code should be placed in a separate file (e.g., worker.js) and run in a web worker context.
self.addEventListener('message', (event) => {
    try {
        if (event.data === 'throwError') {
            throw new Error("Error in web worker.");
        }
        self.postMessage("Message processed successfully.");
    } catch (error) {
        self.postMessage(`Caught error in web worker: ${error.message}`);
    }
});
// In the main thread, you would create a web worker and post messages to it:
const worker = new Worker('worker.js');
worker.postMessage('throwError'); // This will trigger the error handling in the worker

//  Function with Error Handling in Service Workers
// Note: This code should be placed in a service worker file (e.g., service-worker.js) and registered in the main thread.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error("Caught error in service worker fetch:", error.message);
            return new Response("Service is currently unavailable.", {
                status: 503,
                statusText: "Service Unavailable"
            });
        })
    );
});
    
//  Function with Error Handling in WebSockets
const socket = new WebSocket('ws://example.com/socket');
socket.addEventListener('open', () => {
    console.log("WebSocket connection opened.");
});
socket.addEventListener('message', (event) => {
    try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
    } catch (error) {
        console.error("Caught error in WebSocket message handling:", error.message);
    }
});
socket.addEventListener('error', (error) => {
    console.error("Caught WebSocket error:", error.message);
});

//  Function with Error Handling in Fetch API
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async Generators    
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();
    
//  Function with Error Handling in Web Workers
// Note: This code should be placed in a separate file (e.g., worker.js) and run in a web worker context.
self.addEventListener('message', (event) => {
    try {
        if (event.data === 'throwError') {
            throw new Error("Error in web worker.");
        }
        self.postMessage("Message processed successfully.");
    } catch (error) {
        self.postMessage(`Caught error in web worker: ${error.message}`);
    }
});
// In the main thread, you would create a web worker and post messages to it:
const worker = new Worker('worker.js');
worker.postMessage('throwError'); // This will trigger the error handling in the worker
    
//  Function with Error Handling in Service Workers
// Note: This code should be placed in a service worker file (e.g., service-worker.js) and registered in the main thread.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error("Caught error in service worker fetch:", error.message);
            return new Response("Service is currently unavailable.", {
                status: 503,
                statusText: "Service Unavailable"
            });
        })
    );
});

//  Function with Error Handling in WebSockets
const socket1 = new WebSocket('ws://example.com/socket');
socket1.addEventListener('open', () => {
    console.log("WebSocket connection opened.");
});
socket1.addEventListener('message', (event) => {
    try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
    } catch (error) {
        console.error("Caught error in WebSocket message handling:", error.message);
    }
});
socket1.addEventListener('error', (error) => {
    console.error("Caught WebSocket error:", error.message);
});

//  Function with Error Handling in Fetch API
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Error Handling in Timers
function timerWithErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in timer.");
        } catch (error) {
            console.error("Caught error in timer:", error.message);
        }
    }, 1000);
}
timerWithErrorHandling();
// Output after 1 second: Caught error in timer: Error in timer.

//  Function with Error Handling in Event Loop
function eventLoopErrorHandling() {
    setTimeout(() => {
        try {
            throw new Error("Error in event loop.");
        } catch (error) {
            console.error("Caught error in event loop:", error.message);
        }
    }, 1000);
}
eventLoopErrorHandling();
// Output after 1 second: Caught error in event loop: Error in event loop.

//  Function with Error Handling in Web APIs
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();
    
//  Function with Error Handling in Web Workers
// Note: This code should be placed in a separate file (e.g., worker.js) and run in a web worker context.
self.addEventListener('message', (event) => {
    try {
        if (event.data === 'throwError') {
            throw new Error("Error in web worker.");
        }
        self.postMessage("Message processed successfully.");
    } catch (error) {
        self.postMessage(`Caught error in web worker: ${error.message}`);
    }
});
// In the main thread, you would create a web worker and post messages to it:
const worker = new Worker('worker.js');
worker.postMessage('throwError'); // This will trigger the error handling in the worker

//  Function with Error Handling in Service Workers
// Note: This code should be placed in a service worker file (e.g., service-worker.js) and registered in the main thread.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error("Caught error in service worker fetch:", error.message);
            return new Response("Service is currently unavailable.", {
                status: 503,
                statusText: "Service Unavailable"
            });
        })
    );
});

//  Function with Error Handling in WebSockets
const socket2 = new WebSocket('ws://example.com/socket');
socket2.addEventListener('open', () => {
    console.log("WebSocket connection opened.");
});
socket2.addEventListener('message', (event) => {
    try {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);
    } catch (error) {
        console.error("Caught error in WebSocket message handling:", error.message);
    }
});
socket2.addEventListener('error', (error) => {
    console.error("Caught WebSocket error:", error.message);
});

//  Function with Error Handling in Fetch API
function fetchWithErrorHandling(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
        });
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async/Await
async function fetchDataAsyncWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
    }
}
fetchDataAsyncWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Promise Chains
function fetchDataWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
        });
}
fetchDataWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Error Handling in Async Generators
async function* asyncGeneratorWithErrorHandling() {
    try {
        yield 1;
        throw new Error("Error in async generator.");
    } catch (error) {
        console.error("Caught error in async generator:", error.message);
        yield 2;
    }
}
(async () => {
    const asyncGen = asyncGeneratorWithErrorHandling();
    console.log(await asyncGen.next()); // Output: { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Caught error in async generator: Error in async generator.
    console.log(await asyncGen.next()); // Output: { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Logging and Timeout
function loggedMultiplyWithTimeout(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = a * b;
            console.log(`Multiplying ${a} and ${b} gives ${result}`);
            resolve(result);
        }
        , 1000);
    }
    );
}
loggedMultiplyWithTimeout(4, 5).then((result) => {
    console.log("Result after timeout:", result); // Output: Result after timeout: 20
}
);
// Output: Multiplying 4 and 5 gives 20

//  Function with Logging and Error Handling
function loggedDivideWithErrorHandling(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        const result = a / b;
        console.log(`Dividing ${a} by ${b} gives ${result}`);
        return result;
    } catch (error) {
        console.error("Caught error in division:", error.message);
        return null;
    }
}
loggedDivideWithErrorHandling(10, 2); // Output: Dividing 10 by 2 gives 5
loggedDivideWithErrorHandling(10, 0); // Output: Caught error in division: Division by zero is not allowed.


//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        });
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async Generators
async function* loggedAsyncGenerator() {
    console.log("Starting async generator...");
    yield 1;
    console.log("Yielded 1");
    yield 2;
    console.log("Yielded 2");
    yield 3;
    console.log("Yielded 3");
}
(async () => {
    const asyncGen = loggedAsyncGenerator();
    console.log(await asyncGen.next()); // Output: Starting async generator... Yielded 1 { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Yielded 2 { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: Yielded 3 { value: 3, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
// Output: Timer started. (immediately) Timer finished after 2 seconds. (after 2 seconds)

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    worker.postMessage('start');
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        });
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async Generators
async function* loggedAsyncGenerator() {
    console.log("Starting logged async generator...");
    yield 1;
    console.log("Yielded 1");
    yield 2;
    console.log("Yielded 2");
    yield 3;
    console.log("Yielded 3");
}
(async () => {
    const asyncGen = loggedAsyncGenerator();
    console.log(await asyncGen.next()); // Output: Starting logged async generator... Yielded 1 { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Yielded 2 { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: Yielded 3 { value: 3, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
// Output: Timer started. (immediately) Timer finished after 2 seconds. (after 2 seconds)

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();
    
//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async Generators
async function* loggedAsyncGenerator() {
    console.log("Starting logged async generator...");
    yield 1;
    console.log("Yielded 1");
    yield 2;
    console.log("Yielded 2");
    yield 3;
    console.log("Yielded 3");
}
(async () => {
    const asyncGen = loggedAsyncGenerator();
    console.log(await asyncGen.next()); // Output: Starting logged async generator... Yielded 1 { value: 1, done: false }
    console.log(await asyncGen.next()); // Output: Yielded 2 { value: 2, done: false }
    console.log(await asyncGen.next()); // Output: Yielded 3 { value: 3, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
// Output: Timer started. (immediately) Timer finished after 2 seconds. (after 2 seconds)
    
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();
    
//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();
    
//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
(async () => {
    const asyncGen = loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1");
    console.log(await asyncGen.next()); // Output: Starting logged async generator for https://jsonplaceholder.typicode.com/posts/1... Fetched data: { ... } { value: { ... }, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();
    
//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
// Output: Timer started. (immediately) Timer finished after 2 seconds. (after 2 seconds)
    
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();
    
//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            }
        );
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();
    
//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
(async () => {
    const asyncGen = loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1");
    console.log(await asyncGen.next()); // Output: Starting logged async generator for https://jsonplaceholder.typicode.com/posts/1... Fetched data: { ... } { value: { ... }, done: false }
    console.log(await asyncGen.next()); // Output: { value: undefined, done: true }
})();

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
// Output: Timer started. (immediately) Timer finished after 2 seconds. (after 2 seconds)

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();
    
//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            }
        );
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
       
//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });         

    } else {            
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL name

//  Function with Logging and Async/Await     
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    }
    catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
    
//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
    
//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
    
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();
        
//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
    
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();
    
//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
    
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            }
            )
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
        
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            }
            )
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();
    
//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();
    
//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async/Await  
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        });
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();
    
//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();
    
//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();
    
//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();
    
//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();
    
//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
    
//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Promise Chains
function loggedFetchWithPromiseChain(url) {
    console.log(`Starting fetch with promise chain for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in promise chain:", error.message);
            return null;
        }
    );
}
loggedFetchWithPromiseChain("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async Generators
async function* loggedAsyncGenerator(url) {
    console.log(`Starting logged async generator for ${url}...`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        yield data;
    } catch (error) {
        console.error("Caught error in logged async generator:", error.message);
        yield null;
    }
}
loggedAsyncGenerator("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Timers
function loggedTimer() {
    console.log("Timer started.");
    setTimeout(() => {
        console.log("Timer finished after 2 seconds.");
    }, 2000);
}
loggedTimer();

//  Function with Logging and Web Workers
function loggedWebWorker() {
    const worker = new Worker('worker.js');
    console.log("Web worker created.");
    worker.postMessage('start');
    console.log("Message sent to web worker.");
    worker.addEventListener('message', (event) => {
        console.log("Message from worker:", event.data);
    });
    worker.addEventListener('error', (error) => {
        console.error("Caught error in web worker:", error.message);
    });
}
loggedWebWorker();

//  Function with Logging and Service Workers
function loggedServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log("Registering service worker...");
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log("Service worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Caught error in service worker registration:", error.message);
            });
    } else {
        console.log("Service workers are not supported in this browser.");
    }
}
loggedServiceWorker();

//  Function with Logging and WebSockets
function loggedWebSocket() {
    const socket = new WebSocket('ws://example.com/socket');
    console.log("WebSocket connection initiated.");
    socket.addEventListener('open', () => {
        console.log("WebSocket connection opened.");
    });
    socket.addEventListener('message', (event) => {
        console.log("Received message:", event.data);
    });
    socket.addEventListener('error', (error) => {
        console.error("Caught WebSocket error:", error.message);
    });
}
loggedWebSocket();

//  Function with Logging and Fetch API
function loggedFetch(url) {
    console.log(`Starting fetch for ${url}`);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);
            return data;
        })
        .catch(error => {
            console.error("Caught error in fetch:", error.message);
            return null;
        });
}
loggedFetch("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Logging and Async/Await
async function loggedFetchWithAsyncAwait(url) {
    console.log(`Starting async fetch for ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Caught error in async fetch:", error.message);
        return null;
    }
}
loggedFetchWithAsyncAwait("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL

//  Function with Async Recursion
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

//  Function with Logging and Async Recursion
async function loggedAsyncFactorial(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    const result = await loggedAsyncFactorial(n - 1);
    const finalResult = n * result;
    console.log(`Factorial of ${n} is ${finalResult}`);
    return finalResult;
}
loggedAsyncFactorial(5).then(result => {
    console.log("Logged Async Factorial of 5:", result); // Output: 120
});

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}
    
//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }

}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with New Functionality: Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with New Functionality: Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with New Functionality: Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with New Functionality: Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with New Functionality: Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

//  Function with New Functionality: Logging and Async Recursion with Error Handling
async function loggedAsyncFactorialWithErrorHandling(n) {
    console.log(`Calculating factorial of ${n}`);
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        console.log("Base case reached, returning 1");
        return 1;
    }
    try {
        const result = await loggedAsyncFactorialWithErrorHandling(n - 1);
        const finalResult = n * result;
        console.log(`Factorial of ${n} is ${finalResult}`);
        return finalResult;
    } catch (error) {
        console.error("Caught error in logged async factorial:", error.message);
        return null;
    }
}

// 1. Simple function
function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Shivaprada"));


// 2. Function with multiple parameters
function addNumbers(a, b) {
    return a + b;
}

console.log("Sum:", addNumbers(10, 20));


// 3. Arrow function
const multiplyNumbers = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiplyNumbers(5, 4));


// 4. Function with default parameter
function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}

console.log("Final price:", calculateDiscount(1000));


// 5. Higher-order function
function calculate(a, b, operation) {
    return operation(a, b);
}

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;

console.log("Higher-order addition:", calculate(20, 10, addition));
console.log("Higher-order subtraction:", calculate(20, 10, subtraction));


// 6. Recursive function
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(5);


// 7. Async function with Promise
async function fetchUserData() {
    try {
        const response = await Promise.resolve({
            id: 101,
            name: "Shivaprada"
        });

        console.log("User data:", response);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchUserData();


// 8. Function using rest parameters
function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("Total:", calculateTotal(10, 20, 30, 40));


// 9. Closure example
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

// 10. Function expression
const divideNumbers = function (a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("Division:", divideNumbers(20, 5));


// 11. Callback function
function processUser(name, callback) {
    const message = `Welcome, ${name}!`;
    callback(message);
}

processUser("Shivaprada", function (message) {
    console.log(message);
});


// 12. Function returning another function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double:", double(10));
console.log("Triple:", triple(10));


// 13. Array method with function
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function (number) {
    return number * number;
});

console.log("Squares:", squares);


// 14. Filter with function
const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(function (age) {
    return age >= 18;
});

console.log("Adults:", adults);


// 15. Function with validation
function checkPassword(password) {
    if (typeof password !== "string") {
        return "Password must be a string";
    }

    if (password.length < 8) {
        return "Password must contain at least 8 characters";
    }

    return "Password is valid";
}

console.log(checkPassword("hello"));
console.log(checkPassword("javascript123"));

// 16. Function with multiple return values
function getUserDetails() {
    return {
        name: "Shivaprada",
        age: 22,
        role: "Software Developer"
    };
}

const user = getUserDetails();

console.log("User Name:", user.name);
console.log("User Age:", user.age);
console.log("User Role:", user.role);


// 17. Function using object parameter
function displayUser(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
}

displayUser({
    name: "Shivaprada",
    age: 22
});


// 18. Function with destructuring
function showProduct({ name, price }) {
    console.log(`Product: ${name}`);
    console.log(`Price: ₹${price}`);
}

showProduct({
    name: "Laptop",
    price: 50000
});


// 19. Arrow function with multiple parameters
const calculateTotal = (price, quantity) => {
    return price * quantity;
};

console.log("Total:", calculateTotal(500, 3));


// 20. Arrow function with implicit return
const cube = number => number * number * number;

console.log("Cube:", cube(4));


// 21. Function using reduce()
const marks = [80, 75, 90, 85];

const totalMarks = marks.reduce((total, mark) => {
    return total + mark;
}, 0);

console.log("Total Marks:", totalMarks);


// 22. Function to find maximum number
function findMaximum(numbers) {
    return Math.max(...numbers);
}

console.log("Maximum:", findMaximum([10, 50, 30, 90, 20]));


// 23. Function to check even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log("Number is:", checkEvenOdd(15));


// 24. Function with try-catch
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;
    } catch (error) {
        return error.message;
    }
}

console.log("Result:", divide(10, 2));
console.log("Result:", divide(10, 0));


// 25. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE function executed immediately");
})();

// 26. Function with rest parameters
function calculateSum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("Sum:", calculateSum(10, 20, 30, 40));


// 27. Function to find minimum number
function findMinimum(numbers) {
    return Math.min(...numbers);
}

console.log("Minimum:", findMinimum([10, 5, 30, 2, 20]));


// 28. Function to reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("Reversed:", reverseString("JavaScript"));


// 29. Function to count characters
function countCharacters(text) {
    return text.length;
}

console.log("Character count:", countCharacters("JavaScript"));


// 30. Function to check palindrome
function isPalindrome(text) {
    const reversed = text.split("").reverse().join("");

    return text === reversed;
}

console.log("Is Palindrome:", isPalindrome("madam"));
console.log("Is Palindrome:", isPalindrome("hello"));


// 31. Function to capitalize a string
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log("Capitalized:", capitalize("javascript"));


// 32. Function to calculate average
function calculateAverage(numbers) {
    const total = numbers.reduce((sum, number) => sum + number, 0);

    return total / numbers.length;
}

console.log("Average:", calculateAverage([80, 70, 90, 60]));


// 33. Function to remove duplicate values
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log(
    "Unique numbers:",
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
);


// 34. Function to find a user
function findUser(users, name) {
    return users.find(user => user.name === name);
}

const users = [
    { name: "Rahul", age: 25 },
    { name: "Priya", age: 23 },
    { name: "Shivaprada", age: 22 }
];

console.log("Found User:", findUser(users, "Shivaprada"));


// 35. Function to filter users by age
function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

console.log("Adult Users:", getAdults(users));

// 36. Function to check if array contains a value
function containsValue(numbers, value) {
    return numbers.includes(value);
}

console.log("Contains 30:", containsValue([10, 20, 30, 40], 30));


// 37. Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("Temperature:", celsiusToFahrenheit(30));


// 38. Function to calculate discount
function calculatePrice(price, discount = 10) {
    return price - (price * discount / 100);
}

console.log("Final Price:", calculatePrice(1000));
console.log("Final Price:", calculatePrice(1000, 20));


// 39. Function to sort numbers
function sortNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

console.log(
    "Sorted Numbers:",
    sortNumbers([50, 10, 40, 20, 30])
);


// 40. Function to get names from users
function getUserNames(users) {
    return users.map(user => user.name);
}

console.log(
    "User Names:",
    getUserNames([
        { name: "Rahul", age: 25 },
        { name: "Priya", age: 23 },
        { name: "Shivaprada", age: 22 }
    ])
);


// 41. Function to find user by ID
function findUserById(users, id) {
    return users.find(user => user.id === id);
}

const userList = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Shivaprada" }
];

console.log("User:", findUserById(userList, 3));


// 42. Function to update an object
function updateUser(user, newName) {
    return {
        ...user,
        name: newName
    };
}

const oldUser = {
    id: 1,
    name: "Rahul",
    age: 25
};

console.log(
    "Updated User:",
    updateUser(oldUser, "Rahul Kumar")
);


// 43. Function with optional parameter
function greet(name, message = "Welcome") {
    return `${message}, ${name}!`;
}

console.log(greet("Shivaprada"));
console.log(greet("Shivaprada", "Good Evening"));


// 44. Function to validate email
function validateEmail(email) {
    if (!email.includes("@")) {
        return false;
    }

    return true;
}

console.log("Valid Email:", validateEmail("user@gmail.com"));
console.log("Valid Email:", validateEmail("usergmail.com"));


// 45. Function to create a simple API response
function createResponse(success, data, message) {
    return {
        success: success,
        data: data,
        message: message
    };
}

console.log(
    createResponse(
        true,
        { id: 1, name: "Shivaprada" },
        "User fetched successfully"
    )
);


// 46. Callback function
function calculate(a, b, operation) {
    return operation(a, b);
}

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;

console.log("Addition:", calculate(20, 10, addition));
console.log("Subtraction:", calculate(20, 10, subtraction));


// 47. Function returning a Promise
function getMessage() {
    return new Promise((resolve) => {
        resolve("Data received successfully");
    });
}

getMessage().then(message => {
    console.log("Message:", message);
});


// 48. Promise with delay
function waitForMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Message after 2 seconds");
        }, 2000);
    });
}

waitForMessage().then(message => {
    console.log(message);
});


// 49. Async function
async function showMessage() {
    const message = await getMessage();
    console.log("Async Message:", message);
}

showMessage();


// 50. Async function with error handling
async function fetchData() {
    try {
        const data = await getMessage();
        console.log("Fetched:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchData();


// 51. Promise rejection
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve("Number is positive");
        } else {
            reject(new Error("Number must be positive"));
        }
    });
}

checkNumber(10)
    .then(result => console.log(result))
    .catch(error => console.log("Error:", error.message));


// 52. Async function with parameters
async function calculateSquare(number) {
    return number * number;
}

calculateSquare(8).then(result => {
    console.log("Square:", result);
});


// 53. Multiple async operations
async function getUserData() {
    const name = await Promise.resolve("Shivaprada");
    const role = await Promise.resolve("Software Developer");

    return {
        name,
        role
    };
}

getUserData().then(user => {
    console.log("User Data:", user);
});


// 54. Promise.all()
function getUserName() {
    return Promise.resolve("Shivaprada");
}

function getUserRole() {
    return Promise.resolve("Software Developer");
}

async function getCompleteUser() {
    const [name, role] = await Promise.all([
        getUserName(),
        getUserRole()
    ]);

    console.log("Complete User:", {
        name,
        role
    });
}

getCompleteUser();


// 55. Async function with validation
async function loginUser(username, password) {
    if (!username || !password) {
        throw new Error("Username and password are required");
    }

    return "Login successful";
}

loginUser("shivaprada", "12345678")
    .then(result => console.log(result))
    .catch(error => console.log("Login Error:", error.message));


// 56. Function with closure
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log("Count:", counter());
console.log("Count:", counter());
console.log("Count:", counter());


// 57. Function to create a greeting
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");

console.log(sayHello("Shivaprada"));


// 58. Higher-order function
function executeOperation(a, b, operation) {
    return operation(a, b);
}

const multiply = (a, b) => a * b;

console.log(
    "Multiplication:",
    executeOperation(10, 5, multiply)
);


// 59. Function composition
function doubleNumber(number) {
    return number * 2;
}

function addTen(number) {
    return number + 10;
}

function compose(number) {
    return addTen(doubleNumber(number));
}

console.log("Composed Result:", compose(5));


// 60. Recursive countdown
function countdown(number) {
    if (number === 0) {
        console.log("Done!");
        return;
    }

    console.log(number);
    countdown(number - 1);
}

countdown(5);


// 61. Recursive sum
function recursiveSum(number) {
    if (number === 0) {
        return 0;
    }

    return number + recursiveSum(number - 1);
}

console.log("Recursive Sum:", recursiveSum(5));


// 62. Function to calculate factorial
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log("Factorial:", factorial(5));


// 63. Function to check prime number
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Is Prime:", isPrime(17));
console.log("Is Prime:", isPrime(20));


// 64. Function to calculate power
function calculatePower(base, exponent) {
    return base ** exponent;
}

console.log("Power:", calculatePower(2, 5));


// 65. Function to safely parse JSON
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return {
            error: "Invalid JSON"
        };
    }
}

console.log(
    "Parsed JSON:",
    parseJSON('{"name":"Shivaprada","role":"Developer"}')
);

console.log(
    "Invalid JSON:",
    parseJSON("invalid json")
);


// 66. Function to generate a random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random Number:", generateRandomNumber(1, 100));


// 67. Function to check if a number is positive, negative, or zero
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    }

    if (number < 0) {
        return "Negative";
    }

    return "Zero";
}

console.log("Number Type:", checkNumberType(-10));
console.log("Number Type:", checkNumberType(0));


// 68. Function to calculate total using reduce
function calculateTotalPrice(products) {
    return products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
}

const products = [
    { name: "Keyboard", price: 1000, quantity: 2 },
    { name: "Mouse", price: 500, quantity: 1 },
    { name: "Headphones", price: 1500, quantity: 1 }
];

console.log("Total Price:", calculateTotalPrice(products));


// 69. Function to find the most expensive product
function findMostExpensive(products) {
    return products.reduce((highest, product) => {
        return product.price > highest.price ? product : highest;
    });
}

console.log("Most Expensive:", findMostExpensive(products));


// 70. Function to group numbers
function separateNumbers(numbers) {
    return {
        even: numbers.filter(number => number % 2 === 0),
        odd: numbers.filter(number => number % 2 !== 0)
    };
}

console.log(
    "Separated Numbers:",
    separateNumbers([1, 2, 3, 4, 5, 6])
);


// 71. Function to remove empty values
function removeEmptyValues(values) {
    return values.filter(value => value !== null && value !== undefined && value !== "");
}

console.log(
    "Clean Values:",
    removeEmptyValues(["JavaScript", "", null, "React", undefined, "Node.js"])
);


// 72. Function to convert array to object
function arrayToObject(users) {
    return users.reduce((result, user) => {
        result[user.id] = user;
        return result;
    }, {});
}

const employees = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Shivaprada" }
];

console.log("Users Object:", arrayToObject(employees));


// 73. Function to create a delayed Promise
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function runTask() {
    console.log("Task started");

    await delay(1000);

    console.log("Task completed after 1 second");
}

runTask();


// 74. Function to safely access nested object data
function getUserCity(user) {
    return user?.address?.city ?? "City not available";
}

const userData = {
    name: "Shivaprada",
    address: {
        city: "Bengaluru"
    }
};

console.log("City:", getUserCity(userData));


// 75. Function to create an API-style response
function createApiResponse(status, data, message = "Success") {
    return {
        status,
        data,
        message,
        timestamp: new Date().toISOString()
    };
}

console.log(
    "API Response:",
    createApiResponse(
        200,
        { name: "Shivaprada", role: "Developer" }
    )
);

// 76. Function to search users
function searchUsers(users, keyword) {
    return users.filter(user =>
        user.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

const teamMembers = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Shivaprada" },
    { id: 4, name: "Rohan" }
];

console.log("Search Result:", searchUsers(teamMembers, "ro"));


// 77. Function to sort users by age
function sortUsersByAge(users) {
    return [...users].sort((a, b) => a.age - b.age);
}

const usersWithAge = [
    { name: "Rahul", age: 28 },
    { name: "Priya", age: 22 },
    { name: "Shivaprada", age: 25 }
];

console.log("Sorted Users:", sortUsersByAge(usersWithAge));


// 78. Function to find the oldest user
function findOldestUser(users) {
    return users.reduce((oldest, user) =>
        user.age > oldest.age ? user : oldest
    );
}

console.log("Oldest User:", findOldestUser(usersWithAge));


// 79. Function to calculate total salary
function calculateTotalSalary(employees) {
    return employees.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);
}

const employeesData = [
    { name: "Rahul", salary: 30000 },
    { name: "Priya", salary: 40000 },
    { name: "Shivaprada", salary: 35000 }
];

console.log("Total Salary:", calculateTotalSalary(employeesData));


// 80. Function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(amount);
}

console.log("Formatted Price:", formatCurrency(25000));


// 81. Function to validate required fields
function validateUser(user) {
    if (!user.name) {
        return "Name is required";
    }

    if (!user.email) {
        return "Email is required";
    }

    if (!user.password) {
        return "Password is required";
    }

    return "User data is valid";
}

console.log(
    validateUser({
        name: "Shivaprada",
        email: "user@gmail.com",
        password: "12345678"
    })
);


// 82. Function to debounce another function
function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const search = debounce((keyword) => {
    console.log("Searching for:", keyword);
}, 1000);

search("React");
search("React Developer");


// 83. Function to execute a task only once
function once(callback) {
    let executed = false;

    return function (...args) {
        if (!executed) {
            executed = true;
            return callback(...args);
        }
    };
}

const initializeApp = once(() => {
    console.log("Application initialized");
});

initializeApp();
initializeApp();


// 84. Function to retry an async operation
async function retryOperation(operation, attempts) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await operation();
        } catch (error) {
            console.log(`Attempt ${i} failed`);

            if (i === attempts) {
                throw error;
            }
        }
    }
}

async function testOperation() {
    return "Operation successful";
}

retryOperation(testOperation, 3)
    .then(result => console.log("Retry Result:", result))
    .catch(error => console.log("Final Error:", error.message));


// 85. Function to create a reusable API request handler
async function handleRequest(requestFunction) {
    try {
        const result = await requestFunction();

        return {
            success: true,
            data: result
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

async function getData() {
    return {
        id: 1,
        name: "Shivaprada"
    };
}

handleRequest(getData).then(response => {
    console.log("Request Response:", response);
});

// 86. Basic class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayUser() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const user1 = new User("Shivaprada", 22);
user1.displayUser();


// 87. Class method
class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}

const calculator = new Calculator();

console.log("Addition:", calculator.add(10, 20));
console.log("Multiplication:", calculator.multiply(5, 4));


// 88. Class with default values
class Product {
    constructor(name, price = 0) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}, Price: ₹${this.price}`);
    }
}

const product1 = new Product("Keyboard", 1500);
const product2 = new Product("Mouse");

product1.displayProduct();
product2.displayProduct();


// 89. Class with method updating data
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance";
        }

        this.balance -= amount;
        return this.balance;
    }
}

const account = new BankAccount("Shivaprada", 5000);

console.log("After Deposit:", account.deposit(2000));
console.log("After Withdrawal:", account.withdraw(1000));


// 90. Static method
class MathHelper {
    static square(number) {
        return number * number;
    }

    static cube(number) {
        return number * number * number;
    }
}

console.log("Square:", MathHelper.square(5));
console.log("Cube:", MathHelper.cube(3));


// 91. Private class field
class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

const employee = new Employee("Shivaprada", 40000);

console.log("Employee:", employee.name);
console.log("Salary:", employee.getSalary());


// 92. Getter
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("Shivaprada", "Upadya");

console.log("Full Name:", person.fullName);


// 93. Setter
class Account {
    constructor(owner) {
        this.owner = owner;
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative");
            return;
        }

        this._balance = amount;
    }
}

const account2 = new Account("Shivaprada");

account2.balance = 10000;

console.log("Account Balance:", account2.balance);


// 94. Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} says Woof!`);
    }
}

const dog = new Dog("Tommy");

dog.speak();


// 95. Using super
class Developer {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Developer: ${this.name}`);
    }
}

class SoftwareDeveloper extends Developer {
    constructor(name, technology) {
        super(name);
        this.technology = technology;
    }

    introduce() {
        super.introduce();
        console.log(`Technology: ${this.technology}`);
    }
}

const developer = new SoftwareDeveloper(
    "Shivaprada",
    "React + Node.js"
);

developer.introduce();

// 96. Function using this
const userProfile = {
    name: "Shivaprada",

    showName() {
        console.log("User Name:", this.name);
    }
};

userProfile.showName();


// 97. call()
const personOne = {
    name: "Rahul"
};

function introduce(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

introduce.call(personOne, "Hello");


// 98. apply()
const personTwo = {
    name: "Priya"
};

introduce.apply(personTwo, ["Hi"]);


// 99. bind()
const personThree = {
    name: "Shivaprada"
};

const boundIntroduce = introduce.bind(personThree);

boundIntroduce("Welcome");


// 100. Function with object destructuring
function displayEmployee({ name, role, salary }) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

displayEmployee({
    name: "Shivaprada",
    role: "Software Developer",
    salary: 40000
});


// 101. Object.keys()
const employeeData = {
    name: "Shivaprada",
    role: "Developer",
    experience: 1
};

console.log("Keys:", Object.keys(employeeData));


// 102. Object.values()
console.log("Values:", Object.values(employeeData));


// 103. Object.entries()
console.log("Entries:", Object.entries(employeeData));


// 104. Object.assign()
const basicUser = {
    name: "Shivaprada"
};

const additionalDetails = {
    role: "Developer",
    technology: "JavaScript"
};

const completeUser = Object.assign(
    {},
    basicUser,
    additionalDetails
);

console.log("Complete User:", completeUser);


// 105. Optional chaining with function
function getCompanyName(user) {
    return user?.company?.name ?? "Company not available";
}

const employee = {
    name: "Shivaprada",
    company: {
        name: "Ninestars"
    }
};

console.log("Company:", getCompanyName(employee));
console.log(
    "Company:",
    getCompanyName({ name: "Rahul" })
);

// 106. Map
const userMap = new Map();

userMap.set(1, "Shivaprada");
userMap.set(2, "Rahul");
userMap.set(3, "Priya");

console.log("User:", userMap.get(1));
console.log("Map Size:", userMap.size);


// 107. Check Map value
console.log("Has User 2:", userMap.has(2));


// 108. Loop through Map
userMap.forEach((name, id) => {
    console.log(`ID: ${id}, Name: ${name}`);
});


// 109. Set
const uniqueNumbers = new Set([10, 20, 20, 30, 30, 40]);

console.log("Unique Numbers:", uniqueNumbers);


// 110. Add and delete Set values
uniqueNumbers.add(50);
uniqueNumbers.delete(20);

console.log("Updated Set:", uniqueNumbers);
console.log("Has 30:", uniqueNumbers.has(30));


// 111. Convert Set to Array
const numberArray = [...uniqueNumbers];

console.log("Set as Array:", numberArray);


// 112. Symbol
const userId = Symbol("userId");

const symbolUser = {
    name: "Shivaprada",
    [userId]: 101
};

console.log("User Name:", symbolUser.name);
console.log("Symbol ID:", symbolUser[userId]);


// 113. Generator function
function* numberGenerator() {
    yield 10;
    yield 20;
    yield 30;
}

const generator = numberGenerator();

console.log("Generator:", generator.next().value);
console.log("Generator:", generator.next().value);
console.log("Generator:", generator.next().value);


// 114. Generator with loop
function* countNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i;
    }
}

for (const number of countNumbers(5)) {
    console.log("Generated Number:", number);
}


// 115. Object.freeze()
const settings = {
    theme: "dark",
    language: "English"
};

Object.freeze(settings);

settings.theme = "light";

console.log("Settings:", settings);

// 116. Promise.resolve()
function getUser() {
    return Promise.resolve({
        id: 1,
        name: "Shivaprada"
    });
}

getUser().then(user => {
    console.log("User:", user);
});


// 117. Promise.reject()
function checkAccess(isAllowed) {
    if (isAllowed) {
        return Promise.resolve("Access granted");
    }

    return Promise.reject(new Error("Access denied"));
}

checkAccess(true)
    .then(message => console.log(message))
    .catch(error => console.log("Error:", error.message));


// 118. Promise.all()
function getProfile() {
    return Promise.resolve("Profile loaded");
}

function getSettings() {
    return Promise.resolve("Settings loaded");
}

async function loadUserData() {
    const results = await Promise.all([
        getProfile(),
        getSettings()
    ]);

    console.log("User Data:", results);
}

loadUserData();


// 119. Promise.race()
function fastRequest() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Fast request completed");
        }, 500);
    });
}

function slowRequest() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Slow request completed");
        }, 1000);
    });
}

Promise.race([fastRequest(), slowRequest()])
    .then(result => console.log("Race Result:", result));


// 120. Promise.allSettled()
function successfulRequest() {
    return Promise.resolve("Request successful");
}

function failedRequest() {
    return Promise.reject(new Error("Request failed"));
}

Promise.allSettled([
    successfulRequest(),
    failedRequest()
]).then(results => {
    console.log("All Results:", results);
});


// 121. Async function with multiple steps
async function processUser() {
    const user = await getUser();

    console.log("Processing:", user.name);

    return {
        ...user,
        status: "active"
    };
}

processUser().then(result => {
    console.log("Processed User:", result);
});


// 122. Function to transform API data
function transformUsers(users) {
    return users.map(user => ({
        id: user.id,
        displayName: user.name.toUpperCase()
    }));
}

const apiUsers = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Shivaprada" }
];

console.log("Transformed Users:", transformUsers(apiUsers));


// 123. Function to group users by role
function groupByRole(users) {
    return users.reduce((groups, user) => {
        if (!groups[user.role]) {
            groups[user.role] = [];
        }

        groups[user.role].push(user);

        return groups;
    }, {});
}

const employees = [
    { name: "Rahul", role: "Developer" },
    { name: "Priya", role: "Tester" },
    { name: "Shivaprada", role: "Developer" }
];

console.log("Grouped Users:", groupByRole(employees));


// 124. Function to create a reusable validator
function createValidator(rule) {
    return function (value) {
        return rule(value);
    };
}

const isValidEmail = createValidator(value => {
    return value.includes("@");
});

console.log("Email Valid:", isValidEmail("user@gmail.com"));
console.log("Email Valid:", isValidEmail("usergmail.com"));


// 125. Async function with try-catch-finally
async function performTask() {
    try {
        const result = await Promise.resolve("Task completed");
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Task finished");
    }
}

performTask();

// 126. Function to clone an object
function cloneObject(object) {
    return { ...object };
}

const originalUser = {
    name: "Shivaprada",
    role: "Developer"
};

const clonedUser = cloneObject(originalUser);

console.log("Cloned User:", clonedUser);


// 127. Function to merge two objects
function mergeObjects(object1, object2) {
    return {
        ...object1,
        ...object2
    };
}

const userDetails = {
    name: "Shivaprada",
    age: 22
};

const jobDetails = {
    role: "Software Developer",
    experience: 1
};

console.log(
    "Merged Object:",
    mergeObjects(userDetails, jobDetails)
);


// 128. Function to update object without modifying original
function updateUserRole(user, newRole) {
    return {
        ...user,
        role: newRole
    };
}

const currentUser = {
    name: "Shivaprada",
    role: "Trainee Developer"
};

const updatedUser = updateUserRole(
    currentUser,
    "Software Developer"
);

console.log("Original:", currentUser);
console.log("Updated:", updatedUser);


// 129. Function to remove a property
function removePassword(user) {
    const { password, ...safeUser } = user;

    return safeUser;
}

const userWithPassword = {
    id: 1,
    name: "Shivaprada",
    email: "user@gmail.com",
    password: "secret123"
};

console.log(
    "Safe User:",
    removePassword(userWithPassword)
);


// 130. Function to get unique values
function getUniqueValues(values) {
    return [...new Set(values)];
}

console.log(
    "Unique Values:",
    getUniqueValues([1, 2, 2, 3, 4, 4, 5])
);


// 131. Function to find common values
function findCommonValues(firstArray, secondArray) {
    return firstArray.filter(value =>
        secondArray.includes(value)
    );
}

console.log(
    "Common Values:",
    findCommonValues(
        [1, 2, 3, 4],
        [3, 4, 5, 6]
    )
);


// 132. Function to find difference between arrays
function findDifference(firstArray, secondArray) {
    return firstArray.filter(value =>
        !secondArray.includes(value)
    );
}

console.log(
    "Difference:",
    findDifference(
        [1, 2, 3, 4],
        [3, 4, 5, 6]
    )
);


// 133. Function to chunk an array
function chunkArray(array, size) {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
}

console.log(
    "Chunks:",
    chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
);


// 134. Function to paginate data
function paginateData(data, page, limit) {
    const startIndex = (page - 1) * limit;

    return data.slice(
        startIndex,
        startIndex + limit
    );
}

const productsList = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones",
    "Webcam"
];

console.log(
    "Page 2:",
    paginateData(productsList, 2, 2)
);


// 135. Function to safely access nested data
function getNestedValue(object, path) {
    return path
        .split(".")
        .reduce((current, key) => current?.[key], object);
}

const companyData = {
    name: "Ninestars",
    address: {
        city: "Bengaluru",
        country: "India"
    }
};

console.log(
    "City:",
    getNestedValue(companyData, "address.city")
);

console.log(
    "Country:",
    getNestedValue(companyData, "address.country")
);

// 136. Function to check if an object is empty
function isEmptyObject(object) {
    return Object.keys(object).length === 0;
}

console.log("Is Empty:", isEmptyObject({}));
console.log("Is Empty:", isEmptyObject({ name: "Shivaprada" }));


// 137. Function to count occurrences
function countOccurrences(array) {
    return array.reduce((count, value) => {
        count[value] = (count[value] || 0) + 1;
        return count;
    }, {});
}

console.log(
    "Occurrences:",
    countOccurrences(["React", "Node", "React", "JavaScript", "Node"])
);


// 138. Function to find the most frequent value
function findMostFrequent(array) {
    const counts = countOccurrences(array);

    return Object.keys(counts).reduce((mostFrequent, value) => {
        return counts[value] > counts[mostFrequent]
            ? value
            : mostFrequent;
    });
}

console.log(
    "Most Frequent:",
    findMostFrequent(["A", "B", "A", "C", "A", "B"])
);


// 139. Function to capitalize every word
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}

console.log(
    "Capitalized:",
    capitalizeWords("javascript is very useful")
);


// 140. Function to remove extra spaces
function removeExtraSpaces(text) {
    return text.trim().replace(/\s+/g, " ");
}

console.log(
    "Clean Text:",
    removeExtraSpaces("   Hello     JavaScript   World   ")
);


// 141. Function to validate password
function validatePassword(password) {
    if (password.length < 8) {
        return "Password must contain at least 8 characters";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain an uppercase letter";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must contain a number";
    }

    return "Password is valid";
}

console.log(
    validatePassword("JavaScript123")
);


// 142. Function to validate phone number
function validatePhoneNumber(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;

    return phoneRegex.test(phone);
}

console.log(
    "Valid Phone:",
    validatePhoneNumber("9876543210")
);

console.log(
    "Valid Phone:",
    validatePhoneNumber("1234567890")
);


// 143. Function to format date
function formatDate(date) {
    return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).format(date);
}

console.log(
    "Formatted Date:",
    formatDate(new Date())
);


// 144. Function to calculate age
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();

    return currentYear - birthYear;
}

console.log(
    "Age:",
    calculateAge(2004)
);


// 145. Function to create a slug
function createSlug(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

console.log(
    "Slug:",
    createSlug("JavaScript Functions Tutorial")
);

// 146. Function to check if two arrays are equal
function areArraysEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }

    return firstArray.every((value, index) => {
        return value === secondArray[index];
    });
}

console.log(
    "Arrays Equal:",
    areArraysEqual([1, 2, 3], [1, 2, 3])
);


// 147. Function to flatten an array
function flattenArray(array) {
    return array.flat(Infinity);
}

console.log(
    "Flattened Array:",
    flattenArray([1, [2, [3, 4]], 5])
);


// 148. Function to sort objects by property
function sortByProperty(items, property) {
    return [...items].sort((a, b) => {
        return String(a[property]).localeCompare(String(b[property]));
    });
}

const developers = [
    { name: "Shivaprada", role: "Developer" },
    { name: "Rahul", role: "Tester" },
    { name: "Priya", role: "Designer" }
];

console.log(
    "Sorted Developers:",
    sortByProperty(developers, "name")
);


// 149. Function to group objects by property
function groupBy(items, property) {
    return items.reduce((groups, item) => {
        const key = item[property];

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(item);

        return groups;
    }, {});
}

console.log(
    "Grouped Developers:",
    groupBy(developers, "role")
);


// 150. Function to memoize results
function memoize(callback) {
    const cache = new Map();

    return function (value) {
        if (cache.has(value)) {
            console.log("Returning cached result");
            return cache.get(value);
        }

        const result = callback(value);

        cache.set(value, result);

        return result;
    };
}

const squareNumber = memoize(number => number * number);

console.log("Square:", squareNumber(10));
console.log("Square:", squareNumber(10));
console.log("Square:", squareNumber(20));


// 151. Function to throttle execution
function throttle(callback, delay) {
    let waiting = false;

    return function (...args) {
        if (waiting) {
            return;
        }

        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

const logMessage = throttle(message => {
    console.log("Throttled:", message);
}, 1000);

logMessage("Message 1");
logMessage("Message 2");


// 152. Function to deep clone an object
function deepClone(object) {
    return structuredClone(object);
}

const originalData = {
    name: "Shivaprada",
    address: {
        city: "Bengaluru"
    }
};

const clonedData = deepClone(originalData);

clonedData.address.city = "Mangaluru";

console.log("Original Data:", originalData);
console.log("Cloned Data:", clonedData);


// 153. Function to pick selected properties
function pickProperties(object, properties) {
    return properties.reduce((result, property) => {
        if (property in object) {
            result[property] = object[property];
        }

        return result;
    }, {});
}

const employeeInfo = {
    name: "Shivaprada",
    age: 22,
    role: "Developer",
    salary: 40000
};

console.log(
    "Selected Properties:",
    pickProperties(employeeInfo, ["name", "role"])
);


// 154. Function to omit selected properties
function omitProperties(object, properties) {
    const result = { ...object };

    properties.forEach(property => {
        delete result[property];
    });

    return result;
}

console.log(
    "Without Salary:",
    omitProperties(employeeInfo, ["salary"])
);


// 155. Function to safely execute another function
function safeExecute(callback) {
    try {
        return {
            success: true,
            result: callback()
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

console.log(
    "Safe Result:",
    safeExecute(() => 10 + 20)
);

console.log(
    "Safe Error:",
    safeExecute(() => {
        throw new Error("Something went wrong");
    })
);

// 306. Function to create a request context
function createRequestContext306(method, url) {
    return {
        method: String(method).toUpperCase(),
        url: String(url),
        requestId: `REQ-${Date.now()}`,
        timestamp: new Date().toISOString()
    };
}

console.log(
    "306:",
    createRequestContext306("GET", "/api/users")
);


// 307. Function to log an API request
function logApiRequest307(context) {
    if (!context || typeof context !== "object") {
        console.log("Invalid request context");
        return;
    }

    console.log(
        `[${context.timestamp}] ${context.method} ${context.url}`
    );
}

logApiRequest307(
    createRequestContext306("POST", "/api/users")
);


// 308. Function to create a middleware
function createMiddleware308(message) {
    return function (requestContext, next) {
        console.log("Middleware:", message);

        if (typeof next === "function") {
            return next(requestContext);
        }

        return requestContext;
    };
}

const requestMiddleware308 = createMiddleware308(
    "Request received"
);

console.log(
    "308:",
    requestMiddleware308({ path: "/api/users" })
);


// 309. Function to execute multiple middleware functions
function runMiddleware309(context, middlewareList) {
    return middlewareList.reduce(
        (currentContext, middleware) => {
            return middleware(currentContext);
        },
        context
    );
}

const middlewareList309 = [
    context => ({ ...context, authenticated: true }),
    context => ({ ...context, validated: true })
];

console.log(
    "309:",
    runMiddleware309(
        { path: "/api/users" },
        middlewareList309
    )
);


// 310. Function to validate required fields
function validateRequiredFields310(data, fields) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return {
            valid: false,
            missingFields: fields
        };
    }

    const missingFields = fields.filter(field => {
        const value = data[field];

        return value === undefined ||
            value === null ||
            (typeof value === "string" && value.trim() === "");
    });

    return {
        valid: missingFields.length === 0,
        missingFields: missingFields
    };
}

console.log(
    "310:",
    validateRequiredFields310(
        { name: "Shivaprada", email: "" },
        ["name", "email"]
    )
);


// 311. Function to create a safe error response
function createSafeErrorResponse311(error) {
    const statusCode =
        Number.isInteger(error?.statusCode) &&
        error.statusCode >= 400 &&
        error.statusCode <= 599
            ? error.statusCode
            : 500;

    return {
        success: false,
        statusCode: statusCode,
        message: statusCode >= 500
            ? "Internal server error"
            : String(error.message || "Request failed"),
        timestamp: new Date().toISOString()
    };
}

console.log(
    "311:",
    createSafeErrorResponse311({
        statusCode: 404,
        message: "User not found"
    })
);


// 312. Function to handle an API error
function handleApiError312(error) {
    const response = createSafeErrorResponse311(error);

    console.error("API Error:", response.statusCode);

    return response;
}

console.log(
    "312:",
    handleApiError312({
        statusCode: 400,
        message: "Invalid request"
    })
);


// 313. Function to check a request content type
function validateContentType313(contentType) {
    if (typeof contentType !== "string") {
        return false;
    }

    return contentType
        .toLowerCase()
        .split(";")[0]
        .trim() === "application/json";
}

console.log(
    "313:",
    validateContentType313("application/json; charset=utf-8")
);


// 314. Function to remove sensitive fields from an object
function removeSensitiveFields314(data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return data;
    }

    const sensitiveFields = [
        "password",
        "token",
        "secret",
        "accessToken",
        "refreshToken"
    ];

    const safeData = { ...data };

    for (const field of sensitiveFields) {
        delete safeData[field];
    }

    return safeData;
}

console.log(
    "314:",
    removeSensitiveFields314({
        id: 1,
        name: "Shivaprada",
        password: "example-password",
        token: "example-token"
    })
);


// 315. Function to combine request validation and response creation
function processApiRequest315(requestData, requiredFields) {
    const validation = validateRequiredFields310(
        requestData,
        requiredFields
    );

    if (!validation.valid) {
        return {
            success: false,
            statusCode: 400,
            message: "Required fields are missing",
            missingFields: validation.missingFields
        };
    }

    return {
        success: true,
        statusCode: 200,
        message: "Request validated successfully",
        data: removeSensitiveFields314(requestData)
    };
}

console.log(
    "315:",
    processApiRequest315(
        {
            name: "Shivaprada",
            email: "user@example.com",
            password: "example-password"
        },
        ["name", "email"]
    )
);

// 316. Function to generate a unique request ID
function generateRequestId316() {
    return `REQ-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`;
}

console.log("316:", generateRequestId316());


// 317. Function to measure execution time
function measureExecutionTime317(callback) {
    const startTime = performance.now();

    const result = callback();

    const endTime = performance.now();

    return {
        result: result,
        executionTimeMs: Number(
            (endTime - startTime).toFixed(3)
        )
    };
}

console.log(
    "317:",
    measureExecutionTime317(() => {
        return 10 + 20;
    })
);


// 318. Function to measure asynchronous execution time
async function measureAsyncTime318(callback) {
    const startTime = performance.now();

    try {
        const result = await callback();

        return {
            success: true,
            result: result,
            executionTimeMs: Number(
                (performance.now() - startTime).toFixed(3)
            )
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            executionTimeMs: Number(
                (performance.now() - startTime).toFixed(3)
            )
        };
    }
}

measureAsyncTime318(async () => {
    return "Async task completed";
}).then(result => console.log("318:", result));


// 319. Function to create a simple rate limiter
function createRateLimiter319(maxRequests, windowMs) {
    const requests = new Map();

    return function (clientId) {
        const now = Date.now();
        const requestTimes = requests.get(clientId) || [];

        const recentRequests = requestTimes.filter(
            time => now - time < windowMs
        );

        if (recentRequests.length >= maxRequests) {
            requests.set(clientId, recentRequests);

            return {
                allowed: false,
                remaining: 0,
                message: "Rate limit exceeded"
            };
        }

        recentRequests.push(now);
        requests.set(clientId, recentRequests);

        return {
            allowed: true,
            remaining: maxRequests - recentRequests.length,
            message: "Request allowed"
        };
    };
}

const rateLimiter319 = createRateLimiter319(3, 60000);

console.log("319:", rateLimiter319("user-1"));
console.log("319:", rateLimiter319("user-1"));


// 320. Function to remove expired entries
function removeExpiredEntries320(cache, maxAgeMs) {
    const now = Date.now();
    let removedCount = 0;

    for (const [key, entry] of cache.entries()) {
        if (now - entry.createdAt >= maxAgeMs) {
            cache.delete(key);
            removedCount++;
        }
    }

    return removedCount;
}

const cache320 = new Map();

cache320.set("user-1", {
    value: { name: "Shivaprada" },
    createdAt: Date.now() - 10000
});

console.log(
    "320: Removed entries:",
    removeExpiredEntries320(cache320, 5000)
);


// 321. Function to create a response timing summary
function createTimingSummary321(startTime, endTime) {
    if (
        !Number.isFinite(startTime) ||
        !Number.isFinite(endTime) ||
        endTime < startTime
    ) {
        throw new Error("Invalid timing values");
    }

    const duration = endTime - startTime;

    return {
        durationMs: Number(duration.toFixed(2)),
        durationSeconds: Number((duration / 1000).toFixed(3))
    };
}

console.log(
    "321:",
    createTimingSummary321(100, 250)
);


// 322. Function to run asynchronous middleware
async function runAsyncMiddleware322(context, middlewareList) {
    let currentContext = context;

    for (const middleware of middlewareList) {
        currentContext = await middleware(currentContext);

        if (currentContext === null || currentContext === undefined) {
            throw new Error("Middleware returned no context");
        }
    }

    return currentContext;
}

runAsyncMiddleware322(
    { userId: 1 },
    [
        async context => ({
            ...context,
            authenticated: true
        }),
        async context => ({
            ...context,
            validated: true
        })
    ]
)
    .then(result => console.log("322:", result))
    .catch(error => console.error("322 Error:", error.message));


// 323. Function to retry an asynchronous operation
async function retryOperation323(
    operation,
    maxAttempts = 3,
    delayMs = 500
) {
    if (!Number.isInteger(maxAttempts) || maxAttempts < 1) {
        throw new Error("maxAttempts must be at least 1");
    }

    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;

            if (attempt < maxAttempts) {
                await new Promise(resolve => {
                    setTimeout(resolve, delayMs);
                });
            }
        }
    }

    throw lastError;
}

retryOperation323(
    async () => "Operation successful",
    3,
    200
)
    .then(result => console.log("323:", result))
    .catch(error => console.error("323 Error:", error.message));


// 324. Function to safely parse JSON
function safeParseJson324(jsonString) {
    try {
        return {
            success: true,
            data: JSON.parse(jsonString)
        };
    } catch {
        return {
            success: false,
            data: null,
            message: "Invalid JSON"
        };
    }
}

console.log(
    "324:",
    safeParseJson324('{"name":"Shivaprada"}')
);


// 325. Function to create an API request summary
function createApiRequestSummary325(request) {
    if (!request || typeof request !== "object") {
        throw new Error("A request object is required");
    }

    return {
        requestId: generateRequestId316(),
        method: String(request.method || "GET").toUpperCase(),
        path: String(request.path || "/"),
        timestamp: new Date().toISOString(),
        status: "received"
    };
}

console.log(
    "325:",
    createApiRequestSummary325({
        method: "POST",
        path: "/api/users"
    })
);

// 326. Function to create a simple cache
function createCache326() {
    const cache = new Map();

    return {
        set(key, value) {
            cache.set(key, {
                value: value,
                createdAt: Date.now()
            });
        },

        get(key) {
            const entry = cache.get(key);
            return entry ? entry.value : undefined;
        },

        has(key) {
            return cache.has(key);
        },

        delete(key) {
            return cache.delete(key);
        },

        size() {
            return cache.size;
        }
    };
}

const cache326 = createCache326();

cache326.set("username", "Shivaprada");
console.log("326:", cache326.get("username"));


// 327. Function to cache values with an expiration time
function createExpiringCache327(ttlMs) {
    const cache = new Map();

    return {
        set(key, value) {
            cache.set(key, {
                value: value,
                expiresAt: Date.now() + ttlMs
            });
        },

        get(key) {
            const entry = cache.get(key);

            if (!entry) {
                return undefined;
            }

            if (Date.now() >= entry.expiresAt) {
                cache.delete(key);
                return undefined;
            }

            return entry.value;
        }
    };
}

const expiringCache327 = createExpiringCache327(5000);

expiringCache327.set("status", "Active");
console.log("327:", expiringCache327.get("status"));


// 328. Function to filter records by a field
function filterRecords328(records, field, value) {
    if (!Array.isArray(records)) {
        return [];
    }

    return records.filter(record => record[field] === value);
}

const records328 = [
    { id: 1, name: "Asha", role: "Developer" },
    { id: 2, name: "Ravi", role: "Tester" },
    { id: 3, name: "Meera", role: "Developer" }
];

console.log(
    "328:",
    filterRecords328(records328, "role", "Developer")
);


// 329. Function to sort records by a numeric field
function sortRecords329(records, field, order = "asc") {
    if (!Array.isArray(records)) {
        return [];
    }

    if (!["asc", "desc"].includes(order)) {
        throw new Error("Order must be 'asc' or 'desc'");
    }

    return [...records].sort((a, b) => {
        const first = a[field];
        const second = b[field];

        if (
            typeof first !== "number" ||
            typeof second !== "number"
        ) {
            throw new Error("Sort field must contain numbers");
        }

        return order === "asc"
            ? first - second
            : second - first;
    });
}

const scores329 = [
    { name: "Asha", score: 85 },
    { name: "Ravi", score: 65 },
    { name: "Meera", score: 95 }
];

console.log(
    "329:",
    sortRecords329(scores329, "score", "desc")
);


// 330. Function to paginate an array
function paginateArray330(records, page = 1, limit = 5) {
    if (!Array.isArray(records)) {
        throw new Error("Records must be an array");
    }

    if (
        !Number.isInteger(page) ||
        !Number.isInteger(limit) ||
        page < 1 ||
        limit < 1
    ) {
        throw new Error("Page and limit must be positive integers");
    }

    const startIndex = (page - 1) * limit;

    return {
        data: records.slice(startIndex, startIndex + limit),
        page: page,
        limit: limit,
        totalRecords: records.length,
        totalPages: Math.ceil(records.length / limit)
    };
}

console.log(
    "330:",
    paginateArray330(records328, 1, 2)
);


// 331. Function to search records by text
function searchRecords331(records, field, searchText) {
    if (!Array.isArray(records)) {
        return [];
    }

    const query = String(searchText).toLowerCase();

    return records.filter(record => {
        const value = record[field];

        return typeof value === "string" &&
            value.toLowerCase().includes(query);
    });
}

console.log(
    "331:",
    searchRecords331(records328, "name", "as")
);


// 332. Function to find a record by ID
function findRecordById332(records, id) {
    if (!Array.isArray(records)) {
        return null;
    }

    return records.find(record => record.id === id) ?? null;
}

console.log("332:", findRecordById332(records328, 2));


// 333. Function to count records by a field
function countRecordsByField333(records, field) {
    if (!Array.isArray(records)) {
        return {};
    }

    return records.reduce((counts, record) => {
        const key = String(record[field] ?? "undefined");

        counts[key] = (counts[key] || 0) + 1;

        return counts;
    }, {});
}

console.log(
    "333:",
    countRecordsByField333(records328, "role")
);


// 334. Function to remove duplicate records by ID
function removeDuplicateRecords334(records) {
    if (!Array.isArray(records)) {
        return [];
    }

    const uniqueRecords = new Map();

    for (const record of records) {
        if (record && record.id !== undefined) {
            if (!uniqueRecords.has(record.id)) {
                uniqueRecords.set(record.id, record);
            }
        }
    }

    return [...uniqueRecords.values()];
}

console.log(
    "334:",
    removeDuplicateRecords334([
        { id: 1, name: "Asha" },
        { id: 2, name: "Ravi" },
        { id: 1, name: "Asha" }
    ])
);


// 335. Function to create a database-style query result
function createQueryResult335(records, options = {}) {
    if (!Array.isArray(records)) {
        throw new Error("Records must be an array");
    }

    const {
        field,
        value,
        page = 1,
        limit = 10
    } = options;

    let results = [...records];

    if (field !== undefined) {
        results = results.filter(
            record => record[field] === value
        );
    }

    const totalRecords = results.length;

    const paginated = paginateArray330(results, page, limit);

    return {
        data: paginated.data,
        pagination: {
            page: page,
            limit: limit,
            totalRecords: totalRecords,
            totalPages: Math.ceil(totalRecords / limit)
        }
    };
}

console.log(
    "335:",
    createQueryResult335(records328, {
        field: "role",
        value: "Developer",
        page: 1,
        limit: 1
    })
);

// 336. Function to create an in-memory database
function createDatabase336(initialData = []) {
    const records = new Map();

    for (const record of initialData) {
        if (record && record.id !== undefined) {
            records.set(record.id, { ...record });
        }
    }

    return {
        getAll() {
            return [...records.values()].map(record => ({ ...record }));
        },

        getById(id) {
            const record = records.get(id);
            return record ? { ...record } : null;
        },

        insert(record) {
            if (!record || record.id === undefined) {
                throw new Error("Record ID is required");
            }

            if (records.has(record.id)) {
                throw new Error("Record already exists");
            }

            records.set(record.id, { ...record });
            return { ...record };
        },

        update(id, changes) {
            const existing = records.get(id);

            if (!existing) {
                return null;
            }

            const updated = { ...existing, ...changes, id };
            records.set(id, updated);

            return { ...updated };
        },

        delete(id) {
            return records.delete(id);
        }
    };
}

const database336 = createDatabase336([
    { id: 1, name: "Asha" },
    { id: 2, name: "Ravi" }
]);

console.log("336:", database336.getAll());


// 337. Function to create a repository layer
function createRepository337(database) {
    return {
        findAll() {
            return database.getAll();
        },

        findById(id) {
            return database.getById(id);
        },

        create(record) {
            return database.insert(record);
        },

        update(id, changes) {
            return database.update(id, changes);
        },

        remove(id) {
            return database.delete(id);
        }
    };
}

const repository337 = createRepository337(database336);

console.log("337:", repository337.findById(1));


// 338. Function to create a service layer
function createUserService338(repository) {
    return {
        getUsers() {
            return repository.findAll();
        },

        getUser(id) {
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error("A valid user ID is required");
            }

            return repository.findById(id);
        },

        createUser(user) {
            if (!user || typeof user.name !== "string" ||
                user.name.trim().length < 2) {
                throw new Error("A valid user name is required");
            }

            return repository.create({
                ...user,
                name: user.name.trim()
            });
        }
    };
}

const userService338 = createUserService338(repository337);

console.log("338:", userService338.getUsers());


// 339. Function to safely execute a service operation
function executeService339(operation) {
    try {
        return {
            success: true,
            data: operation()
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}

console.log(
    "339:",
    executeService339(() => userService338.getUser(1))
);


// 340. Function to create a transaction-like operation
function executeTransaction340(database, operations) {
    if (!Array.isArray(operations)) {
        throw new Error("Operations must be an array");
    }

    const backup = database.getAll();

    try {
        const results = operations.map(operation => operation(database));

        return {
            success: true,
            results: results
        };
    } catch (error) {
        // Restore the original records if an operation fails.
        for (const record of database.getAll()) {
            database.delete(record.id);
        }

        for (const record of backup) {
            database.insert(record);
        }

        return {
            success: false,
            message: error.message
        };
    }
}

console.log(
    "340:",
    executeTransaction340(database336, [
        db => db.insert({ id: 3, name: "Meera" }),
        db => db.insert({ id: 3, name: "Duplicate" })
    ])
);


// 341. Function to validate a database record
function validateRecord341(record, requiredFields = []) {
    if (!record || typeof record !== "object" ||
        Array.isArray(record)) {
        return {
            valid: false,
            missingFields: requiredFields
        };
    }

    const missingFields = requiredFields.filter(field => {
        const value = record[field];

        return value === undefined ||
            value === null ||
            (typeof value === "string" && value.trim() === "");
    });

    return {
        valid: missingFields.length === 0,
        missingFields: missingFields
    };
}

console.log(
    "341:",
    validateRecord341(
        { name: "Asha", email: "asha@example.com" },
        ["name", "email"]
    )
);


// 342. Function to update a record with validation
function updateRecord342(repository, id, changes) {
    if (!changes || typeof changes !== "object" ||
        Array.isArray(changes)) {
        return {
            success: false,
            message: "Changes must be an object"
        };
    }

    const existing = repository.findById(id);

    if (!existing) {
        return {
            success: false,
            message: "Record not found"
        };
    }

    const updated = repository.update(id, changes);

    return {
        success: true,
        data: updated
    };
}

console.log(
    "342:",
    updateRecord342(repository337, 1, { name: "Asha Sharma" })
);


// 343. Function to delete a record safely
function deleteRecord343(repository, id) {
    const existing = repository.findById(id);

    if (!existing) {
        return {
            success: false,
            message: "Record not found"
        };
    }

    repository.remove(id);

    return {
        success: true,
        message: "Record deleted successfully",
        deletedId: id
    };
}

console.log("343:", deleteRecord343(repository337, 2));


// 344. Function to create a paginated repository response
function getPaginatedRecords344(repository, page = 1, limit = 10) {
    if (!Number.isInteger(page) || page < 1 ||
        !Number.isInteger(limit) || limit < 1) {
        throw new Error("Page and limit must be positive integers");
    }

    const records = repository.findAll();
    const startIndex = (page - 1) * limit;

    return {
        data: records.slice(startIndex, startIndex + limit),
        pagination: {
            page: page,
            limit: limit,
            totalRecords: records.length,
            totalPages: Math.ceil(records.length / limit)
        }
    };
}

console.log(
    "344:",
    getPaginatedRecords344(repository337, 1, 5)
);


// 345. Function to create a standard service response
function createServiceResponse345(operation) {
    try {
        const data = operation();

        return {
            success: true,
            data: data,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        return {
            success: false,
            error: {
                message: error.message
            },
            timestamp: new Date().toISOString()
        };
    }
}

console.log(
    "345:",
    createServiceResponse345(() => userService338.getUser(1))
);

// 346. Function to sanitize a text input
function sanitizeText346(value) {
    if (typeof value !== "string") {
        return "";
    }

    return value.trim().replace(/\s+/g, " ");
}

console.log("346:", sanitizeText346("  Hello    World  "));


// 347. Function to validate a numeric ID
function validateId347(id) {
    const numericId = Number(id);

    return {
        valid: Number.isSafeInteger(numericId) && numericId > 0,
        value: Number.isSafeInteger(numericId) && numericId > 0
            ? numericId
            : null
    };
}

console.log("347:", validateId347("25"));


// 348. Function to create a standardized error object
function createError348(message, statusCode = 500) {
    const error = new Error(message);
    error.statusCode = statusCode;

    return error;
}

console.log(
    "348:",
    createError348("User not found", 404).statusCode
);


// 349. Function to create an API controller
function createUserController349(userService) {
    return {
        getAll() {
            return {
                statusCode: 200,
                body: {
                    success: true,
                    data: userService.getUsers()
                }
            };
        },

        getById(id) {
            const validation = validateId347(id);

            if (!validation.valid) {
                return {
                    statusCode: 400,
                    body: {
                        success: false,
                        message: "Invalid user ID"
                    }
                };
            }

            const user = userService.getUser(validation.value);

            if (!user) {
                return {
                    statusCode: 404,
                    body: {
                        success: false,
                        message: "User not found"
                    }
                };
            }

            return {
                statusCode: 200,
                body: {
                    success: true,
                    data: user
                }
            };
        }
    };
}

// Reuse the service created in function 338.
const userController349 = createUserController349(userService338);

console.log("349:", userController349.getAll());


// 350. Function to handle controller errors
function handleControllerError350(error) {
    const statusCode =
        Number.isInteger(error?.statusCode) &&
        error.statusCode >= 400 &&
        error.statusCode <= 599
            ? error.statusCode
            : 500;

    return {
        statusCode: statusCode,
        body: {
            success: false,
            message: statusCode >= 500
                ? "Internal server error"
                : error.message
        }
    };
}

console.log(
    "350:",
    handleControllerError350(createError348("Not found", 404))
);


// 351. Function to validate an allowed sort field
function validateSortField351(field, allowedFields) {
    if (
        typeof field !== "string" ||
        !Array.isArray(allowedFields)
    ) {
        return false;
    }

    return allowedFields.includes(field);
}

console.log(
    "351:",
    validateSortField351("name", ["name", "email", "createdAt"])
);


// 352. Function to build a safe sorting configuration
function createSortConfig352(field, direction, allowedFields) {
    if (!validateSortField351(field, allowedFields)) {
        throw new Error("Invalid sort field");
    }

    const normalizedDirection = String(direction).toLowerCase();

    if (!["asc", "desc"].includes(normalizedDirection)) {
        throw new Error("Sort direction must be asc or desc");
    }

    return {
        field: field,
        direction: normalizedDirection
    };
}

console.log(
    "352:",
    createSortConfig352(
        "name",
        "asc",
        ["name", "email", "createdAt"]
    )
);


// 353. Function to validate pagination parameters
function validatePagination353(page, limit) {
    const valid =
        Number.isInteger(page) &&
        Number.isInteger(limit) &&
        page >= 1 &&
        limit >= 1 &&
        limit <= 100;

    return {
        valid: valid,
        page: valid ? page : null,
        limit: valid ? limit : null,
        message: valid
            ? "Pagination parameters are valid"
            : "Invalid page or limit"
    };
}

console.log("353:", validatePagination353(1, 20));


// 354. Function to create request metadata
function createRequestMetadata354(request) {
    if (!request || typeof request !== "object") {
        throw new Error("A request object is required");
    }

    return {
        requestId: generateRequestId316(),
        method: String(request.method || "GET").toUpperCase(),
        path: sanitizeText346(request.path || "/"),
        receivedAt: new Date().toISOString()
    };
}

console.log(
    "354:",
    createRequestMetadata354({
        method: "GET",
        path: "/api/users"
    })
);


// 355. Function to combine validation and controller execution
function executeController355(controller, id) {
    try {
        const result = controller.getById(id);

        return {
            success: true,
            statusCode: result.statusCode,
            body: result.body
        };
    } catch (error) {
        const handledError = handleControllerError350(error);

        return {
            success: false,
            statusCode: handledError.statusCode,
            body: handledError.body
        };
    }
}

console.log(
    "355:",
    executeController355(userController349, 1)
);

// 356. Function to create a standard HTTP response
function createHttpResponse356(statusCode, data, message = "") {
    return {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            success: statusCode >= 200 && statusCode < 300,
            data: data,
            message: message,
            timestamp: new Date().toISOString()
        }
    };
}

console.log(
    "356:",
    createHttpResponse356(200, { id: 1 }, "User found")
);


// 357. Function to validate a request method and path
function validateRequest357(request, allowedMethods, allowedPaths) {
    if (!request || typeof request !== "object") {
        return { valid: false, message: "Invalid request" };
    }

    const method = String(request.method || "").toUpperCase();
    const path = String(request.path || "");

    if (!allowedMethods.includes(method)) {
        return { valid: false, message: "Method not allowed" };
    }

    if (!allowedPaths.includes(path)) {
        return { valid: false, message: "Path not allowed" };
    }

    return { valid: true, message: "Request is valid" };
}

console.log(
    "357:",
    validateRequest357(
        { method: "GET", path: "/api/users" },
        ["GET", "POST"],
        ["/api/users", "/api/health"]
    )
);


// 358. Function to safely parse a request body
function parseRequestBody358(body) {
    if (typeof body === "object" && body !== null) {
        if (Array.isArray(body)) {
            return {
                success: false,
                message: "Request body must be an object"
            };
        }

        return { success: true, data: body };
    }

    if (typeof body !== "string") {
        return {
            success: false,
            message: "Request body must be JSON"
        };
    }

    try {
        const data = JSON.parse(body);

        if (
            typeof data !== "object" ||
            data === null ||
            Array.isArray(data)
        ) {
            return {
                success: false,
                message: "JSON body must contain an object"
            };
        }

        return { success: true, data: data };
    } catch {
        return {
            success: false,
            message: "Invalid JSON"
        };
    }
}

console.log(
    "358:",
    parseRequestBody358('{"name":"Shivaprada"}')
);


// 359. Function to create an asynchronous controller
function createAsyncController359(operation) {
    return async function (input) {
        try {
            const data = await operation(input);

            return createHttpResponse356(
                200,
                data,
                "Operation completed"
            );
        } catch (error) {
            console.error("Controller error:", error.message);

            return createHttpResponse356(
                500,
                null,
                "Internal server error"
            );
        }
    };
}

const controller359 = createAsyncController359(async input => {
    return { greeting: `Hello, ${input.name}` };
});

controller359({ name: "Shivaprada" })
    .then(result => console.log("359:", result));


// 360. Function to validate an email and password
function validateCredentials360(credentials) {
    if (
        !credentials ||
        typeof credentials !== "object" ||
        Array.isArray(credentials)
    ) {
        return {
            valid: false,
            message: "Credentials must be an object"
        };
    }

    const emailValid = validateEmail298(credentials.email);

    const passwordValid =
        typeof credentials.password === "string" &&
        credentials.password.length >= 8;

    return {
        valid: emailValid && passwordValid,
        message: !emailValid
            ? "Invalid email"
            : !passwordValid
                ? "Password must contain at least 8 characters"
                : "Credentials format is valid"
    };
}

console.log(
    "360:",
    validateCredentials360({
        email: "user@example.com",
        password: "example123"
    })
);


// 361. Function to create a not-found response
function createNotFoundResponse361(resource = "Resource") {
    return createHttpResponse356(
        404,
        null,
        `${resource} not found`
    );
}

console.log("361:", createNotFoundResponse361("User"));


// 362. Function to create a conflict response
function createConflictResponse362(message = "Resource already exists") {
    return createHttpResponse356(
        409,
        null,
        message
    );
}

console.log("362:", createConflictResponse362());


// 363. Function to create a bad-request response
function createBadRequestResponse363(message = "Invalid request") {
    return createHttpResponse356(
        400,
        null,
        message
    );
}

console.log("363:", createBadRequestResponse363("Missing name"));


// 364. Function to execute an operation with a timeout
async function executeWithTimeout364(operation, timeoutMs = 3000) {
    if (
        typeof operation !== "function" ||
        !Number.isFinite(timeoutMs) ||
        timeoutMs <= 0
    ) {
        throw new Error("A valid operation and timeout are required");
    }

    let timer;

    try {
        return await Promise.race([
            Promise.resolve().then(operation),
            new Promise((_, reject) => {
                timer = setTimeout(() => {
                    reject(new Error("Operation timed out"));
                }, timeoutMs);
            })
        ]);
    } finally {
        clearTimeout(timer);
    }
}

executeWithTimeout364(
    async () => "Task completed",
    3000
)
    .then(result => console.log("364:", result))
    .catch(error => console.log("364:", error.message));


// 365. Function to combine request validation and response handling
async function processRequest365(request, operation) {
    const validation = validateRequest357(
        request,
        ["GET", "POST"],
        ["/api/users", "/api/health"]
    );

    if (!validation.valid) {
        return createHttpResponse356(
            400,
            null,
            validation.message
        );
    }

    try {
        const data = await operation(request);

        return createHttpResponse356(
            200,
            data,
            "Request processed successfully"
        );
    } catch (error) {
        console.error("Request processing error:", error.message);

        return createHttpResponse356(
            500,
            null,
            "Internal server error"
        );
    }
}

processRequest365(
    { method: "GET", path: "/api/users" },
    async () => [{ id: 1, name: "Shivaprada" }]
)
    .then(result => console.log("365:", result));

// 366. Function to build a parameterized SQL query
function buildUserQuery366(userId) {
    if (!Number.isSafeInteger(userId) || userId <= 0) {
        throw new Error("A valid user ID is required");
    }

    return {
        text: "SELECT id, name, email FROM users WHERE id = $1",
        values: [userId]
    };
}

console.log("366:", buildUserQuery366(1));


// 367. Function to build a paginated SQL query
function buildPaginationQuery367(page = 1, limit = 10) {
    if (
        !Number.isInteger(page) ||
        !Number.isInteger(limit) ||
        page < 1 ||
        limit < 1 ||
        limit > 100
    ) {
        throw new Error("Invalid pagination parameters");
    }

    const offset = (page - 1) * limit;

    return {
        text: "SELECT id, name FROM users ORDER BY id LIMIT $1 OFFSET $2",
        values: [limit, offset]
    };
}

console.log("367:", buildPaginationQuery367(2, 10));


// 368. Function to build a parameterized search query
function buildSearchQuery368(searchText) {
    if (
        typeof searchText !== "string" ||
        searchText.trim().length === 0
    ) {
        throw new Error("Search text is required");
    }

    return {
        text: "SELECT id, name FROM users WHERE name ILIKE $1",
        values: [`%${searchText.trim()}%`]
    };
}

console.log("368:", buildSearchQuery368("Shiva"));


// 369. Function to build a parameterized INSERT query
function buildInsertUserQuery369(user) {
    if (
        !user ||
        typeof user.name !== "string" ||
        typeof user.email !== "string" ||
        !user.name.trim() ||
        !user.email.trim()
    ) {
        throw new Error("Name and email are required");
    }

    return {
        text: "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email",
        values: [user.name.trim(), user.email.trim()]
    };
}

console.log(
    "369:",
    buildInsertUserQuery369({
        name: "Shivaprada",
        email: "user@example.com"
    })
);


// 370. Function to build a parameterized UPDATE query
function buildUpdateUserQuery370(userId, changes) {
    if (!Number.isSafeInteger(userId) || userId <= 0) {
        throw new Error("A valid user ID is required");
    }

    const allowedFields = ["name", "email"];
    const fields = Object.keys(changes || {}).filter(
        field => allowedFields.includes(field)
    );

    if (fields.length === 0) {
        throw new Error("No valid fields to update");
    }

    const values = fields.map(field => changes[field]);
    values.push(userId);

    const assignments = fields.map(
        (field, index) => `${field} = $${index + 1}`
    );

    return {
        text: `UPDATE users SET ${assignments.join(", ")} WHERE id = $${values.length} RETURNING id, name, email`,
        values: values
    };
}

console.log(
    "370:",
    buildUpdateUserQuery370(1, { name: "Shivaprada U." })
);


// 371. Function to build a parameterized DELETE query
function buildDeleteUserQuery371(userId) {
    if (!Number.isSafeInteger(userId) || userId <= 0) {
        throw new Error("A valid user ID is required");
    }

    return {
        text: "DELETE FROM users WHERE id = $1 RETURNING id",
        values: [userId]
    };
}

console.log("371:", buildDeleteUserQuery371(1));


// 372. Function to normalize a database result
function normalizeDatabaseResult372(result) {
    if (!result || !Array.isArray(result.rows)) {
        return {
            success: false,
            data: [],
            rowCount: 0
        };
    }

    return {
        success: true,
        data: result.rows,
        rowCount: result.rowCount ?? result.rows.length
    };
}

console.log(
    "372:",
    normalizeDatabaseResult372({
        rows: [{ id: 1, name: "Asha" }],
        rowCount: 1
    })
);


// 373. Function to check whether a record exists
function databaseRecordExists373(result) {
    return Boolean(
        result &&
        Array.isArray(result.rows) &&
        result.rows.length > 0
    );
}

console.log(
    "373:",
    databaseRecordExists373({
        rows: [{ id: 1 }]
    })
);


// 374. Function to map database rows to API objects
function mapDatabaseRows374(rows) {
    if (!Array.isArray(rows)) {
        throw new Error("Database rows must be an array");
    }

    return rows.map(row => ({
        id: row.id,
        name: row.name,
        email: row.email
    }));
}

console.log(
    "374:",
    mapDatabaseRows374([
        {
            id: 1,
            name: "Shivaprada",
            email: "user@example.com",
            password_hash: "not-returned"
        }
    ])
);


// 375. Function to create a database-backed API response
function createDatabaseApiResponse375(result) {
    const normalized = normalizeDatabaseResult372(result);

    if (!normalized.success) {
        return {
            statusCode: 500,
            body: {
                success: false,
                message: "Invalid database result"
            }
        };
    }

    return {
        statusCode: 200,
        body: {
            success: true,
            data: mapDatabaseRows374(normalized.data),
            count: normalized.rowCount
        }
    };
}

console.log(
    "375:",
    createDatabaseApiResponse375({
        rows: [
            {
                id: 1,
                name: "Shivaprada",
                email: "user@example.com"
            }
        ],
        rowCount: 1
    })
);

// 376. Function to validate database configuration
function validateDbConfig376(config) {
    const requiredFields = [
        "host",
        "database",
        "user",
        "password"
    ];

    if (!config || typeof config !== "object") {
        return {
            valid: false,
            missingFields: requiredFields
        };
    }

    const missingFields = requiredFields.filter(field => {
        return typeof config[field] !== "string" ||
            config[field].trim() === "";
    });

    return {
        valid: missingFields.length === 0,
        missingFields
    };
}

console.log(
    "376:",
    validateDbConfig376({
        host: "localhost",
        database: "learning_db",
        user: "app_user",
        password: "example-password"
    })
);


// 377. Function to create database connection options
function createDbOptions377(config) {
    const validation = validateDbConfig376(config);

    if (!validation.valid) {
        throw new Error(
            `Missing database settings: ${validation.missingFields.join(", ")}`
        );
    }

    return {
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password,
        port: Number.isInteger(config.port) ? config.port : 5432
    };
}

console.log(
    "377:",
    createDbOptions377({
        host: "localhost",
        database: "learning_db",
        user: "app_user",
        password: "example-password"
    })
);


// 378. Function to execute a database query safely
async function executeDbQuery378(queryFunction) {
    if (typeof queryFunction !== "function") {
        throw new Error("A query function is required");
    }

    try {
        const result = await queryFunction();

        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error("Database query failed:", error.message);

        return {
            success: false,
            message: "Database operation failed"
        };
    }
}

executeDbQuery378(async () => {
    return {
        rows: [{ id: 1, name: "Asha" }],
        rowCount: 1
    };
}).then(result => console.log("378:", result));


// 379. Function to create a database repository
function createDbRepository379(queryFunction) {
    return {
        async findById(id) {
            if (!Number.isSafeInteger(id) || id <= 0) {
                throw new Error("A valid ID is required");
            }

            return queryFunction(
                "SELECT id, name, email FROM users WHERE id = $1",
                [id]
            );
        },

        async findAll(limit = 10) {
            if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
                throw new Error("Limit must be between 1 and 100");
            }

            return queryFunction(
                "SELECT id, name, email FROM users ORDER BY id LIMIT $1",
                [limit]
            );
        }
    };
}

console.log("379: Database repository factory defined.");


// 380. Function to get a user through a repository
async function getUserFromRepository380(repository, userId) {
    try {
        const result = await repository.findById(userId);

        const rows = result?.rows;

        return {
            success: true,
            data: Array.isArray(rows) && rows.length > 0
                ? rows[0]
                : null
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}

console.log("380: Repository user lookup defined.");


// 381. Function to validate transaction operations
function validateTransactionOperations381(operations) {
    if (!Array.isArray(operations) || operations.length === 0) {
        return {
            valid: false,
            message: "At least one transaction operation is required"
        };
    }

    const valid = operations.every(
        operation => typeof operation === "function"
    );

    return {
        valid,
        message: valid
            ? "Transaction operations are valid"
            : "Every operation must be a function"
    };
}

console.log(
    "381:",
    validateTransactionOperations381([
        async () => "First operation",
        async () => "Second operation"
    ])
);


// 382. Function to execute transaction operations
async function executeTransaction382(operations) {
    const validation = validateTransactionOperations381(operations);

    if (!validation.valid) {
        throw new Error(validation.message);
    }

    const results = [];

    for (const operation of operations) {
        results.push(await operation());
    }

    return results;
}

executeTransaction382([
    async () => "Insert completed",
    async () => "Update completed"
])
    .then(result => console.log("382:", result))
    .catch(error => console.error("382:", error.message));


// 383. Function to run a real PostgreSQL transaction
async function runPostgresTransaction383(pool, operations) {
    if (
        !pool ||
        typeof pool.connect !== "function" ||
        !Array.isArray(operations) ||
        operations.length === 0 ||
        !operations.every(operation => typeof operation === "function")
    ) {
        throw new Error("A valid pool and transaction operations are required");
    }

    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const results = [];

        for (const operation of operations) {
            results.push(await operation(client));
        }

        await client.query("COMMIT");

        return results;
    } catch (error) {
        try {
            await client.query("ROLLBACK");
        } catch (rollbackError) {
            console.error("Rollback failed:", rollbackError.message);
        }

        throw error;
    } finally {
        client.release();
    }
}

console.log("383: PostgreSQL transaction helper defined.");


// 384. Function to check database health
async function checkDatabaseHealth384(queryFunction) {
    try {
        await queryFunction("SELECT 1");

        return {
            healthy: true,
            message: "Database is reachable"
        };
    } catch {
        return {
            healthy: false,
            message: "Database is unavailable"
        };
    }
}

checkDatabaseHealth384(async sql => {
    console.log("384: Simulated query:", sql);
}).then(result => console.log("384:", result));


// 385. Function to create a database service
function createDatabaseService385(repository) {
    return {
        async getUser(id) {
            try {
                const result = await repository.findById(id);
                const rows = result?.rows;

                return {
                    success: true,
                    data: Array.isArray(rows) && rows.length > 0
                        ? rows[0]
                        : null
                };
            } catch (error) {
                console.error("User service error:", error.message);

                return {
                    success: false,
                    message: "Unable to retrieve user"
                };
            }
        }
    };
}

console.log("385: Database service factory defined.");

// 386. Function to validate a database port
function validateDbPort386(port) {
    return Number.isInteger(port) && port >= 1 && port <= 65535;
}

console.log("386:", validateDbPort386(5432));


// 387. Function to calculate a database connection pool size
function calculatePoolSize387(totalConnections, appInstances) {
    if (
        !Number.isInteger(totalConnections) ||
        !Number.isInteger(appInstances) ||
        totalConnections < 1 ||
        appInstances < 1
    ) {
        throw new Error("Connection counts must be positive integers");
    }

    return Math.max(1, Math.floor(totalConnections / appInstances));
}

console.log("387:", calculatePoolSize387(100, 4));


// 388. Function to retry an asynchronous operation
async function retryOperation388(operation, maxAttempts = 3) {
    if (
        typeof operation !== "function" ||
        !Number.isInteger(maxAttempts) ||
        maxAttempts < 1
    ) {
        throw new Error("A valid operation and attempt count are required");
    }

    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;

            console.log(`388: Attempt ${attempt} failed`);

            if (attempt < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    }

    throw lastError;
}

retryOperation388(async () => {
    return "Database operation completed";
})
    .then(result => console.log("388:", result))
    .catch(error => console.error("388:", error.message));


// 389. Function to measure an asynchronous operation's duration
async function measureOperationTime389(operation) {
    if (typeof operation !== "function") {
        throw new Error("A valid operation is required");
    }

    const startTime = Date.now();

    try {
        const result = await operation();

        return {
            success: true,
            result,
            durationMs: Date.now() - startTime
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            durationMs: Date.now() - startTime
        };
    }
}

measureOperationTime389(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return "Query completed";
}).then(result => console.log("389:", result));


// 390. Function to create a database query logger
function createQueryLogger390() {
    return {
        log(queryName, durationMs) {
            console.log({
                queryName,
                durationMs,
                timestamp: new Date().toISOString()
            });
        }
    };
}

const queryLogger390 = createQueryLogger390();

queryLogger390.log("getUsers", 45);


// 391. Function to check whether a query is slow
function checkSlowQuery391(durationMs, thresholdMs = 500) {
    if (
        !Number.isFinite(durationMs) ||
        durationMs < 0 ||
        !Number.isFinite(thresholdMs) ||
        thresholdMs < 0
    ) {
        throw new Error("Durations must be valid non-negative numbers");
    }

    return {
        slow: durationMs > thresholdMs,
        durationMs,
        thresholdMs
    };
}

console.log("391:", checkSlowQuery391(750));


// 392. Function to safely parse an environment number
function parseEnvironmentNumber392(value, defaultValue) {
    if (value === undefined || value === null || String(value).trim() === "") {
        return defaultValue;
    }

    const parsedValue = Number(value);

    return Number.isFinite(parsedValue) ? parsedValue : defaultValue;
}

console.log(
    "392:",
    parseEnvironmentNumber392("5432", 3000)
);


// 393. Function to read validated application configuration
function getAppConfig393(env) {
    const port = parseEnvironmentNumber392(env.PORT, 3000);
    const timeout = parseEnvironmentNumber392(env.TIMEOUT_MS, 5000);

    return {
        port: Number.isInteger(port) && port >= 1 && port <= 65535
            ? port
            : 3000,
        timeoutMs: Number.isFinite(timeout) && timeout > 0
            ? timeout
            : 5000
    };
}

console.log(
    "393:",
    getAppConfig393({
        PORT: "4000",
        TIMEOUT_MS: "8000"
    })
);


// 394. Function to create a timeout promise
function createTimeout394(milliseconds) {
    if (!Number.isFinite(milliseconds) || milliseconds < 0) {
        throw new Error("Timeout must be a non-negative number");
    }

    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Operation timed out"));
        }, milliseconds);
    });
}

console.log("394: Timeout utility created.");


// 395. Function to run an operation with a timeout
async function runWithTimeout395(operation, timeoutMs = 3000) {
    if (typeof operation !== "function") {
        throw new Error("A valid operation is required");
    }

    try {
        return await Promise.race([
            Promise.resolve().then(() => operation()),
            createTimeout394(timeoutMs)
        ]);
    } catch (error) {
        throw new Error(`Operation failed: ${error.message}`);
    }
}

runWithTimeout395(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return "Operation completed within the timeout";
})
    .then(result => console.log("395:", result))
    .catch(error => console.error("395:", error.message));

// 396. Function to validate a database query result
function validateQueryResult396(result) {
    return {
        valid:
            result !== null &&
            typeof result === "object" &&
            Array.isArray(result.rows),
        rowCount: Array.isArray(result?.rows)
            ? result.rows.length
            : 0
    };
}

console.log(
    "396:",
    validateQueryResult396({
        rows: [{ id: 1 }, { id: 2 }]
    })
);


// 397. Function to extract rows from a query result
function extractQueryRows397(result) {
    if (!result || !Array.isArray(result.rows)) {
        throw new Error("Invalid database query result");
    }

    return result.rows;
}

console.log(
    "397:",
    extractQueryRows397({
        rows: [{ id: 1, name: "Asha" }]
    })
);


// 398. Function to check whether a record exists
function recordExists398(rows) {
    if (!Array.isArray(rows)) {
        throw new Error("Rows must be an array");
    }

    return rows.length > 0;
}

console.log("398:", recordExists398([{ id: 1 }]));


// 399. Function to normalize a database error
function normalizeDatabaseError399(error) {
    const errorCode =
        typeof error?.code === "string"
            ? error.code
            : "UNKNOWN";

    return {
        code: errorCode,
        message: "A database operation failed"
    };
}

console.log(
    "399:",
    normalizeDatabaseError399({
        code: "ECONNREFUSED",
        message: "Internal connection details"
    })
);


// 400. Function to track active operations
function createOperationTracker400() {
    let activeOperations = 0;

    return {
        start() {
            activeOperations++;
            return activeOperations;
        },

        finish() {
            if (activeOperations > 0) {
                activeOperations--;
            }

            return activeOperations;
        },

        getActiveCount() {
            return activeOperations;
        }
    };
}

const operationTracker400 = createOperationTracker400();

operationTracker400.start();
operationTracker400.start();

console.log(
    "400: Active operations:",
    operationTracker400.getActiveCount()
);

operationTracker400.finish();

console.log(
    "400: After finishing one:",
    operationTracker400.getActiveCount()
);


// 401. Function to check application readiness
function checkReadiness401(checks) {
    if (!Array.isArray(checks)) {
        throw new Error("Checks must be an array");
    }

    const ready = checks.every(check => check === true);

    return {
        ready,
        message: ready
            ? "Application is ready"
            : "Application is not ready"
    };
}

console.log("401:", checkReadiness401([true, true, true]));


// 402. Function to create an application health report
function createHealthReport402(services) {
    if (
        services === null ||
        typeof services !== "object" ||
        Array.isArray(services)
    ) {
        throw new Error("Services must be an object");
    }

    const serviceStatuses = Object.fromEntries(
        Object.entries(services).map(([name, healthy]) => [
            name,
            healthy === true ? "healthy" : "unhealthy"
        ])
    );

    return {
        healthy: Object.values(serviceStatuses).every(
            status => status === "healthy"
        ),
        services: serviceStatuses,
        checkedAt: new Date().toISOString()
    };
}

console.log(
    "402:",
    createHealthReport402({
        database: true,
        cache: true,
        api: false
    })
);


// 403. Function to create a graceful-shutdown plan
function createShutdownPlan403(services) {
    if (
        !Array.isArray(services) ||
        !services.every(service => typeof service === "string")
    ) {
        throw new Error("Services must be an array of names");
    }

    return {
        shutdownOrder: [...services].reverse(),
        message: "Stop accepting new work before closing services"
    };
}

console.log(
    "403:",
    createShutdownPlan403([
        "httpServer",
        "backgroundWorker",
        "databasePool"
    ])
);


// 404. Function to close services in order
async function closeServices404(services) {
    if (
        !Array.isArray(services) ||
        !services.every(
            service => typeof service?.close === "function"
        )
    ) {
        throw new Error("Every service must provide a close function");
    }

    const results = [];

    for (const service of [...services].reverse()) {
        try {
            await service.close();

            results.push({
                success: true
            });
        } catch (error) {
            results.push({
                success: false,
                message: error.message
            });
        }
    }

    return results;
}

closeServices404([
    {
        name: "worker",
        async close() {
            console.log("404: Worker closed");
        }
    },
    {
        name: "database",
        async close() {
            console.log("404: Database pool closed");
        }
    }
]).then(result => console.log("404:", result));


// 405. Function to create a retry delay
function calculateRetryDelay405(
    attempt,
    baseDelayMs = 500,
    maxDelayMs = 10000
) {
    if (!Number.isInteger(attempt) || attempt < 1) {
        throw new Error("Attempt must be a positive integer");
    }

    if (
        !Number.isFinite(baseDelayMs) ||
        !Number.isFinite(maxDelayMs) ||
        baseDelayMs < 0 ||
        maxDelayMs < 0
    ) {
        throw new Error("Delay values must be non-negative numbers");
    }

    return Math.min(
        baseDelayMs * (2 ** Math.min(attempt - 1, 30)),
        maxDelayMs
    );
}

console.log("405:", calculateRetryDelay405(4));

// 406. Function to validate an API request timeout
function validateRequestTimeout406(timeoutMs) {
    return (
        Number.isFinite(timeoutMs) &&
        timeoutMs >= 100 &&
        timeoutMs <= 120000
    );
}

console.log("406:", validateRequestTimeout406(5000));


// 407. Function to execute an operation with a timeout
async function executeWithTimeout407(operation, timeoutMs = 3000) {
    if (
        typeof operation !== "function" ||
        !Number.isFinite(timeoutMs) ||
        timeoutMs < 0
    ) {
        throw new Error("A valid operation and timeout are required");
    }

    let timer;

    try {
        return await Promise.race([
            Promise.resolve().then(operation),
            new Promise((_, reject) => {
                timer = setTimeout(() => {
                    reject(new Error("Request timed out"));
                }, timeoutMs);
            })
        ]);
    } finally {
        clearTimeout(timer);
    }
}

executeWithTimeout407(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return "API request completed";
})
    .then(result => console.log("407:", result))
    .catch(error => console.error("407:", error.message));


// 408. Function to limit the number of concurrent tasks
function createConcurrencyLimiter408(maxConcurrent) {
    if (!Number.isInteger(maxConcurrent) || maxConcurrent < 1) {
        throw new Error("Concurrency limit must be a positive integer");
    }

    let activeTasks = 0;
    const waitingTasks = [];

    function runNext() {
        if (activeTasks >= maxConcurrent || waitingTasks.length === 0) {
            return;
        }

        const { task, resolve, reject } = waitingTasks.shift();

        activeTasks++;

        Promise.resolve()
            .then(task)
            .then(resolve, reject)
            .finally(() => {
                activeTasks--;
                runNext();
            });
    }

    return function limit(task) {
        if (typeof task !== "function") {
            return Promise.reject(new Error("Task must be a function"));
        }

        return new Promise((resolve, reject) => {
            waitingTasks.push({ task, resolve, reject });
            runNext();
        });
    };
}

const limitTasks408 = createConcurrencyLimiter408(2);

Promise.all([
    limitTasks408(async () => "Task A completed"),
    limitTasks408(async () => "Task B completed"),
    limitTasks408(async () => "Task C completed")
]).then(results => console.log("408:", results));


// 409. Function to process items in batches
async function processBatches409(items, batchSize, processor) {
    if (
        !Array.isArray(items) ||
        !Number.isInteger(batchSize) ||
        batchSize < 1 ||
        typeof processor !== "function"
    ) {
        throw new Error("Valid items, batch size, and processor are required");
    }

    const results = [];

    for (let index = 0; index < items.length; index += batchSize) {
        const batch = items.slice(index, index + batchSize);

        const batchResults = await Promise.all(
            batch.map(item => processor(item))
        );

        results.push(...batchResults);
    }

    return results;
}

processBatches409(
    [1, 2, 3, 4, 5],
    2,
    async number => number * 10
).then(results => console.log("409:", results));


// 410. Function to execute tasks sequentially
async function executeSequentially410(tasks) {
    if (
        !Array.isArray(tasks) ||
        !tasks.every(task => typeof task === "function")
    ) {
        throw new Error("Tasks must be an array of functions");
    }

    const results = [];

    for (const task of tasks) {
        results.push(await task());
    }

    return results;
}

executeSequentially410([
    async () => "First task",
    async () => "Second task",
    async () => "Third task"
]).then(results => console.log("410:", results));


// 411. Function to execute independent tasks in parallel
async function executeInParallel411(tasks) {
    if (
        !Array.isArray(tasks) ||
        !tasks.every(task => typeof task === "function")
    ) {
        throw new Error("Tasks must be an array of functions");
    }

    return Promise.all(tasks.map(task => Promise.resolve().then(task)));
}

executeInParallel411([
    async () => "User data loaded",
    async () => "Product data loaded",
    async () => "Order data loaded"
]).then(results => console.log("411:", results));


// 412. Function to collect successful and failed task results
async function collectTaskResults412(tasks) {
    if (
        !Array.isArray(tasks) ||
        !tasks.every(task => typeof task === "function")
    ) {
        throw new Error("Tasks must be an array of functions");
    }

    return Promise.allSettled(
        tasks.map(task => Promise.resolve().then(task))
    );
}

collectTaskResults412([
    async () => "Task succeeded",
    async () => {
        throw new Error("Task failed");
    }
]).then(results => console.log("412:", results));


// 413. Function to create a simple asynchronous task queue
function createTaskQueue413() {
    const tasks = [];
    let processing = false;

    async function processQueue() {
        if (processing) {
            return;
        }

        processing = true;

        try {
            while (tasks.length > 0) {
                const { task, resolve, reject } = tasks.shift();

                try {
                    resolve(await task());
                } catch (error) {
                    reject(error);
                }
            }
        } finally {
            processing = false;

            if (tasks.length > 0) {
                void processQueue();
            }
        }
    }

    return {
        add(task) {
            if (typeof task !== "function") {
                return Promise.reject(
                    new Error("Task must be a function")
                );
            }

            const result = new Promise((resolve, reject) => {
                tasks.push({ task, resolve, reject });
            });

            void processQueue();

            return result;
        },

        getPendingCount() {
            return tasks.length;
        }
    };
}

const taskQueue413 = createTaskQueue413();

taskQueue413.add(async () => "Queued task 1")
    .then(result => console.log("413:", result));

taskQueue413.add(async () => "Queued task 2")
    .then(result => console.log("413:", result));


// 414. Function to retry an operation with increasing delays
async function retryWithBackoff414(
    operation,
    maxAttempts = 3,
    baseDelayMs = 500
) {
    if (
        typeof operation !== "function" ||
        !Number.isInteger(maxAttempts) ||
        maxAttempts < 1 ||
        !Number.isFinite(baseDelayMs) ||
        baseDelayMs < 0
    ) {
        throw new Error("Invalid retry configuration");
    }

    for (let attempt = 1; ; attempt++) {
        try {
            return await operation();
        } catch (error) {
            if (attempt >= maxAttempts) {
                throw error;
            }

            const delay = Math.min(
                baseDelayMs * (2 ** Math.min(attempt - 1, 30)),
                30000
            );

            console.log(`414: Retrying in ${delay} ms`);

            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

retryWithBackoff414(
    async () => "Retry operation succeeded",
    3,
    200
)
    .then(result => console.log("414:", result))
    .catch(error => console.error("414:", error.message));


// 415. Function to execute a workflow step by step
async function executeWorkflow415(steps, initialValue) {
    if (
        !Array.isArray(steps) ||
        !steps.every(step => typeof step === "function")
    ) {
        throw new Error("Workflow steps must be functions");
    }

    let value = initialValue;

    for (const step of steps) {
        value = await step(value);
    }

    return value;
}

executeWorkflow415([
    async value => value + 5,
    async value => value * 2,
    async value => `Final result: ${value}`
], 10)
    .then(result => console.log("415:", result))
    .catch(error => console.error("415:", error.message));

// 416. Function to create a simple in-memory cache
function createMemoryCache416() {
    const cache = new Map();

    return {
        set(key, value) {
            cache.set(key, value);
        },

        get(key) {
            return cache.has(key) ? cache.get(key) : undefined;
        },

        has(key) {
            return cache.has(key);
        },

        delete(key) {
            return cache.delete(key);
        },

        clear() {
            cache.clear();
        },

        size() {
            return cache.size;
        }
    };
}

const cache416 = createMemoryCache416();

cache416.set("username", "Shivaprada");

console.log("416:", cache416.get("username"));


// 417. Function to create a cache with expiration
function createExpiringCache417(ttlMs) {
    if (!Number.isFinite(ttlMs) || ttlMs < 0) {
        throw new Error("TTL must be a non-negative number");
    }

    const cache = new Map();

    return {
        set(key, value) {
            cache.set(key, {
                value,
                expiresAt: Date.now() + ttlMs
            });
        },

        get(key) {
            const entry = cache.get(key);

            if (!entry) {
                return undefined;
            }

            if (Date.now() >= entry.expiresAt) {
                cache.delete(key);
                return undefined;
            }

            return entry.value;
        }
    };
}

const cache417 = createExpiringCache417(5000);

cache417.set("status", "active");

console.log("417:", cache417.get("status"));


// 418. Function to memoize a calculation
function memoize418(fn) {
    if (typeof fn !== "function") {
        throw new Error("A function is required");
    }

    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);

        cache.set(key, result);

        return result;
    };
}

const square418 = memoize418(number => number * number);

console.log("418:", square418(5));
console.log("418 cached:", square418(5));


// 419. Function to count memoized function executions
function createCountedFunction419(fn) {
    if (typeof fn !== "function") {
        throw new Error("A function is required");
    }

    let executionCount = 0;

    return {
        execute(...args) {
            executionCount++;
            return fn(...args);
        },

        getExecutionCount() {
            return executionCount;
        }
    };
}

const counted419 = createCountedFunction419(
    number => number + 10
);

console.log("419:", counted419.execute(5));
console.log("419:", counted419.execute(8));
console.log(
    "419 execution count:",
    counted419.getExecutionCount()
);


// 420. Function to remove expired cache entries
function removeExpiredEntries420(cache) {
    if (!(cache instanceof Map)) {
        throw new Error("Cache must be a Map");
    }

    let removedCount = 0;
    const now = Date.now();

    for (const [key, entry] of cache.entries()) {
        if (
            entry &&
            typeof entry.expiresAt === "number" &&
            now >= entry.expiresAt
        ) {
            cache.delete(key);
            removedCount++;
        }
    }

    return removedCount;
}

const expiringEntries420 = new Map();

expiringEntries420.set("old", {
    value: "old data",
    expiresAt: Date.now() - 1000
});

expiringEntries420.set("new", {
    value: "new data",
    expiresAt: Date.now() + 10000
});

console.log(
    "420 removed:",
    removeExpiredEntries420(expiringEntries420)
);


// 421. Function to prevent duplicate concurrent requests
function createRequestDeduplicator421() {
    const pendingRequests = new Map();

    return function deduplicate(key, requestFunction) {
        if (typeof requestFunction !== "function") {
            return Promise.reject(
                new Error("A request function is required")
            );
        }

        if (pendingRequests.has(key)) {
            return pendingRequests.get(key);
        }

        const request = Promise.resolve().then(requestFunction);

        pendingRequests.set(key, request);

        request.then(
            () => {
                if (pendingRequests.get(key) === request) {
                    pendingRequests.delete(key);
                }
            },
            () => {
                if (pendingRequests.get(key) === request) {
                    pendingRequests.delete(key);
                }
            }
        );

        return request;
    };
}

const deduplicator421 = createRequestDeduplicator421();

const request421A = deduplicator421(
    "user-1",
    async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return { id: 1, name: "Asha" };
    }
);

const request421B = deduplicator421(
    "user-1",
    async () => {
        return { id: 1, name: "Different request" };
    }
);

Promise.all([request421A, request421B]).then(results => {
    console.log("421:", results);
});


// 422. Function to cache asynchronous results
function createAsyncCache422() {
    const cache = new Map();

    return async function getOrLoad(key, loader) {
        if (typeof loader !== "function") {
            throw new Error("A loader function is required");
        }

        if (cache.has(key)) {
            return cache.get(key);
        }

        const pending = Promise.resolve().then(loader);

        cache.set(key, pending);

        try {
            return await pending;
        } catch (error) {
            if (cache.get(key) === pending) {
                cache.delete(key);
            }

            throw error;
        }
    };
}

const asyncCache422 = createAsyncCache422();

asyncCache422("products", async () => {
    return ["Laptop", "Keyboard", "Mouse"];
}).then(result => console.log("422:", result));


// 423. Function to create a cache with a maximum size
function createLimitedCache423(maxSize) {
    if (!Number.isInteger(maxSize) || maxSize < 1) {
        throw new Error("Maximum size must be a positive integer");
    }

    const cache = new Map();

    return {
        set(key, value) {
            if (cache.has(key)) {
                cache.delete(key);
            }

            cache.set(key, value);

            if (cache.size > maxSize) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
        },

        get(key) {
            return cache.get(key);
        },

        size() {
            return cache.size;
        }
    };
}

const limitedCache423 = createLimitedCache423(2);

limitedCache423.set("a", 1);
limitedCache423.set("b", 2);
limitedCache423.set("c", 3);

console.log("423:", limitedCache423.size());
console.log("423 oldest entry removed:", limitedCache423.get("a"));


// 424. Function to invalidate cache entries by prefix
function invalidateCacheByPrefix424(cache, prefix) {
    if (!(cache instanceof Map) || typeof prefix !== "string") {
        throw new Error("A Map and string prefix are required");
    }

    let removedCount = 0;

    for (const key of cache.keys()) {
        if (typeof key === "string" && key.startsWith(prefix)) {
            cache.delete(key);
            removedCount++;
        }
    }

    return removedCount;
}

const prefixCache424 = new Map([
    ["user:1", { name: "Asha" }],
    ["user:2", { name: "Ravi" }],
    ["product:1", { name: "Laptop" }]
]);

console.log(
    "424 removed:",
    invalidateCacheByPrefix424(prefixCache424, "user:")
);

console.log("424 remaining:", [...prefixCache424.keys()]);


// 425. Function to measure cache hits and misses
function createCacheStats425() {
    let hits = 0;
    let misses = 0;

    return {
        recordHit() {
            hits++;
        },

        recordMiss() {
            misses++;
        },

        getStats() {
            const total = hits + misses;

            return {
                hits,
                misses,
                total,
                hitRate: total === 0 ? 0 : hits / total
            };
        }
    };
}

const cacheStats425 = createCacheStats425();

cacheStats425.recordHit();
cacheStats425.recordHit();
cacheStats425.recordMiss();

console.log("425:", cacheStats425.getStats());

// 426. Function to create a debounce utility
function debounce426(fn, delayMs) {
    if (
        typeof fn !== "function" ||
        !Number.isFinite(delayMs) ||
        delayMs < 0
    ) {
        throw new Error("A valid function and delay are required");
    }

    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delayMs);
    };
}

const search426 = debounce426(
    query => console.log("426: Searching for", query),
    300
);

search426("Java");
search426("JavaScript");


// 427. Function to create a throttle utility
function throttle427(fn, intervalMs) {
    if (
        typeof fn !== "function" ||
        !Number.isFinite(intervalMs) ||
        intervalMs < 0
    ) {
        throw new Error("A valid function and interval are required");
    }

    let lastExecution = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecution >= intervalMs) {
            lastExecution = now;
            return fn.apply(this, args);
        }
    };
}

const update427 = throttle427(
    value => console.log("427: Updated", value),
    1000
);

update427("First call");
update427("Immediate second call");


// 428. Function to create a fixed-window rate limiter
function createRateLimiter428(maxRequests, windowMs) {
    if (
        !Number.isInteger(maxRequests) ||
        maxRequests < 1 ||
        !Number.isFinite(windowMs) ||
        windowMs <= 0
    ) {
        throw new Error("Invalid rate-limit configuration");
    }

    let requestCount = 0;
    let windowStart = Date.now();

    return function allowRequest() {
        const now = Date.now();

        if (now - windowStart >= windowMs) {
            requestCount = 0;
            windowStart = now;
        }

        if (requestCount >= maxRequests) {
            return false;
        }

        requestCount++;
        return true;
    };
}

const limiter428 = createRateLimiter428(3, 5000);

console.log("428:", limiter428());
console.log("428:", limiter428());
console.log("428:", limiter428());
console.log("428:", limiter428());


// 429. Function to limit repeated button clicks
function createClickGuard429(cooldownMs) {
    if (!Number.isFinite(cooldownMs) || cooldownMs < 0) {
        throw new Error("Cooldown must be a non-negative number");
    }

    let lastClickTime = -Infinity;

    return function canClick() {
        const now = Date.now();

        if (now - lastClickTime < cooldownMs) {
            return false;
        }

        lastClickTime = now;
        return true;
    };
}

const clickGuard429 = createClickGuard429(2000);

console.log("429:", clickGuard429());
console.log("429:", clickGuard429());


// 430. Function to prevent duplicate form submissions
function createSubmissionGuard430() {
    let submitting = false;

    return async function submitOnce(submitFunction) {
        if (typeof submitFunction !== "function") {
            throw new Error("A submission function is required");
        }

        if (submitting) {
            return {
                submitted: false,
                message: "Submission already in progress"
            };
        }

        submitting = true;

        try {
            const result = await submitFunction();

            return {
                submitted: true,
                result
            };
        } finally {
            submitting = false;
        }
    };
}

const submitGuard430 = createSubmissionGuard430();

submitGuard430(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return "Form submitted successfully";
}).then(result => console.log("430:", result));


// 431. Function to schedule a delayed execution
function scheduleExecution431(fn, delayMs) {
    if (
        typeof fn !== "function" ||
        !Number.isFinite(delayMs) ||
        delayMs < 0
    ) {
        throw new Error("A valid function and delay are required");
    }

    return setTimeout(fn, delayMs);
}

scheduleExecution431(
    () => console.log("431: Delayed execution completed"),
    500
);


// 432. Function to cancel a scheduled execution
function cancelScheduledExecution432(timerId) {
    if (timerId === undefined || timerId === null) {
        return false;
    }

    clearTimeout(timerId);
    return true;
}

const timer432 = scheduleExecution431(
    () => console.log("432: This message should not appear"),
    2000
);

console.log(
    "432: Timer cancelled:",
    cancelScheduledExecution432(timer432)
);


// 433. Function to run a function only once
function once433(fn) {
    if (typeof fn !== "function") {
        throw new Error("A function is required");
    }

    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }

        return result;
    };
}

const initialize433 = once433(() => {
    console.log("433: Initialization executed");
    return "Initialized";
});

console.log("433:", initialize433());
console.log("433:", initialize433());


// 434. Function to create a sliding-window rate limiter
function createSlidingWindowLimiter434(maxRequests, windowMs) {
    if (
        !Number.isInteger(maxRequests) ||
        maxRequests < 1 ||
        !Number.isFinite(windowMs) ||
        windowMs <= 0
    ) {
        throw new Error("Invalid rate-limit configuration");
    }

    const requestTimes = [];

    return function allowRequest() {
        const now = Date.now();

        while (
            requestTimes.length > 0 &&
            now - requestTimes[0] >= windowMs
        ) {
            requestTimes.shift();
        }

        if (requestTimes.length >= maxRequests) {
            return false;
        }

        requestTimes.push(now);
        return true;
    };
}

const slidingLimiter434 = createSlidingWindowLimiter434(2, 5000);

console.log("434:", slidingLimiter434());
console.log("434:", slidingLimiter434());
console.log("434:", slidingLimiter434());


// 435. Function to measure how long a synchronous function takes
function measureExecutionTime435(fn, ...args) {
    if (typeof fn !== "function") {
        throw new Error("A function is required");
    }

    const startTime = performance.now();

    try {
        const result = fn(...args);

        return {
            success: true,
            result,
            durationMs: performance.now() - startTime
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            durationMs: performance.now() - startTime
        };
    }
}

console.log(
    "435:",
    measureExecutionTime435((a, b) => a + b, 10, 20)
);

// 436. Function to create a simple event emitter
function createEventEmitter436() {
    const events = new Map();

    return {
        on(eventName, listener) {
            if (typeof listener !== "function") {
                throw new Error("Listener must be a function");
            }

            if (!events.has(eventName)) {
                events.set(eventName, new Set());
            }

            events.get(eventName).add(listener);
        },

        emit(eventName, data) {
            const listeners = events.get(eventName);

            if (!listeners) {
                return false;
            }

            for (const listener of [...listeners]) {
                listener(data);
            }

            return true;
        }
    };
}

const emitter436 = createEventEmitter436();

emitter436.on("welcome", message => {
    console.log("436:", message);
});

emitter436.emit("welcome", "Welcome to JavaScript!");


// 437. Function to remove an event listener
function createRemovableEmitter437() {
    const events = new Map();

    return {
        on(eventName, listener) {
            if (typeof listener !== "function") {
                throw new Error("Listener must be a function");
            }

            if (!events.has(eventName)) {
                events.set(eventName, new Set());
            }

            events.get(eventName).add(listener);
        },

        off(eventName, listener) {
            const listeners = events.get(eventName);

            if (!listeners) {
                return false;
            }

            const removed = listeners.delete(listener);

            if (listeners.size === 0) {
                events.delete(eventName);
            }

            return removed;
        },

        emit(eventName, data) {
            for (const listener of [...(events.get(eventName) || [])]) {
                listener(data);
            }
        }
    };
}

const emitter437 = createRemovableEmitter437();

function message437(message) {
    console.log("437:", message);
}

emitter437.on("message", message437);
emitter437.emit("message", "Listener is active");

emitter437.off("message", message437);
emitter437.emit("message", "This message has no listener");


// 438. Function to subscribe to an event only once
function createOnceEmitter438() {
    const events = new Map();

    return {
        once(eventName, listener) {
            if (typeof listener !== "function") {
                throw new Error("Listener must be a function");
            }

            if (!events.has(eventName)) {
                events.set(eventName, new Set());
            }

            const wrappedListener = data => {
                const listeners = events.get(eventName);

                listeners?.delete(wrappedListener);

                if (listeners?.size === 0) {
                    events.delete(eventName);
                }

                listener(data);
            };

            events.get(eventName).add(wrappedListener);
        },

        emit(eventName, data) {
            for (const listener of [...(events.get(eventName) || [])]) {
                listener(data);
            }
        }
    };
}

const emitter438 = createOnceEmitter438();

emitter438.once("login", user => {
    console.log("438: First login event:", user);
});

emitter438.emit("login", "Shivaprada");
emitter438.emit("login", "Another user");


// 439. Function to create an event counter
function createEventCounter439() {
    const counts = new Map();

    return {
        record(eventName) {
            counts.set(
                eventName,
                (counts.get(eventName) || 0) + 1
            );
        },

        getCount(eventName) {
            return counts.get(eventName) || 0;
        },

        getAllCounts() {
            return Object.fromEntries(counts);
        }
    };
}

const counter439 = createEventCounter439();

counter439.record("pageView");
counter439.record("pageView");
counter439.record("buttonClick");

console.log("439:", counter439.getAllCounts());


// 440. Function to notify multiple observers
function createObservableValue440(initialValue) {
    let value = initialValue;
    const observers = new Set();

    return {
        get() {
            return value;
        },

        set(newValue) {
            if (Object.is(value, newValue)) {
                return;
            }

            const oldValue = value;
            value = newValue;

            for (const observer of [...observers]) {
                observer(newValue, oldValue);
            }
        },

        subscribe(observer) {
            if (typeof observer !== "function") {
                throw new Error("Observer must be a function");
            }

            observers.add(observer);

            return () => observers.delete(observer);
        }
    };
}

const observable440 = createObservableValue440(10);

const unsubscribe440 = observable440.subscribe((newValue, oldValue) => {
    console.log("440:", oldValue, "changed to", newValue);
});

observable440.set(20);
unsubscribe440();
observable440.set(30);


// 441. Function to create a publish-subscribe system
function createPubSub441() {
    const topics = new Map();

    return {
        subscribe(topic, callback) {
            if (typeof callback !== "function") {
                throw new Error("Callback must be a function");
            }

            if (!topics.has(topic)) {
                topics.set(topic, new Set());
            }

            topics.get(topic).add(callback);

            return () => {
                const subscribers = topics.get(topic);

                subscribers?.delete(callback);

                if (subscribers?.size === 0) {
                    topics.delete(topic);
                }
            };
        },

        publish(topic, message) {
            for (const callback of [...(topics.get(topic) || [])]) {
                callback(message);
            }
        }
    };
}

const pubSub441 = createPubSub441();

const unsubscribe441 = pubSub441.subscribe("notifications", message => {
    console.log("441:", message);
});

pubSub441.publish("notifications", "Your task is complete");
unsubscribe441();


// 442. Function to create a middleware pipeline
function createMiddlewarePipeline442(middlewares) {
    if (
        !Array.isArray(middlewares) ||
        !middlewares.every(item => typeof item === "function")
    ) {
        throw new Error("Middlewares must be an array of functions");
    }

    return async function run(context) {
        let index = -1;

        async function dispatch(currentIndex) {
            if (currentIndex <= index) {
                throw new Error("next() called more than once");
            }

            index = currentIndex;

            const middleware = middlewares[currentIndex];

            if (middleware) {
                await middleware(context, () => dispatch(currentIndex + 1));
            }
        }

        await dispatch(0);

        return context;
    };
}

const pipeline442 = createMiddlewarePipeline442([
    async (context, next) => {
        context.steps.push("authentication");
        await next();
    },
    async (context, next) => {
        context.steps.push("validation");
        await next();
    },
    async context => {
        context.steps.push("handler");
    }
]);

pipeline442({ steps: [] }).then(result => {
    console.log("442:", result.steps);
});


// 443. Function to create a sequential event processor
function createSequentialEventProcessor443(handler) {
    if (typeof handler !== "function") {
        throw new Error("Handler must be a function");
    }

    let queue = Promise.resolve();

    return function process(event) {
        const currentTask = queue.then(() => handler(event));

        queue = currentTask.catch(() => {});

        return currentTask;
    };
}

const processor443 = createSequentialEventProcessor443(async event => {
    console.log("443: Processing event", event);
    return `Processed ${event}`;
});

Promise.all([
    processor443("A"),
    processor443("B"),
    processor443("C")
]).then(results => console.log("443:", results));


// 444. Function to wait for an event with a timeout
function waitForEvent444(emitter, eventName, timeoutMs = 3000) {
    if (
        !emitter ||
        typeof emitter.on !== "function" ||
        typeof emitter.off !== "function"
    ) {
        return Promise.reject(
            new Error("Emitter must provide on() and off()")
        );
    }

    if (!Number.isFinite(timeoutMs) || timeoutMs < 0) {
        return Promise.reject(new Error("Invalid timeout"));
    }

    return new Promise((resolve, reject) => {
        let timer;

        const cleanup = () => {
            emitter.off(eventName, listener);
            clearTimeout(timer);
        };

        const listener = data => {
            cleanup();
            resolve(data);
        };

        emitter.on(eventName, listener);

        timer = setTimeout(() => {
            cleanup();
            reject(new Error(`Timed out waiting for ${eventName}`));
        }, timeoutMs);
    });
}

const emitter444 = createRemovableEmitter437();

waitForEvent444(emitter444, "completed", 2000)
    .then(result => console.log("444:", result))
    .catch(error => console.log("444:", error.message));

setTimeout(() => {
    emitter444.emit("completed", "Background task completed");
}, 100);


// 445. Function to create an event log
function createEventLog445(maxEntries = 100) {
    if (!Number.isInteger(maxEntries) || maxEntries < 1) {
        throw new Error("Maximum entries must be a positive integer");
    }

    const entries = [];

    return {
        add(eventName, data) {
            entries.push({
                eventName,
                data,
                timestamp: new Date().toISOString()
            });

            if (entries.length > maxEntries) {
                entries.shift();
            }
        },

        getAll() {
            return entries.map(entry => ({ ...entry }));
        },

        clear() {
            entries.length = 0;
        }
    };
}

const eventLog445 = createEventLog445(3);

eventLog445.add("login", { userId: 1 });
eventLog445.add("pageView", { page: "home" });
eventLog445.add("logout", { userId: 1 });
eventLog445.add("login", { userId: 2 });

console.log("445:", eventLog445.getAll());

// 446. Function to read a text file
const fs446 = require("node:fs/promises");

async function readTextFile446(filePath) {
    try {
        const content = await fs446.readFile(filePath, "utf8");

        return {
            success: true,
            content
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "FILE_READ_FAILED"
        };
    }
}

console.log("446: Text file reader defined.");


// 447. Function to write text to a file
const fs447 = require("node:fs/promises");

async function writeTextFile447(filePath, content) {
    if (typeof content !== "string") {
        throw new Error("Content must be a string");
    }

    try {
        await fs447.writeFile(filePath, content, "utf8");

        return {
            success: true,
            message: "File written successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "FILE_WRITE_FAILED"
        };
    }
}

console.log("447: Text file writer defined.");


// 448. Function to append text to a file
const fs448 = require("node:fs/promises");

async function appendTextFile448(filePath, content) {
    if (typeof content !== "string") {
        throw new Error("Content must be a string");
    }

    try {
        await fs448.appendFile(filePath, content, "utf8");

        return {
            success: true,
            message: "Content appended successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "FILE_APPEND_FAILED"
        };
    }
}

console.log("448: Text file appender defined.");


// 449. Function to check whether a file exists
const fs449 = require("node:fs/promises");

async function fileExists449(filePath) {
    try {
        await fs449.access(filePath);
        return true;
    } catch {
        return false;
    }
}

console.log("449: File existence checker defined.");


// 450. Function to read and parse a JSON file
const fs450 = require("node:fs/promises");

async function readJsonFile450(filePath) {
    try {
        const content = await fs450.readFile(filePath, "utf8");
        const data = JSON.parse(content);

        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            message:
                error instanceof SyntaxError
                    ? "Invalid JSON format"
                    : error.code || "JSON_READ_FAILED"
        };
    }
}

console.log("450: JSON file reader defined.");


// 451. Function to write data as JSON
const fs451 = require("node:fs/promises");

async function writeJsonFile451(filePath, data) {
    try {
        const json = JSON.stringify(data, null, 2);

        if (json === undefined) {
            throw new Error("Data cannot be converted to JSON");
        }

        await fs451.writeFile(filePath, json, "utf8");

        return {
            success: true,
            message: "JSON saved successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "JSON_WRITE_FAILED"
        };
    }
}

console.log("451: JSON file writer defined.");


// 452. Function to create a directory
const fs452 = require("node:fs/promises");

async function createDirectory452(directoryPath) {
    try {
        await fs452.mkdir(directoryPath, {
            recursive: true
        });

        return {
            success: true,
            message: "Directory created or already exists"
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "DIRECTORY_CREATE_FAILED"
        };
    }
}

console.log("452: Directory creation utility defined.");


// 453. Function to list directory entries
const fs453 = require("node:fs/promises");

async function listDirectory453(directoryPath) {
    try {
        const entries = await fs453.readdir(directoryPath, {
            withFileTypes: true
        });

        return {
            success: true,
            entries: entries.map(entry => ({
                name: entry.name,
                type: entry.isDirectory()
                    ? "directory"
                    : entry.isFile()
                        ? "file"
                        : "other"
            }))
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "DIRECTORY_READ_FAILED"
        };
    }
}

console.log("453: Directory listing utility defined.");


// 454. Function to delete a file
const fs454 = require("node:fs/promises");

async function deleteFile454(filePath) {
    try {
        await fs454.unlink(filePath);

        return {
            success: true,
            message: "File deleted successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "FILE_DELETE_FAILED"
        };
    }
}

console.log("454: File deletion utility defined.");


// 455. Function to copy a file
const fs455 = require("node:fs/promises");

async function copyFile455(sourcePath, destinationPath) {
    try {
        await fs455.copyFile(sourcePath, destinationPath);

        return {
            success: true,
            message: "File copied successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "FILE_COPY_FAILED"
        };
    }
}

console.log("455: File copy utility defined.");

// 456. Function to get file metadata
const fs456 = require("node:fs/promises");

async function getFileMetadata456(filePath) {
    try {
        const stats = await fs456.stat(filePath);

        return {
            success: true,
            name: require("node:path").basename(filePath),
            sizeBytes: stats.size,
            isFile: stats.isFile(),
            isDirectory: stats.isDirectory(),
            modifiedAt: stats.mtime.toISOString()
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "METADATA_READ_FAILED"
        };
    }
}

console.log("456: File metadata utility defined.");


// 457. Function to convert bytes into a readable size
function formatFileSize457(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) {
        throw new Error("Bytes must be a non-negative number");
    }

    if (bytes < 1024) {
        return `${bytes} B`;
    }

    const units = ["KB", "MB", "GB", "TB"];
    let size = bytes / 1024;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

console.log("457:", formatFileSize457(1536000));


// 458. Function to get a file extension
function getFileExtension458(filePath) {
    const path = require("node:path");
    const extension = path.extname(filePath);

    return extension.toLowerCase();
}

console.log("458:", getFileExtension458("report.PDF"));


// 459. Function to check whether an extension is allowed
function isAllowedExtension459(filePath, allowedExtensions) {
    if (!Array.isArray(allowedExtensions)) {
        throw new Error("Allowed extensions must be an array");
    }

    const extension = require("node:path")
        .extname(filePath)
        .toLowerCase();

    return allowedExtensions.some(
        allowed => typeof allowed === "string" &&
            allowed.toLowerCase() === extension
    );
}

console.log(
    "459:",
    isAllowedExtension459("document.pdf", [".pdf", ".txt", ".docx"])
);


// 460. Function to create a safe filename
function createSafeFilename460(filename) {
    if (typeof filename !== "string") {
        throw new Error("Filename must be a string");
    }

    const path = require("node:path");
    const baseName = path.basename(filename);

    return baseName
        .normalize("NFKC")
        .replace(/[^a-zA-Z0-9._-]/g, "_")
        .replace(/^\.+/, "_")
        .slice(0, 100) || "unnamed_file";
}

console.log(
    "460:",
    createSafeFilename460("../../my report?.pdf")
);


// 461. Function to create a path inside a directory
function createPathInsideDirectory461(baseDirectory, filename) {
    const path = require("node:path");

    if (
        typeof baseDirectory !== "string" ||
        typeof filename !== "string" ||
        filename.trim() === ""
    ) {
        throw new Error("A directory and filename are required");
    }

    if (path.isAbsolute(filename)) {
        throw new Error("Absolute filenames are not allowed");
    }

    const root = path.resolve(baseDirectory);
    const target = path.resolve(root, filename);
    const relative = path.relative(root, target);

    if (
        relative === ".." ||
        relative.startsWith(`..${path.sep}`) ||
        path.isAbsolute(relative)
    ) {
        throw new Error("Path must remain inside the base directory");
    }

    return target;
}

console.log(
    "461:",
    createPathInsideDirectory461("/tmp/uploads", "report.pdf")
);


// 462. Function to check whether a path points to a file
const fs462 = require("node:fs/promises");

async function isRegularFile462(filePath) {
    try {
        const stats = await fs462.stat(filePath);
        return stats.isFile();
    } catch {
        return false;
    }
}

console.log("462: Regular-file checker defined.");


// 463. Function to check whether a path points to a directory
const fs463 = require("node:fs/promises");

async function isDirectory463(directoryPath) {
    try {
        const stats = await fs463.stat(directoryPath);
        return stats.isDirectory();
    } catch {
        return false;
    }
}

console.log("463: Directory checker defined.");


// 464. Function to compare two files by size
const fs464 = require("node:fs/promises");

async function compareFileSizes464(firstPath, secondPath) {
    try {
        const [firstStats, secondStats] = await Promise.all([
            fs464.stat(firstPath),
            fs464.stat(secondPath)
        ]);

        return {
            success: true,
            firstSize: firstStats.size,
            secondSize: secondStats.size,
            sameSize: firstStats.size === secondStats.size
        };
    } catch (error) {
        return {
            success: false,
            message: error.code || "FILE_COMPARISON_FAILED"
        };
    }
}

console.log("464: File-size comparison utility defined.");


// 465. Function to check a file against a size limit
const fs465 = require("node:fs/promises");

async function isFileWithinSizeLimit465(filePath, maxBytes) {
    if (!Number.isFinite(maxBytes) || maxBytes < 0) {
        throw new Error("Maximum size must be a non-negative number");
    }

    try {
        const stats = await fs465.stat(filePath);

        if (!stats.isFile()) {
            return {
                valid: false,
                message: "Path does not point to a regular file"
            };
        }

        return {
            valid: stats.size <= maxBytes,
            sizeBytes: stats.size,
            maxBytes
        };
    } catch (error) {
        return {
            valid: false,
            message: error.code || "FILE_CHECK_FAILED"
        };
    }
}

console.log("465: File-size validation utility defined.");

// 466. Function to check whether a string contains valid JSON
function isValidJSON466(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch {
        return false;
    }
}

console.log("466:", isValidJSON466('{"name":"Shiva"}'));


// 467. Function to safely parse JSON
function safeJSONParse467(jsonString) {
    try {
        return {
            success: true,
            data: JSON.parse(jsonString)
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}

console.log("467:", safeJSONParse467('{"language":"JavaScript"}'));


// 468. Function to convert an object into a JSON string
function serializeObject468(data) {
    try {
        const jsonString = JSON.stringify(data);

        if (jsonString === undefined) {
            return {
                success: false,
                message: "Data cannot be serialized"
            };
        }

        return {
            success: true,
            json: jsonString
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}

console.log("468:", serializeObject468({ name: "Shiva", role: "Developer" }));


// 469. Function to create a deep copy using JSON
function deepCopyJSON469(data) {
    try {
        const jsonString = JSON.stringify(data);

        if (jsonString === undefined) {
            throw new Error("Data cannot be copied using JSON");
        }

        return JSON.parse(jsonString);
    } catch (error) {
        throw new Error(`Deep copy failed: ${error.message}`);
    }
}

console.log(
    "469:",
    deepCopyJSON469({ user: { name: "Shiva" } })
);


// 470. Function to check whether a value is a plain object
function isPlainObject470(value) {
    if (value === null || typeof value !== "object") {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);

    return prototype === Object.prototype || prototype === null;
}

console.log("470:", isPlainObject470({ name: "Shiva" }));


// 471. Function to validate required object fields
function validateRequiredFields471(data, requiredFields) {
    if (
        data === null ||
        typeof data !== "object" ||
        Array.isArray(data) ||
        !Array.isArray(requiredFields)
    ) {
        return {
            valid: false,
            missingFields: [],
            message: "Invalid input"
        };
    }

    const missingFields = requiredFields.filter(field =>
        typeof field !== "string" ||
        !Object.hasOwn(data, field) ||
        data[field] === undefined ||
        data[field] === null ||
        (typeof data[field] === "string" && data[field].trim() === "")
    );

    return {
        valid: missingFields.length === 0,
        missingFields
    };
}

console.log(
    "471:",
    validateRequiredFields471(
        { name: "Shiva", email: "" },
        ["name", "email"]
    )
);


// 472. Function to remove undefined values from an object
function removeUndefinedValues472(data) {
    if (
        data === null ||
        typeof data !== "object" ||
        Array.isArray(data)
    ) {
        throw new Error("Input must be an object");
    }

    return Object.fromEntries(
        Object.entries(data).filter(
            ([key, value]) => value !== undefined
        )
    );
}

console.log(
    "472:",
    removeUndefinedValues472({
        name: "Shiva",
        age: undefined,
        role: "Developer"
    })
);


// 473. Function to pick selected fields from an object
function pickObjectFields473(data, fields) {
    if (
        data === null ||
        typeof data !== "object" ||
        Array.isArray(data) ||
        !Array.isArray(fields)
    ) {
        throw new Error("Provide an object and an array of fields");
    }

    return Object.fromEntries(
        fields
            .filter(
                field =>
                    typeof field === "string" &&
                    Object.hasOwn(data, field)
            )
            .map(field => [field, data[field]])
    );
}

console.log(
    "473:",
    pickObjectFields473(
        { name: "Shiva", age: 22, role: "Developer" },
        ["name", "role"]
    )
);


// 474. Function to omit selected fields from an object
function omitObjectFields474(data, fieldsToOmit) {
    if (
        data === null ||
        typeof data !== "object" ||
        Array.isArray(data) ||
        !Array.isArray(fieldsToOmit)
    ) {
        throw new Error("Provide an object and an array of fields");
    }

    const omittedFields = new Set(fieldsToOmit);

    return Object.fromEntries(
        Object.entries(data).filter(
            ([key]) => !omittedFields.has(key)
        )
    );
}

console.log(
    "474:",
    omitObjectFields474(
        { name: "Shiva", password: "secret", role: "Developer" },
        ["password"]
    )
);


// 475. Function to create a JSON response object
function createJSONResponse475(success, data, message = "") {
    if (typeof success !== "boolean") {
        throw new Error("Success must be a boolean");
    }

    return {
        success,
        data: data ?? null,
        message: String(message)
    };
}

console.log(
    "475:",
    createJSONResponse475(true, { status: "completed" }, "Request successful")
);

