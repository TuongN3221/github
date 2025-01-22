let employeeName = "Fish Face";
const employeeID = 1337;
var isActive = true;

// console logging employeeName
console.log("Employee:", employeeName);
console.log("Type:", typeof employeeName);

// console logging  employeeID
console.log("ID:", employeeID);
console.log("Type:", employeeID);

//console logging isActive
console.log("Active:", isActive);
console.log("Type:", isActive);

// 2. Product Details - Primitive Data Types
let productName = "Evil Fish";
const productPrice = 86;
var isAvailable = false;

console.log(productName);
console.log(productPrice);
console.log(isAvailable);

// 3. Financial Transactions - Number Data Type
let accountBalance = 1000;
console.log("Initial Account Balance", accountBalance);
// Addition 
accountBalance += 500;
console.log("Account Balance, Addition:", accountBalance);
// Subtraction
accountBalance -= 200;
console.log("Account Balance, subtraction:", accountBalance);
// Multiplication
accountBalance *= 1.10;
console.log("Account Balance, multiplication:", accountBalance);
// Division 
accountBalance /= 2;
console.log("Account Balance, division:", accountBalance);

// 4. Customer Messaging - String Data Type
let customerName = "Not Evil Fish";
let welcomeMessage = "Hello," + customerName + ", we have fish that aren't evil for you to consume."
console.log(welcomeMessage);

// 5. Access Control - Boolean Data Type
let isLoggedIn = true;
let hasAccess = true;

console.log(isLoggedIn && hasAccess);
console.log(isLoggedIn || hasAccess);
console.log(!isLoggedIn);
