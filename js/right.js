class Right extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <h2>News</h2>
    <b>11/15/21</b> Our paper on design space for data physicalization has been accepted to ACM CHI 2022!</br>
    <b>09/03/21</b> Selected as the ARCS 2021 Graduate Fellow</br>
    <b>08/05/21</b> Received the 2021 Korean American Scholarship </br>
    <b>07/09/21</b> <a href="https://www.colorado.edu/atlas/cyborg-crafts-vibrotactile-tongue-vision">Cyborg Crafts</a> received an Honorable Mention for our submission to 2021 IEEE World Haptics Student Design Competition </br>
    <b>04/23/21</b> Attending CRA-WP Grad Cohort for Women </br>
    <b>02/17/21</b> Mary West and I won the Craft Award for our ACM TEI Student Design Competition submission</br>
    <b>12/31/20</b> A chapter submitted to the Handbook of Smart City</br>
    <b>08/14/20</b> Work with NASA-JPL accepted to IEEE VIS.</br>
    <b>06/12/20</b> Graduated from UC Davis with MS in Computer Science</br>
    <b>06/08/20</b> Started internship with the Stanford HCI group with Liz Murdane and James Landay!</br>
    <b>01/16/20</b> First paper published! Accepted to CHI 2021</br>
    <b>09/19/19</b> Received the NASA-JPL Master's Fellowship</br>
    <b>06/19/19</b> Started internship with NASA-JPL </br>
    </br>
  `;
  }
}

customElements.define('right-component', Right);