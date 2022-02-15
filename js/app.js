'use strict'

// Step 1: Window in the DOM
let storeLocationSection = document.getElementById('shop location');
console.log(storeLocationSection);

console.log(storeLocationSection);
console.dir(storeLocationSection);

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustPerHr(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let seattle = {
  cityName: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCust: 6.3,
  custPerHr: [],
  cookiesSoldPerHr: [],
  totalCookies: 0,
  populateData: function() {
    let total = 0;
    for(let i = 0; i < storeHours.length; i++)
    {
      let custCount = randomCustPerHr(this.minCustomer, this.maxCustomer);
      this.custPerHr.push(custCount);
      this.cookiesSoldPerHr.push(Math.floor(custCount * this.avgCookiePerCust));
      total += Math.floor(custCount * this.avgCookiePerCust);
    }
    this.totalCookies = total;
  }
}

seattle.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.cityName;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  storeLocationSection.appendChild(h2Elem);
  let dataList = document.createElement('ul');
  for(let i = 0; i < storeHours.length; i++)
  {
    let item = document.createElement('li');
    item.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHr[i]} cookies`;
    dataList.appendChild(item);
  }
  let totalCount = document.createElement('li');
  totalCount.textContent = `Total: ${this.totalCookies} cookies`;
  dataList.appendChild(totalCount);
  storeLocationSection.appendChild(dataList);
  
}

seattle.populateData();
seattle.render();

let tokyo = {
  cityName: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerCust: 1.2,
  custPerHr: [],
  cookiesSoldPerHr: [],
  totalCookies: 0,
  populateData: function(){
    let total = 0;
    for(let i = 0; i < storeHours.length;i++)
  {
    let custCount = randomCustPerHr(this.minCustomer, this.maxCustomer);
    this.custPerHr.push(custCount);
    this.cookiesSoldPerHr.push(Math.floor(custCount * this.avgCookiePerCust));
    total += Math.floor(custCount * this.avgCookiePerCust);
  }
  this.totalCookies = total;
  }
}

tokyo.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.cityName;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  storeLocationSection.appendChild(h2Elem);
  let dataList = document.createElement('ul');
  for(let i = 0; i < storeHours.length; i++)
  {
    let item = document.createElement('li');
    item.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHr[i]} cookies`;
    dataList.appendChild(item);
  }
  let totalCount = document.createElement('li');
  totalCount.textContent = `Total: ${this.totalCookies} cookies`;
  dataList.appendChild(totalCount);
  storeLocationSection.appendChild(dataList);
}

tokyo.populateData();
tokyo.render();

let dubai = {
  cityName: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePerCust: 3.7,
  custPerHr: [],
  cookiesSoldPerHr: [],
  totalCookies: 0,
  populateData: function(){
    let total = 0;
    for(let i = 0; i < storeHours.length; i++)
    {
      let custCount = randomCustPerHr(this.minCustomer, this.maxCustomer);
      this.custPerHr.push(custCount);
      this.cookiesSoldPerHr.push(Math.floor(custCount * this.avgCookiePerCust));
      total += Math.floor(custCount * this.avgCookiePerCust);
    }
    this.totalCookies = total;
  }
}

dubai.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.cityName;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  storeLocationSection.appendChild(h2Elem);
  let dataList = document.createElement('ul');
  for(let i = 0; i < storeHours.length; i++)
  {
    let item = document.createElement('li');
    item.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHr[i]} cookies`;
    dataList.appendChild(item);
  }
  let totalCount = document.createElement('li');
  totalCount.textContent = `Total: ${this.totalCookies} cookies`;
  dataList.appendChild(totalCount);
  storeLocationSection.appendChild(dataList);
}

dubai.populateData();
dubai.render();

let paris = {
  cityName: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiePerCust: 4.3,
  custPerHr: [],
  cookiesSoldPerHr: [],
  totalCookies: 0,
  populateData: function() {
    let total = 0;
    for(let i = 0; i < storeHours.length; i++)
    {
      let custCount = randomCustPerHr(this.minCustomer, this.maxCustomer);
      this.custPerHr.push(custCount);
      this.cookiesSoldPerHr.push(Math.floor(custCount * this.avgCookiePerCust));
      total += Math.floor(custCount * this.avgCookiePerCust);
    }
    this.totalCookies = total;
  }
}

paris.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.cityName;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  storeLocationSection.appendChild(h2Elem);
  let dataList = document.createElement('ul');
  for(let i = 0; i < storeHours.length; i++)
  {
    let item = document.createElement('li');
    item.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHr[i]} cookies`;
    dataList.appendChild(item);
  }
  let totalCount = document.createElement('li');
  totalCount.textContent = `Total: ${this.totalCookies} cookies`;
  dataList.appendChild(totalCount);
  storeLocationSection.appendChild(dataList);
}

paris.populateData();
paris.render();

let lima = {
  cityName: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiePerCust: 4.6,
  custPerHr: [],
  cookiesSoldPerHr: [],
  totalCookies: 0,
  populateData: function(){
    let total = 0;
    for(let i = 0; i < storeHours.length; i++)
    {
      let custCount = randomCustPerHr(this.minCustomer, this.maxCustomer);
      this.custPerHr.push(custCount);
      this.cookiesSoldPerHr.push(Math.floor(custCount * this.avgCookiePerCust));
    total += Math.floor(custCount * this.avgCookiePerCust);
    }
    this.totalCookies = total;
  }
}

lima.render = function() {
  // Step 2 - create the element
  let h2Elem = document.createElement('h2');
  // Step 3 - Give it context if needed (optional)
  h2Elem.textContent = this.cityName;
  // Step 4 - add it to the DOM -- parent.appendChild(child)
  storeLocationSection.appendChild(h2Elem);
  let dataList = document.createElement('ul');
  for(let i = 0; i < storeHours.length; i++)
  {
    let item = document.createElement('li');
    item.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHr[i]} cookies`;
    dataList.appendChild(item);
  }
  let totalCount = document.createElement('li');
  totalCount.textContent = `Total: ${this.totalCookies} cookies`;
  dataList.appendChild(totalCount);
  storeLocationSection.appendChild(dataList);
}

lima.populateData();
lima.render();