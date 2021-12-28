class Mosaic extends HTMLElement {
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
      <img id="mosaic-banner" data-original="../img/mosaic/mosaic_viewer_twitter.gif" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/mosaic/mosaic_viewer_twitter.gif">
    </div>

    <main id="main" class="single project">
      <!--Project Title-->
      <div class="project-title">
        <h1 class="title"">${json.papers.mosaic.title}</h1>
          <span><strong>Sandra Bae</strong></span>,
          <span><a href="${json.people.frossi}" class="co-authors" target="_blank">Federico Rossi</a></span>,
          <span><a href="${json.people.jvanderhook}" class="co-authors" target="_blank">Joshua Vander Hook</a></span>,
          <span><a href="${json.people.sdavidoff}" class="co-authors" target="_blank">Scott Davidoff</a></span>,
          <span><a href="${json.people.klma}"  class="co-authors"target="_blank">Kwan-Liu Ma</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.mosaic.year}</h3>
        <p class="no-margin venue">Proceedings of IEEE Visual Analytics Science and Technology (VAST)</p>
            <div class="btn-links">
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.pdf}" target="_blank" rel="noopener">PDF</a>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.doi}" target="_blank" rel="noopener">DOI</a>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.presentation}" target="_blank" rel="noopener">Presentation</a>
              <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.preview}" target="_blank" rel="noopener">Video Preview</a>
            </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
            Each robot
            in a multi-robot system that uses the shared-world coordination paradigm autonomously schedules which robot should perform a given task, and when, using its worldview–the robot’s internal representation of its belief about both its own
            state, and other robots’ states. A key problem for operators is that robots’ worldviews can fall out of sync (often due to weak communication links), leading to desynchronization of the robots’ scheduling decisions and inconsistent
            emergent
            behavior (e.g., tasks not performed, or performed by multiple robots). To address these challenges, we introduce MOSAIC Viewer, a visual analytics system that helps operators (i) make sense of the robots’ schedules and (ii) detect and
            conduct a root cause analysis of the
            robots’ desynchronized worldviews. Over a year-long partnership with roboticists at the NASA Jet Propulsion Laboratory, we conduct a formative study to identify the necessary system design requirements and a qualitative evaluation with 12
            roboticists.
          </p>
        </div>
      </div>

      <div class="col-sm-6 col-xs-6" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>

        <div class="project-header-title">
          <h3>INTRODUCTION</h3>
        </div>
        <div class="project-two-columns" style="margin-bottom: 20px;">
          <div class="left-column-trim">
            <p>Autonomous multi-robot systems (MRS), where a team of robots shares information to perform tasks that are beyond an individual robot’s abilities, hold great promise for a number of applications, such as planetary exploration missions

            This cooperation enables robots to perform highly complex tasks making them applicable even for space exploration missions, such as the examples of proposed and deployed systems coming from NASA-JPL (Figure 1).
              <br>
              <br> The overall MRS system’s behavior depends not only on each agent’s individual state but also on each agent’s belief about the state of other agents and of the environment (i.e., a worldview). Worldviews can fall out of sync (often due
              to weak communication links). This leads to desynchronization of the agents’ scheduling decisions and inconsistent emergent behavior (e.g., tasks not performed, or performed by multiple agents). To debug these inconsistent behaviors,
              operators must pinpoint the source of the desynchronization by comparing every agent’s worldview. This process is not only critical for debugging and failure detection purposes, but also enormously time-consuming and difficult.</p>
          </div>
        </div>

        <div class="project-two-columns"  style="margin-bottom: 20px;">
          <div class="right-column-trim"> <img data-original="../img/mosaic/MRS.jpg" data-ratio="0.65262172284644" alt="La Banane" class="img-responsive projectImage lazy" src="../img/mosaic/MRS.jpg" style="display: block; width: 100%;">
            <p class="figure-caption">Fig 1: Examples of proposed and deployed systems coming from NASA-JPL: CoSTAR (top-left), Printable Spacecraft (top-right), A-PUFFER (bottom-left), CubeSats (bottom-right)</p>
          </div>
        </div>

        <div class="imageRow ">
          <div class="imageGridFull">
          <h4>SUMMARY: UNEXPECTED BEHAVIORS STEMS FROM TECHNICAL CHALLENGES</h4>
          <ul>
            <li>Robots create a global multi-robot plan through distributed scheduling, but plan may be faulty
              <ul>
                <li ><b class="inside-li">RQ1: How can we help operators make sense of robots’ scheduling decisions?</b></li>
              </ul>
            </li>
            <li>Each robot plans based on their worldview (i.e., a robot’s belief about its own state and of other robots’ presumed states), but worldviews may be desynchronized
            <ul>
              <li><b class="inside-li">RQ2: How can we visually debug out of sync worldviews?</b></li>
            </ul>
            </li>
          </ul>
          </div>

      <div class="project-header-title project-header-title-n">
        <h3>MOSAIC VIEWER</h3>
      </div>
      <div class="imageRow">
        <p class="no-margin">This paper presents MOSAIC Viewer a visual analytics application that helps operators:
        <ul>
        <li> make sense of the agents’ schedules (RQ1)
        <li>detect and conduct a root cause analysis of the desynchronized worldviews (RQ2).
        </ul>
        To support analyzing and debugging MRS, we design a system composed of two components: Main View (Fig. 2) and Differential Worldview Comparison (DWC) (Fig. 3). The two components are laid side-by-side, and users can first use the Main View to assess whether agents’ worldviews are synchronized. If they conclude worldviews are synchronized, they can proceed to assess the system performance with the various views displayed in the Main View. Otherwise, users can use DWC to identify worldview differences. After identifying and selecting misbehaving agents in DWC, users can engage with the Main View to conduct a root cause analysis
        </p>

        <div class="imageGridFull">
          <img data-original="../img/mosaic/main.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/mosaic/main.png" style="display: block; padding-top: 20px;">
          <p class="figure-caption">Figure 2: The operator is using the Main View to evaluate the system’s performance. (a) Summary overview shows state of the science objective and the worldview synchronization (b) Scatterplot abstracts the “behavior” of agents with the x- and y-axis encoding average CPU load and battery level, respectively. (c) Graph depicts the agents’ location and communication links (d) Task Abstraction provides a task-centric perspective of each agent’s task. Squares represent navigation tasks. Triangles represent science tasks (e) Timeline shows agents’ activities. Agent 5’s science chain of task is highlighted in pink. (Note: other agents’ timelines are highlighted in different colors for illustrative purposes).</p>
          <img data-original="../img/mosaic/wvc.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/mosaic/wvc.png" style="display: block; padding: 5px;  padding-top: 20px">
          <p class="figure-caption">Figure 3: Differential Worldview Comparison: (BT) Battery Level Panel, (SZ) Science Zone Panel, and (CN) Communication Network Panel.</p>
        </div>

        <div class="project-header-title project-header-title-n">
          <h3>TASK ABSTRACTION AND SCHEDULING</h3>
        </div>

        <div class="imageGridFull">
        <p>Every robot has a set of tasks it must accomplish within its time horizon. These tasks are often broken up into sub-tasks which have inter-task dependency such that they must be accomplished in sequence. But a key advantage of multi-robot systems is that robots can cooperate and reallocate their tasks to other robots for assistance. However, task relocation adds more complexity, especially when debugging. When robots have multiple tasks, it becomes even more difficult to discern what is happening and who is doing what without proper visual cues.<br>
          <img data-original="../img/mosaic/task.gif" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/mosaic/task.gif" style="display: block; width: 80%; padding: 5px 0px">

        <p class="figure-caption">Figure 4: Scheduling and re-distribution of tasks</p>
        <p>To make sense of the agents' schedule (<b>RQ1</b>), we focus on providing different perspectives. Task abstraction provides a high-level overview of the system's performance:</p>
          <ul>
          <li>Glyphs to differentiate tasks (◾ navigation, ▲ science), which are only filled it only when a task has been accomplished</li>
          </ul>

        <p>However, glyphs not tell <i>which</i> robot has completed the subtasks or <i>when</i> it was accomplished. To that end, operators can use the timeline, which shows each robot’s activity as horizontal bars in seconds. Operators can also highlight a robot's task and its subtasks.</p>

          <img data-original="../img/mosaic/task.jpg" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/mosaic/task5.jpg" style="display: block; padding: 20px 0px">
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>WORLDVIEW COMPARISON</h3>
      </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <p>Each robot in the multi-robot system has an internal representation of its belief about its own state and of <i>other</i> robots’ presumed state. To compare worldviews, MOSAIC Viewer draws inspiration from the diff algorithm, which is commonly used for text comparison to emphasize the differences of agents’ worldview (<b>RQ2</b>). We compare to an agent’s ego value because we follow the strong assumption that every agent knows its state the best. Hence, the agents’ ego value for each attribute acts as a form of comparison</p>
          <img data-original="../img/mosaic/wvc-visual_encoding.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="../img/mosaic/wvc-visual_encoding.png" style="display: block; padding-top: 20px;">
          <img data-original="../img/mosaic/wvc.gif" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/mosaic/wvc.gif" style="display: block; width: 90%;">
        </div>
      </div>


      <div class="project-header-title project-header-title-n">
        <h3>EVALUATION</h3>
      </div>
      <div class="imageRow">
        <div class="imageGridFull">
          <p>We conducted a qualitative user study with 12 roboticists at JPL, where they were asked to explore the state of a multi-robot system for three scenarios. One scenario included all agents in sync. Two scenarios included an "out of sync" condition that emerges from (i) one agent isolated from others or (ii) a bipartition in the agents’ communication network, respectively. For each scenario, we asked operators to assess the system. If they determined worldviews are out of sync, we asked operators to perform a root cause analysis. This involved determining which robots were out of sync and analyzing why they were out of sync. </p>
        </div>
      </div>
      <div class="project-header-title project-header-title-n">
        <h3>RESULTS</h3>
      </div>

      <div class="imageRow ">
        <div class="imageGridFull">
          <p>We measure indicators such as number of nodes, diversity of concepts used in the mind maps to characterize any differences between baseline and Spinneret used for the constrained and unconstrained tasks.</p><br>
            <ul>
            <li><b>Speed and interactivity streamline higher-level analyses</b>: (1) MOSAIC Viewer helps users locate information faster; (2) The interlinked views enable users to formulate a hypothesis about the root cause of the desynchronized worldviews.</li>
            <li><b>Trust for summary displays grew with experience</b>:Users initially lacked trust in the visual representations to which they were not accustomed, but this trust grew quickly once they were able to verify their understanding.</li>
            <li><b>The why: The how is not enough on its own</b>:Understanding MRS agents requires not only understanding how agents are interacting with each other and how the tasks are scheduled but also why. One without the other is not complete.</li>
            <li><b>Different sets of assumptions affect data interpretation</b>: Users bring in a different set of assumptions that mismatches from the system's architecture. These mismatches led to incorrect data interpretation.</li>
            </ul>
        </div>
      </div>
      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('mosaic-component', Mosaic);