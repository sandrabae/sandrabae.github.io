class Disease extends HTMLElement {
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
    <div class="hero-banner">
    <img data-original="../img/disease/hero.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/disease/hero.png">
    </div>

    <main id="main" class="single project">
      <!--Project Title-->
      <div class="project-title">
        <h1 class="title"">${json.papers.disease.title}</h1>
        <span class="co-authors">Keshav Dasu</span>,
        <span><strong>Sandra Bae</strong></span>,
        <span><a href="${json.people.tfujiwara}" class="co-authors" target="_blank">Takanori Fujiwara</a></span>,
        <span><a href="${json.people.klma}" class="co-authors" target="_blank" target="_blank">Kwan-Liu Ma</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.disease.year}</h3>
        <p class="no-margin venue">IEEE PacificVis</p>
        <p class="no-margin">${json.papers.disease.award}</p>
        <div class="btn-links">
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.disease.pdf}" target="_blank" rel="noopener">PDF</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.disease.demo}" target="_blank" rel="noopener">Demo</a>
        </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
          This visualization analyzes data from Taiwans National Health Insurance Research Database (NHIRDB). The data is stratified into ten age groups, and for each group the likelihood of disease A contracted from disease B is calculated. We
  					depict the disease association among the studied subjects by designing a visualization that allows users to answer questions, such as ‘If I have heart-failure what else am I susceptible to?’ and ‘How does age play a role?’ Our visualization
  					is modeled after a bacterium and illustrates the co-occurrence of diseases. The nucleus size denotes the number of diseases that are associated. Each flagellum represents another disease category. Longer length of the flagellum represents a
  					stronger association. The thickness of a flagellum represents the number of diseases with the same association at a given point. Fluctuation of a flagellum shows variation in strength of association.
          </p>

        </div>
      </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <img data-original="../img/disease/overview.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/disease/overview.png" style="display: block;">
        </div>
      </div>
      <div class="imageRow three-grid-trim">
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/disease/explaination.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/disease/explaination.png" style="display: block;">
          </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/disease/model.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/disease/model.png" style="display: block;"></div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/disease/sample.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/disease/sample.png" style="display: block;"></div>
        </div>
      </div>
      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('disease-component', Disease);