import { LitElement, html, css } from 'lit';

class SccSidebarItemGroup extends LitElement {
  static styles = css`
    #sidebar-item-group {
      background-color: white;
      border: 2px solid teal;
      color: teal;
      display: inline-block;
      margin: 2%;
      min-height: 25px;
      padding: 2px;
      width: 92%;
    }

    #sidebar-item-group {
      display: block;
    }
  `;

  static properties = {};

  render() {
    return html`
      <div id="sidebar-item-group">
        <h2>Title</h2>
        <ul id="items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    `
  }
};

export default SccSidebarItemGroup;
