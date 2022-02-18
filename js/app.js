'use strict'

// Step 1: Window in the DOM
let table = document.getElementById('sales table');
// Creating Forms - Step 1: This grabs the element to listen to for Event Listening
let newStoreForm = document.getElementById('newStoreForm');
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function createTableHeader() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  let headerBlankCell = document.createElement('th');
  headerRow.appendChild(headerBlankCell);
  for (let i = 0; i < storeHours.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = storeHours[i];
    headerRow.appendChild(headerCell);
  }
}
createTableHeader();



function randomCustPerHr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function City(cityName, minCustomer, maxCustomer, avgCookiePerCust) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custPerHr = [];
  this.cookiesSoldPerHr = [];
  this.totalCookies = [];
  this.populateData = function () {
    let total = 0;
    for (let i = 0; i < storeHours.length; i++) {
      let custCount = randomCustPerHr(this.minCustomer, this.maxCustomer);
      this.custPerHr.push(custCount);
      this.cookiesSoldPerHr.push(Math.floor(custCount * this.avgCookiePerCust));
      total += Math.floor(custCount * this.avgCookiePerCust);
    }
    this.totalCookies = total;
  };
  this.populateData();
}

City.prototype.render = function () {
  let cityRow = document.createElement('tr');
  table.appendChild(cityRow);
  let cityTitleCell = document.createElement('td');
  cityTitleCell.textContent = this.cityName;
  cityRow.appendChild(cityTitleCell);
  for (let j = 0; j < storeHours.length; j++) {
    let cookieDataCell = document.createElement('td');
    cookieDataCell.textContent = this.cookiesSoldPerHr[j];
    cityRow.appendChild(cookieDataCell);
  }
}

let cities = [];
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
cities.push(seattle);
cities.push(tokyo);
cities.push(dubai);
cities.push(paris);
cities.push(lima);

//Add city rows
for (let i = 0; i < cities.length; i++) {
  cities[i].render();
}

function createTableFooter() {
  let footerElement = document.createElement('tfoot');
  table.appendChild(footerElement);
  let footerRow = document.createElement('tr');
  let footerTitleCell = document.createElement('td');
  footerRow.appendChild(footerTitleCell);
  footerTitleCell.textContent = "Totals";
  footerElement.appendChild(footerRow);
  //loop through store hours to create cells
  for (let i = 0; i < storeHours.length; i++) {
    let totalCookies = 0;
    for (let j = 0; j < cities.length; j++) {
      totalCookies += (cities[j].cookiesSoldPerHr[i]);
    }
    //create footer cell for total #
    let footerCell = document.createElement('th');
    footerCell.textContent = `${totalCookies}`;
    //append it to row
    footerRow.appendChild(footerCell);
  }
}
createTableFooter();

// Creating Form - Step 3: Write the callback or event handler
function handleSubmit(event) {
  for (let locationInput = i; i < cities; i++);
  if (cityName === locationInput) {
    locationInput = false;
  } else {
    locationInput = true;
  }
}

event.preventDefault();
//clear the table
table.innerHTML = "";
//create new city
let newStoreLocation = event.target.locationInput.value;
let newStoreMin = event.target.minCustInput.value;
let newStoreMax = event.target.maxCustInput.value;
let newStoreAvg = event.target.avgCookiesPerCustInput.value;
let newCity = new City(newStoreLocation, newStoreMin, newStoreMax, newStoreAvg);
console.log(newCity);
//add new city to cities array
cities.push(newCity);
//rerender table
//render header
createTableHeader();
//render data
for (let i = 0; i < cities.length; i++) {
  cities[i].render();
}
//render footer
createTableFooter();  
}

// Creating Forms - Step 2 (this goes at the very bottom): Add Event Listener
newStoreForm.addEventListener('submit', handleSubmit);