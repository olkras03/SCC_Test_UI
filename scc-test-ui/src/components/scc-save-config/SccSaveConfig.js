import { LitElement, html, css } from 'lit';

import { connect } from 'pwa-helpers';

import { store } from '../../redux/store';

const saveConfig = () => {
  console.log('save config');
}

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
      padding-left: 5px;
      vertical-align: top;
      width: 48%;
    }

    #save-config-button {
      background-color: green;
      width: 100%;
      font-size: 24px;
      vertical-align: center;
      text-align: center;
      padding: 26%;
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

stateChanged({ rootReducer: { config } }) {
  this.config = config;

  console.log(JSON.parse(config));
};

  render() {
    this.addEventListener('click', e => store.dispatch({
      type: `CHANGE_CONFIG`,
      payload: JSON.stringify(document.getElementById('scc-journey-view').innerHTML)
    }));

    return html`
    <div id="save-config">
      <button id="save-config-button">Save Page Settings</button>
    </div>
    `
  };
};

export default SccSaveConfig;
