// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(data) {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    let li = document.createElement('li');
    li.setAttribute('class', 'product');
    let img = document.createElement('img')
    li.appendChild(img);

    
    shadowRoot.appendChild(li);  


  }

  set imgSrc(data){
    this.shadowRoot.querySelector('img').src = src;
  }

}

customElements.define('product-item', ProductItem);