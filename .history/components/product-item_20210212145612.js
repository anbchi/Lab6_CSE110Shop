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
    let title = document.createElement('title');
    li.appendChild(title);
    
    shadowRoot.appendChild(li);  


  }

  set imgSrc(src){
    this.shadowRoot.querySelector('img').src = src;
  }

  set titleSrc(title){
    this.shadowRoot.querySelector('title') = title;
  }

}

customElements.define('product-item', ProductItem);