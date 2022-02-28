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
            <div class="btn-links">
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.pdf}" target="_blank" rel="noopener">PDF</a>
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.gallery}" target="_blank" rel="noopener">Website Gallery/Suppl. Materials</a>
            <!-- <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.doi}" target="_blank" rel="noopener">DOI</a> -->
            </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
          Designing a physicalization requires a myriad of different considerations. However, despite the cross-disciplinary nature of data physicalization, research currently lacks a synthesis across the different communities data physicalization sits upon, including their approaches, theories, and even terminologies. To bridge these communities synergistically, we present a design space that describes and analyzes physicalizations according to three facets: context (end-user considerations), structure (the physical structure of the artifact), and interactions (interactions with both the artifact and data). We construct this design space through a systematic review of 47 physicalizations and to analyze the interrelationship of key factors when designing a physicalization. This design space cross-pollinates the knowledge from relevant HCI communities, providing a cohesive overview of what designers should consider when creating a data physicalization while suggesting new design possibilities. We analyze the design decisions present in current physicalizations, discuss emerging trends, and identify underlying open challenges.
          </p>
        </div>
      </div>

      <div class="col-sm-6 col-xs-6" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>


          <div class="project-header-title">
            <h3>INTRODUCTION</h3>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>Physicalizations are more than physical representations of data. <b>Each physicalization is (un)consciously a product of different research community and of their perspectives and values</b> (Fig 1): where some have an analytical aim in seeing how physical artifacts can assist in data-driven tasks; others have focus on creating rich, interactive systems to manipulate data, or focus on how they can promote new aesthetics and sociocultural possibilities.
              <br><br>
              As a result, data physicalization artifacts are diverse in their data expressivity (i.e., data interactions, data encoding), structure (material and form) and even the contexts (e.g., location, target audience) they appear in.
              <br><br>
              The diversity reflects how data physicalizations sits at the crossroads of various domains (Fig 2), yet the field lacks a cohesive lens. Existing work has examined data physicalization often from a single, specific perspective rather than reflecting on the intellectual foundations the field sits upon. As a consequence, designers and researchers may be unaware of the knowledge and practices emerging in other communities, such as data visualization (e.g., how to effectively encode data), tangible user interface (i.e., how to amplify the physical world and human body for interaction design), and design (i.e., how to identify and leverage a material's potential).
              <br><br>
              <b>Thus, how can physicalization researchers and designers have a cohesive lens of each intellectual community’s set of approaches, theories, and terminologies?</b>
              </p>
              <br><br>
            </div>
          </div>

          <div class="projectPictureContainer">
            <div class="gridTwoColumn">
              <div class="imageGrid"> <img data-original="../img/dataphys-framework/aims.jpeg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/dataphys-framework/aims.jpeg" style="display: block;">
                <p class="figure-caption" style="padding-bottom: 20px;">Fig 1: Physicalizations with different aims, stemming from analytics, interactive systems or sociocultural problems. </p>
              </div>
            </div>
            <div class="gridTwoColumn">
              <div class="imageGrid"> <img data-original="../img/dataphys-framework/communities.gif" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/dataphys-framework/communities.gif" style="display: block;">
                <p class="figure-caption" style="padding-bottom: 20px;">Fig 2: Data physicalization sits at the crossroads of data visualization, tangible user interface, and design.</p>
              </div>
            </div>
          </div>


          <div class="project-header-title project-header-title-n">
            <h3>METHODOLOGY</h3>
          </div>

          <div class="imageRow ">
            <div class="imageGridFull">
              <p>Given the complexity of design choices a physicalization requires, this work presents a design space that synthesizes knowledge from across these three relevant communities to highlight the cross-disciplinary considerations when creating physicalizations. To that end, we construct this design space through a systematic review of 47 physicalizations and analyze the interrelationships of key factors when designing a physicalization. We selected archival papers using keywords across ACM DL and IEEE Xplore—two of the most popular databases for data physicalization research that encompass a range of venues (ACM CHI, ACM UIST, ACM DIS, IEEE VIS, etc.). The resulting corpus is available in the supplemental materials. Our theoretical framework is based on a corpus of 47 physicalizations selected using the following inclusion criteria on date, keyword, match, and 5 criteria (Fig 3).
              </p>
              <br>
              <img data-original="../img/dataphys-framework/flowchart.jpeg" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/flowchart.jpeg" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
              <p class="figure-caption" style="padding-bottom: 20px;">Fig 3: PRISMA flow diagram on how the final corpus (n = 47) was curated. </p>
            </div>
          </div>

          <div class="project-header-title project-header-title-n">
            <h3>DESIGN SPACE</h3>
          </div>

          <div class="imageRow ">
            <div class="imageGridFull">
              <p>From the final corpus (Fig. 4), we analyzed 47 physicalizations from 18 different venues where we derived thirteen design dimensions housed under three facets:</p>
              <ul>
              <li>context (to understand the physical, social, analytical frames a physicalization is addressing in addition to its end-user consideration)
              <li>interactions (to understand the dialogue between the user and the physicalization.)
              <li>structure (to understand how data is physically embodied and encoded, including its overall form and materiality)
              </ul>

              <p><b>This design space synthesizes knowledge from across the visualization, TUI, and design communities and provides a cohesive overview of what designers should consider when creating a physicalization</b>. As a result, this design space reveals insights about:</p>
              <ol>
              <li>Who are the intended audiences for physicalizations?
              <li>Where are physicalizations used or showcased?
              <li>What design decisions contribute to a physicalization's materiality?
              <li>What interactions does a physicalization afford?
              <li>How do different communities approach physicalization? (And what can we learn from each other?)
              </ol>
              <br>
            </div>
          </div>

          <div class="imageRow">
            <div class="imageGridFull">
              <img data-original="../dataphys-gallery/images/codes_02.jpg" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../dataphys-gallery/images/codes_02.jpg" style="display: block; padding-top: 50px; width: 85%;">
              <p class="figure-caption">Fig 4: We surveyed 47 physicalizations from across HCI to construct a design space spanning three facets—context (end-user considerations), structure (physical structure of the artifact), and interactions (interactions with both the artifact and data)—over 13 dimensions. The bar on the outer frames shows the distribution of the design dimension within our surveyed corpus. The length of each bar is determined by how many times the design dimension has been used.</p>
              </div>
          </div>


          <div class="project-header-title project-header-title-n">
            <h3>Q1. WHO ARE THE INTENDED AUDIENCES?</h3>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>Physicalizations commonly targeted the general public (21/47), focusing on how to incorporate data into everyday activities that required little visualization literacy. However, people’s intended engagement varied throughout our corpus.
              <br><br>
              For example, <a href="https://dl.acm.org/doi/10.1145/2858036.2858059">Physikit</a>, a system of four cubes with environmental sensors embedded inside each cube, provides active engagement. Each cube outputs the sensor data (e.g., noise, humidity, temperature) either through light, vibration, movement, or airflow. Due to its small size and discrete nature, people actively placed the Physikit cubes throughout their homes to compare environmental sensor data in the different parts of their house. <a href="https://dl.acm.org/doi/abs/10.1145/3290605.3300614">Bookly</a>, in contrast, focuses on more ambient engagement. Bookly is an interactive lamp that tracks an individual’s accumulated reading time in addition to other reading metrics. Bookly’s design seamlessly integrates reading progress data through a mountain-shaped holder. Through its volumetric disk, Bookly ambiently displays the user’s accumulated reading time with respect to their reading goal while the pages of the open book communicate progress.
              <br><br>
              Beyond the general public, several physicalizations were designed with a specific audience in mind, including researchers (4/47), children (2/47), and people with disabilities (2/47). Physicalizations meant for these specific sets of users focused on data exploration tasks. However, the depth of the supported data analysis varied depending on the interactions the physicalizations supported.
              <br><br>
              We also found six instances where the physicalization was meant for the creators themselves. Often, these physicalizations are in the domain of personal informatics (i.e., personally relevant information for the purpose of self-reflection and self-monitoring). In the process of creating the physicalizations, creators tended to use custom data mappings to incorporate meaningful reflections (see Section 4 to see the topics of reflections illustrated in the corpus). When analyzing and exploring the physicalization, only the creators would have insights on what the data is about.</p>
            </div>
          </div>

          <div class="project-header-title project-header-title-n">
            <h3>Q2. WHERE ARE PHYSICALIZATIONS USED OR SHOWCASED?</h3>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p><b>Analyzing how physicalizations use space provides insight into how the physicalization leverages its environment.</b>
              <br><br>
              However, the relationship of the physicalization to its location can also change: physicalizations are either bounded or unbounded to a given location depending on their mobility. Bounded artifacts exist confined to a particular place and are not meant to be re-positioned. Unbounded artifacts are designed for mobility and may be relocated by users or natural forces, such as a river flow (e.g., Perovich et al. 2020). Figure 5 shows the distribution of the physicalizations using these two concepts.
              <br><br>
              Traditional notions of situatedness from visualization focus on how a specific physical location provides context to the presented data to support data comprehension and decision making. While physicalizations are often situated by location, we found that situatedness also occurs through individuals (i.e., body-embedded physicalizations where the physicalization is integrated with the body) and with respect to activities (i.e., activity-embedded physicalizations where the data reflects a captured or current state of an activity).
              <br><br>
              The majority of physicalizations are bound to one location (36/47). Unbounded physicalizations are generally composed of discrete parts that can freely move across space.</p>
                <br>
              <img data-original="../img/dataphys-framework/bounded.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/bounded.png" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
                <p class="figure-caption">Fig 5: Physicalizations classified according to their use of space and their use of context. <i>Bounded</i> artifacts are confined to a particular position and not meant to be repositioned. <i>Unbounded</i> artifacts are designed for mobility and to move freely across space. <i>Situated</i> and <i>non-situated</i> refer whether the physicalization is displaying information that is contextually relevant in its environment.</p>
                <br>
            </div>
          </div>

          <div class="project-header-title">
            <h3>Q3. WHAT DESIGN DECISIONS CONTRIBUTE TO A PHYSICALIZATION'S MATERIALITY?</h3>
          </div>
          <div class="project-two-columns">
            <div class="left-column-trim">
              <p>Materiality, the quality of presence in the world, is a critical dimension for physical artifacts as it influences how the artifact physically takes up space and how users perceive and interact with it. Past work have also attempted to answer about a physicalization’s materiality—through a number of lenses, including pragmatic/artistic, epistemological/ontological, and even semiotic.

In contrast, through our analysis, we found three qualities contributed to an artifact’s materiality:</p>
              <ul>
                <li>Its embodiment: how data is physically manifested
                <li>Its use of materials
                <li>Its use of time: how long data is shown (i.e., data duration)
              </ul>
            </div>
          </div>

          <div class="project-two-columns">
            <div class="right-column-trim"> <img data-original="../img/dataphys-framework/materiality-framework.jpeg" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/materiality-framework.jpeg" style="display: block;">
              <p class="figure-caption">Fig 6: Conceptual space that describes the three attributes that contribute to a physicalization's materiality (i.e., presence in the world).</p>
            </div>
          </div>

          <div class="project-header-title project-header-title-n">
            <h4>EMBODIMENT</h4>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>The first dimension reveals the designer’s intent of how data is embodied: whether it’s technologically or contextually-driven.
              <br><br>
              Technologically-driven physicalizations focus on how the presented technology encodes data, such as shape-changing displays, swarm robotics among others. In contrast, physicalizations whose embodiment was contextually-driven did not emphasize the presented technology but heavily relied on its environment, activity, or the individual themselves to shed insight on the encoded data.</p>
                <br>
                <img data-original="../img/dataphys-framework/embodiment.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/embodiment.png" style="display: block; padding-top: 50px; width: 85%;">
                <p class="figure-caption">Fig 7: Eleven examples of physicalization embodiments identified in our corpus. The physical embodiment is categorized as either technologically- or contextually driven. </p>
            </div>
          </div>

          <div class="project-header-title project-header-title-n">
            <h4>MATERIALS</h4>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>The embodiment of a physicalization also revealed its use of materials—-the second dimension of physicalization’s materiality, and how researchers leveraged materials with respect to data.
              <br><br>
              Physicalizations using electronic components such <a href="https://ieeexplore.ieee.org/document/7542185">EMERGE<a/> AND <a href="https://dl.acm.org/doi/10.1145/3064663.3064677">PolySurface</a> generally supported multiple datasets for new lines of inquiry and analysis with their computational capabilities. In contrast, physicalizations made from non-electronic materials, such as <a href="https://dl.acm.org/doi/abs/10.1145/3064663.3064794?casa_token=2KahQszYfOAAAAAA:pi6Qq9sQMkqgCtxDTDniliEvze_101uKc0WUO10Kszk4v4v7zDVU_J6aWNC82Kg2vLwFP2axkuEF">CAIRN</a> and the <a href="https://dl.acm.org/doi/pdf/10.1145/3357236.3395442?casa_token=ZrCUb7p3FYMAAAAA:8frrNQuopHlOcnrO4P2hil-1b3UVmQaQ2yLtHVQc6X_oA7wzCeEVg7WhVl0kh-y9MMA1e6JiYjcJ">Forgetting Scarf</a>, typically targeted a single dataset and focused on reflecting on the data during the hand-making process.</p>
                <br>
              <img data-original="../img/dataphys-framework/materials.jpeg" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/materials.jpeg" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
                <p class="figure-caption">Fig 8: Examples of physicalizations with different use of materials: electronic and non-electronic. </p>
                <br>
            </div>
          </div>

          <div class="project-header-title project-header-title-n">
            <h4>DATA DURATION</h4>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>The third and last dimension is data duration. Data duration influences whether individuals are able to interact with data anywhere and anytime they desire or whether it’s only available in the moment, such as <a href="https://dl.acm.org/doi/pdf/10.1145/3024969.3024974?casa_token=4n0kaMJG77MAAAAA:cEopRrHAitqkhaWccgbkE5PNq0uQ4wq5raB5Q8hZR_aiBUQz4tRxBZIL5ViDL6m_oqNqGAqjqi7r">Torrent</a>, whose data is ephemeral.

              In contrast, physicalizations whose data persist offer users some control over how long data is displayed. <a href="https://dl.acm.org/doi/pdf/10.1145/3313831.3376129">Venous Materials</a> uses microfluidics to represent a dynamic line chart. By directly pressing on liquid chamber, the user can control the flow of liquid with their finger.

              Lastly, physicalizations that display their data permanently embeds or integrates data into its physical structure, such as conventional 3D printed objects as displayed with <a href="https://dl.acm.org/doi/pdf/10.1145/2901790.2901886?casa_token=Ts6Uhqd2PacAAAAA:51FZ_jDhcS2C1jbYZ4W_dZT2kT4LRgUF2JaORJ5dvg0l_hXHUf7L6f86gl91GLVH0w86dS40aVlR">SportsAtom</a>.</p>
                <br>
              <img data-original="../img/dataphys-framework/duration.jpeg" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/duration.jpeg" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
              <p class="figure-caption">Fig 9: Examples of physicalizations with different data duration (i.e., how long data is displayed through its physical embodiment): (a) Torrent displays data ephemerally through its use of water, (b) Venous Materials displays data persistently as determined by the user, (c) Data is permanently embedded in Fantibles.</p>
              <br>
            </div>
          </div>

          <div class="project-header-title">
            <h3>Q4. WHAT INTERACTIONS DOES A PHYSICALIZATION AFFORD?</h3>
          </div>

          <div class="project-two-columns">
            <div class="left-column-trim">
            <p>Interactions reveals the dialogue between the user and the physicalization. We examined what interactions a physicalization affords using two lens (Fig 10). First, we used <a href="https://ieeexplore.ieee.org/document/4376144">Yi et al.’s framework</a> to identify the different data interactions imposed on physicalizations by the user. We note that we added three additional interactions (annotate, collect, assemble) based on observations from our corpus that incorporate actions that are more natural in physical rather than digital systems.
            <br><br>
            As our second lens, we examine how interactions occur at the artifact-level using <a href="https://dl.acm.org/doi/pdf/10.1145/2470654.2466255?casa_token=dLswoe0AC7IAAAAA:2WpMkZpHBtRNdX_Q-LP_JHuBnneCNlXf01Mb6IqYT4L1DccN17qPRi63umHsMm-83HstCYpGXxaU"> Vermeluen et al.'s framework</a>. We use this framework to understand how the design of an artifact (1) invites people to conduct a particular data interaction (i.e., perceived affordances), (2) informs what the result of their performed data interaction will be (i.e., feedforward), and (3) communicates the result of their action (i.e., feedback).</p>
            </div>
          </div>

          <div class="project-two-columns">
            <div class="right-column-trim"> <img data-original=".../img/dataphys-framework/frameworks.jpeg" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/frameworks.jpeg" style="display: block;">
              <p class="figure-caption">Fig 10: Interactions framework. To understand what interactions a physicalization affords, we used (1) Yi et al.'s data interaction framework and (2) Vermeulen et al.'s interaction design framework. </p>
            </div>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>Using the two frameworks, we analyzed to see how physicalizations accomplished data interactions. Of all the interaction techniques, explore (i.e., to interrogate different subsets of the data) was the most pervasive, and was accomplished in one of two ways (Fig 11):
              Direct interactions stimulated the user’s sensory affordances by primarily appealing to the perceptual-motor skills, such as inviting the individual to pick up discrete pieces (<a href="https://dl.acm.org/doi/pdf/10.1145/3332165.3347911?casa_token=GoKIzoH6VLAAAAAA:qa4XMjaR40wgl6IRQCsRVhv0q0QzH7lVtnnu7Z5lIFJ91frTXec-c0TMo7qE9Hi8g67dKx8X9Koo">ShapeBots</a>, <a href="https://dl.acm.org/doi/10.1145/3419249.3420173">Mootiis</a>) or offer visual cues as to what the physicalization might feel like like <a href="http://audreydesjardins.com/pdf/Desjardins-ListeningCups-DIS2019.pdf">ListeningCups</a>.

              In contrast, indirect interactions presented a different interaction scheme by presenting physical controls that people are familiar with.</p>
              <br><br>
              <img data-original="../img/dataphys-framework/explore.jpeg" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/dataphys-framework/explore.jpeg" style="display: block; width: 80%; padding: 50px 0px 50px 0px;">
              <p class="figure-caption">Fig 11: Examples of physicalizations using the <i>explore</i> interaction. Physicalizations using the <i>direct</i> mechanism uses direct manipulation of the object with a focus on sensory affordances. <i>Indirect</i> refers use interface controls (e.g., buttons, sliders, knob) to interact with the data.</p>
              <br>
            </div>
          </div>

          <div class="project-header-title">
            <h3>Q5. HOW DO DIFFERENT COMMUNITIES APPROACH PHYSICALIZATION? (AND WHAT CAN WE LEARN FROM EACH OTHER?)</h3>
          </div>
          <div class="imageRow ">
            <div class="imageGridFull">
              <p>The visualization community has illustrated the importance of understanding a user’s task. A visualization whose focus is to reveal analytical insight for domain experts will be radically different compared to others that depict data for casual use for the general public. We contend this logic also extends to physicalizations, and we see an opportunity for different communities to learn from each other by understanding how to best express data with respect to a given task.

              <br><br>
              <b>Analysis: Importance of Effectiveness</b>. When using physicalizations for problem-solving and decision-making (i.e., analysis), other communities can learn from the visualization community specifically in learning how to design systems based on visual effectiveness (e.g., graphical perception) and system flexibility.

              <br><br>
              <b>Reflection: Importance of Agency</b>. Physicalizations designed for reflective tasks, in contrast, highlight the importance of agency where users should be able to develop personally meaningful data mappings. These customized physicalizations tend to layer meaning-making by encouraging the user to explore and reflect as part of the design process as well as through interacting with the physicalization.
              </p>
              <br><br>
            </div>
          </div>

          <div class="project-header-title">
            <h3>DISCUSSION</h3>
          </div>

          <div class="imageRow ">
            <div class="imageGridFull">
              <p><b>The primary motivation of this design space is to bridge knowledge from the visualization, TUI, and design communities.</b> This need is pertinent as our conducted survey shows data physicalization researchers not only come from various backgrounds but also seldom draw on the literature and techniques from other communities.
              <b>Thus, using our design space, we envision researchers cross-pollinating knowledge.</b> For example, researchers from the design and TUI community can consider different data interactions beyond explore. But visualization literature shows that these interactions must be considerate of the identifying the user’s tasks, which many of the physicalizations did not explicitly state. Vice versa those from the visualization community can consider how to enrich physicalizations by considering materiality and using tangible interaction techniques from the TUI and design community.
              </p>
            </div>
            </div>

      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('dphys-component', DataPhys);