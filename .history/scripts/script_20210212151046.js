// Script.js
let list = document.getElementById("product-list");
window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let myFetch = fetch('https://fakestoreapi.com/products');
  myFetch.then(response => response.json())
    .then(function(data) {
      localStorage.setItem("product-list", JSON.stringify(data));
      for(i=0;i<data.length;i++){
        let productItem = document.createElement('product-item');
        productItem.imgSrc = data[i].image;
        productItem.title = data[i].title;
        list.appendChild(productItem);
      }
    })
});