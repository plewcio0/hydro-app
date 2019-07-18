"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const menuBtn = document.querySelector('.navbar__button');
const menu = document.querySelector('.navbar');
const addButton = document.querySelector('.add-glass');
const removeButton = document.querySelector('.remove-glass');
const key = new Date().toISOString().slice(0, 10);
const counter = document.querySelector('.counter');
const wrapper = document.querySelector('.wrapper');
var count = 0;


// Only on index.html
if (window.location.href.includes('index'))
{
if (localStorage.getItem(key) != null) {
  counter.innerHTML = localStorage.getItem(key);
  count = localStorage.getItem(key);
  console.log(count);
}
else {
  localStorage.setItem(key, 0);
  counter.innerHTML = localStorage.getItem(key);
}


// Adding glass
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    count++;
    localStorage.setItem(key, count);
    counter.innerHTML = localStorage.getItem(key);
    if (wrapper.classList.contains('wrapper--blink'));
    {
      wrapper.classList.remove('wrapper--blink');
    }

  }, 200);
  wrapper.classList.add('wrapper--blink');
})

// Remove glass
removeButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (localStorage.getItem(key) != 0) {
    count--;
    localStorage.setItem(key, count);
    counter.innerHTML = count;
  }
})
}
menuBtn.addEventListener('click', e => {
  menu.classList.toggle('navbar--visible')
})


// History

console.log(11111);