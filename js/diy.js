class Eager extends HTMLElement {
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
      <img data-original="../img/diy-vis-literacy/hero.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/hero.png">
    </div>

    <main id="main" class="single project">
      <!--Project Title-->
      <div class="project-title">
        <h1 class="title"">${json.papers.eager.title}</h1>
          <span><strong>Sandra Bae</strong></span>,
          <span><a href="${json.people.rvanukuru}" class="co-authors" target="_blank">Rishi Vanukuru</a></span>,
          <span><a href="${json.people.ryang}" class="co-authors" target="_blank">Ruhan Yang</a></span>,
          <span><a href="${json.people.pgyory}" class="co-authors" target="_blank">Peter Gyory</a></span>,
          <span><a href="${json.people.rzhou}" class="co-authors" target="_blank">Ran Zhou</a></span>,
          <span><a href="${json.people.edo}" class="co-authors" target="_blank">Ellen Do</a></span>,
          <span><a href="${json.people.dzafir}" class="co-authors" target="_blank">Danielle Szafir</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.eager.year}</h3>
        <p class="no-margin venue">${json.papers.eager.venue}</p>
          <div class="btn-links">
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.eager.pdf}" target="_blank" rel="noopener">PDF</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.eager.doi}" target="_blank" rel="noopener">DOI</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.eager.presentation}" target="_blank" rel="noopener">Presentation</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.eager.instructable}" target="_blank" rel="noopener">Instructable</a>
          </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
          Fostering data visualization literacy (DVL) as part of childhood education could lead to a more data-literate society. However, most work in DVL for children relies on a more formal educational context (i.e., a teacher-led approach) that limits children’s engagement with data to classroom-based environments and, consequently, children’s ability to ask questions about and explore data on topics they find personally meaningful. We explore how a curiosity-driven, child-led approach can provide more agency to children when they are authoring data visualizations. This paper explores how informal learning with crafting physicalizations through play and curiosity may foster increased literacy and engagement with data. Employing a constructionist approach, we designed a do-it-yourself toolkit made out of everyday materials (i.e., paper, cardboard, mirrors) that enables children to create, customize, and personalize three different interactive visualizations (i.e., bar, line, pie). We used the toolkit as a design probe in a series of in-person workshops with 5 children (6 to 11-year-olds) and interviews with 5 educators. Our observations reveal that the toolkit helped children creatively engage and interact with visualizations. Children with prior knowledge of data visualization reported the toolkit serving as more of an authoring tool that they envision using in their daily lives, while children with little to no experience with visualizations found the toolkit as an engaging introduction to data visualization concepts. Our study demonstrates the potential of using the constructionist approach to cultivate children’s DVL and how they can creatively interact with data and visualizations.
          </p>
        </div>
      </div>
      <div class="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hmd4P8BhA1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div class="col-sm-6 col-xs-6" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>


      <div class="project-header-title">
        <h3>INTRODUCTION</h3>
      </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <p>Aiming to foster a more data-literate society, this work investigates how physically crafting visualizations can help cultivate children’s DVL while broadening their engagement with data. Most work in DVL for children relies on a more constrained, formal educational context (i.e., a teacher-led approach). By limiting DVL education to formal environments, children are restricted in where they learn and the datasets they work with (e.g., predefined datasets that children may not generally be interested in.</p>

          <p>Educational research highlights that when children are making artifacts driven by <b>play</b> and their own <b>curiosity</b> (known as a constructionist approach), they better grasp complex topics (e.g., artificial intelligence, science, and programming). Our work applies this constructionist approach to the context of DVL. We explore how informal learning with crafting physicalizations through play and curiosity may foster increased literacy and engagement with data.</p>

          <div class="imageGrid"> <img data-original="../img/diy-vis-literacy/lockhart.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/lockhart.png" style="display: block;">
            <p class="figure-caption">Fig 1: Paul Lockhart's lament on math education</p>
          </div>

        </div>
      </div>


      <div class="project-header-title project-header-title-n">
        <h3>DATA IS YOURS (DIY) TOOLKIT</h3>
      </div>
      <div class="imageRow">
        <div class="imageGridFull">
          <p>Data Is Yours-Toolkit (DIY-Toolkit) is a design probe intended to study how constructionist practices can engage children to create visualizations in a playful, creative manner. It is a toolkit made out of everyday materials (i.e., paper, cardboard) and fiducial markers to help children author visualizations.</p>
          <p>The design probe supports three charts panels (bar chart, line chart, and pie chart) that children can manually construct. Each chart panel has a cardboard base, paper, and 3D printed sliders. The combination of these materials acts as a physicalization, attempting to co-opt the existing idioms behind the common visualization.</p>
          <p>After constructing the kit, children will mount a smartphone on the box and place a chart panel with a paper template onto the acrylic surface. Then children manipulate the physicalization within the chart panel to reflect their collected data and are able to observe the rendered visualization on the smartphone display. The toolkit is open source where children, parents, and educators are encouraged to adopt and fabricate the toolkit on their own.</p>
        </div>
      </div>

      <div class="imageRow three-grid-trim">
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/diy-vis-literacy/toolkit1.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/toolkit1.jpg" style="display: block;">
          </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/diy-vis-literacy/toolkit2.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/toolkit2.jpg" style="display: block;"> </div>
        </div>
        <div class="gridThreeColumn">
          <div class="imageGrid"> <img data-original="../img/diy-vis-literacy/toolkit3.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/toolkit3.jpg" style="display: block;"> </div>
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>COMPUTER VISION MARKERS</h3>
      </div>
      <div class="project-two-columns">
        <div class="left-column-trim">
          <p>The toolkit focuses on how we can combine physical materials with digital feedback to enable dynamic data interactions. Printed fiducial markers have been used as control points for various tangible interactions. Inspired by this approach, the backside of each chart panel contains a series of fiducial markers that face the camera. Each fiducial marker provides information based on its identity, position, and orientation.</p>
        </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim"> <img data-original="../img/diy-vis-literacy/system.gif" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/cv.gif"
            style="display: block;">
        </div>
      </div>

    <div class="col-sm-6 col-xs-6" style="margin: 6% 0; border-bottom: 1px solid #BBBBBB;"></div>



      <div class="project-header-title">
        <h3>EXPLORATORY STUDY</h3>
      </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <p>To investigate how constructionist practices can foster children’s DVL, we conducted an exploratory study using our design probe in a series of workshops with children (Sect. 5.1) and interviews with educators (Sect. 5.2). Workshops can elicit rich qualitative insights for early stages of applied visualization research [35]. We followed guidelines by Kerzner et al. [35] and Terre des hommes [42] to design our workshop around the constraints of working with children in a limited timeframe while still evaluating the research objectives of the toolkit. Further study materials are available in supplemental materials.</p>
        </div>
      </div>

      <div class="imageGridFull">
        <div class="imageGrid"> <img data-original="../img/diy-vis-literacy/future-vision.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy-vis-literacy/future-vision.png" style="display: block;">
        <p class="figure-caption">Fig 2: Future vision of integrating DIY Toolkit into various activites</p>
        </div>
      </div>


      <div class="project-header-title project-header-title-n">
        <h3>FUTURE VISION</h3>
      </div>

      <div class="imageGridFull">
        <p>With any learning technology for children, research stresses the importance of three principles: <i>"low floor"</i> (how easy is the technology for children to learn and use?); <i>"high ceiling"</i> (does the technology advance children in making more complex projects?); and <i>"wide walls"</i> (how inclusive is the technology in supporting all children’s interest?).</p>
        <p>Our exploratory study indicates that DIY-Toolkit successfully accomplished a low floor as even young, inexperienced children were able to craft and interpret basic visualizations using the system, but our approach requires more consideration as to how to create a high ceiling and wide walls. </p>
        <p>Educators expressed concerns about how the toolkit can currently represent five data points, we can achieve more advanced, complex visualizations (high ceiling) by better leveraging mobile visualization techniques in future iterations. Children and educators suggested several ways the toolkit can support wide walls by integrating the toolkit into activities that children naturally enjoy to increase the variety and complexity of charts children can create. For instance, children can work with their families to recreate visualizations from news media or progressively track changes around them over time (e.g., tracking children’s height). These activities, in turn, can seamlessly introduce children to different types of data (e.g., qualitative, geographic, categorical, temporal).</p>
        <p>By supporting wide walls, it naturally shifts the focus to create a fertile environment in which children’s creativity for data will take root, grow, and flourish over time. We believe expanding DIY-Toolkit into daily contexts and collaborative settings can help children be more critical of the data found around them.</p>
      </div>

      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('eager-component', Eager);
