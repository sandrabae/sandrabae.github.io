class Cyborg extends HTMLElement {
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
      <img data-original="${json.papers.secondskin.icon}" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" src="${json.papers.secondskin.icon}">
    </div>

    <main id="main" class="single project">
      <!--Project Title-->
      <div class="project-title">
        <h1 class="title"">${json.papers.secondskin.title}</h1>
        <span><a href="${json.people.mwest}" class="co-authors" target="_blank">Mary Etta West*</a></span>,
        <span><strong>Sandra Bae*</strong></span>
        (* equally contributed)
      </div>
      <div class="project-two-columns">
        <h3>${json.papers.secondskin.year}</h3>
        <p class="no-margin venue">ACM TEI</p>
        <p class="no-margin">${json.papers.secondskin.award}</p>
          <div class="btn-links">
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.secondskin.pdf}" target="_blank" rel="noopener">PDF</a>
          <a class="btn btn-outline-primary my-1 mr-1 btn-sm" href="${json.papers.secondskin.doi}" target="_blank" rel="noopener">DOI</a>
          </div>
      </div>
      <div class="project-two-columns">
        <div class="right-column-trim">
          <p><b>Abstract</b><br>
        Traditional handcraft and modern cyborg culture share a common goal: democratize creation through demonstrations and education. Cyborg Crafts blends techniques from the fiber arts with cyborg-inspired technologies (e.g., open-source biosensing EEG headsets and RFID implants). Second SKIN (Soft Keen INteraction), intended to support  this practice, is a handmade collection of four modular soft wearable sensors with a temperature-dependent dynamic display. Each sensor has unique sensor-specific outer shell textures based on non-woven textile techniques, and each supports a different sense: momentary switch, pressure sensor, pinch sensor, and a gesture-detecting, capacitive touch sensor. The interactions of pressing, pinching, and touching are encouraged by sensor-specific extruded designs lending to finger placement. The outer shell textures are made from a mixture of flaxseed mucilage and silicone rubber. Thermochromic pigment additives endow display functionality to these passive devices through the application of heat in excess of 86°F.
          </p>
        </div>
      </div>

    <div class="col-sm-6 col-xs-6" style="margin: 3% 0; border-bottom: 1px solid #BBBBBB;"></div>

    <div class="project-header-title">
      <h3>INTRODUCTION</h3>
    </div>

      <div class="imageRow">
        <div class="imageGridFull">
        <p id="skin-text">This work explores human augmentation to harmonize diametrically opposing themes: organic/synthetic, craft/engineering, and human/computer. Inspired by tactile sensations that humans are accustomed to sensing—touch, pressure, pinch—Second SKIN enables users to record these interactions to build self-touch controlled devices. As a product of this vision, Second SKIN investigates how materials with different origins can yield a highly synergistic blend, in which the strengths of each material are  used to overcome weakness in the other. We emphasize the importance of materiality and critically reflect how manufactured technologies can synchronize with organic matter to augment human sensing capabilities.
        <br><br>
        <b>Second SKIN is a collection of four sensors with a temperature dependent dynamic display</b>. Each of the four sensors is designed using the same crafting processes (molding and felting) and is made from both organic and synthetic materials. By altering the shape, density, and position of felted electrodes within the silicone enclosure, each sensor offers unique interactions while maintaining the same aesthetic. The four different sensors are capable of detecting momentary switching, pressure, pinching, and capacitive touch/gesture. Each unit has a unique thermochromic external texture that guides finger placement and informs sensor function all awhile acting as a display.</p>
        <img data-original="../img/secondskin/scheme.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" id="skin-banner" src="../img/secondskin/scheme.png" style="display: block; width: 80%; padding: 50px 0px 0px 0px;">

        <img data-original="../img/secondskin/fk2.gif" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy" id="skin-banner" src="../img/secondskin/fk2.gif" style="display: block; width: 80%; padding: 10px 0px 50px 0px;">
        </div>
      </div>

      <div class="project-header-title project-header-title-n">
        <h3>MATERIALS AND TOOLS</h3>
      </div>

      <div class="imageRow">
        <div class="imageGridFull">
          <p>To create the Second SKIN swatch, we used the following materials: EcoFlex 00-30 and 00-35 platinum cure silicone rubber, flax seeds, Uniglow coffee-to-green and red-to-yellow thermochromic pigment powder, stainless steel conductive fiber, 30 AWG copper wire, and PLA filament. We used the following tools: 3D printer, felting needles, foam pad, paint palette, mixing cups, stir sticks, squeeze bottles, gloves, wire strippers, multimeter, cooking pot, and a cheesecloth.
          </p>
          <br>
          <h4>PROPERTIES OF ECOFLEX 00-30, 00-35</h4>
          <p>EcoFlex is a brand of platinum-cured, skin-safe certified silicone rubbers with many advantages in wearable applications. The 00-30 and 00-35 series cure to a translucent albeit slightly yellow rubber. The rubber allows Second SKIN to be: flexible and stretchy, washable, and is tintable with pigment powders. While these silicone rubbers have many strengths, their low viscosity poses many challenges in free-hand forming structures without a mold.</p>
          <br>
          <h4>PROPERTIES OF ECOFLEX 00-30, 00-35</h4>
          <p>To create a spectrum between organic and synthetic materials, we investigated plants as a source of natural materials. Virtually all plants excrete a thick, gluey substance known as mucilage.
          Abundant in nature, mucilage is a promising alternative source material in the development of wearable technology. In this project, we focus specifically on home-made flaxseed mucilage, where up to 23% of a flaxseed’s coating is mucilage, resulting in a higher yield compared to that of other plants.
          <br>
          Once manually extruded, mucilage can act as a filament. It can be extruded out of a nozzle, allowing one to draw and form various lines and patterns onto a surface. In addition, due to its adhesive property, pieces of mucilage can stick to each other. In this case, this allows the mucilage pattern to become thicker as additional layers are introduced. Using mucilage for Second SKIN has several distinctive advantages: flexible and stretchy, skin-safe, and waterproof. However, mucilage will not solidify without additional materials or processes. This opens up the opportunity to use the strength of silicone rubber to help solidify mucilage without having to use a mold.
          </p>
        </div>
      </div>

    <div class="imageRow three-grid-trim">
      <div class="gridThreeColumn">
        <div class="imageGrid"> <img data-original="../img/secondskin/flaxseed.jpg" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" id="flax" src="../img/secondskin/flaxseed.jpg" style="display: block; height: 194px; width: auto;">
        </div>
      </div>
      <div class="gridThreeColumn">
        <div class="imageGrid"> <img data-original="../img/secondskin/lines.gif" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/secondskin/lines.gif" style="display: block;"> </div>
      </div>
      <div class="gridThreeColumn">
        <div class="imageGrid"> <img data-original="../img/secondskin/squeeze.gif" data-ratio="0.70387453874539" alt="La Banane" class="img-responsive projectImage lazy" src="../img/secondskin/squeeze.gif" style="display: block;"> </div>
      </div>
    </div>

      <div class="project-header-title project-header-title-n">
        <h3>FABRICATION PROCESS</h3>
      </div>

        <div class="imageRow">
          <div class="imageGridFull">
          <p>Second SKIN relies on several non-woven textile techniques: mixing and molding silicone, 3D printing, felting, and extracting and extruding flaxseed mucilage. Each sensor is fabricated using a 5-step process: (1) 3D printing, (2) molding, (3) felting, (4) assembly, and (5) extruding. All four sensors are aesthetically homogeneous with the exception of the subtle external textures hand-extruded with the flax mucilage and EcoFlex mixture.</p>
          <img data-original="../img/secondskin/pipeline.png" data-ratio="1.4993084370678" alt="La Banane" class="img-responsive projectImage lazy banner" src="../img/secondskin/pipeline.png" style="display: block; width: 90%; padding: 50px 0px 50px 0px;">
          <p style="padding-bottom: 60px;"><b>3D Modeling and 3D Printing.</b>We utilized 3D modeling and 3D printing to shape hollow space within the silicone mold for the electrodes to be inserted. fig:schematics shows an overview of the 3D printed models. The models were designed in Cubify Invent and printed in PLA plastic with a 60% infill using the Prusa i3 MKS3 3D printer and sliced with PrusaSlicer 2.2.0. Each model has a max height of 7mm and a length and width of 15mm.
          <br><br>
          <b>Mixing and Molding</b>.
          A 29ml mixture of EcoFlex 00-35 (mix ratio 1A:1B by volume) and 1.23ml of a pigment powder is used to create each sensor. First, the mixture is poured into the mold half-way, then the 3D prints are inserted. Second, the rest of the mixture is poured to fill the mold 3mm from the top. Lastly, after three minutes of curing, the 3D prints can be removed from the mold.
          <br><br>
          <b>Felting Electrodes</b>.
          First, to create the electrodes, we plied 6.35mm inches of stripped 30 AWG silicone coated wire with stainless steel roving. The roving is then needle felted in the shapes of the 3D prints. The shape and density of the felted electrodes play an essential role in the functionality of the sensors. A higher density electrode results in reliable contact to create the momentary switch and pinch sensor as well as detecting touch using capacitive touch sensing. The pressure sensor is a loosely felted hourglass shape with a mixture of stainless steel conductive fiber and wool. A higher density of stainless steel roving at the top and bottom of the hourglass and a much lower density through the center to produce a dependable 30-ohm pressure-dependent, variable resistor.
          <br><br>
          <b>Assembly</b>.
          Cured silicone has enough flexibility that the 3D printed models can easily be removed by hand without permanently deforming the mold. The felted electrodes are inserted into the negative space and sealed with a small amount of Ecoflex.
          <br><br>
          <b>Texture Extrusion</b>. The outer shell textures are extruded from a combination of silicone rubber (i.e., EcoFlex 00-30) and flaxseed mucilage. To extract flaxseed mucilage, approximately 400g of flaxseed were poured into a pot of 600ml of water, and then continuously stirred until the water boiled. Afterward, the flaxseeds were cooled for an hour and then extracted through a cheesecloth. Then, silicone rubber (following the same procedure as detailed in "Mixing and Molding") was mixed with the mucilage using a 2:1 ratio by volume. The combined mixture is then poured into a squeeze bottle and hand-extruded to create the outer shell textures.
          </p>
          </div>
        </div>
      <!--End of Container-->
    </main>
      `;
  }
}

customElements.define('secondskin-component', Cyborg);