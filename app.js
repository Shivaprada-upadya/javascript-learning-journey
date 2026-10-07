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

// 166. Function to check if a value is a valid number
function isValidNumber166(value) {
    return typeof value === "number" && !Number.isNaN(value);
}

console.log("Valid Number:", isValidNumber166(100));


// 167. Function to calculate percentage
function calculatePercentage167(value, total) {
    if (total === 0) {
        return 0;
    }

    return (value / total) * 100;
}

console.log(
    "Percentage:",
    calculatePercentage167(45, 60).toFixed(2) + "%"
);


// 168. Function to generate a random number in a range
function randomNumberInRange168(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(
    "Random Number:",
    randomNumberInRange168(1, 100)
);


// 169. Function to check if an array contains duplicates
function hasDuplicates169(array) {
    return new Set(array).size !== array.length;
}

console.log(
    "Has Duplicates:",
    hasDuplicates169([1, 2, 3, 2])
);


// 170. Function to remove duplicates from an array
function removeDuplicates170(array) {
    return [...new Set(array)];
}

console.log(
    "Without Duplicates:",
    removeDuplicates170([1, 2, 2, 3, 3, 4])
);


// 171. Function to calculate total price
function calculateTotalPrice171(items) {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const shoppingItems171 = [
    { name: "Keyboard", price: 1000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "USB Cable", price: 200, quantity: 3 }
];

console.log(
    "Total Price:",
    calculateTotalPrice171(shoppingItems171)
);


// 172. Function to apply tax
function calculatePriceWithTax172(price, taxRate) {
    return price + (price * taxRate / 100);
}

console.log(
    "Price With Tax:",
    calculatePriceWithTax172(1000, 18)
);


// 173. Function to create a simple logger
function createLogger173(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const appLogger173 = createLogger173("APP");

appLogger173("Application started");
appLogger173("User logged in");


// 174. Function to safely access nested object data
function getNestedValue174(object, path) {
    return path.split(".").reduce((current, key) => {
        return current?.[key];
    }, object);
}

const userData174 = {
    profile: {
        contact: {
            email: "user@example.com"
        }
    }
};

console.log(
    "Email:",
    getNestedValue174(userData174, "profile.contact.email")
);


// 175. Function to convert object to query string
function objectToQueryString175(parameters) {
    return new URLSearchParams(parameters).toString();
}

console.log(
    "Query String:",
    objectToQueryString175({
        page: 1,
        limit: 10,
        search: "javascript"
    })
);

// 176. Function to create an API success response
function createSuccessResponse176(data) {
    return {
        success: true,
        data: data
    };
}

console.log(
    "Success Response:",
    createSuccessResponse176({ name: "Shivaprada" })
);


// 177. Function to create an API error response
function createErrorResponse177(message, statusCode) {
    return {
        success: false,
        statusCode: statusCode,
        message: message
    };
}

console.log(
    "Error Response:",
    createErrorResponse177("User not found", 404)
);


// 178. Function to validate required fields
function validateRequiredFields178(data, fields) {
    const missingFields = fields.filter(field => {
        return data[field] === undefined ||
               data[field] === null ||
               data[field] === "";
    });

    return {
        valid: missingFields.length === 0,
        missingFields: missingFields
    };
}

console.log(
    "Validation:",
    validateRequiredFields178(
        {
            name: "Shivaprada",
            email: ""
        },
        ["name", "email", "age"]
    )
);


// 179. Function to create a user object
function createUserObject179(name, email, role = "user") {
    return {
        id: Date.now(),
        name: name,
        email: email,
        role: role,
        createdAt: new Date().toISOString()
    };
}

console.log(
    "User:",
    createUserObject179(
        "Shivaprada",
        "shivaprada@example.com"
    )
);


// 180. Function to find a user by email
function findUserByEmail180(users, email) {
    return users.find(user => user.email === email);
}

const userList180 = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@example.com"
    },
    {
        id: 2,
        name: "Shivaprada",
        email: "shivaprada@example.com"
    }
];

console.log(
    "Found User:",
    findUserByEmail180(
        userList180,
        "shivaprada@example.com"
    )
);


// 181. Function to update a user
function updateUser181(users, userId, updates) {
    return users.map(user => {
        if (user.id === userId) {
            return {
                ...user,
                ...updates
            };
        }

        return user;
    });
}

console.log(
    "Updated Users:",
    updateUser181(
        userList180,
        2,
        { role: "admin" }
    )
);


// 182. Function to delete a user
function deleteUser182(users, userId) {
    return users.filter(user => user.id !== userId);
}

console.log(
    "Remaining Users:",
    deleteUser182(userList180, 1)
);


// 183. Function to create pagination information
function createPagination183(totalItems, currentPage, pageSize) {
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        currentPage: currentPage,
        pageSize: pageSize,
        totalItems: totalItems,
        totalPages: totalPages,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1
    };
}

console.log(
    "Pagination:",
    createPagination183(100, 2, 10)
);


// 184. Function to calculate pagination offset
function calculateOffset184(page, pageSize) {
    return (page - 1) * pageSize;
}

console.log(
    "Database Offset:",
    calculateOffset184(3, 10)
);


// 185. Function to simulate an API request
async function simulateApiRequest185(data, delay = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                data: data
            });
        }, delay);
    });
}

simulateApiRequest185({
    message: "Data fetched successfully"
})
    .then(response => {
        console.log("API Response:", response);
    });

// 186. Function to check HTTP success status
function isSuccessStatus186(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}

console.log(
    "Is Success Status:",
    isSuccessStatus186(200)
);


// 187. Function to check HTTP client error
function isClientError187(statusCode) {
    return statusCode >= 400 && statusCode < 500;
}

console.log(
    "Is Client Error:",
    isClientError187(404)
);


// 188. Function to check HTTP server error
function isServerError188(statusCode) {
    return statusCode >= 500 && statusCode < 600;
}

console.log(
    "Is Server Error:",
    isServerError188(500)
);


// 189. Function to get HTTP status message
function getStatusMessage189(statusCode) {
    const statusMessages = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error"
    };

    return statusMessages[statusCode] ?? "Unknown Status";
}

console.log(
    "Status Message:",
    getStatusMessage189(404)
);


// 190. Function to create HTTP response
function createHttpResponse190(statusCode, data) {
    return {
        statusCode: statusCode,
        success: statusCode >= 200 && statusCode < 300,
        data: data,
        timestamp: new Date().toISOString()
    };
}

console.log(
    "HTTP Response:",
    createHttpResponse190(
        200,
        { message: "Request successful" }
    )
);


// 191. Function to validate email
function isValidEmail191(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log(
    "Valid Email:",
    isValidEmail191("user@example.com")
);


// 192. Function to sanitize string
function sanitizeString192(value) {
    if (typeof value !== "string") {
        return "";
    }

    return value.trim();
}

console.log(
    "Sanitized String:",
    sanitizeString192("   Hello Node.js   ")
);


// 193. Function to safely parse JSON
function parseJsonSafely193(jsonString) {
    try {
        return {
            success: true,
            data: JSON.parse(jsonString)
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: "Invalid JSON"
        };
    }
}

console.log(
    "JSON Result:",
    parseJsonSafely193('{"name":"Shivaprada"}')
);


// 194. Function to create request metadata
function createRequestMetadata194(method, path) {
    return {
        method: method.toUpperCase(),
        path: path,
        requestId: generateId(),
        timestamp: new Date().toISOString()
    };
}

console.log(
    "Request Metadata:",
    createRequestMetadata194("get", "/api/users")
);


// 195. Function to simulate an API request handler
async function handleApiRequest195(request) {
    if (!request || !request.method || !request.path) {
        return createHttpResponse190(400, {
            message: "Invalid request"
        });
    }

    return createHttpResponse190(200, {
        message: "Request processed successfully",
        method: request.method,
        path: request.path
    });
}

handleApiRequest195({
    method: "GET",
    path: "/api/users"
})
    .then(response => {
        console.log("API Handler Response:", response);
    });

// 196. Function to validate password length
function isValidPassword196(password) {
    return typeof password === "string" && password.length >= 8;
}

console.log(
    "Valid Password:",
    isValidPassword196("Password123")
);


// 197. Function to check password strength
function getPasswordStrength197(password) {
    if (typeof password !== "string") {
        return "Invalid";
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score >= 4) {
        return "Strong";
    }

    if (score >= 2) {
        return "Medium";
    }

    return "Weak";
}

console.log(
    "Password Strength:",
    getPasswordStrength197("Password123!")
);


// 198. Function to compare passwords
function passwordsMatch198(password, confirmPassword) {
    return password === confirmPassword;
}

console.log(
    "Passwords Match:",
    passwordsMatch198(
        "Password123",
        "Password123"
    )
);


// 199. Function to create a user session
function createSession199(userId, role) {
    return {
        sessionId: generateId(),
        userId: userId,
        role: role,
        createdAt: new Date().toISOString()
    };
}

console.log(
    "Session:",
    createSession199(101, "user")
);


// 200. Function to check user authentication
function isAuthenticated200(session) {
    return Boolean(
        session &&
        session.sessionId &&
        session.userId
    );
}

const session200 = createSession199(101, "user");

console.log(
    "Authenticated:",
    isAuthenticated200(session200)
);


// 201. Function to check user role
function hasRole201(session, requiredRole) {
    return session?.role === requiredRole;
}

const adminSession201 = createSession199(101, "admin");

adminSession201.role = "admin";

console.log(
    "Has Admin Role:",
    hasRole201(adminSession201, "admin")
);


// 202. Function to check authorization
function isAuthorized202(session, allowedRoles) {
    if (!isAuthenticated200(session)) {
        return false;
    }

    return allowedRoles.includes(session.role);
}

console.log(
    "Authorized:",
    isAuthorized202(
        adminSession201,
        ["admin", "manager"]
    )
);


// 203. Function to create authentication response
function createAuthResponse203(userId, role) {
    const session = createSession199(userId, role);

    return {
        success: true,
        message: "Authentication successful",
        session: session
    };
}

console.log(
    "Auth Response:",
    createAuthResponse203(101, "user")
);


// 204. Function to create authorization middleware
function authorizationMiddleware204(allowedRoles) {
    return function (session) {
        if (!isAuthenticated200(session)) {
            return {
                allowed: false,
                statusCode: 401,
                message: "Authentication required"
            };
        }

        if (!allowedRoles.includes(session.role)) {
            return {
                allowed: false,
                statusCode: 403,
                message: "Access denied"
            };
        }

        return {
            allowed: true,
            statusCode: 200,
            message: "Access granted"
        };
    };
}

const adminMiddleware204 =
    authorizationMiddleware204(["admin"]);

console.log(
    "Middleware Result:",
    adminMiddleware204(adminSession201)
);


// 205. Function to simulate login
async function loginUser205(email, password) {
    const validEmail = "user@example.com";
    const validPassword = "Password123";

    if (email !== validEmail || password !== validPassword) {
        return {
            success: false,
            statusCode: 401,
            message: "Invalid email or password"
        };
    }

    return {
        success: true,
        statusCode: 200,
        message: "Login successful",
        session: createSession199(101, "user")
    };
}

loginUser205(
    "user@example.com",
    "Password123"
)
    .then(response => {
        console.log("Login Response:", response);
    });

// 206. Function to create a request logger
function createRequestLogger206() {
    return function (method, path) {
        console.log(
            `[${new Date().toISOString()}] ${method} ${path}`
        );
    };
}

const requestLogger206 = createRequestLogger206();

requestLogger206("GET", "/api/users");


// 207. Function to measure execution time
async function measureExecutionTime207(operation) {
    const startTime = Date.now();

    const result = await operation();

    const endTime = Date.now();

    return {
        result: result,
        executionTime: `${endTime - startTime} ms`
    };
}

measureExecutionTime207(async () => {
    await new Promise(resolve => {
        setTimeout(resolve, 500);
    });

    return "Operation completed";
})
    .then(result => {
        console.log("Execution Result:", result);
    });


// 208. Function to create a middleware chain
function createMiddlewareChain208(middlewares) {
    return async function (context) {
        for (const middleware of middlewares) {
            await middleware(context);
        }

        return context;
    };
}

const middlewareChain208 = createMiddlewareChain208([
    async context => {
        context.step1 = true;
    },

    async context => {
        context.step2 = true;
    }
]);

middlewareChain208({})
    .then(result => {
        console.log("Middleware Chain:", result);
    });


// 209. Function to validate request method
function validateRequestMethod209(request, allowedMethods) {
    if (!request || !allowedMethods.includes(request.method)) {
        return {
            valid: false,
            statusCode: 405,
            message: "Method Not Allowed"
        };
    }

    return {
        valid: true,
        statusCode: 200,
        message: "Method Allowed"
    };
}

console.log(
    "Method Validation:",
    validateRequestMethod209(
        { method: "GET" },
        ["GET", "POST"]
    )
);


// 210. Function to create request context
function createRequestContext210(method, path, body = {}) {
    return {
        method: method.toUpperCase(),
        path: path,
        body: body,
        requestId: generateId(),
        createdAt: new Date().toISOString()
    };
}

console.log(
    "Request Context:",
    createRequestContext210(
        "post",
        "/api/users",
        { name: "Shivaprada" }
    )
);


// 211. Function to validate request body
function validateRequestBody211(body, requiredFields) {
    if (!body || typeof body !== "object") {
        return {
            valid: false,
            errors: ["Request body must be an object"]
        };
    }

    const errors = [];

    for (const field of requiredFields) {
        if (
            body[field] === undefined ||
            body[field] === null ||
            body[field] === ""
        ) {
            errors.push(`${field} is required`);
        }
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

console.log(
    "Body Validation:",
    validateRequestBody211(
        {
            name: "Shivaprada",
            email: ""
        },
        ["name", "email"]
    )
);


// 212. Function to create an API controller
async function userController212(request) {
    if (!request) {
        return createHttpResponse190(400, {
            message: "Invalid request"
        });
    }

    return createHttpResponse190(200, {
        message: "User data fetched successfully",
        requestId: request.requestId
    });
}

userController212(
    createRequestContext210(
        "GET",
        "/api/users"
    )
)
    .then(response => {
        console.log("Controller Response:", response);
    });


// 213. Function to create a simple cache
function createSimpleCache213() {
    const cache = new Map();

    return {
        set(key, value) {
            cache.set(key, value);
        },

        get(key) {
            return cache.get(key);
        },

        has(key) {
            return cache.has(key);
        },

        clear() {
            cache.clear();
        }
    };
}

const simpleCache213 = createSimpleCache213();

simpleCache213.set("user:101", {
    name: "Shivaprada"
});

console.log(
    "Cached User:",
    simpleCache213.get("user:101")
);


// 214. Function to get cached data or fetch it
async function getCachedData214(cache, key, fetchData) {
    if (cache.has(key)) {
        console.log("Returning data from cache");

        return cache.get(key);
    }

    console.log("Fetching fresh data");

    const data = await fetchData();

    cache.set(key, data);

    return data;
}

getCachedData214(
    simpleCache213,
    "user:102",
    async () => {
        return {
            id: 102,
            name: "New User"
        };
    }
)
    .then(data => {
        console.log("Cached Data:", data);
    });


// 215. Function to handle errors safely
async function safelyExecute215(operation) {
    try {
        const result = await operation();

        return {
            success: true,
            data: result,
            error: null
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: error.message
        };
    }
}

safelyExecute215(async () => {
    throw new Error("Something went wrong");
})
    .then(result => {
        console.log("Safe Execution:", result);
    });

// 216. Function to find a record by ID
function findRecordById216(records, id) {
    return records.find(record => record.id === id);
}

const records216 = [
    { id: 1, name: "Product A", price: 500 },
    { id: 2, name: "Product B", price: 800 },
    { id: 3, name: "Product C", price: 1200 }
];

console.log(
    "Found Record:",
    findRecordById216(records216, 2)
);


// 217. Function to filter records by condition
function filterRecords217(records, field, value) {
    return records.filter(record => record[field] === value);
}

const employeeRecords217 = [
    { id: 1, name: "Rahul", department: "IT" },
    { id: 2, name: "Anu", department: "HR" },
    { id: 3, name: "Kiran", department: "IT" }
];

console.log(
    "Filtered Records:",
    filterRecords217(
        employeeRecords217,
        "department",
        "IT"
    )
);


// 218. Function to search records
function searchRecords218(records, field, keyword) {
    const searchText = keyword.toLowerCase();

    return records.filter(record => {
        return String(record[field])
            .toLowerCase()
            .includes(searchText);
    });
}

console.log(
    "Search Results:",
    searchRecords218(
        employeeRecords217,
        "name",
        "an"
    )
);


// 219. Function to sort records
function sortRecords219(records, field, ascending = true) {
    return [...records].sort((a, b) => {
        if (a[field] < b[field]) {
            return ascending ? -1 : 1;
        }

        if (a[field] > b[field]) {
            return ascending ? 1 : -1;
        }

        return 0;
    });
}

console.log(
    "Sorted Records:",
    sortRecords219(
        records216,
        "price"
    )
);


// 220. Function to paginate records
function paginateRecords220(records, page, pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return {
        data: records.slice(startIndex, endIndex),
        page: page,
        pageSize: pageSize,
        totalRecords: records.length,
        totalPages: Math.ceil(records.length / pageSize)
    };
}

console.log(
    "Paginated Records:",
    paginateRecords220(records216, 1, 2)
);


// 221. Function to insert a record
function insertRecord221(records, newRecord) {
    return [
        ...records,
        newRecord
    ];
}

const insertedRecords221 = insertRecord221(
    records216,
    {
        id: 4,
        name: "Product D",
        price: 1500
    }
);

console.log(
    "After Insert:",
    insertedRecords221
);


// 222. Function to update a record
function updateRecord222(records, id, updates) {
    return records.map(record => {
        if (record.id === id) {
            return {
                ...record,
                ...updates
            };
        }

        return record;
    });
}

console.log(
    "After Update:",
    updateRecord222(
        records216,
        2,
        { price: 900 }
    )
);


// 223. Function to delete a record
function deleteRecord223(records, id) {
    return records.filter(record => record.id !== id);
}

console.log(
    "After Delete:",
    deleteRecord223(records216, 3)
);


// 224. Function to count records
function countRecords224(records) {
    return records.length;
}

console.log(
    "Record Count:",
    countRecords224(records216)
);


// 225. Function to calculate total numeric field
function calculateFieldTotal225(records, field) {
    return records.reduce((total, record) => {
        const value = Number(record[field]);

        return total + (
            Number.isFinite(value) ? value : 0
        );
    }, 0);
}

console.log(
    "Total Price:",
    calculateFieldTotal225(records216, "price")
);

// 226. Function to create a parameterized SQL query
function createSelectQuery226(tableName, columnName, value) {
    return {
        query: `SELECT * FROM ${tableName} WHERE ${columnName} = $1`,
        values: [value]
    };
}

console.log(
    "Parameterized Query:",
    createSelectQuery226(
        "users",
        "email",
        "user@example.com"
    )
);


// 227. Function to create an INSERT query
function createInsertQuery227(tableName, columns, values) {
    const placeholders = columns.map((_, index) => `$${index + 1}`);

    return {
        query: `
            INSERT INTO ${tableName}
            (${columns.join(", ")})
            VALUES (${placeholders.join(", ")})
        `,
        values: values
    };
}

console.log(
    "Insert Query:",
    createInsertQuery227(
        "users",
        ["name", "email", "age"],
        ["Shivaprada", "user@example.com", 22]
    )
);


// 228. Function to create an UPDATE query
function createUpdateQuery228(
    tableName,
    id,
    updates
) {
    const entries = Object.entries(updates);

    const setClause = entries
        .map(([column], index) => `${column} = $${index + 1}`)
        .join(", ");

    const values = entries.map(([, value]) => value);

    values.push(id);

    return {
        query: `
            UPDATE ${tableName}
            SET ${setClause}
            WHERE id = $${values.length}
        `,
        values: values
    };
}

console.log(
    "Update Query:",
    createUpdateQuery228(
        "users",
        101,
        {
            name: "Updated User",
            age: 23
        }
    )
);


// 229. Function to create a DELETE query
function createDeleteQuery229(tableName, id) {
    return {
        query: `
            DELETE FROM ${tableName}
            WHERE id = $1
        `,
        values: [id]
    };
}

console.log(
    "Delete Query:",
    createDeleteQuery229("users", 101)
);


// 230. Function to format database rows
function formatDatabaseRows230(rows) {
    return rows.map(row => ({
        ...row,
        formatted: true
    }));
}

console.log(
    "Formatted Rows:",
    formatDatabaseRows230([
        { id: 1, name: "Rahul" },
        { id: 2, name: "Anu" }
    ])
);


// 231. Function to get the first database row
function getFirstRow231(rows) {
    if (!Array.isArray(rows) || rows.length === 0) {
        return null;
    }

    return rows[0];
}

// 236. Function to create request validation middleware
function validateRequest236(requiredFields) {
    return function (request) {
        const errors = [];

        for (const field of requiredFields) {
            if (
                request[field] === undefined ||
                request[field] === null ||
                request[field] === ""
            ) {
                errors.push(`${field} is required`);
            }
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    };
}

const validateUserRequest236 = validateRequest236([
    "name",
    "email"
]);

console.log(
    "Request Validation:",
    validateUserRequest236({
        name: "Shivaprada",
        email: "user@example.com"
    })
);


// 237. Function to create an authentication middleware
function createAuthMiddleware237() {
    return function (request) {
        if (!request || !request.user) {
            return {
                authenticated: false,
                statusCode: 401,
                message: "Authentication required"
            };
        }

        return {
            authenticated: true,
            statusCode: 200,
            message: "Authenticated"
        };
    };
}

const authMiddleware237 = createAuthMiddleware237();

console.log(
    "Auth Middleware:",
    authMiddleware237({
        user: {
            id: 101,
            role: "user"
        }
    })
);


// 238. Function to create role-based middleware
function createRoleMiddleware238(allowedRoles) {
    return function (request) {
        const userRole = request?.user?.role;

        if (!userRole) {
            return {
                allowed: false,
                statusCode: 401,
                message: "Authentication required"
            };
        }

        if (!allowedRoles.includes(userRole)) {
            return {
                allowed: false,
                statusCode: 403,
                message: "Access denied"
            };
        }

        return {
            allowed: true,
            statusCode: 200,
            message: "Access granted"
        };
    };
}

const adminMiddleware238 =
    createRoleMiddleware238(["admin"]);

console.log(
    "Role Middleware:",
    adminMiddleware238({
        user: {
            id: 101,
            role: "admin"
        }
    })
);


// 239. Function to create a controller response
function createControllerResponse239(
    statusCode,
    data,
    message
) {
    return {
        statusCode: statusCode,
        success: statusCode >= 200 && statusCode < 300,
        message: message,
        data: data
    };
}

console.log(
    "Controller Response:",
    createControllerResponse239(
        200,
        { id: 101 },
        "User fetched successfully"
    )
);


// 240. Function to create a user controller
async function createUserController240(request) {
    const validation = validateUserRequest236(
        request
    );

    if (!validation.valid) {
        return createControllerResponse239(
            400,
            null,
            validation.errors.join(", ")
        );
    }

    const newUser = {
        id: generateId(),
        name: request.name,
        email: request.email
    };

    return createControllerResponse239(
        201,
        newUser,
        "User created successfully"
    );
}

createUserController240({
    name: "Shivaprada",
    email: "shivaprada@example.com"
})
    .then(response => {
        console.log(
            "Create User Response:",
            response
        );
    });


// 241. Function to handle controller errors
async function controllerErrorHandler241(
    controller,
    request
) {
    try {
        return await controller(request);
    } catch (error) {
        return {
            statusCode: 500,
            success: false,
            message: "Internal Server Error",
            error: error.message
        };
    }
}

controllerErrorHandler241(
    async () => {
        throw new Error("Database connection failed");
    },
    {}
)
    .then(response => {
        console.log(
            "Error Handler Response:",
            response
        );
    });


// 242. Function to create a route handler
function createRouteHandler242(
    method,
    path,
    controller
) {
    return {
        method: method.toUpperCase(),
        path: path,
        controller: controller.name
    };
}

console.log(
    "Route:",
    createRouteHandler242(
        "get",
        "/api/users",
        userController212
    )
);


// 243. Function to create an API request pipeline
async function executeRequestPipeline243(
    request,
    middlewares,
    controller
) {
    for (const middleware of middlewares) {
        const result = await middleware(request);

        if (
            result.allowed === false ||
            result.authenticated === false ||
            result.valid === false
        ) {
            return result;
        }
    }

    return await controller(request);
}

const requestPipeline243 = [
    authMiddleware237,
    validateUserRequest236(["name"])
];

executeRequestPipeline243(
    {
        user: {
            id: 101,
            role: "user"
        },
        name: "Shivaprada"
    },
    requestPipeline243,
    async request => {
        return {
            statusCode: 200,
            success: true,
            message: "Pipeline completed",
            user: request.user
        };
    }
)
    .then(response => {
        console.log(
            "Pipeline Response:",
            response
        );
    });


// 244. Function to create an API error
function createApiError244(
    message,
    statusCode = 500
) {
    const error = new Error(message);

    error.statusCode = statusCode;

    return error;
}

const apiError244 = createApiError244(
    "User not found",
    404
);

console.log(
    "API Error:",
    apiError244.message,
    apiError244.statusCode
);


// 245. Function to handle API errors
function handleApiError245(error) {
    return {
        success: false,
        statusCode: error.statusCode ?? 500,
        message: error.message ?? "Internal Server Error",
        timestamp: new Date().toISOString()
    };
}

console.log(
    "Handled API Error:",
    handleApiError245(apiError244)
);

// 246. Function to create a request ID
function createRequestId246() {
    return `req-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 8)}`;
}

console.log(
    "Request ID:",
    createRequestId246()
);


// 247. Function to create a structured log
function createLogEntry247(level, message, metadata = {}) {
    return {
        timestamp: new Date().toISOString(),
        level: level,
        message: message,
        metadata: metadata
    };
}

console.log(
    "Log Entry:",
    createLogEntry247(
        "INFO",
        "User login successful",
        { userId: 101 }
    )
);


// 248. Function to create an API request log
function createRequestLog248(request) {
    return createLogEntry247(
        "INFO",
        `${request.method} ${request.path}`,
        {
            requestId: request.requestId,
            userId: request.userId ?? null
        }
    );
}

console.log(
    "Request Log:",
    createRequestLog248({
        method: "GET",
        path: "/api/users",
        requestId: createRequestId246(),
        userId: 101
    })
);


// 249. Function to create a simple rate limiter
function createRateLimiter249(maxRequests, windowMs) {
    const requests = new Map();

    return function (clientId) {
        const now = Date.now();
        const clientData = requests.get(clientId);

        if (!clientData || now - clientData.startTime >= windowMs) {
            requests.set(clientId, {
                count: 1,
                startTime: now
            });

            return {
                allowed: true,
                remaining: maxRequests - 1
            };
        }

        if (clientData.count >= maxRequests) {
            return {
                allowed: false,
                remaining: 0,
                message: "Too many requests"
            };
        }

        clientData.count++;

        return {
            allowed: true,
            remaining: maxRequests - clientData.count
        };
    };
}

const rateLimiter249 = createRateLimiter249(3, 10000);

console.log(
    "Rate Limit 1:",
    rateLimiter249("client-101")
);

console.log(
    "Rate Limit 2:",
    rateLimiter249("client-101")
);


// 250. Function to check rate limit
function checkRateLimit250(rateLimiter, clientId) {
    const result = rateLimiter(clientId);

    if (!result.allowed) {
        return {
            statusCode: 429,
            allowed: false,
            message: result.message
        };
    }

    return {
        statusCode: 200,
        allowed: true,
        remaining: result.remaining
    };
}

console.log(
    "Rate Limit Check:",
    checkRateLimit250(
        rateLimiter249,
        "client-102"
    )
);


// 251. Function to create a cache with expiration
function createExpiringCache251() {
    const cache = new Map();

    return {
        set(key, value, ttl) {
            cache.set(key, {
                value: value,
                expiresAt: Date.now() + ttl
            });
        },

        get(key) {
            const item = cache.get(key);

            if (!item) {
                return null;
            }

            if (Date.now() > item.expiresAt) {
                cache.delete(key);
                return null;
            }

            return item.value;
        }
    };
}

const expiringCache251 = createExpiringCache251();

expiringCache251.set(
    "user:101",
    { name: "Shivaprada" },
    5000
);

console.log(
    "Cached Value:",
    expiringCache251.get("user:101")
);


// 252. Function to validate content type
function validateContentType252(contentType) {
    const allowedTypes = [
        "application/json"
    ];

    return allowedTypes.includes(contentType);
}

console.log(
    "Content Type Valid:",
    validateContentType252(
        "application/json"
    )
);


// 253. Function to create security headers
function createSecurityHeaders253() {
    return {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "no-referrer",
        "Content-Security-Policy": "default-src 'self'"
    };
}

console.log(
    "Security Headers:",
    createSecurityHeaders253()
);


// 254. Function to remove sensitive fields
function removeSensitiveFields254(user) {
    const {
        password,
        token,
        refreshToken,
        ...safeUser
    } = user;

    return safeUser;
}

console.log(
    "Safe User:",
    removeSensitiveFields254({
        id: 101,
        name: "Shivaprada",
        email: "user@example.com",
        password: "secret",
        token: "abc123"
    })
);


// 255. Function to create a secure API response
function createSecureResponse255(
    statusCode,
    data
) {
    return {
        statusCode: statusCode,
        success: statusCode >= 200 && statusCode < 300,
        data: removeSensitiveFields254(data),
        timestamp: new Date().toISOString()
    };
}

console.log(
    "Secure Response:",
    createSecureResponse255(
        200,
        {
            id: 101,
            name: "Shivaprada",
            password: "secret",
            token: "secret-token"
        }
    )
);

// 256. Function to check if a file exists
const fs256 = require("fs");

function fileExists256(filePath) {
    return fs256.existsSync(filePath);
}

console.log(
    "File Exists:",
    fileExists256("app.js")
);


// 257. Function to get file information
function getFileInfo257(filePath) {
    if (!fs256.existsSync(filePath)) {
        return null;
    }

    const stats = fs256.statSync(filePath);

    return {
        size: stats.size,
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
        modifiedAt: stats.mtime
    };
}

console.log(
    "File Info:",
    getFileInfo257("app.js")
);


// 258. Function to read a text file
function readTextFile258(filePath) {
    try {
        return fs256.readFileSync(
            filePath,
            "utf-8"
        );
    } catch (error) {
        return null;
    }
}

console.log(
    "File Content:",
    readTextFile258("app.js").substring(0, 50)
);


// 259. Function to write a text file
function writeTextFile259(filePath, content) {
    try {
        fs256.writeFileSync(
            filePath,
            content,
            "utf-8"
        );

        return true;
    } catch (error) {
        return false;
    }
}

console.log(
    "Write Result:",
    writeTextFile259(
        "sample-259.txt",
        "Hello from Node.js"
    )
);


// 260. Function to append text to a file
function appendToFile260(filePath, content) {
    try {
        fs256.appendFileSync(
            filePath,
            `\n${content}`,
            "utf-8"
        );

        return true;
    } catch (error) {
        return false;
    }
}

console.log(
    "Append Result:",
    appendToFile260(
        "sample-259.txt",
        "New line added"
    )
);


// 261. Function to delete a file
function deleteFile261(filePath) {
    try {
        if (fs256.existsSync(filePath)) {
            fs256.unlinkSync(filePath);
        }

        return true;
    } catch (error) {
        return false;
    }
}

console.log(
    "Delete Result:",
    deleteFile261("sample-259.txt")
);


// 262. Function to convert object to JSON
function objectToJson262(data) {
    return JSON.stringify(
        data,
        null,
        2
    );
}

console.log(
    "JSON:",
    objectToJson262({
        name: "Shivaprada",
        role: "Developer"
    })
);


// 263. Function to parse JSON safely
function parseJsonFileData263(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
}

console.log(
    "Parsed JSON:",
    parseJsonFileData263(
        '{"name":"Shivaprada","role":"Developer"}'
    )
);


// 264. Function to get environment configuration
function getConfigValue264(name, defaultValue) {
    return process.env[name] ?? defaultValue;
}

const appConfig264 = {
    environment: getConfigValue264(
        "NODE_ENV",
        "development"
    ),

    port: Number(
        getConfigValue264(
            "PORT",
            3000
        )
    )
};

console.log(
    "App Config:",
    appConfig264
);


// 265. Function to create application configuration
function createAppConfig265() {
    return {
        environment: process.env.NODE_ENV ?? "development",
        port: Number(process.env.PORT ?? 3000),
        debug: process.env.DEBUG === "true"
    };
}

console.log(
    "Application Configuration:",
    createAppConfig265()
);
