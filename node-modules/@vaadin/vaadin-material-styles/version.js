class Material extends HTMLElement {
  static get version() {
    return '1.2.2';
  }
}

customElements.define('vaadin-material-styles', Material);

export { Material };