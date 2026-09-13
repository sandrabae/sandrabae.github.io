class Teaching extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h2>Teaching</h2>

      <h3>CSC 596: Human-Computer Interaction: Foundations and Research Practice</h3>
      <p>
       Fall 2026
      </p>
      <p>
        This graduate course introduces both the foundations of human-computer interaction
        and the practice of conducting HCI research. Through readings, discussion, and a
        semester-long research project, students examine how HCI researchers formulate
        questions, choose methods, design and study interactive systems, and support claims
        with evidence. The course spans topics including ubiquitous and spatial computing,
        human-AI interaction, visualization, computational fabrication, tangible interaction,
        and accessible and tactile representation.
      </p>

      <h3>CSC 696C: Compute → Fabricate → Interact</h3>
      <p>
        Spring 2026
      </p>
      <p>
        This graduate course explores the computational principles connecting digital
        fabrication, data visualization, and physical computing. Students use algorithmic
        design, geometry, optimization, and visualization to create and evaluate physical
        forms, then connect those forms to the world through sensing and computation.
        The course combines technical labs in 3D printing, laser cutting, and CNC machining
        with research readings and a semester-long final project.
      </p>

      <h3>Prior Teaching Experience</h3>

      <h4>Brave Behind Bars</h4>
      <ul class="no-bullets">
        <li>
          3D Printing, University of Washington (Fall 2025)
        </li>
        <li>
          Web Development, MIT (Summer 2024)
        </li>
      </ul>

      <h4>CU Boulder</h4>
      <ul class="no-bullets">
        <li>ATLS 3300: Object / Physical Computing (Spring 2021, Spring 2022)</li>
      </ul>

      <h4>UC Davis</h4>
      <ul class="no-bullets">
        <li>ECS 162: Web Programming (Spring 2020)</li>
        <li>ECS 164: Introduction to Human-Computer Interaction (Winter 2019, Winter 2020)</li>
        <li>ECS 163: Information Visualization (Summer 2018)</li>
      </ul>
      <br>
    `;
  }
}

customElements.define('teaching-component', Teaching);