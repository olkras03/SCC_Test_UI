import { LitElement, html, css } from 'lit';

class SccSection extends LitElement {
  static styles = css`
    #scc-section {
      display: inline;
      margin: auto;
    }

    #title {
      color: black;
      width: 15%;
      margin-left: 5px;
    }

    #content {
      background-color: white;
      min-height: 400px;
      width: 80%;
      margin: auto;
    }
  `;

  static properties = {};

  render() {
    return html`
      <div id="scc-section">
        <h2 id="title">${this.getAttribute('title')}</h2>
        <div id="content">
          <slot></slot>
          <slot></slot>
        </div>
      </div>
    `
  }
}

export default SccSection;
