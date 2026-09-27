// 156. Function using setTimeout
function runAfterDelay(callback, delay) {
    setTimeout(() => {
        callback();
    }, delay);
}

runAfterDelay(() => {
    console.log("Delayed function executed");
}, 1000);


// 157. Function using setInterval
function startCounter(limit) {
    let count = 1;

    const timer = setInterval(() => {
        console.log("Interval Count:", count);

        if (count === limit) {
            clearInterval(timer);
        }

        count++;
    }, 500);
}

startCounter(3);


// 158. Function to create a URL
function createURL(baseURL, path) {
    return new URL(path, baseURL).toString();
}

console.log(
    "URL:",
    createURL("https://example.com", "/users")
);


// 159. Function to add query parameters
function addQueryParameters(baseURL, parameters) {
    const url = new URL(baseURL);

    Object.entries(parameters).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    return url.toString();
}

console.log(
    "URL with Query:",
    addQueryParameters("https://example.com/users", {
        page: 1,
        limit: 10,
        search: "developer"
    })
);


// 160. Function to parse URL
function parseURL(urlString) {
    const url = new URL(urlString);

    return {
        protocol: url.protocol,
        hostname: url.hostname,
        pathname: url.pathname,
        search: url.search
    };
}

console.log(
    "Parsed URL:",
    parseURL("https://example.com/users?page=2")
);


// 161. Function to get environment variable
function getEnvironmentVariable(name, defaultValue) {
    return process.env[name] ?? defaultValue;
}

console.log(
    "Environment:",
    getEnvironmentVariable("NODE_ENV", "development")
);


// 162. Function to check Node.js environment
function checkNodeEnvironment() {
    if (typeof process !== "undefined" && process.versions?.node) {
        return `Running on Node.js ${process.versions.node}`;
    }

    return "Not running on Node.js";
}

console.log(checkNodeEnvironment());


// 163. Function to format file size
function formatFileSize(bytes) {
    if (bytes === 0) {
        return "0 Bytes";
    }

    const units = ["Bytes", "KB", "MB", "GB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, index)).toFixed(2)} ${units[index]}`;
}

console.log("File Size:", formatFileSize(1048576));


// 164. Function to generate a unique ID
function generateId() {
    return `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`;
}

console.log("Generated ID:", generateId());


// 165. Function to retry an operation with delay
async function retryWithDelay(operation, attempts, delay) {
    for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
            return await operation();
        } catch (error) {
            console.log(`Attempt ${attempt} failed`);

            if (attempt === attempts) {
                throw error;
            }

            await new Promise(resolve => {
                setTimeout(resolve, delay);
            });
        }
    }
}

async function successfulOperation() {
    return "Operation completed successfully";
}

retryWithDelay(successfulOperation, 3, 1000)
    .then(result => {
        console.log("Retry Result:", result);
    })
    .catch(error => {
        console.log("Final Error:", error.message);
    });
