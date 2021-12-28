class DataPhys extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let foo = fetch("../js/json.json")
      .then(response => response.json())
      .then(json => this.template(json));
  }

  template(json) {
    this.innerHTML = `
    <div class="hero-banner"></div>


    <main id="main" class="single project no-banner">
      <!--Project Title-->
      <div class="project-title">
       <div class="col-sm-6 col-xs-6 line" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>
        <h1 class="title">${json.papers.dataphys.title}</h1>
        <span><strong>Sandra Bae</strong></span>,
        <span><a href="${json.people.czheng}" class="co-authors" target="_blank">Clement Zheng</a></span>,
        <span><a href="${json.people.mwest}" class="co-authors" target="_blank">Mary Etta West</a></span>,
        <span><a href="${json.people.shuron}" class="co-authors" target="_blank">Samuel Huron</a></span>,
        <span><a href="${json.people.edo}"  class="co-authors" target="_blank">Ellen Do</a></span>,
        <span><a href="${json.people.dszafir}" class="co-authors" target="_blank">Danielle Szafir</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.dataphys.year}</h3>
        <p class="no-margin">${json.papers.dataphys.venue}<p>
            <!-- <div class="btn-links">
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.pdf}" target="_blank" rel="noopener">PDF</a>
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.doi}" target="_blank" rel="noopener">DOI</a>
            </div> -->
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
          Designing a physicalization requires a myriad of different considerations. However, despite the cross-disciplinary nature of data physicalization, research currently lacks a synthesis across the different communities data physicalization sits upon, including their approaches, theories, and even terminologies. To bridge these communities synergistically, we present a design space that describes and analyzes physicalizations according to three facets: context (end-user considerations), structure (the physical structure of the artifact), and interactions (interactions with both the artifact and data). We construct this design space through a systematic review of 47 physicalizations and to analyze the interrelationship of key factors when designing a physicalization. This design space cross-pollinates the knowl- edge from relevant HCI communities, providing a cohesive overview of what designers should consider when creating a data physicalization while suggesting new design possibilities. We analyze the design decisions present in current physicalizations, discuss emerging trends, and identify underlying open challenges.
          </p>
        </div>
      </div>
      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('dphys-component', DataPhys);