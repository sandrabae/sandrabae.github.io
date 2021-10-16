class Teaching extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <h2>TEACHING</h2>
    <p>I was previously a TA for:</p>

    <h4>CU Boulder</h4>
    <ul class="no-bullets">
      <li>ATLS 3300: Object (Spring 2021)</li>
    </ul>

    <h4>UC Davis</h4>
    <ul class="no-bullets">
      <li>ECS 162: Web Programming (Spring 2020)</li>
      <li>ECS 164: Intro to Human-Computer Interaction (Winter 2019, Winter 2020)</li>
      <li>ECS 163: Information Visualization (Summer 2018)</li>
    </ul>
    <br>
    <p>More information on these courses can be found at the Dept website.</p>
  `;
  }
}

customElements.define('teaching-component', Teaching);