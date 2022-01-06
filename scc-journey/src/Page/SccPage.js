import { html, css, LitElement } from 'lit';
import store from '../store';
import '../Question';
import getRouter from '../NavigoRouter';

export class SccPage extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      flex-direction: column;
    }
    .title {
      justify-content: space-evenly;
    }
    .debug {
      display: flex;
    }
  `;

  static properties = {
    // https://lit.dev/docs/components/properties/#attributes
    state: {type: Object},
    address: {type: String},

    // https://lit.dev/docs/components/properties/#internal-reactive-state
    _questionSet: {state: true},
    _next: {state: true},
    _title: {state: true},
  };

  constructor() {
    super();

    // https://lit.dev/docs/components/properties/#avoiding-issues-with-class-fields
    this._title = 'loading';
    this._questionSet = [];
    this._next = undefined;
  }

  updateFromStore(props) {
    const { navigation } = store.getState();
    const navItem = navigation[this.address];

    props._questionSet = navItem.questionSet;
    props._title = navItem.title;
    props._next = navItem.next;
  }

  subscriptionHandler = () => {
    this.updateFromStore(this);
  };

  connectedCallback() {
    super.connectedCallback();
    this.updateFromStore(this);
  }

  updated(changed) {
    if(!changed.has('address')) {
      return;
    }

    this.updateFromStore(this);
    console.log('SccPage', this._title);
  }

  goNext() {
    const data = getRouter();
    data.navigate(this._next);
  }

  goSubmit() {
    alert('TODO');
  }

  render() {
    return html`
      <div id="wrapper">
        <h2>${this._title}</h2>
        <section>
          <slot name="pre-question"></slot>
        </section>
        <section>
          ${this._questionSet?.map( (item, index) => html`
            <scc-question
              .question=${item}
              index=${index}
              address=${this.address}
            ></scc-question>`
          )}
        </section>
        <section>
          ${this._next
            ? html`<button @click=${this.goNext}>${this._next}</button>`
            : html`<button @click=${this.goSubmit}>Submit</button>`}
        </section>
      </div>
    `;
  }
}
