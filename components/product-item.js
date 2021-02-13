// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(data) {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    let li = document.createElement('li');
    li.setAttribute('class', 'product');
    let img = document.createElement('img');
    li.appendChild(img);
    let title = document.createElement('p');
    title.setAttribute('class', 'title');
    li.appendChild(title);
    let price = document.createElement('p');
    price.setAttribute('class', 'price');
    li.appendChild(price);


    let button = document.createElement('button');
    let count = 0;
    button.innerHTML = "Add to Cart";
    button.onclick = () => {
      alert("Added to Cart!");
      var counts = document.getElementById('cart-count').innerHTML;
      document.getElementById('cart-count').innerHTML = (Number(counts) + 1);
      count = 1;
    }
    button.addEventListener("click", function() {
      if (count === 0)
      {
        button.innerHTML = "Add to Cart";
        button.onclick = () => {
          alert("Added to Cart!");
          var counts = document.getElementById('cart-count').innerHTML;
          document.getElementById('cart-count').innerHTML = (Number(counts) + 1);
          count = 1;
        }
      }
      else
      {
        button.innerHTML = "Remove to Cart";
        button.onclick = () => {
          alert("Removed from Cart!");
          var counts = document.getElementById('cart-count').innerHTML;
          document.getElementById('cart-count').innerHTML = (Number(counts) - 1);
          count = 0;
        }
      }
    })
    li.appendChild(button);

    let style = document.createElement('style');

    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(li);  


  }

  set imgSrc(src){
    this.shadowRoot.querySelector('img').src = src;
  }

  set titleSrc(title){
    this.shadowRoot.querySelector('.title').innerHTML = title;
  }

  set priceSrc(price){
    this.shadowRoot.querySelector('.price').innerHTML = price;
  }

}

customElements.define('product-item', ProductItem);
