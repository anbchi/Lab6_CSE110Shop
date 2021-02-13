// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = '
    <style></style>
    <span></span>';
      //<li class="product">
        //<image src="" alt="" width=200>
        //<p class="title"></p>
        //<p class="price"></p>
        //<button onclick="alert('Added to Cart!')">Add to Cart</button>
      //</li> 
    this.getRootNode.appendChild(shadowRoot.textContent.cloneNode(true));  
  }
}

customElements.define('product-item', ProductItem);