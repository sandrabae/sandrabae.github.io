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
      <img data-original="../img/diy/image.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/image.png">
    </div>

    <main id="main" class="single project">
      <!--Project Title-->
      <div class="project-title">
        <h1 class="title"">${json.papers.diypaper.title}</h1>
          <span><strong>Sandra Bae</strong></span>,
          <span><a href="${json.people.ryang}" class="co-authors" target="_blank">Ruhan Yang</a></span>,
          <span><a href="${json.people.pgyory}" class="co-authors" target="_blank">Peter Gyory</a></span>,
          <span><a href="${json.people.juhr}" class="co-authors" target="_blank">Julia Uhr</a></span>,
          <span><a href="${json.people.dzafir}" class="co-authors" target="_blank">Danielle Szafir</a></span>,
          <span><a href="${json.people.edo}" class="co-authors" target="_blank">Ellen Do</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.diypaper.year}</h3>
        <p class="no-margin venue">${json.papers.diypaper.venue}</p>
          <div class="btn-links">
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.diypaper.pdf}" target="_blank" rel="noopener">PDF</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.diypaper.doi}" target="_blank" rel="noopener">DOI</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.diypaper.preview}" target="_blank" rel="noopener">Video Preview</a>
          </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
            Fostering data literacy has largely been the domain of formal educational systems and export-oriented tools. Informal educational approaches, such as games or family activities, may overcome barriers to engaging with data by fostering data literacy through casual engagement. This work in progress explores how informal learning through creation and play with interactive data representations (physicalizations) can foster increased literacy and engagement with data. We outline a series of DIY paper charts using AR markers and everyday materials to help children interact and explore data through the creative process of making.
          </p>

        </div>
      </div>

      <div class="col-sm-6 col-xs-6" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>


      <div class="project-header-title">
        <h3>INTRODUCTION</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>Data is now woven into the fabrics of our everyday life: science, business, medicine, social media, and everyday human activity. With increasing volume and complexity, data has evolved from a purely scientific artifact to playing a critical role in public discourse. <b> Data literacy is now a crucial life skill.</b> Particularly, the COVID-19 pandemic has highlighted the importance of data literacy as experts and news outlets frequently use data visualizations to increase public awareness, to communicate public health decision making, and to drive action within different communities (Figure 1). The public is now exposed to a deluge of new information about the pandemic in addition to the existing range of topics (e.g., crime statistics, political decisions, weather). However, audiences like children struggle with data sensemaking due to their limited data literacy (i.e., the ability to constructively reason with data). This has lead to different social policies and interventions (Figure 2).
          </p>
        </div>
      </div>
      <div class="projectPictureContainer">
        <div class="gridTwoColumn">
          <div class="imageGrid"> <img data-original="../img/diy/visualization.gif" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/visualization.gif" style="display: block;">
            <p class="figure-caption">Fig 1: Examples of data visualizations used to convey the effects of the COVID-19 pandemic</p>
          </div>
        </div>
        <div class="gridTwoColumn">
          <div class="imageGrid"> <img data-original="../img/diy/policies.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/policies.jpg" style="display: block;">
                <p class="figure-caption">Fig 2: Twitter's policy of stop spreading misinformation </p>
          </div>
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>PAPER PRINTED MARKERS</h3>
      </div>
      <div class="project-two-columns">
        <div class="left-column-trim">
          <p>The proposed work explores how to foster data literacy using computer vision and everyday materials (e.g., paper, carboard) (Figure 3). Fostering data literacy has largely been in the domain of formal educational systems and expert-oriented tools. In contrast, this research explores how informal educational approaches, such as games or family activities, may overcome barriers to engaging with data by fostering data literacy through casual engagement. We aim to engage children in making sense of data through crafting physicalizations.
          <br><br>
          <b>Paper is not only an accessible material, but carries rich crafting affordances.</b> The affordability of paper broadens the participation of children from all socio-economic backgrounds, and cost-effective and scalable manufacturing aligns with the "frugal science and engineering" movement. With paper, we create free-moving fiducial markers. Each marker provides information based on its identity, position, orientation and presence. These markers are detected when there is a high-contrast between the marker’s border and its background, requiring to carefully consider the camera’s visibility and positioning of the camera.
          </p>
        </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim"> <img data-original="../img/diy/ppm_pushbutton.gif" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/ppm_pushbutton.gif" style="display: block; width: 70%;">
          <p class="figure-caption">Fig 3: Fiducial markers printed on paper. Markers can be detected through physical manipulation (e.g., pressing). Credit: <a class="co-authors" href="https://clementzheng.info/Printed-Paper-Markers">Clement Zheng</a></p>
        </div>
      </div>
      <div class="imageRow">
        <div class="imageGridFull">
          <img data-original="../img/diy/marker.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/marker.png" style="display: block; width: 90%; padding: 50px 0px 50px 0px;">
          <p class="figure-caption">Fig 4: (b) Characteristics of fiducial markers. Markers can change according to its (b) orientation, (b) position, and (c) presence.</p>
        </div>
      </div>

      <div class="col-sm-6 col-xs-6" style="margin: 6% 0; border-bottom: 1px solid #BBBBBB;"></div>

      <div class="project-header-title">
        <h3>DIY DATA VISUALIZATIONS</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>We explored a set of designs for the most familiar/fundamental data visualizations (i.e., bar chart, line chart, pie chart) using the paper printed markers. The design for each chart explores how to best engage children (aged 5-7) to interact with the data representation and how to help differentiate each representation (e.g., a line chart is more useful to depict trends as opposed to bar charts).</p>
        </div>
      </div>
      <div class="imageRow three-grid-trim">
  			<div class="gridThreeColumn">
  				<div class="imageGrid"> <img data-original="../img/diy/all.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/all.jpg" style="display: block;">
  				</div>
  			</div>
  			<div class="gridThreeColumn">
  				<div class="imageGrid"> <img data-original="../img/diy/sliding.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/sliding.jpg" style="display: block;"> </div>
  			</div>
  			<div class="gridThreeColumn">
  				<div class="imageGrid"> <img data-original="../img/diy/rip.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/rip.png" style="display: block;"> </div>
  			</div>
  		</div>

      <div class="imageRow three-grid-trim">
  			<div class="gridThreeColumn">
  				<div class="imageGrid"> <img data-original="../img/diy/markers.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/markers.png" style="display: block;">
  				</div>
  			</div>
  			<div class="gridThreeColumn">
  				<div class="imageGrid"> <img data-original="../img/diy/watermelon.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/watermelon.jpg" style="display: block;"> </div>
  			</div>
  			<div class="gridThreeColumn">
  				<div class="imageGrid"> <img data-original="../img/diy/pie.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/pie.png" style="display: block;"> </div>
  			</div>
  		</div>


      <div class="project-header-title project-header-title-n">
        <h3>LEARNING GOALS</h3>
      </div>
      <div class="project-two-columns">
        <div class="left-column-trim">
          <p>With these charts, we focus on guiding children through elementary data tasks for extracting values from visualizations, with a specific emphasis on estimating individual values and comparing multiple values, and for basic sensemaking (i.e., turning data into knowledge). These activities are designed to help children:
          </p>
          <br>
          <ul>
            <li><b>G1: Read common visualizations</b> (bar charts, line graphs) to draw basic conclusions, such as making group comparisons and determining the range of the values in a chart.
            <li><b>G2: Update a visualization</b> to understand the relationship between data and shape as defined by the marks used to represent data.
            <li><b>G3: Use different techniques</b> for mapping data to visual elements to understand how data can be represented in different ways and how these differences can lead to different conclusions about data.
            <li><b>G4: Draw meaningful connections from everyday examples</b>. For instance, for many children the word “bar” will represent food, such as chocolate bar, and will understand that a bar usually means a long rectangular shape. Thus, using colored, rectangular paper behind real objects can help children visualize "bar" when discussing bar charts.
          </ul>
        </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim"> <img data-original="../img/diy/system.gif" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy" src="../img/diy/system.gif"
            style="display: block;">
        </div>
      </div>

      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('eager-component', Eager);