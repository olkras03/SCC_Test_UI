import { LitElement, html, css } from 'lit';
import { WiredInput } from 'wired-elements';


class SccJourneyView extends LitElement {
  static styles = css`
    #journeyView {
      background-color: black;
      border: 2px solid white;
      color: blue;
      display: inline-block;
      height: 60vh;
      margin: auto;
      margin-top: 2px;
      overflow: scroll;
      padding-right: 10px;
      vertical-align: top;
      width: 65%;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      onchange: {type: Object}
    };
  };

  stateChanged({ rootReducer: { config } }) {
    this.config = config;
  }

  change(e) {
    this.onchange(e.targetElement.value);
  }

  render() {
    return html`
     <section>
        <h2>Your Name</h2>
        <wired-input value=${this.name} onblur=${e => this.change} placeholder="your name"></wired-input>
        <wired-button elevation="2">Submit</wired-button>
      </section>
    `
  }
};

export default SccJourneyView;
