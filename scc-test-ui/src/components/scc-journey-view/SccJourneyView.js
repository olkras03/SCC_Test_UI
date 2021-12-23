import { LitElement, html, css } from 'lit';

class SccJourneyView extends LitElement {
  static styles = css`
    #journeyView {
      background-color: black;
      border: 2px solid white;
      color: blue;
      display: inline-block;
      height: 60vh;
      margin: auto;
      overflow: scroll;
      padding: 10px;
      vertical-align: top;
      width: 65%;
    }
  `;

  static properties = {};

  render() {
    return html`
      <div id="journeyView">
        <slot></slot>
      </div>
    `
  }
};

export default SccJourneyView;
