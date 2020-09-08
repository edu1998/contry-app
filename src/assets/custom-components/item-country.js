class ItemCountry extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    //init atribute
    this._name = null;
    this._flag = null;

    // declare elements for shadow
    this.span = document.createElement('span');
    this.image = document.createElement('img');

    this.image.setAttribute('width', '20');

    const style = document.createElement('style');

    style.textContent = `
    span {
      margin-left: 8px
    }
    `;
    shadow.appendChild(style);
    shadow.appendChild(this.image);
    shadow.appendChild(this.span);
  }

  static get observedAttributes() {
    return ['name', 'flag'];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get flag() {
    return this._flag;
  }

  set flag(value) {
    this._flag = value;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name':
        this.name = newValue;
        break;
      case 'flag':
        this.flag = newValue;
        break;
    }
    this.render();
  }

  render() {
    this.image.setAttribute('alt', `flag-${this.name}`);
    this.image.setAttribute('src', this.flag);
    this.span.innerHTML = this.name;
  }
}

customElements.define('item-country', ItemCountry);
