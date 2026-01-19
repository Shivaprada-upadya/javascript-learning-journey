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






