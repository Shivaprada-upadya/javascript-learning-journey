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
