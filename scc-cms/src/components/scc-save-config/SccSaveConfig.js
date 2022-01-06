import { LitElement, html, css } from 'lit';

import { connect } from 'pwa-helpers';

import { store } from '../../redux/store';

class SccSaveConfig extends connect(store)(LitElement) {
  static styles = css`
    #save-config {
      background-color: black;
      border: 2px solid white;
      color: white;
      display: inline-block;
      font-size: 16px;
      height: 38vh;
      margin: auto;
      margin: 2px;
      overflow: scroll;
      vertical-align: top;
      width: 48%;
    }

    #save-config-button {
      background-color: green;
      color: white;
      font-size: 24px;
      height: 100%;
      margin: auto;
      text-align: center;
      vertical-align: center;
      width: 100%;
    }
  `;

static get properties() {
  return {
    config: {type: Object}
  }
};

constructor() {
  super();
  this.state = {}
};

stateChanged({ rootReducer: { product, page, config: { html }} }) {
  this.product = product
  this.page = page;
  this.html = html;
};

  render() {
    this.addEventListener('click', () => {
      const html = { html: document.getElementById('scc-page').outerHTML };

      store.dispatch({
      type: `CHANGE_CONFIG`,
      payload: {
        content: html,
        page: this.page,
        product: this.product,
      },
    })
  });

    return html`
    <div id="save-config">
      <button id="save-config-button">Save Page Settings</button>
    </div>
    `
  };
};

export default SccSaveConfig;
