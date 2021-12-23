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

stateChanged({ rootReducer }) {
  console.log(rootReducer);
  this.state = this.title === 'risk' ? rootReducer.risk : rootReducer.config;
}

  render() {
    return html`
    <div id="json-view">
      <h2>${this.title}</h2>
      <pre cols=55 rows=500 contenteditable="true">
        ${
          { ...this.state }
        }
      </pre>
    </div>
    `
  }
};

export default SccJsonView;
