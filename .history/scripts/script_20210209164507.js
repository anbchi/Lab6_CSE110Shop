// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
    .then(response => localStorage.setItem("keys", JSON.stringify((response.json()))))
});