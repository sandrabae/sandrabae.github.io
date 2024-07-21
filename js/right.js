class Right extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <h2>News</h2>
    <b>07/02/24</b> Attended ACM SCF's Summer School and conference</br>
    <b>06/15/24</b> One short paper accepted to IEEE VIS 2024</br>
    <b>05/08/23</b> Advanced to PhD Candidacy </br>
    <b>08/26/23</b> Accepted to the 2023 Rising Stars in EECS (GeorgiaTech) </br>
    <b>08/22/23</b> Submission to IEEE VIS2023 received a Best Paper Honorable Mention</br>
    <b>07/15/22</b> A submission to IEEE VIS2022 has been offically accepted! </br>
    <b>06/17/22</b> Traveling to ACM C&C22 (Venice) to present GSS submission</br>
    <b>05/01/22</b> Traveling to ACM CHI22 (NOLA) to present</br>
    <b>02/14/22</b> Received the David T. Spalding Graduate Teaching Award 2022</br>
    <b>01/25/22</b> Work with NASA JPL on Maximizing Dust Devil Observations has been accepted to Journal of Astronautical Sciences</br>
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