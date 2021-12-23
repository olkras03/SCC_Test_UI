import { LitElement, html, css } from 'lit';

import {connect} from 'pwa-helpers';

import { store } from '../../redux/store';

class SccPage extends connect(store)(LitElement) {
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

static get properties() {
  return {
    title: {type: String}
  }
};

constructor() {
  super();
  this.title = '';
}

stateChanged({ rootReducer: { page }}) {
  this.title = page;
}

  render() {
    return html`
    <body>
      <div id="scc-page">
        <h2 id="title">${this.title}</h2>
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
