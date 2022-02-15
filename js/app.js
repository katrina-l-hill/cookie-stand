'use strict'

// Step 1: Window in the DOM
let storeLocationSection = document.getElementById('shop location');
console.log(storeLocationSection);

console.log(storeLocationSection);
console.dir(storeLocationSection);

let seattle = {
  cityName: `Seattle`,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCust: 6.3,
  custPerHr: [],
  cookiesSoldPerHr: [],
  custPerHr: function() {
       this.custPerHr = `${custPerHr}`;
  }
  function randomCustPerHr(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
}

seattle.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement(`h2`);
}

// let tokyo = {
//   cityName = `Tokyo`,
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookiePerCust: 1.2,
//   randomCustHr: function(){
//     this.randomCustHr = `${randomCustHr}`;
//   // function randomCustHr(min,max) {
//     // return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// };

// let dubai = {
//   cityName = `dubai`,
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookiePerCust: 3.7,
//   randomCustHr: function(){
//     this.randomCustHr = `${randomCustHr}`;
//   // function randomCustHr(min,max) {
//     // return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// };

// let paris = {
//   cityName = `Paris`,
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookiePerCust: 4.3,
//   // function randomCustHr(min,max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// };

// let lima = {
//   cityName = `Lima`,
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookiePerCust: 4.6,
//   // function randomCustHr(min,max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
// };