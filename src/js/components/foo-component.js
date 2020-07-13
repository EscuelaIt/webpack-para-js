import { LitElement, html, css } from 'lit-element';

class FooComponent  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      p {
        font-weight: bold;
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      age: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'sin nombre';
    this.age = '44';
  }

  render() {
    return html`
      <p>Soy foo component ${this.name}</p>
      <p>lalalala ${this.age}</p>
    `;
  }
}

customElements.define('foo-component', FooComponent);