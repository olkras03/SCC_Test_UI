import { LitElement, html, css } from 'lit';

class SccJsonView extends LitElement {
  static styles = css`
    #json-view {
      background-color: black;
      color: white;
      display: inline-block;
      height: 38vh;
      width: 48%;
      margin: 2px;
      padding-left: 5px;
      border: 2px solid teal;
    }
  `;

  static properties = {};

  render() {
    return html`
    <div id="json-view">
      <h2>Title</h2>
      <pre  cols=55 rows=60 contenteditable="true">
        {
          risk: {}
        }
      </pre>
    </div>
    `
  }
};

export default SccJsonView;
