class TextRegion extends HTMLElement {
  constructor() {
    super();

    //create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.append(this.loadStyleSheet());

    this.p = document.createElement('p');
    this.p.setAttribute('class', 'paragraph-region');
    this._itemText = null;
    this.p.innerHTML = this.itemText;
    shadow.appendChild(this.p);
  }

  static get observedAttributes() {
    return ['text'];
  }

  loadStyleSheet() {
    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'assets/custom-components/styles.css');
    return linkElement;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // observed when the elements changes
    if (oldValue !== newValue) {
      this._itemText = newValue;
      this._updateRendering();
    }
  }

  get itemText() {
    return this._itemText;
  }

  set itemText(v) {
    this.setAttribute('text', v);
  }

  _updateRendering() {
    if (this.ownerDocument.defaultView) {
      this.p.innerHTML = this.itemText;
    }
  }
}

customElements.define('text-region', TextRegion);
