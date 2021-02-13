// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
  }
}

customElements.define('product-item', ProductItem);