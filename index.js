// Write your solution in this file!

//declare customerName to be bob in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'test';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new test';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'Andrea';
  let favoriteCustomer = 'Misanku';
}
