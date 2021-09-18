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
  			<!-- <a href="teaching.html">Teaching</a>
  			<a href="about.html">About</a> -->
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
  			<div class="col-right">
  				<a href="#" style="z-index:5">
  					<div class="navIcon">
  						<div class="hamburger">
  							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="30px" height="31px" viewBox="0 0 30 31" enable-background="new 0 0 30 31" xml:space="preserve">
  								<path d="M30 6H0V5h30V6z M30 25H0v1h30V25z M30 15H0v1h30V15z" />
  							</svg>
  						</div>
  						<div class="close">
  							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="27px" height="27px" viewBox="0 0 27 27" enable-background="new 0 0 27 27" xml:space="preserve">
  								<polygon points="26.6,1.1 25.9,0.4 13.5,12.8 1.1,0.4 0.4,1.1 12.8,13.5 0.4,25.9 1.1,26.6 13.5,14.2 25.9,26.6 26.6,25.9 14.2,13.5" />
  							</svg>
  						</div>
  					</div>
  				</a>
  			</div>
  		</div>
  	</div>
  	<nav>
  		<div class="container">
  			<div class="row">
  				<div class="col-sm-6 col-xs-6">
  					<a href="index.html" class="hidden-xs">
  						<div class="logo">
  							<h1 id="name_menu">sandra bae</h1>
  						</div>
  					</a>
  					<ul class="menu">
  						<a class="smoothTransition " href="about.html">
  							<li>
  								<h1>About</h1>
  							</li>
  						</a>
  						<a class="smoothTransition " href="resume.html">
  							<li>
  								<h1>Resume</h1>
  							</li>
  						</a>
  						<a class="smoothTransition " href="teaching.html">
  							<li>
  								<h1>Teaching</h1>
  							</li>
  						</a>
  					</ul>
  				</div>
  			</div>
  		</div>
  	</nav>
  `;
  }
}

customElements.define('nav-component', Nav);