import { fixture, expect } from '@open-wc/testing';
import '../src/components/wc-counter.js';

describe('WcCounter', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(`<wc-counter value=${99}></wc-counter>`);
  });

  it('renders elements', () => {
    console.log(element);
    const decrementBtn = element.shadowRoot.querySelector('[decrement]');
    const incrementBtn = element.shadowRoot.querySelector('[increment]');
    const displayVal = element.shadowRoot.querySelector('span');

    // expect(decrementBtn).to.exist;
    // expect(incrementBtn).to.exist;
    // expect(displayVal).to.exist;
  });

  it('can instantiate with properties', async () => {
    const el = await fixture(`<wc-counter value=${99}></wc-counter> `);
    expect(el.value).to.equal(99);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
