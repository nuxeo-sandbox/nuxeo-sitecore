class Lumo extends HTMLElement {
  static get version() {
    return '1.4.2';
  }
}

customElements.define('vaadin-lumo-styles', Lumo);

export { Lumo };