class Left extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let foo = fetch("./js/json.json")
      .then(response => response.json())
      .then(json => this.template(json));
  }

  template(json) {
    this.innerHTML = `
        <div class="intro">
            <table class="opener">
              <tbody>
                <tr></tr>
                <tr>
                  <td class="cell-column align-top">
                    <h2>Making computers and materials speak the same language</h2>
                    <div class="paragraph-spacing">
                      <p style="padding-top:5px;">Hi I’m Sandra Bae: a data visualization researcher gone rogue. I dream of a future with as much of Materials Science as Computer Science. My current research interest focuses on pushing data beyond the flat screen and exploring how to materialize data.</p>
                      <p>I am currently a second-year Ph.D. student at the ATLAS Institute at CU Boulder, co-advised by <a href="${json.people.edo}">Ellen Do</a> in the ACME Lab and <a href="${json.people.dszafir}">Danielle Szafir</a> in the VisuaLab. I received a M.S. in Computer Science from UC Davis in 2020. Prior to that, I received my B.A. in Human-Computer Interaction from UC Davis in 2018.</p>
                  		<p>When not in the lab, you can probably find me under a barbell, on a rock, or in the mountains.</p>
                      <!-- </div> -->
                  	</div>
                    </div>
                  </td>
                </tr>
              </tbody></table>
            <div class="in-line-div social-media">
              <!--CV-->
              <a href="${json.bae.cv}" target="_blank">
              <i class="far fa-file fa-fw"></i>CV</a>
              <!--Google Scholar-->
              <a href="${json.bae.gscholar}" target="_blank">
                <i class="fas fa-graduation-cap fa-fw"></i>Google Scholar</a>
              <!--Email-->
              <a href="${json.bae.email}" target="_blank">
                <i class="far fa-envelope fa-fw"></i>Email</a>
              <!--Twitter-->
              <a href="${json.bae.twitter}" target="_blank">
                <i class="fab fa-twitter fa-fw"></i>sandrabae_sb</a>
              <!--Medium-->
              <!-- <a href="https://medium.com/@sandrabae" target="_blank">
                <i class="fab fa-medium fa-fw"></i>sandrabae</a></div> -->
        </div>
        <div class="publications column-header">
          <h2>Publications</h2>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.eager.projectpage}">${json.papers.eager.title}</a>
              </h3>
              <div class="article-style">${json.papers.eager.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><strong>Sandra Bae</strong></span>
                  <span><a href="${json.people.rvanukuru}" target="_blank">Rishi Vanukuru</a></span>,
                  <span><a href="${json.people.ryang}" target="_blank">Ruhan Yang</a></span>,
                  <span><a href="${json.people.pgyory}" target="_blank">Peter Gyory</a></span>,
                  <span><a href="${json.people.rzhou}" target="_blank">Ran Zhou</a></span>,
                  <span><a href="${json.people.edo}" target="_blank">Ellen Do</a></span>,
                  <span><a href="${json.people.dszafir}"target="_blank">Danielle Szafir</a></span>
                </div>
                <div class="venue">${json.papers.eager.venue}</div>
              </div>
              <div class="btn-links">
                <!-- <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.eager.pdf}" target="_blank" rel="noopener">PDF</a> -->
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.eager.projectpage}">
                <img src="${json.papers.eager.icon}" alt="">
              </a>
            </div>
          </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.dustdevil.projectpage}">${json.papers.dustdevil.title}</a>
              </h3>
              <div class="article-style">${json.papers.dustdevil.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><a href="${json.people.rwoollands}" target="_blank">Robyn Woollands</a></span>,
                  <span><a href="${json.people.frossi}" target="_blank">Federico Rossi</a></span>,
                  <span><a href="${json.people.tsvaquero}" target="_blank">Tiago Stegun Vaquero</a></span>,
                  <span><a href="${json.people.msnet}" target="_blank">Marc Sanchez Net</a></span>,
                  <span><strong>Sandra Bae</strong></span>,
                  <span><a href="${json.people.vbickel}" target="_blank">Valentin Bickel</a></span>,
                  <span><a href="${json.people.jvanderhook}"target="_blank">Joshua Vander Hook</a></span>
                </div>
                <div class="venue">${json.papers.dustdevil.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dustdevil.pdf}" target="_blank" rel="noopener">PDF</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.dustdevil.projectpage}">
                <img src="${json.papers.dustdevil.icon}" alt="">
              </a>
            </div>
          </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.dataphys.projectpage}">${json.papers.dataphys.title}</a>
              </h3>
              <div class="article-style">${json.papers.dataphys.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><strong>Sandra Bae</strong></span>,
                  <span><a href="${json.people.czheng}" target="_blank">Clement Zheng</a></span>,
                  <span><a href="${json.people.mwest}" target="_blank">Mary Etta West</a></span>,
                  <span><a href="${json.people.shuron}" target="_blank">Samuel Huron</a></span>,
                  <span><a href="${json.people.edo}" target="_blank">Ellen Do</a></span>,
                  <span><a href="${json.people.dszafir}"target="_blank">Danielle Szafir</a></span>
                </div>
                <div class="venue">${json.papers.dataphys.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.pdf}" target="_blank" rel="noopener">PDF</a>
                  <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.doi}" target="_blank" rel="noopener">DOI</a>
                  <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.dataphys.gallery}" target="_blank" rel="noopener">Project Gallery</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.dataphys.projectpage}">
                <img src="${json.papers.dataphys.icon}" alt="">
              </a>
            </div>
            </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.smartcity.projectpage}">${json.papers.smartcity.title}</a>
              </h3>
              <div class="article-style">${json.papers.smartcity.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><a href="${json.people.thopkins}" target="_blank">Torin Hopkins</a></span>, <span><strong>Sandra Bae</strong></span>,
                  <span><a href="${json.people.juhr}" target="_blank">Julia Uhr</a></span>,
                  <span><a href="${json.people.czheng}" target="_blank">Clement Zheng</a></span>,
                  <span><a href="${json.people.abanic}" target="_blank">Amy Banic</a></span>,
                  <span><a href="${json.people.edo}" target="_blank">Ellen Do</a></span>
                </div>
                <div class="venue">${json.papers.smartcity.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.smartcity.pdf}" target="_blank" rel="noopener">PDF</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.smartcity.doi}" target="_blank" rel="noopener">DOI</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.smartcity.projectpage}">
                <img src="${json.papers.smartcity.icon}" alt="">
              </a>
            </div>
          </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.mosaic.projectpage}">${json.papers.mosaic.title}</a>
              </h3>
              <div class="article-style">${json.papers.mosaic.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><strong>Sandra Bae</strong></span>,
                  <span><a href="${json.people.frossi}" target="_blank">Federico Rossi</a></span>,
                  <span><a href="${json.people.jvanderhook}" target="_blank">Joshua Vander Hook</a></span>,
                  <span><a href="${json.people.sdavidoff}" target="_blank">Scott Davidoff</a></span>,
                  <span><a href="${json.people.klma}" target="_blank">Kwan-Liu Ma</a></span>
                </div>
                <div class="venue">${json.papers.mosaic.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.pdf}" target="_blank" rel="noopener">PDF</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.doi}" target="_blank" rel="noopener">DOI</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.presentation}" target="_blank" rel="noopener">Presentation</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.mosaic.preview}" target="_blank" rel="noopener">Video Preview</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.mosaic.projectpage}">
                <img src="${json.papers.mosaic.icon}" alt="">
              </a>
            </div>
          </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.spinneret.projectpage}">
                ${json.papers.spinneret.title}
                </a>
              </h3>
              <div class="article-style">${json.papers.spinneret.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><strong>Sandra Bae*</strong><span>,
                  <span><a href="${json.people.ohkwon}" target="_blank">Oh-Hyun Kwon*</a></span>,
                  <span><a href="${json.people.schandrasegaran}" target="_blank">Senthil Chandrasegaran</a></span>,
                  <span><a href="${json.people.klma}" target="_blank" target="_blank">Kwan-Liu Ma</a></span>
                   ( <sup>*</sup>equally contributed)
                </div>
                <div class="venue">${json.papers.spinneret.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.spinneret.pdf}" target="_blank" rel="noopener">PDF</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.spinneret.doi}" target="_blank" rel="noopener">DOI</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="h${json.papers.spinneret.presentation}" target="_blank" rel="noopener">Presentation</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.spinneret.preview}" target="_blank" rel="noopener">Video Preview</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.spinneret.projectpage}">
                <img src="${json.papers.spinneret.icon}" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="publications column-header">
          <h2>Posters and Demos</h2>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.diypaper.projectpage}">${json.papers.diypaper.title}</a>
              </h3>
              <div class="article-style">${json.papers.diypaper.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><strong>Sandra Bae</strong></span>,
                  <span><a href="${json.people.ryang}" target="_blank">Ruhan Yang</a></span>,
                  <span><a href="${json.people.pgyory}" target="_blank">Peter Gyory</a></span>,
                  <span><a href="${json.people.juhr}" target="_blank">Julia Uhr</a></span>,
                  <span><a href="${json.people.dzafir}" target="_blank">Danielle Szafir</a></span>,
                  <span><a href="${json.people.edo}" target="_blank">Ellen Do</a></span>
                </div>
                <div class="venue">${json.papers.diypaper.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.diypaper.pdf}" target="_blank" rel="noopener">PDF</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.diypaper.doi}" target="_blank" rel="noopener">DOI</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.diypaper.preview}" target="_blank" rel="noopener">Video Preview</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.diypaper.projectpage}">
                <img src="${json.papers.diypaper.icon}" alt="">
              </a>
            </div>
          </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.secondskin.projectpage}">${json.papers.secondskin.title}</a>
              </h3>
              <div class="article-style">${json.papers.secondskin.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span><a href="${json.people.mwest}" target="_blank">Mary Etta West*</a></span>,
                  <span><strong>Sandra Bae*</strong></span>
                  ( <sup>*</sup>equally contributed)
                </div>
                <div class="venue">${json.papers.secondskin.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.secondskin.pdf}" target="_blank" rel="noopener">PDF</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.secondskin.doi}" target="_blank" rel="noopener">DOI</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.secondskin.projectpage}">
                <img src="${json.papers.secondskin.icon}" alt="">
              </a>
            </div>
          </div>
          <div class="media stream-item">
            <div class="media-body">
              <h3 class="article-title mb-0 mt-0">
                <a href="${json.papers.disease.projectpage}">${json.papers.disease.title}</a>
              </h3>
              <div class="article-style">${json.papers.disease.sentence}</div>
              <div class="stream-meta article-metadata">
                <div>
                  <span>Keshav Dasu</span>,
                  <span><strong>Sandra Bae</strong></span>,
                  <span><a href="${json.people.tfujiwara}" target="_blank">Takanori Fujiwara</a></span>,
                  <span><a href="${json.people.klma}" target="_blank" target="_blank">Kwan-Liu Ma</a></span>
                </div>
                <div class="venue">${json.papers.disease.venue}</div>
              </div>
              <div class="btn-links">
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.disease.pdf}" target="_blank" rel="noopener">PDF</a>
                <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.disease.demo}" target="_blank" rel="noopener">Demo</a>
              </div>
            </div>
            <div class="ml-3">
              <a href="${json.papers.disease.projectpage}">
                <img src="${json.papers.disease.icon}" alt="">
              </a>
            </div>
          </div>
        </div>
      `;
  }

}

customElements.define('left-component', Left);