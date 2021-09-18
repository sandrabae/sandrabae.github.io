class Nav extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!--Desktop NavBar-->
  	<div class="topnav" id="myTopnav"> <!--took our class in-line-div-->
  		<div id="nav-main" class="nav-links">
        <div class="left-column">
  			<a href="index.html" id="logo">
  				<div class="logo">
  					<h1 id="name_menu">sandra bae</h1>
  				</div>
  			</a>
        </div>
        <div class="right-column">
  		</div>
      </div>
  	</div>
  	<!--Mobile NavBar-->
  	<div class="nav-bar mobile visible-xs">
  		<div class="nav-links">
  			<div class="col-left">
  				<a href="index.html" id="logo" style="z-index:5; text-align: left; font-size: 20px; padding-left:0px;">
  					<div class="logo">
  						<h1 id="name_mobile">sandra bae</h1>
  					</div>
  				</a>
  			</div>
  		</div>
  	</div>
  `;
  }
}

customElements.define('nav-component', Nav);