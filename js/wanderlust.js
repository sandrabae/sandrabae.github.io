class Wanderlust extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <h2>WANDERLUST</h2>
    <p>Some books, arts, films, writings that <br>
      helped pass time, <br>
      fulfilled my wanderlust to explore the unknowns,<br>
      and influenced my thoughts and my work: </p>

    <h3>BOOKS</h3>
    <ul class="no-bullets">
      <li>Summit of the Gods / Baku Yumemakura</li>
      <li>Blue Giant / Shinichi Ishizuka</li>
      <li>Space Brothers / Chuya Koyama</li>
      <li>Designing Design / Kenya Hara</li>
      <li>The Magical Language of Others: A Memoir / E. J. Koh</li>
      <li>The Art of Doing Science and Engineering: Learning to Learn / Richard Hamming</li>
      <li>Deep Work / Cal Newport</li>
      <li>Rendezvous with Rama / Arthur C. Clarke</li>
      <li>Long After Midnight / Ray Bradbury</li>
      <li>Heart of Darkness / Joseph Conrad</li>
      <li>The Woman Warrior / Maxine Hong Kingston</li>
      <li>One Hundred Years of Solititude / Gabriel García Márquez</li>
      <li>The Birthday Party / Harold Pinter </li>
      <li>The Stranger / Albert Campus</li>
      <li>Wabi-sabi for Artists, Designers, Poets & Philosophers / Leonard Koren</li>
    </ul>

    <h3>ART</h3>
    <ul class="no-bullets">
      <li>Moebius (Jean Giraud)</li>
      <li>Frank Lloyd Wright</li>
      <li>Thelonious Monk</li>
      <li>Lady Flower (二胡 女人花) / Shen Lin (沈林)</li>
      <li>Song for Lindsay / Andrew Boysen Jr.</li>
      <li>Arabeseque / Samuel Hazo</li>
      <li>Wind Scene (Chrono Trigger) / Yasunori Mitsuda</li>
      <li>Opus Posthumous / Maurice Ravel</li>
      <li>Melody to You / Hideo Kobayashi</li>
      <li>Exit / Boris Brejcha</li>
    </ul>

    <h3>FILMS</h3>
    <ul class="no-bullets">
      <li>The Diary of Tortov Roddle / Kunio Kato</li>
      <li>Old Boy / Park Chan-Wook </li>
      <li>Spirited Away / Hayao Miyazaki</li>
      <li>Wind River / Taylor Sheridan</li>
      <li>Tracks / John Curran</li>
      <li>Yellow Sea / Na Hong-Jin</li>
      <li>Sonatine / Takeshi Kitano</li>
      <li>North Face / Philipp Stölzl</li>
      <li>The Himalayas / Lee Seok-hoon</li>
      <li>Knockin' on Heaven's Door / Thomas Jahn</li>
      <li>Perfect Blue / Satoshi Kon</li>
      <li>Paprika / Satoshi Kon</li>
      <li>The Dawn Wall / Josh Lowell, Peter Mortimer</li>
    </ul>

    <h3>WRITINGS</h3>
    <ul class="no-bullets" style="margin-bottom: 2rem;">
      <li>You and Your Research / Richard Hamming</li>
      <li>The Moral Character of Crytographic Work / Philip Rogaway</li>
      <li>Kill Math / Brett Victor</li>
      <li>Nobel 1950 Acceptance Speech / William Faulkner</li>
      <li>The Ph.D. Grind / Philip Guo</li>
      <li>Fuck Content / Michael Rock</li>
      <li>User Interface: A Personal View / Alan Kay</li>
      <li>Tangible Bits / Hiroshi Ishii</li>
      <li>A Brief Rant on the Future of Interaction Design / Bret Victor</li>
    </ul>
  `;
  }
}

customElements.define('wanderlust-component', Wanderlust);