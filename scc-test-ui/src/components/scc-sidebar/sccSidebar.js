import { LitElement, html, css } from 'lit';

class SccSidebar extends LitElement {
  static styles = css`
    #sidebar {
      background-color: teal;
      border: 2px solid white;
      color: white;
      display: inline-block;
      height: 60vh;
      margin: 2px;
      padding-left: 5px;
      vertical-align: top;
      width: 15%;
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
