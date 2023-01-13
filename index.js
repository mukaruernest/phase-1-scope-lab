// Write your solution in this file!
var customerName = 'bob';
// 

// const upperCaseCustomerName = (name) => name.toUpperCase()
// upperCaseCustomerName(customerName)

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Not Me'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'it is you!'
}
