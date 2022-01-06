import { html, css, LitElement } from 'lit';
import store from '../store';

export class SccQuestion extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      padding-bottom: 20px;
      padding-top: 10px;
      flex-direction: column;
    }
    .wrapper:hover {
      background-color: #ffffff2d;
    }
    .title {
      justify-content: space-between;
      display: flex;
    }
  `;

  static properties = {
    // https://lit.dev/docs/components/properties/#attributes
    question: { type: Object },
    index: { type: Number },
    address: { type: String },

    // https://lit.dev/docs/components/properties/#internal-reactive-state
    _value: { state: true },
  };

  constructor() {
    super();

    // https://lit.dev/docs/components/properties/#avoiding-issues-with-class-fields
    this.question = {};
    this.index = 0;
    this.address = "";
    this._value = "";
  }

  updateFromStore(props) {
    const { risk } = store.getState();
    const riskItem = risk[this.address];

    props._value = riskItem[this.question.name];
  }

  subscriptionHandler = () => {
    this.updateFromStore(this);
  };

  connectedCallback() {
    super.connectedCallback();
    this.unsubscribe = store.subscribe(this.subscriptionHandler);
    this.updateFromStore(this);
  }

  disconnectedCallback() {
    this.unsubscribe();
    super.disconnectedCallback();
  }

  updated(changed) {
    if(!changed.has('_value')) {
      return;
    }

    console.log('SccQuestion', {address: this.address, index: this.index, value: this._value });
    this.updateFromStore(this);
  }


  getInput() {

    switch(this.question.type) {
      case 'text':
        return html`
        <input
          type="text"
          value=${this._value}
          @blur=${e => this._onChange(e.currentTarget.value)}
        />
        `;
      case 'number':
        return html`
        <input
          type="number"
          value=${this._value}
          @blur=${e => this._onChange(e.currentTarget.value)}
        />
        `;
      // case 'dropdown':
      //   const options = this.question?.options ?? [];
      //   return html`
      //   <select onchange=${e => this._onChange(e.currentTarget.value)}>
      //     ${
      //       options.map(option => html `
      //         <option>${option}</option>
      //       `)
      //     }
      //   </select>
      //   `;
    }
  }

  render() {

    if(!this.question){
      return html`<div>Missing question</div>`
    }

    return html`
      <div
        class="wrapper"
        id=${`${this.address}-question-${this.question.index}`}
      >
        <div
          class="title"
          id=${`${this.address}-question-${this.question.index}`}
        >
          <div class="item">${this.question.title}</div>
          <div class="item">${this.question.index}</div>

        </div>
        ${this.getInput()}
      </div>
    `;
  }

  _onChange(value) {
    store.dispatch({
      type: 'CHANGE_INPUT',
      payload: {
        address: this.address,
        update: {[this.question.name]: value},
      },
    })
  }
}
