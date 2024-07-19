let userRole;
let accessLevel;
let isLoggedIn;
let userMessage;
let userType;
let userCategory;
let isAuthenticated;
let authenticationStatus;

if(userRole === "Employee"){
    accessLevel = "Full access granted"
} else if (userRole === "Subscriber"){
    accessLevel = "Limited access granted"
} else {
    accessLevel = "No access granted"
}

if(isLoggedIn === "true"){
    if(userRole === "Employee"){
        userMessage = "Welcome, Employee"
    } else {
        userMessage = "Welcome, Subscriber"
    } 
} else {
    userMessage = "Please log in to access the system"
}

switch(userType){
    case 1:
        userCategory = "Employee";
        break;
    case 2:
        userCategory = "Subscriber";
        break;
    case 3:
        userCategory = "No Subscriber";
        break;
    default:
        userCategory = "Unknown"
}

isAuthenticated = "true";
authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";