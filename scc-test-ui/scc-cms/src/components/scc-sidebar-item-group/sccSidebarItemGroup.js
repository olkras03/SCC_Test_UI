import { LitElement, html, css } from 'lit';

import { store } from '../../redux/store';

class SccSidebarItemGroup extends LitElement {
  static styles = css`
    #sidebar-item-group {
      background-color: white;
      border: 2px solid teal;
      color: teal;
      display: inline-block;
      margin: 2%;
      max-height: 110px;
      min-height: 50px;
      overflow: scroll;
      padding: 2px;
      width: 92%;
    }

    .link-button {
      background: none;
      border: none;
      color: blue;
      cursor: pointer;
      margin: 0;
      overflow: visible;
      padding: 0;
      text-align: left;
      width: auto;
    }
  `;

  static properties = {};

  render() {
    const items = this.getAttribute('items').split(', ');
    this.addEventListener('click', e => store.dispatch({
      type: `CHANGE_${this.getAttribute('title').toUpperCase()}`,
      payload: `${e.path[0].innerText}`,
    }));

    return html`
      <div id="sidebar-item-group">
        <h3>Select ${this.getAttribute('title')}</h3>
        <ul id="items">
          ${items.map(i => html`<li><button class="link-button" name="${i}" value="${i}" key="${i}">${i}</button></li>`)}
        </ul>
      </div>
    `
  }
};

export default SccSidebarItemGroup;
