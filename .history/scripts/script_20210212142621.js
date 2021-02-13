// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let myFetch = fetch('https://fakestoreapi.com/products');
  myFetch.then(response => response.json())
    .then(function(data) {
      localStorage.setItem("product-list", JSON.stringify(data));
      for(i=0;i<data.length;i++)
        let productItem = document.createElement('product-item');
        list.appendChild(productItem);
    })
});