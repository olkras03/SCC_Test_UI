import { LitElement, html, css } from 'lit';

class SccPage extends LitElement {
  static styles = css`
    #scc-page {
      background-color: #efeff2;
      display: inline-block;
      height: 100vh;
      width: 100%;
    }

    #title {
      background-color: white;
      height: 5%;
      margin: auto;
      margin-bottom: 2%;
      margin-top: 3%;
      padding-top: 20px;
      text-align: center;
      vertical-align: center;
      width: 80%;
    }
  `;

  static properties = {};

  render() {
    return html`
    <body>
      <div id="scc-page">
        <h2 id="title">${this.getAttribute('title')}</h2>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
      </div>
    </body>
    `
  }
}

export default SccPage;
