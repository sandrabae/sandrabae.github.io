class Musings extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <h2>MUSINGS</h2>
    <p>I often get asked questions about my PhD experience at the ATLAS Institute in addition to other random questions. Following <a href="https://matt.might.net/articles/how-to-blog-as-an-academic/">Matt Might's advice</a>, I started to compile these thoughts into a blog so others can benefit.</p><br>


 <a class="blog-titles" href="https://share.note.sx/j1259q9t#WsxwrAotEZm2Y2Fcc9zuRDEbMvC3ZCjFUV9DawyJDOo">A Reflection—There and Back</a> — August 20, 2024
  `;
    }
}

customElements.define('musings-component', Musings);