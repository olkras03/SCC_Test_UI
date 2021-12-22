import { LitElement, html, css } from 'lit';

class SccSidebar extends LitElement {
  static styles = css`
    #sidebar {
      background-color: teal;
      color: white;
      display: inline-block;
      height: 60vh;
      width: 15%;
      margin: 2px;
      padding-left: 5px;
      border: 2px solid white;
    }
  `;

  static properties = {};

  render() {
    return html`
      <div id="sidebar">
        <slot></slot>
      </div>
    `
  }
};

export default SccSidebar;
