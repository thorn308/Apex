// Apex Predator — page mockups (Home A/B, Shop, About, Technology, Cart, Contact).
// Both desktop (1280-wide) and mobile (390-wide) compositions.

const {
  Skull, Logo, LogoStack, Btn, ArrowR, Placeholder, ProductCard,
  SiteAnnouncement, DesktopNav, MobileStatusBar, MobileNav, Footer, MobileFooter,
} = window;

// ============== HOME · DESKTOP · A (Editorial heritage hero) ==============

const HomeDesktopA = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active="" dark/>
    {/* Hero */}
    <section className="home-a-hero">
      <Placeholder label="HERO · BUCK SKULL / RANGE / WILD" tone="moss" style={{position:'absolute', inset:0}} />
      <div className="home-a-hero-overlay" />
      <div className="home-a-hero-inner">
        <div className="eyebrow">EST. MMXXIV · MADE IN AMERICA</div>
        <h1 className="hero-h">BE&nbsp;<em>APEX.</em></h1>
        <p className="hero-sub">Precision rifle components, engineered and 3D-printed for hunters who don't settle. Bolt blocks, magazines, sleds, and accessories built to outlast the rifle.</p>
        <div className="hero-cta">
          <Btn kind="primary">SHOP THE LINE <ArrowR/></Btn>
          <Btn kind="ghost-light">Our Technology <ArrowR/></Btn>
        </div>
      </div>
      <div className="hero-meta-row">
        <div><b>04</b><span>products</span></div>
        <div><b>50&nbsp;STATES</b><span>shipping</span></div>
        <div><b>LIFETIME</b><span>guarantee</span></div>
        <div><b>USA</b><span>printed &amp; finished</span></div>
      </div>
    </section>

    {/* Featured products */}
    <section className="section section-light">
      <div className="section-head">
        <div className="eyebrow ink">THE LINE</div>
        <h2 className="h2">Built for the field, not the catalog.</h2>
        <a className="see-all">See all products <ArrowR/></a>
      </div>
      <div className="grid grid-3">
        <ProductCard name="Bolt Block" sku="AP-BB-01" price="$54" tag="NEW" />
        <ProductCard name="10-Round Magazine" sku="AP-MAG-10" price="$39" />
        <ProductCard name="Single Shot Sled" sku="AP-SSS-01" price="$48" />
      </div>
    </section>

    {/* Trust band */}
    <section className="trust-band">
      <div><b>DESIGNED</b><span>in Washington</span></div>
      <div className="d">·</div>
      <div><b>3D-PRINTED</b><span>PA12 nylon</span></div>
      <div className="d">·</div>
      <div><b>HAND-FINISHED</b><span>USA</span></div>
      <div className="d">·</div>
      <div><b>LIFETIME</b><span>guarantee</span></div>
    </section>

    {/* Story snippet */}
    <section className="section section-bone story-section">
      <div className="story-img">
        <img src="photos/story-workshop.jpg" alt="The Apex Predator workshop" />
      </div>
      <div className="story-text">
        <div className="eyebrow ink">OUR STORY</div>
        <h2 className="h2">From the deer camp to the workbench.</h2>
        <p>Apex Predator started in a Washington garage with one stubborn problem: factory magazines that wouldn't feed in the cold. Two seasons later, we'd 3D-printed our way to something better — and we haven't stopped.</p>
        <p>Today every part we ship is designed, tested, and finished by hunters, for hunters. No outsourced foreign tooling, no compromise.</p>
        <Btn kind="link">Read the full story <ArrowR/></Btn>
      </div>
    </section>

    {/* Technology callout */}
    <section className="section section-dark tech-callout">
      <div className="tech-head">
        <div className="eyebrow brass">THE TECHNOLOGY</div>
        <h2 className="h2 inv">Selective Laser Sintering, sealed for the field.</h2>
        <p className="muted-inv">PA12 nylon, fused one micron-thin layer at a time, finished in shop. Lighter than aluminum. Tougher than injection-molded polymer. And it doesn't care what the thermometer says.</p>
      </div>
      <div className="tech-steps">
        {[
          ['01', 'DESIGN',   'CAD in shop, prototyped in days, not months.'],
          ['02', 'PRINT',    'SLS fusing PA12 nylon, micron-layer by micron-layer.'],
          ['03', 'FINISH',   'Hand-cleaned, dyed, and stress-tested in Washington.'],
          ['04', 'FIELD',    'Cold-weather and dust-cycled before it ships.'],
        ].map(([n, h, b]) => (
          <div className="tech-step" key={n}>
            <div className="ts-num">{n}</div>
            <div className="ts-h">{h}</div>
            <div className="ts-b">{b}</div>
          </div>
        ))}
      </div>
      <a className="tech-link">Deep dive on the process <ArrowR/></a>
    </section>

    {/* Field reports / testimonials */}
    <section className="section section-light field-reports">
      <div className="section-head">
        <div className="eyebrow ink">FIELD REPORTS</div>
        <h2 className="h2">Cycled in -12°F. Filled the freezer.</h2>
      </div>
      <div className="grid grid-3">
        {[
          ['"Fed every round, even after the snow got into the action. Won me back from the OEM mag."', 'JAKE B.', 'Eastern Washington · .308'],
          ['"Single shot sled is genius. Half my reloads, twice as many shots."', 'MICAH T.', 'Eastern Montana · 6.5 Creedmoor'],
          ['"My bolt block survived three drops out of a UTV. Print quality is nuts."', 'CARSON L.', 'West Texas · .30-06'],
        ].map(([q, n, m]) => (
          <div className="field-card" key={n}>
            <div className="fc-stars">★★★★★</div>
            <p className="fc-quote">{q}</p>
            <div className="fc-attr">
              <b>{n}</b>
              <span>{m}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer/>
  </div>
);

// ============== HOME · DESKTOP · B (Split / catalog-first) ==============

const HomeDesktopB = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active="" />
    {/* Split hero */}
    <section className="home-b-hero">
      <div className="hb-left">
        <div className="eyebrow ink">FALL DROP · 2026</div>
        <h1 className="hero-h-b">BE<br/><em>APEX.</em></h1>
        <p className="hero-sub-b">Precision rifle components for hunters who'd rather build than buy off the shelf. Bolt blocks, magazines, sleds — all 3D-printed in Washington.</p>
        <div className="hero-cta">
          <Btn kind="primary">SHOP MAGAZINES <ArrowR/></Btn>
          <Btn kind="ghost-dark">Explore the line <ArrowR/></Btn>
        </div>
        <div className="hb-stats">
          <div><b>200K+</b><span>rounds tested</span></div>
          <div><b>-30°F</b><span>cold-cycled</span></div>
          <div><b>4yr</b><span>field-proven</span></div>
        </div>
      </div>
      <div className="hb-right">
        <Placeholder label="HERO · BOLT BLOCK · 3/4 STUDIO RENDER" tone="wheat" ratio="4/5" />
        <div className="hb-callout c1">
          <div className="hb-c-num">A1</div>
          <div>Snap-fit retention<br/><span>Zero-tool install</span></div>
        </div>
        <div className="hb-callout c2">
          <div className="hb-c-num">A2</div>
          <div>SLS-printed PA12<br/><span>±0.1mm tolerance</span></div>
        </div>
        <div className="hb-callout c3">
          <div className="hb-c-num">A3</div>
          <div>Hand-finished USA<br/><span>Lifetime guarantee</span></div>
        </div>
      </div>
    </section>

    {/* Catalog grid front and center */}
    <section className="section section-light">
      <div className="section-head">
        <div className="eyebrow ink">SHOP THE LINE</div>
        <h2 className="h2">Four products. Each one earned its place.</h2>
        <a className="see-all">All products <ArrowR/></a>
      </div>
      <div className="grid grid-4">
        <ProductCard name="Bolt Block" sku="AP-BB-01" price="$54" tag="NEW" />
        <ProductCard name="10-Rd Magazine" sku="AP-MAG-10" price="$39" />
        <ProductCard name="Single Shot Sled" sku="AP-SSS-01" price="$48" />
        <ProductCard name="Accessory Kit" sku="AP-ACC-K1" price="$24" />
      </div>
    </section>

    {/* Tech horizontal */}
    <section className="section section-dark tech-strip">
      <div className="tech-strip-l">
        <div className="eyebrow brass">3D-PRINTED PRECISION</div>
        <h2 className="h2 inv">Lighter. Tougher. Better.</h2>
        <p className="muted-inv">PA12 nylon, SLS-fused in micron-thin layers. We design it, print it, finish it, and field-test it. Every part. Every batch.</p>
        <Btn kind="brass-outline">Our technology <ArrowR/></Btn>
      </div>
      <div className="tech-strip-r">
        <Placeholder label="PROCESS · SLS PRINTER / WORKBENCH" tone="ink" ratio="4/3" />
      </div>
    </section>

    {/* Story */}
    <section className="section section-bone story-section">
      <div className="story-text">
        <div className="eyebrow ink">OUR STORY</div>
        <h2 className="h2">Washington-bred. Hunter-engineered.</h2>
        <p>Started in a deer camp garage. Now ships to all 50. Same hands, same standards, same stubborn refusal to compromise on what goes into the field.</p>
        <Btn kind="link">Read the full story <ArrowR/></Btn>
      </div>
      <div className="story-img">
        <Placeholder label="FOUNDER · WORKSHOP" tone="wheat" ratio="4/5" />
      </div>
    </section>

    <Footer/>
  </div>
);

// ============== HOME · MOBILE · A ==============

const HomeMobileA = () => (
  <div className="page-mobile">
    <MobileStatusBar dark/>
    <div className="ap-announce-m">FREE SHIPPING OVER $99 · LIFETIME GUARANTEE</div>
    <MobileNav dark/>
    <section className="home-a-hero-m">
      <Placeholder label="HERO · BUCK SKULL / RANGE" tone="moss" style={{position:'absolute', inset:0}} />
      <div className="home-a-hero-overlay" />
      <div className="home-a-hero-inner-m">
        <div className="eyebrow brass">EST. MMXXIV · USA</div>
        <h1 className="hero-h-m">BE<br/><em>APEX.</em></h1>
        <p className="hero-sub-m">Precision rifle components, 3D-printed for hunters.</p>
        <Btn kind="primary" size="md" style={{width:'100%'}}>SHOP THE LINE <ArrowR/></Btn>
        <a className="hero-link">Our Technology <ArrowR/></a>
      </div>
    </section>
    <div className="trust-band-m">
      <div><b>DESIGNED</b><span>Washington</span></div>
      <div><b>3D-PRINTED</b><span>USA</span></div>
      <div><b>LIFETIME</b><span>Guarantee</span></div>
    </div>
    <section className="section-m">
      <div className="section-head-m">
        <div className="eyebrow ink">THE LINE</div>
        <h2 className="h2-m">Built for the field.</h2>
      </div>
      <div className="grid-m">
        <ProductCard name="Bolt Block" sku="AP-BB-01" price="$54" tag="NEW" />
        <ProductCard name="10-Rd Magazine" sku="AP-MAG-10" price="$39" />
        <ProductCard name="Single Shot Sled" sku="AP-SSS-01" price="$48" />
      </div>
    </section>
    <section className="section-m dark-m">
      <div className="eyebrow brass">THE TECHNOLOGY</div>
      <h2 className="h2-m inv">SLS-printed for the field.</h2>
      <p className="muted-inv-m">PA12 nylon. Lighter than aluminum. Tougher than molded polymer.</p>
      <div className="tech-steps-m">
        {[
          ['01', 'DESIGN'],
          ['02', 'PRINT'],
          ['03', 'FINISH'],
          ['04', 'FIELD'],
        ].map(([n, h]) => (
          <div className="tech-step-m" key={n}>
            <div className="ts-num">{n}</div>
            <div className="ts-h">{h}</div>
          </div>
        ))}
      </div>
      <a className="tech-link">Deep dive <ArrowR/></a>
    </section>
    <section className="section-m">
      <Placeholder label="STORY · DEER CAMP" tone="wheat" ratio="4/3" />
      <div className="eyebrow ink" style={{marginTop:18}}>OUR STORY</div>
      <h2 className="h2-m">From the deer camp to the workbench.</h2>
      <p className="body-m">Started in a Washington garage. Two seasons later we'd printed our way past every factory mag we'd ever cursed.</p>
      <Btn kind="link">Read the story <ArrowR/></Btn>
    </section>
    <MobileFooter/>
  </div>
);

// ============== HOME · MOBILE · B ==============

const HomeMobileB = () => (
  <div className="page-mobile">
    <MobileStatusBar/>
    <div className="ap-announce-m">FREE SHIPPING OVER $99 · LIFETIME</div>
    <MobileNav/>
    <section className="home-b-hero-m">
      <div className="eyebrow ink">FALL DROP · 2026</div>
      <h1 className="hero-h-m">BE<br/><em>APEX.</em></h1>
      <p className="hero-sub-m">Precision rifle components for hunters who'd rather build than buy off the shelf.</p>
      <Placeholder label="HERO · BOLT BLOCK · STUDIO" tone="wheat" ratio="4/5" style={{margin:'18px 0'}} />
      <div className="cta-stack">
        <Btn kind="primary" style={{width:'100%'}}>SHOP MAGAZINES <ArrowR/></Btn>
        <Btn kind="ghost-dark" style={{width:'100%'}}>Explore the line <ArrowR/></Btn>
      </div>
      <div className="hb-stats-m">
        <div><b>200K+</b><span>rounds</span></div>
        <div><b>-30°F</b><span>tested</span></div>
        <div><b>4yr</b><span>proven</span></div>
      </div>
    </section>
    <section className="section-m">
      <div className="section-head-m">
        <div className="eyebrow ink">SHOP THE LINE</div>
        <h2 className="h2-m">Four products.</h2>
      </div>
      <div className="grid-m grid-m-2">
        <ProductCard name="Bolt Block" sku="AP-BB-01" price="$54" tag="NEW" size="sm" />
        <ProductCard name="10-Rd Mag" sku="AP-MAG-10" price="$39" size="sm" />
        <ProductCard name="Single Shot Sled" sku="AP-SSS-01" price="$48" size="sm" />
        <ProductCard name="Accessory Kit" sku="AP-ACC-K1" price="$24" size="sm" />
      </div>
    </section>
    <section className="section-m dark-m">
      <div className="eyebrow brass">3D-PRINTED</div>
      <h2 className="h2-m inv">Lighter. Tougher. Better.</h2>
      <p className="muted-inv-m">PA12 nylon, fused one micron-thin layer at a time.</p>
      <Placeholder label="PROCESS · SLS PRINTER" tone="ink" ratio="4/3" style={{marginTop:14}} />
      <Btn kind="brass-outline" style={{marginTop:14, width:'100%'}}>Our technology <ArrowR/></Btn>
    </section>
    <MobileFooter/>
  </div>
);

// ============== SHOP / CATALOG · DESKTOP ==============

const ShopDesktop = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active="Shop"/>
    <div className="page-header">
      <div className="crumbs">Home <span>/</span> Shop <span>/</span> All Products</div>
      <h1 className="page-h1">The full line</h1>
      <p className="page-sub">Twelve products. Every one designed, printed, and finished in Washington.</p>
    </div>
    <div className="shop-layout">
      <aside className="shop-filters">
        <div className="ff-block">
          <h6>Category</h6>
          <ul>
            <li><span className="cb on"></span> Magazines <i>5</i></li>
            <li><span className="cb"></span> Bolt Blocks <i>3</i></li>
            <li><span className="cb"></span> Single Shot Sleds <i>2</i></li>
            <li><span className="cb"></span> Accessories <i>4</i></li>
          </ul>
        </div>
        <div className="ff-block">
          <h6>Caliber / Fit</h6>
          <ul>
            <li><span className="cb"></span> .308 / 7.62</li>
            <li><span className="cb on"></span> .30-06</li>
            <li><span className="cb"></span> 6.5 Creedmoor</li>
            <li><span className="cb"></span> .223 / 5.56</li>
            <li><span className="cb"></span> 6.5 PRC</li>
          </ul>
        </div>
        <div className="ff-block">
          <h6>Capacity</h6>
          <ul>
            <li><span className="cb"></span> 4-rd</li>
            <li><span className="cb"></span> 5-rd</li>
            <li><span className="cb on"></span> 10-rd</li>
            <li><span className="cb"></span> Single</li>
          </ul>
        </div>
        <div className="ff-block">
          <h6>Price</h6>
          <div className="slider">
            <div className="slider-track">
              <div className="slider-fill"></div>
              <div className="slider-h s1"></div>
              <div className="slider-h s2"></div>
            </div>
            <div className="slider-meta"><span>$20</span><span>$80</span></div>
          </div>
        </div>
        <button className="ff-clear">CLEAR ALL FILTERS</button>
      </aside>
      <div className="shop-main">
        <div className="shop-toolbar">
          <div className="shop-count">12 products · 2 filters applied</div>
          <div className="shop-sort">
            <span>Sort</span>
            <span className="sort-pill">Best sellers ▾</span>
          </div>
        </div>
        <div className="grid grid-3">
          {[
            ['Bolt Block', 'AP-BB-01', '$54', 'NEW'],
            ['10-Round Magazine', 'AP-MAG-10', '$39', null],
            ['Single Shot Sled', 'AP-SSS-01', '$48', null],
            ['5-Round Magazine', 'AP-MAG-05', '$29', null],
            ['Magazine Floorplate', 'AP-FP-02', '$18', null],
            ['Bolt Block — Long Action', 'AP-BB-LA', '$58', null],
            ['Sled · 6.5 Creedmoor', 'AP-SSS-65', '$48', null],
            ['Mag · 30-06 / .270', 'AP-MAG-3006', '$39', 'LOW STOCK'],
            ['Loader Tool', 'AP-LDR-01', '$14', null],
            ['Accessory Kit', 'AP-ACC-K1', '$24', null],
            ['Camp Patch (3pk)', 'AP-PAT-3', '$12', null],
            ['Field Cleaning Kit', 'AP-CK-01', '$32', 'SOLD OUT'],
          ].map(([n, s, p, t]) => (
            <ProductCard key={s} name={n} sku={s} price={p} tag={t} />
          ))}
        </div>
        <div className="pagination">
          <span className="pg-arr">← Prev</span>
          <span className="pg on">1</span>
          <span className="pg">2</span>
          <span className="pg-arr">Next →</span>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);

// ============== SHOP · MOBILE ==============

const ShopMobile = () => (
  <div className="page-mobile">
    <MobileStatusBar/>
    <MobileNav/>
    <div className="page-header-m">
      <div className="crumbs">Home / Shop</div>
      <h1 className="page-h1-m">The full line</h1>
    </div>
    <div className="shop-toolbar-m">
      <button className="filter-pill">⊟ Filters · 2</button>
      <span className="sort-pill">Best sellers ▾</span>
    </div>
    <div className="grid-m grid-m-2">
      {[
        ['Bolt Block', 'AP-BB-01', '$54', 'NEW'],
        ['10-Rd Mag', 'AP-MAG-10', '$39', null],
        ['Sled', 'AP-SSS-01', '$48', null],
        ['5-Rd Mag', 'AP-MAG-05', '$29', null],
        ['Floorplate', 'AP-FP-02', '$18', null],
        ['Bolt LA', 'AP-BB-LA', '$58', null],
        ['Sled · 6.5 CM', 'AP-SSS-65', '$48', null],
        ['Mag · .30-06', 'AP-MAG-3006', '$39', 'LOW'],
      ].map(([n, s, p, t]) => (
        <ProductCard key={s} name={n} sku={s} price={p} tag={t} size="sm" />
      ))}
    </div>
    <div className="pagination-m">
      <span>1 / 2</span>
      <span className="pg-arr">Next →</span>
    </div>
    <MobileFooter/>
  </div>
);

// ============== ABOUT · DESKTOP ==============

const AboutDesktop = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active="Our Story"/>
    <section className="about-hero">
      <div className="about-hero-text">
        <div className="eyebrow ink">OUR STORY</div>
        <h1 className="hero-h-about">A garage<br/>in the off-season.</h1>
        <p className="hero-sub-b">Apex Predator started where most good ideas do — at a workbench, three weeks before opening day, staring at a factory magazine that wouldn't feed.</p>
      </div>
      <Placeholder label="FOUNDER · WORKSHOP / DEER CAMP" tone="wheat" ratio="4/5" />
    </section>
    <section className="story-prose">
      <div className="prose-col">
        <h3>2024 · The problem.</h3>
        <p>It was -12°F outside the blind. The magazine wouldn't seat. Three minutes later the buck of a lifetime was 400 yards downwind. The walk back was long enough to draw up the first prototype on the back of a tag envelope.</p>
        <h3>Spring · The print.</h3>
        <p>An SLS printer, a fistful of PA12 nylon, and a stubborn refusal to compromise. The first dozen prototypes lived in pockets, range bags, and freezer chests until they failed — or didn't.</p>
        <h3>Today · The line.</h3>
        <p>Four products. Hundreds of thousands of rounds. Cold-cycled, dust-cycled, and field-cycled. Every part still designed, printed, and finished in the same Washington shop where it started.</p>
      </div>
      <div className="prose-img">
        <Placeholder label="PROTOTYPE · TAG ENVELOPE SKETCH" tone="wheat" ratio="1/1" />
        <Placeholder label="SHOP · PRINTER FLOOR" tone="wheat" ratio="1/1" />
      </div>
    </section>
    <section className="section section-dark values-strip">
      <div className="eyebrow brass">WHAT WE STAND FOR</div>
      <h2 className="h2 inv">Three things, and not much else.</h2>
      <div className="grid grid-3">
        {[
          ['01', 'Hunters first.', 'Every part is tested by the people who designed it, in the field they designed it for.'],
          ['02', 'Made here.',     'Washington-designed, Washington-printed, Washington-finished. No foreign tooling. No exceptions.'],
          ['03', 'Lifetime.',      'If it breaks, it gets replaced. That\'s the deal. Forever.'],
        ].map(([n, h, b]) => (
          <div className="value-card" key={n}>
            <div className="vc-num">{n}</div>
            <h4>{h}</h4>
            <p>{b}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="section section-light founder-strip">
      <Placeholder label="PORTRAIT · FOUNDER" tone="wheat" ratio="1/1" style={{width:240, flexShrink:0}} />
      <div>
        <div className="eyebrow ink">FROM THE FOUNDER</div>
        <p className="pullquote">"We don't ship anything we wouldn't carry on day one of rifle season. If it's on the shelf, it's earned the spot."</p>
        <div className="attr"><b>DICK HARRISON</b><span>FOUNDER · APEX PREDATOR</span></div>
      </div>
    </section>
    <Footer/>
  </div>
);

// ============== ABOUT · MOBILE ==============

const AboutMobile = () => (
  <div className="page-mobile">
    <MobileStatusBar/>
    <MobileNav/>
    <section className="about-hero-m">
      <div className="eyebrow ink">OUR STORY</div>
      <h1 className="hero-h-about-m">A garage<br/>in the off-season.</h1>
      <p className="body-m">Apex Predator started where most good ideas do — at a workbench, three weeks before opening day.</p>
      <Placeholder label="FOUNDER · WORKSHOP" tone="wheat" ratio="4/3" style={{marginTop:14}} />
    </section>
    <section className="section-m">
      <h3 className="prose-h">2024 · The problem.</h3>
      <p className="body-m">-12°F. The magazine wouldn't seat. The walk back was long enough to draw up the first prototype on the back of a tag envelope.</p>
      <h3 className="prose-h">Spring · The print.</h3>
      <p className="body-m">An SLS printer, a fistful of PA12 nylon, and a stubborn refusal to compromise.</p>
      <h3 className="prose-h">Today · The line.</h3>
      <p className="body-m">Four products. Hundreds of thousands of rounds. Every part still designed and printed in the same Washington shop.</p>
    </section>
    <section className="section-m dark-m">
      <div className="eyebrow brass">WHAT WE STAND FOR</div>
      <h2 className="h2-m inv">Three things, and not much else.</h2>
      {[
        ['01', 'Hunters first.', 'Tested by the people who designed it.'],
        ['02', 'Made here.', 'Washington-designed, printed, finished.'],
        ['03', 'Lifetime.', 'If it breaks, it gets replaced. Forever.'],
      ].map(([n, h, b]) => (
        <div className="value-card" key={n}>
          <div className="vc-num">{n}</div>
          <h4>{h}</h4>
          <p>{b}</p>
        </div>
      ))}
    </section>
    <MobileFooter/>
  </div>
);

// ============== TECHNOLOGY · DESKTOP ==============

const TechDesktop = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active="Technology" dark/>
    <section className="tech-hero">
      <Placeholder label="HERO · SLS PRINTER · LASER LAYER" tone="ink" style={{position:'absolute', inset:0}} />
      <div className="home-a-hero-overlay" />
      <div className="tech-hero-inner">
        <div className="eyebrow brass">THE TECHNOLOGY</div>
        <h1 className="hero-h">Engineered<br/>in <em>polymer.</em></h1>
        <p className="hero-sub">Selective Laser Sintering. PA12 nylon. Hand-finished in Washington. Lighter than aluminum. Tougher than injection-molded polymer.</p>
      </div>
    </section>
    <section className="tech-specs">
      <div>
        <div className="eyebrow ink">PA12 NYLON</div>
        <h4>The material.</h4>
        <p>Aerospace-grade polyamide, fused one 80-micron layer at a time. Stable from -40°F to 280°F. Won't warp, swell, or wear out the feed lips.</p>
      </div>
      <div>
        <div className="eyebrow ink">SLS PROCESS</div>
        <h4>The print.</h4>
        <p>Selective Laser Sintering fuses powder into a finished part — no support scars, no layer lines that matter. Tolerances inside ±0.1mm.</p>
      </div>
      <div>
        <div className="eyebrow ink">HAND FINISH</div>
        <h4>The shop.</h4>
        <p>Every part is cleaned, dyed, and stress-tested by hand before it ships. We test every batch. Cold soaks, drop tests, full mag dumps.</p>
      </div>
    </section>
    <section className="section section-dark process-section">
      <div className="eyebrow brass">THE PROCESS</div>
      <h2 className="h2 inv">From sketch to deer camp in four steps.</h2>
      <div className="process-grid">
        {[
          ['01', 'DESIGN',  'CAD in shop. Iterated against last season\'s field reports. Prototyped in days, not months.', 'CAD · WORKSTATION'],
          ['02', 'PRINT',   'SLS printer fuses PA12 nylon, layer by 80-micron layer. Each part lives in the build chamber for ~14 hours.', 'PRINTER · LASER PASS'],
          ['03', 'FINISH',  'De-powdered, tumbled, dyed, and stress-tested. Hand-cleaned at every step.', 'FINISHING · WORKBENCH'],
          ['04', 'FIELD',   'Cold-soaked at -30°F. Dust-cycled. Then it ships — with a lifetime guarantee.', 'TEST · COLD CHAMBER'],
        ].map(([n, h, b, img]) => (
          <div className="process-card" key={n}>
            <Placeholder label={img} tone="ink" ratio="4/3" />
            <div className="pc-num">{n}</div>
            <h4>{h}</h4>
            <p>{b}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="section section-bone compare-section">
      <div className="eyebrow ink">WHY POLYMER</div>
      <h2 className="h2">PA12 vs. the alternatives.</h2>
      <table className="compare">
        <thead>
          <tr><th></th><th>SLS PA12<br/><span>Apex Predator</span></th><th>Aluminum<br/><span>OEM mags</span></th><th>Injection PA<br/><span>Aftermarket</span></th></tr>
        </thead>
        <tbody>
          {[
            ['Weight', 'Lightest', 'Heaviest', 'Light'],
            ['Cold tolerance', '-40°F', '-20°F', '-10°F'],
            ['Wear at 10k rounds', 'None', 'Galling', 'Lip wear'],
            ['Tool-up cost', 'Zero', '$$$$', '$$$'],
            ['Made in USA', '✓', 'sometimes', 'rarely'],
          ].map(row => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              {row.slice(1).map((c, i) => <td key={i} className={i === 0 ? 'us' : ''}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    <Footer/>
  </div>
);

// ============== TECHNOLOGY · MOBILE ==============

const TechMobile = () => (
  <div className="page-mobile">
    <MobileStatusBar dark/>
    <MobileNav dark/>
    <section className="tech-hero-m">
      <Placeholder label="HERO · SLS PRINTER" tone="ink" style={{position:'absolute', inset:0}} />
      <div className="home-a-hero-overlay" />
      <div className="tech-hero-inner-m">
        <div className="eyebrow brass">THE TECHNOLOGY</div>
        <h1 className="hero-h-m">Engineered<br/>in <em>polymer.</em></h1>
        <p className="hero-sub-m">Selective Laser Sintering. PA12 nylon. Hand-finished in Washington.</p>
      </div>
    </section>
    <section className="section-m">
      <div className="tech-specs-m">
        {[
          ['PA12 NYLON', 'Aerospace polyamide, stable -40°F to 280°F.'],
          ['SLS PROCESS', 'Fuses powder. ±0.1mm tolerances. No layer lines.'],
          ['HAND FINISH', 'Cleaned, dyed, stress-tested by hand.'],
        ].map(([h, b]) => (
          <div key={h} className="spec-m">
            <div className="eyebrow ink">{h}</div>
            <p>{b}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="section-m dark-m">
      <div className="eyebrow brass">THE PROCESS</div>
      <h2 className="h2-m inv">Sketch to deer camp.</h2>
      {[
        ['01', 'DESIGN', 'CAD. Iterated against field reports.'],
        ['02', 'PRINT',  'SLS. 80-micron layers. 14hr per batch.'],
        ['03', 'FINISH', 'De-powdered, dyed, stress-tested.'],
        ['04', 'FIELD',  '-30°F soak. Dust-cycled. Then it ships.'],
      ].map(([n, h, b]) => (
        <div className="process-card" key={n}>
          <Placeholder label={`STEP · ${h}`} tone="ink" ratio="4/3" />
          <div className="pc-num">{n}</div>
          <h4>{h}</h4>
          <p>{b}</p>
        </div>
      ))}
    </section>
    <MobileFooter/>
  </div>
);

// ============== CART · DESKTOP ==============

const CartDesktop = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active=""/>
    <div className="page-header">
      <div className="crumbs">Home <span>/</span> Cart</div>
      <h1 className="page-h1">Your kit</h1>
      <p className="page-sub">2 products · ships in 1–2 business days.</p>
    </div>
    <div className="cart-layout">
      <div className="cart-items">
        <div className="cart-row-h">
          <span>PRODUCT</span>
          <span>QTY</span>
          <span>PRICE</span>
          <span></span>
        </div>
        {[
          ['Bolt Block', 'AP-BB-01', '.30-06 / Short action', 1, '$54.00'],
          ['10-Round Magazine', 'AP-MAG-10', '.30-06', 2, '$78.00'],
        ].map(([n, sku, fit, qty, p]) => (
          <div className="cart-row" key={sku}>
            <div className="cr-prod">
              <Placeholder label={n.toUpperCase()} tone="wheat" width={84} height={104} ratio={undefined} />
              <div>
                <div className="cr-name">{n}</div>
                <div className="cr-sku">{sku} · {fit}</div>
                <div className="cr-actions">
                  <span>Edit</span><span>·</span><span>Remove</span><span>·</span><span>Save for later</span>
                </div>
              </div>
            </div>
            <div className="cr-qty">
              <button>−</button><span>{qty}</span><button>+</button>
            </div>
            <div className="cr-price">{p}</div>
            <div className="cr-x">×</div>
          </div>
        ))}
        <div className="cart-upsell">
          <div className="eyebrow ink">PAIR IT WITH</div>
          <div className="upsell-row">
            <ProductCard name="Loader Tool" sku="AP-LDR-01" price="$14" size="sm" />
            <ProductCard name="Floorplate" sku="AP-FP-02" price="$18" size="sm" />
            <ProductCard name="Camp Patch (3pk)" sku="AP-PAT-3" price="$12" size="sm" />
          </div>
        </div>
      </div>
      <aside className="cart-summary">
        <h4>Order summary</h4>
        <div className="cs-row"><span>Subtotal</span><span>$132.00</span></div>
        <div className="cs-row"><span>Shipping</span><span>FREE</span></div>
        <div className="cs-row"><span>Sales tax</span><span>est. $9.24</span></div>
        <div className="cs-divider"></div>
        <div className="cs-total"><span>TOTAL</span><span>$141.24</span></div>
        <div className="cs-promo">
          <input placeholder="Promo code" readOnly />
          <button>APPLY</button>
        </div>
        <Btn kind="primary" style={{width:'100%', marginTop:14}}>CHECKOUT <ArrowR/></Btn>
        <div className="cs-trust">
          <div>🔒 Secure checkout · Shopify</div>
          <div>↻ Free returns within 30 days</div>
          <div>★ Lifetime guarantee on every part</div>
        </div>
      </aside>
    </div>
    <Footer/>
  </div>
);

// ============== CART · MOBILE ==============

const CartMobile = () => (
  <div className="page-mobile">
    <MobileStatusBar/>
    <MobileNav/>
    <div className="page-header-m">
      <div className="crumbs">Home / Cart</div>
      <h1 className="page-h1-m">Your kit</h1>
      <p className="body-m" style={{margin:0, opacity:0.6}}>2 products · ships 1–2 days.</p>
    </div>
    <div className="cart-items-m">
      {[
        ['Bolt Block', 'AP-BB-01', '.30-06', 1, '$54.00'],
        ['10-Rd Magazine', 'AP-MAG-10', '.30-06 ×2', 2, '$78.00'],
      ].map(([n, sku, fit, qty, p]) => (
        <div className="cart-row-m" key={sku}>
          <Placeholder label={n.toUpperCase()} tone="wheat" width={76} height={92} ratio={undefined} />
          <div className="cr-mid">
            <div className="cr-name">{n}</div>
            <div className="cr-sku">{sku} · {fit}</div>
            <div className="cr-qty">
              <button>−</button><span>{qty}</span><button>+</button>
            </div>
          </div>
          <div className="cr-right">
            <div className="cr-price">{p}</div>
            <div className="cr-x">×</div>
          </div>
        </div>
      ))}
    </div>
    <div className="cart-summary-m">
      <div className="cs-row"><span>Subtotal</span><span>$132.00</span></div>
      <div className="cs-row"><span>Shipping</span><span>FREE</span></div>
      <div className="cs-row"><span>Tax (est.)</span><span>$9.24</span></div>
      <div className="cs-divider"></div>
      <div className="cs-total"><span>TOTAL</span><span>$141.24</span></div>
      <Btn kind="primary" style={{width:'100%', marginTop:12}}>CHECKOUT <ArrowR/></Btn>
      <div className="cs-trust-m">🔒 Secure · ↻ 30-day returns · ★ Lifetime</div>
    </div>
    <MobileFooter/>
  </div>
);

// ============== CONTACT / DEALERS · DESKTOP ==============

const ContactDesktop = () => (
  <div className="page-desktop">
    <SiteAnnouncement/>
    <DesktopNav active="Contact"/>
    <div className="page-header">
      <div className="crumbs">Home <span>/</span> Contact</div>
      <h1 className="page-h1">Drop us a line.</h1>
      <p className="page-sub">Questions, custom work, or just looking for a dealer near you.</p>
    </div>
    <div className="contact-layout">
      <div className="contact-form">
        <h4>Send a message</h4>
        <div className="cf-row">
          <label>Name<input placeholder="Your name" readOnly /></label>
          <label>Email<input placeholder="email@hunt.com" readOnly /></label>
        </div>
        <label>Subject
          <select disabled>
            <option>General question</option>
            <option>Order / shipping</option>
            <option>Warranty claim</option>
            <option>Dealer inquiry</option>
            <option>Custom work</option>
          </select>
        </label>
        <label>Message<textarea rows="6" placeholder="What's on your mind?" readOnly></textarea></label>
        <Btn kind="primary">SEND MESSAGE <ArrowR/></Btn>
      </div>
      <div className="contact-info">
        <h4>Shop hours</h4>
        <ul className="hours">
          <li><span>Mon–Fri</span><span>8a – 5p CST</span></li>
          <li><span>Saturday</span><span>9a – 1p</span></li>
          <li><span>Sunday</span><span>Closed (hunting)</span></li>
        </ul>
        <div className="contact-block">
          <div className="eyebrow ink">PHONE</div>
          <p>(715) 555-0142</p>
        </div>
        <div className="contact-block">
          <div className="eyebrow ink">EMAIL</div>
          <p>shop@apexpredator.net</p>
        </div>
        <div className="contact-block">
          <div className="eyebrow ink">SHIPPING FROM</div>
          <p>Apex Predator LLC<br/>1842 Stand Rd · Spokane, WA 99201</p>
        </div>
      </div>
    </div>
    <section className="section section-bone dealer-section">
      <div className="dealer-head">
        <div className="eyebrow ink">DEALER LOCATOR</div>
        <h2 className="h2">Find an Apex Predator dealer.</h2>
        <p>Stocked at 38 independent gun shops across the upper Midwest and Mountain West.</p>
        <div className="dealer-search">
          <input placeholder="Zip code or city" readOnly />
          <Btn kind="primary">SEARCH <ArrowR/></Btn>
        </div>
        <ul className="dealer-list">
          {[
            ['Northwoods Gun & Pawn',   'Spokane, WA',     '0.4 mi'],
            ['Rolling Stand Outfitters', 'Wenatchee, WA',        '38 mi'],
            ['Big Sky Rifles',           'Bozeman, MT',        '1,168 mi'],
            ['West Texas Long Guns',     'Midland, TX',        '1,420 mi'],
          ].map(([n, c, d]) => (
            <li key={n}>
              <div>
                <b>{n}</b>
                <span>{c}</span>
              </div>
              <span className="dist">{d}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="dealer-map">
        <Placeholder label="MAP · DEALER NETWORK" tone="moss" style={{position:'absolute', inset:0}} />
        <div className="map-pin p1">●</div>
        <div className="map-pin p2">●</div>
        <div className="map-pin p3">●</div>
        <div className="map-pin p4">●</div>
        <div className="map-pin p5 active">●</div>
        <div className="map-pin p6">●</div>
      </div>
    </section>
    <Footer/>
  </div>
);

// ============== CONTACT · MOBILE ==============

const ContactMobile = () => (
  <div className="page-mobile">
    <MobileStatusBar/>
    <MobileNav/>
    <div className="page-header-m">
      <div className="crumbs">Home / Contact</div>
      <h1 className="page-h1-m">Drop us a line.</h1>
    </div>
    <section className="section-m">
      <div className="contact-form">
        <label>Name<input placeholder="Your name" readOnly /></label>
        <label>Email<input placeholder="email@hunt.com" readOnly /></label>
        <label>Subject
          <select disabled>
            <option>General question</option>
            <option>Warranty claim</option>
            <option>Dealer inquiry</option>
          </select>
        </label>
        <label>Message<textarea rows="5" placeholder="What's on your mind?" readOnly></textarea></label>
        <Btn kind="primary" style={{width:'100%'}}>SEND <ArrowR/></Btn>
      </div>
    </section>
    <section className="section-m">
      <div className="eyebrow ink">SHOP HOURS</div>
      <ul className="hours">
        <li><span>Mon–Fri</span><span>8a – 5p CST</span></li>
        <li><span>Saturday</span><span>9a – 1p</span></li>
        <li><span>Sunday</span><span>Closed</span></li>
      </ul>
      <div className="contact-block">
        <div className="eyebrow ink">PHONE</div>
        <p>(715) 555-0142</p>
      </div>
      <div className="contact-block">
        <div className="eyebrow ink">EMAIL</div>
        <p>shop@apexpredator.net</p>
      </div>
    </section>
    <section className="section-m">
      <div className="eyebrow ink">DEALERS</div>
      <h2 className="h2-m">Find a stand near you.</h2>
      <div className="dealer-map-m">
        <Placeholder label="MAP · DEALERS" tone="moss" style={{position:'absolute', inset:0}} />
        <div className="map-pin p1">●</div><div className="map-pin p2">●</div>
        <div className="map-pin p3">●</div><div className="map-pin p5 active">●</div>
      </div>
      <ul className="dealer-list">
        {[
          ['Northwoods Gun & Pawn', 'Spokane, WA', '0.4 mi'],
          ['Rolling Stand Outfitters', 'Wenatchee, WA', '38 mi'],
          ['Big Sky Rifles', 'Bozeman, MT', '1,168 mi'],
        ].map(([n, c, d]) => (
          <li key={n}><div><b>{n}</b><span>{c}</span></div><span className="dist">{d}</span></li>
        ))}
      </ul>
    </section>
    <MobileFooter/>
  </div>
);

Object.assign(window, {
  HomeDesktopA, HomeDesktopB, HomeMobileA, HomeMobileB,
  ShopDesktop, ShopMobile,
  AboutDesktop, AboutMobile,
  TechDesktop, TechMobile,
  CartDesktop, CartMobile,
  ContactDesktop, ContactMobile,
});
