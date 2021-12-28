class Smart extends HTMLElement {
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
        <h1 class="title">User Interfaces for Smart Cities</h1>
        <span><a href="${json.people.thopkins}" class="co-authors" target="_blank">Torin Hopkins</a></span>,
        <span><strong>Sandra Bae</strong></span>,
        <span><a href="${json.people.juhr}" class="co-authors" target="_blank">Julia Uhr</a></span>,
        <span><a href="${json.people.czheng}" class="co-authors" target="_blank">Clement Zheng</a></span>,
        <span><a href="${json.people.abanic}" class="co-authors" target="_blank">Amy Banic</a></span>,
        <span><a href="${json.people.edo}"  class="co-authors" target="_blank">Ellen Do</a></span>
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.smartcity.year}</h3>
        <p class="no-margin">${json.papers.smartcity.venue}<p>
            <div class="btn-links">
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.smartcity.pdf}" target="_blank" rel="noopener">PDF</a>
            <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.smartcity.doi}" target="_blank" rel="noopener">DOI</a>
            </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
            What is smart? Smart is welcoming, in which objects and environments make one feel at home. Smart is being cared for, feeling appreciated, safe, and belonging. Smart is being able to access information when in need, no matter where the location is. Smart is being able to freely roam around, to visit parks and recreation easily. Smart is turning waiting time into quality time, connecting with family and friends. Smart is feeling refreshed and rejuvenated through work, rest, and play. Smart is having things that think, spaces that sense, and places that play. Smart is embracing technology that empowers people to raise the standard for quality of life. Smart is having friendly interfaces that take care of people and connect them with a digital infrastructure. Smart is having tools that enhance the lives of those living and working in the city by providing them with context-aware, safe, secure, and sound means to access and interact with each other, and the community resources in a smart city. The chapter presents hundreds of interface ideas and examples for enchanted objects, interactive spaces, and services designed or proposed for everyday life in smart cities.
          </p>
        </div>
      </div>
      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('smart-component', Smart);