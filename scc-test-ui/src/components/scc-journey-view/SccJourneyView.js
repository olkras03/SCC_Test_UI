import { LitElement, html, css } from 'lit';

class SccJourneyView extends LitElement {
  static styles = css`
    #journeyView {
      background-color: white;
      color: blue;
      display: inline-block;
      height: 60vh;
      width: 65%;
      margin: 2px;
      padding-left: 5px;
      border: 2px solid teal;
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
