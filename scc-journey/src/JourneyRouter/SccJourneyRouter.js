import { LitElement, html } from 'lit';
import { shallowCompareObject } from '../util.js';
import store from '../store';
import '../Page';

export class SccJourneyRouter extends LitElement {

  static properties = {
    // https://lit.dev/docs/components/properties/#internal-reactive-state
    _currentPage: {state: true},
    _currentState: {state: true},
    _isValidRoute: {state: true}
  };

  constructor() {
    super();
    this._currentPage = 'home';
    this._currentState = {};
    this._isValidRoute = false;
  }

  updateFromStore(props) {
    const { route } = store.getState();

    props._currentPage = route.currentPage;
    props._currentState = route.currentState;
    props._isValidRoute = route.isValid;
  };

  subscriptionHandler = () => {
    this.updateFromStore(this);
  };

  connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = store.subscribe(this.subscriptionHandler);
    this.updateFromStore(this);
  }

  disconnectedCallback() {
    this._unsubscribe();
    super.disconnectedCallback();
  }

  updated(changed) {
    console.log('JourneyRouter', this._currentPage);
  }

  render() {

    if(!this._isValidRoute) {
      return html`
        <div slot="journey-starter">
         <a href="/home">Start Journey</a>
        </div>
    `;
    }

    return html`
        <scc-page address=${this._currentPage}>
        <div slot="pre-question">
          <p>Log in to fill up questions faster</p>
        </div>
        </scc-page>
    `;
  }
}
