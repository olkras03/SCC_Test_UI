import { LitElement, html, css } from 'lit';

class SccJsonView extends LitElement {
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

  static properties = {};

  render() {
    return html`
    <div id="json-view">
      <h2>${this.getAttribute('title')}</h2>
      <pre cols=55 rows=500 contenteditable="true">
        {
          something: {},
        }
      </pre>
    </div>
    `
  }
};

export default SccJsonView;
