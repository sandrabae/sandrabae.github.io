class Dust extends HTMLElement {
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
        <h1 class="title">${json.papers.dustdevil.title}</h1>
        <span><a href="${json.people.rwoollands}" class="co-authors" target="_blank">Robyn Woollands</a></span>,
        <span><a href="${json.people.frossi}" class="co-authors" target="_blank">Federico Rossi</a></span>,
        <span><a href="${json.people.tsvaquero}" class="co-authors" target="_blank">Tiago Stegun Vaquero</a></span>,
        <span><a href="${json.people.msnet}" class="co-authors" target="_blank">Marc Sanchez Net</a></span>,
        <span><strong>Sandra Bae</strong></span>,
        <span><a href="${json.people.vbickel}" class="co-authors" target="_blank">Valentin Bickel</a></span>,
        <span><a href="${json.people.jvanderhook}" class="co-authors" target="_blank">Joshua Vander Hook</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.dustdevil.year}</h3>
        <p class="no-margin venue">${json.papers.dustdevil.venue}</p>
            <div class="btn-links">
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dustdevil.pdf}" target="_blank" rel="noopener">PDF</a>
          </div>
        </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
          Several million dust devil events occur on Mars every day. These events last, on average, about 30 minutes and range in size from meters to hundreds of meters in diameter. Designing low-cost missions that will improve our knowledge of dust devil formation and evolution, and their connection to atmospheric dynamics and the dust cycle, is fundamental to informing future crewed Mars lander missions about surface conditions. In this paper, we present a mission design methodology for a constellation of low orbiting Mars cubesats, each carrying imagers with agile pointing capabilities. The goal is to maximize both coverage and the number of dust devil follow-up observations through real-time, on-board scheduling.
We study scenarios where cubesats are equipped with a 2.5 degree boresight angle camera that accommodates five slew positions (including nadir). We assume a concept of operations where the cubesats autonomously survey the surface of Mars and can autonomously detect dust devils from their surface imagery. When a dust devil is detected, the constellation is autonomously re-tasked through an on-board distributed scheduler to capture as many follow-on images of the event as possible, so as to study its evolution. The cubesat orbits are propagated assuming two-body dynamics and the ground tracks and camera field of view are computed assuming a spherical Mars. Realistic inter-agent communication link opportunities are computed and included in our optimization, which allow for real-time event detection information to be shared within the constellation.
          </p>
        </div>
      </div>

	<div class="col-sm-6 col-xs-6" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>


      <div class="project-header-title">
        <h3>INTRODUCTION</h3>
      </div>
      <div class="project-two-columns">
        <div class="left-column-trim">
          <p>Martian dust storms can bring exploration operations to a halt by reducing available power or obscuring view. This has serious implications for both the explore-ability and habitability of Mars (Figure 1). An understanding of the Martian dust cycle, with its connections between regional and global storms, thermal exchange between the surface and atmosphere, and the circulation that can eventually lead to atmospheric escape, remains a top scientific priority.
          <br><br>
          As dynamic, widespread phenomena, these processes are not only challenging to capture within their global context from the lower orbits that have dominated Mars orbiter missions, but also nearly impossible to capture in the required detail if higher orbits are to be assumed (e.g., Areostationary).
          <br><br>
          By using a combination of medium-resolution imagers, on board processing, and cross-platform cueing, this paper uses a constellation of small orbiters (collaborating at 200-400km altitude) to conduct short and long time-scale studies of dust devil formation, propagation, and global distribution over seasonal weather variations.</p>
        </div>
      </div>

      <div class="project-two-columns">
        <div class="right-column-trim"> <img data-original="../img/dustdevil/ESP_026394_2160_ctx_new.png" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dustdevil/ESP_026394_2160_ctx_new.png" style="display: block;">
          <p class="figure-caption">Fig 1: A CTX image and HiRISE zoom-in (inset) of a large dust devil in Amazonis Planitia. A framing version of CTX, likely well within today’s photoimaging capabilities, may be able to record near-real-time imagery and track dust devil size, distribution, and shape over time when combined with on board processing. Credit: NASA-JPL, University of Arizona</p>
        </div>
      </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <img data-original="../img/dustdevil/dust-devil-classifier.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dustdevil/dust-devil-classifier.png" style="display: block; padding-top: 50px; width: 85%;">
          <p class="figure-caption">Fig 2: Performance illustration of an exemplary, CNN-based dust devil detector, operating on rectangular tiles of various sizes cropped from full-frame CTX images. A) & B) correct detections of small and large dust devils (white, TP = true positive); C) a dust devil missed by the detector (yellow, FN = false negative); D) false detections (red, FP = false positive). The network confidence score is displayed with its respective detection. The smallest (and faint) dust devil in this example is ∼100 meters across.</p>
          <br>
          <p><b>The goal is to maximize the number of dust devil follow-up observations through
          real-time, on-board scheduling.</b> To that end, this paper focuses on global coverage achieved by "being vigilant" (i.e., taking significantly more imagery than what is usual). Details are preserved since the images are taken at lower orbit and with higher temporal frequency than usual. However, this introduces a data bottleneck: the constellation is gathering significantly more imagery than can be downlinked. As such, significant on-board processing is required to prepare downlink reports of surface activity, and on-board autonomy is required to schedule follow-up observations of the most promising dust devil candidates.
          <br><br>
          One way of automating the detection of dust devils is by using convolutional neural networks (CNNs). Testing of a basic, ResNet 50-based CNN trained with a few hundred labels shows that one can achieve Average Precision (AP) values of around 0.7 in CTX data. The AP could be further optimized by applying a stricter score threshold value (optimize precision), which would reduce the recall, however. Initial testing with CTX data indicates that a CNN-based detector is fairly robust against varying geomorphic backgrounds (dunes, craters, etc.), image quality, and illumination conditions, while being able to detect small, large, faint, and distinct dust devils alike (see Figure 2). Experience has shown that dust devils as small as ~60 meters across can be detected and mapped in CTX images. In this work, we assume that a well trained classifier is available for use on-board the cubesats.</p>
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>AUTONOMOUS POINTING FOR SCIENCE PLANNING</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>The constellation of orbiters in this paper uses <i>shared-world</i> coordination. Each spacecraft independently detects dust devils in its own observations and adds its detections to a local copy of a global event map. When two spacecraft are in contact, they reconcile their copies of the global event map by sharing their observations; if a conflict arises (e.g., if two spacecrafts have observed the same region but only one has detected a dust devil), we optimistically assume that the detection was correct.
          </p>
          <br>
          <img data-original="../img/dustdevil/architecture_v6-01.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dustdevil/architecture_v6-01.png" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
          <p class="figure-caption" style="padding-bottom: 20px;">Fig 3: Architecture of the proposed constellation scheduler. (A) Each spacecraft
          captures images of the Martian surface. A dust devil detector searches for dust devils
          in captured imagery. (B) When a dust devil is detected, its location is added to a
          map database which tracks possible active dust devils that should be targeted for
          revisit. Each spacecraft executes an instance of the constellation planner (described
          in the Autonomous Pointing for Science Planning section), which uses the locations
          of the detected dust devils to prescribe pointing locations for every spacecraft. (C)
          The spacecraft then executes the pointing and image capture commands assigned to
          itself by the constellation planner, and discards the assignments for other spacecraft.
          The map database of detected dust devils is opportunistically synchronized across
          spacecraft when a communication link is available.</p>
          <p> The figures down below shows a snapshot taken during the simulation where the cubesats in the train are separated by one minute intervals. The top panel shows a spherical Mars that is experiencing a southern
          hemisphere summer. Each yellow dot on the surface represents an active dust devil. The low-Mars
          orbit is also shown in cyan/red, along with the ground track. Note that the five satellites are colored
          red, blue, green, black and cyan respectively. The magenta circles represent currently detected dust
          devils. The bottom panel shows a 2D projection of Mars, along with the same information plotted
          as in the top panel.</p>
        </div>
      </div>
      <div class="projectPictureContainer">
        <div class="gridTwoColumn">
          <div class="imageGrid"> <img data-original="../img/dustdevil/sim_snapshot_crop_left.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/dustdevil/sim_snapshot_crop_left.png" style="display: block;"> </div>
        </div>
        <div class="gridTwoColumn">
          <div class="imageGrid"> <img data-original="../img/dustdevil/sim_snapshot_crop_right.png" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/dustdevil/sim_snapshot_crop_right.png" style="display: block;">
          </div>
        </div>
      </div>


      <div class="project-header-title project-header-title-n">
        <h3>VISAULIZATION SYSTEM</h3>
      </div>
      <div class="imageRow ">
        <div class="imageGridFull">
          <p>To visualize and interact with the simulation, we designed a visualization system that adheres to the same mission design methodology. Past work shows interfaces are critical to (i) foster trust in the data and tool from the operator’s perspective, and (ii) understand the details of what the scheduler is doing onboard. Interactions provide a dialog between the user and the system, and this allows users to gain confidence in the system as the user explores datasets to uncover insights and be part of the decision making process. To allow the user to explore the onboarding scheduler, the system is composed of three interactive views: overview, coverage map, and time scrubber, the system is composed of three interactive views: overview, coverage map, and time scrubber. All views are interlinked: the overview and coverage map visualizes data corresponding to the particular timestamp from the time scrubber.</p>
            <br>
          <img data-original="../img/dustdevil/mars.gif" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dustdevil/mars.gif" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
        </div>
      </div>
      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('dust-component', Dust);