import { html, css, LitElement } from 'lit';
import '../JourneyRouter';

export class JourneyLayout extends LitElement {
  static styles = css`
    .app-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    section {
      width: 750px;
      padding: 10px;
      margin: 10px;
      border-radius: 3px;
      box-shadow: 0px 0px 4px black;
      background-color: #3f3f3f;
      color: white;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="app-content">
        <section>Example Journey</section>
        <section>
          <scc-journey-router></scc-journey-router>
        </section>
        <section>lazy footer</section>
      </div>
    `;
  }
}
