import { LitElement, html, css } from 'lit';

import { connect } from 'pwa-helpers';

import { store } from '../../redux/store';

class SccJsonView extends connect(store)(LitElement) {
  static styles = css`
    #json-view {
      background-color: black;
      border: 2px solid white;
      color: white;
      display: inline-block;
      height: 38vh;
      margin: 2px;
      overflow: scroll;
      padding-left: 5px;
      vertical-align: top;
      width: 48%;
    }
  `;

static get properties() {
  return {
    title: {type: String}
  }
};

constructor() {
  super();
  this.title = this.getAttribute('title');
  this.state = {}
}

stateChanged({ rootReducer: { config, risk } }) {
  this.state = this.title === 'Risk' ? risk : config;
}

  render() {
    return html`
    <div id="json-view">
      <h2>${this.title}</h2>
      <pre id="json">
        <code>${JSON.stringify(this.state, null, 4)}</code>
      </pre>
    </div>
    `
  }
};

export default SccJsonView;
