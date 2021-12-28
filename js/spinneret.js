class Spinneret extends HTMLElement {
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
        <h1 class="title"">${json.papers.spinneret.title}</h1>
        <span><strong>Sandra Bae*</strong></span>,
        <span><a href="${json.people.ohkwon}" class="co-authors" target="_blank">Oh-Hyun Kwon*</a></span>,
        <span><a href="${json.people.schandrasegaran}" class="co-authors" target="_blank">Senthil Chandrasegaran</a></span>,
        <span><a href="${json.people.klma}"  class="co-authors"target="_blank">Kwan-Liu Ma</a></span>
        (* equally contributed)
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.spinneret.year}</h3>
        <p class="no-margin venue">${json.papers.spinneret.venue}<p>
          <div class="btn-links">
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.spinneret.pdf}" target="_blank" rel="noopener">PDF</a>
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.spinneret.doi}" target="_blank" rel="noopener">DOI</a>
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="h${json.papers.spinneret.presentation}" target="_blank" rel="noopener">Presentation</a>
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.spinneret.preview}" target="_blank" rel="noopener">Video Preview</a>
          </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
          Mind mapping is a popular way to explore a design space in creative thinking exercises, allowing users to form associations between concepts.
Yet, most existing digital tools for mind mapping focus on authoring and organization, with little support for addressing the challenges of mind mapping such as stagnation and design fixation.
We present Spinneret, a functional approach to aid mind mapping by providing suggestions based on a knowledge graph.
Spinneret uses biased random walks to explore the knowledge graph in the neighborhood of an existing concept node in the mind map, and provides "suggestions" for the user to add to the mind map.
A comparative study with a baseline mind-mapping tool reveals that participants created more diverse and distinct concepts with Spinneret, and reported that the suggestions inspired them to think of ideas they would otherwise not have explored.
          </p>
        </div>
      </div>
       <div class="col-sm-6 col-xs-6 line" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>

       <div class="project-header-title">
         <h3>INTRODUCTION</h3>
       </div>

      <div class="project-two-columns">
        <div class="left-column-trim">
          <p>Within the context of creativity, mind mapping can be used in divergent thinking where one tries to generate multiple, creative solutions for a given problem. <b>But the creative process is nontrivial.</b> In particular, two notable challenges of creative thinking are design fixation (i.e., tunnel vision restricting one’s imagination) and stagnation (i.e., unable to think of new solutions). Existing digital tools for mind mapping focus on the physical aspects of the process, i.e. supporting the creation and reorganization of nodes and links, but do not actively help mitigate fixation.
          <br><br>
          <b>RQ: How can we address design fixation and stagnation in digital mind maps?</b></p>
        </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <img alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/mindmap.jpg" style="display: block; width: 80%;">
        </div>
      </div>

      <div class="project-header-title">
        <h3>SPINNERET</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>We present Spinneret, a mind-mapping tool that aids creative thinking by providing non-obvious suggestions based on existing user-created concepts. <b>To reduce design fixation and stagnation, Spinneret aims to mimic the process of making non-obvious associations by exploring a knowledge graph <a href="https://conceptnet.io/" class="co-authors">(ConceptNet)</a> in the neighborhood of a given concept node through a biased random walk</b>. We implement Spinneret as a web-based interactive application for users to manually create nodes and links as well as request suggestions when they need inspiration.</p>
        </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <img data-original="../img/spinneret/spinneret.gif" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/spinneret.gif" style="display: block;">
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>GENERATING SUGGESTIONS</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>When a mind map creator wants to create new concept nodes that they associate with an existing node, they may have one of two inclinations. For a very open-ended scenario where the goal is to explore novel ideas, they may create nodes whose associations with the existing node may not be obvious, akin to "free association". For more constrained problems, they may create nodes with more apparent relationships to the existing node. To simulate these two approaches, we use a biased random walk to explore the nodes in the neighborhood of the ConceptNet knowledge graph.  We explore two biases for the random walk: a breadth-first search bias, where the walk is more likely to stay within the immediate neighborhood of the source concept node, and a depth-first bias where the walk is less likely to stay within the immediate neighborhood of the source concept. </p>
        </div>
      </div>

      <div class="imageRow three-grid-trim">
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/search.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/search.jpg" style="display: block;">
          </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/search2.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/search2.jpg" style="display: block;"></div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/search3.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/search3.jpg" style="display: block;"></div>
        </div>
      </div>

      <div class="imageGridFull"></div>

      <div class="imageRow three-grid-trim">
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/interactions.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/interactions.jpg" style="display: block; width: 80%">
          </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/interactions2.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/interactions2.jpg" style="display: block; width: 80%"> </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/interactions3.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/interactions3.jpg" style="display: block; width: 80%"> </div>
        </div>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p style="padding-top:50px;">Spinneret provides node suggestions (grey nodes) to the user using random walks on a knowledge graph in the neighborhood of a selected node. The random walks can have (A) a depth-first search bias, generating suggestions from concepts farther away from the source node, or (B) a breadth-first search bias such that suggestions are generated from concepts closer to the source node.</p>
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>EVALUATION</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>To evaluate Spinneret, we conducted a controlled study where we recruited 24 participants and they were asked to create mind maps for two tasks: an unconstrained task and a constrained task.

          The unconstrained task was to create a completely original plot for a short film, emulating an open-ended scenario where the goal is to explore novel ideas. In contrast, the constrained task focuses on generating solutions on how to reduce people’s distractions when driving. This task is more restrictive as it requires users to create nodes with more apparent relations to the existing nodes on the mind map.</p><br>
        </div>
      </div>

      <div class="imageRow three-grid-trim">
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/likert-nasa-tlx.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/likert-nasa-tlx.png" style="display: block;">
          </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/diversity.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/diversity.png" style="display: block;"></div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/spinneret/scatterplot-manual-suggestion.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/spinneret/scatterplot-manual-suggestion.png" style="display: block;"></div>
        </div>
      </div>


      <div class="project-header-title project-header-title-n">
        <h3>RESULTS</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>We measure indicators such as number of nodes, diversity of concepts used in the mind maps to characterize any differences between baseline and Spinneret used for the constrained and unconstrained tasks.</p><br>
            <ul>
            <li>Mind maps generated using Spinneret showed a <a href="#" class="disabled">greater diversity</a> of concepts .
            <li>Concept nodes showed a <a href="#" class="disabled">higher uniqueness</a> across participants in the Spinneret condition.
            <li>Spinneret’s suggestions were better received for the <a href="#" class="disabled">unconstrained task</a> than for the constrained task, regardless of the search bias applied
            </ul>
        </div>
      </div>

      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('spinneret-component', Spinneret);