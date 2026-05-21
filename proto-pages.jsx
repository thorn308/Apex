// Apex Predator — interactive pages (Home A, Shop, PDP, Cart).

const { useState: usePageState, useEffect: usePageEffect, useMemo: usePageMemo } = React;
const {
  PRODUCTS, CATEGORIES, CALIBERS, CAPACITIES, findProduct,
  PBtn, PCard, Announce, Nav, Foot, useCart, Placeholder: PH, ArrowR: AR,
  Logo: BLogo, Skull: BSkull,
  R,
} = window;

// ============ HOME ============
// Renders the right-side hero variant, accepts variant key.
const HeroVariant = ({ variant }) => {
  if (variant === 'product') {
    return (
      <div className="hv-product">
        <div className="hv-product-bg" />
        <div className="hv-product-img">
          <img src={R('mag10rd', 'photos/mag-10rd.png')} alt="10-Round Magazine" />
        </div>
        <div className="hv-callout c1">
          <span className="num">01</span>
          <div><b>SLS · PA12</b><span>±0.1 mm tolerance</span></div>
        </div>
        <div className="hv-callout c2">
          <span className="num">02</span>
          <div><b>Cold-cycled</b><span>-30°F tested</span></div>
        </div>
        <div className="hv-callout c3">
          <span className="num">03</span>
          <div><b>Made in USA</b><span>Lifetime guarantee</span></div>
        </div>
      </div>
    );
  }
  if (variant === 'silhouette') {
    return (
      <div className="hv-silhouette">
        <img src={R('skullBrass', 'logos/skull-brass.png')} alt="" />
      </div>
    );
  }
  if (variant === 'rail') {
    return (
      <div className="hv-rail">
        <div className="rail-tick">N&nbsp;44.81<br/>W&nbsp;91.50</div>
        <div className="rail-bar" />
        <div className="rail-text-big">EST · MMXXIV</div>
        <div className="rail-bar" />
        <div className="rail-text">SLS · PA12 · USA</div>
        <div className="rail-bar" />
        <div className="rail-tick">LOT&nbsp;24-A<br/>0317</div>
      </div>
    );
  }
  if (variant === 'ledger') {
    return (
      <div className="hv-ledger">
        <h6>Field Ledger · 2024</h6>
        <ul>
          <li><span>Rounds cycled</span><b>207,418</b></li>
          <li><span>Coldest test</span><b>-30°F</b></li>
          <li><span>Field hours</span><b>3,200+</b></li>
          <li><span>Mag failures</span><b>0</b></li>
        </ul>
        <div className="ledger-foot">VERIFIED · IN-SHOP · WI</div>
      </div>
    );
  }
  return null;
};

const HomePage = ({ navigate, heroVariant = 'product' }) => {
  return (
    <>
      <Announce/>
      <Nav navigate={navigate} currentPage="home" dark />
      {/* Hero */}
      <section className={`home-a-hero ${heroVariant && heroVariant !== 'empty' ? 'has-variant' : ''}`}>
        {heroVariant === 'empty'
          ? <PH label="HERO · BUCK SKULL / RANGE / WILD" tone="moss" style={{position:'absolute', inset:0}} />
          : <div className="hero-bg-moody" />}
        <div className="home-a-hero-overlay" />
        <HeroVariant variant={heroVariant} />
        <div className="home-a-hero-inner">
          <div className="eyebrow brass">EST. MMXXIV · MADE IN AMERICA</div>
          <h1 className="hero-h">BE&nbsp;<em>APEX.</em></h1>
          <p className="hero-sub">Precision rifle components, engineered and 3D-printed for hunters who don't settle. Bolt blocks, magazines, sleds, and accessories built to outlast the rifle.</p>
          <div className="hero-cta">
            <PBtn kind="primary" onClick={() => navigate('#/shop')}>SHOP THE LINE <AR/></PBtn>
            <PBtn kind="ghost-light" onClick={() => navigate('#/tech')}>Our Technology <AR/></PBtn>
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
          <div>
            <div className="eyebrow ink">THE LINE</div>
            <h2 className="h2">Built for the field, not the catalog.</h2>
          </div>
          <a className="see-all" onClick={() => navigate('#/shop')}>See all products <AR/></a>
        </div>
        <div className="grid grid-3">
          <PCard navigate={navigate} product={findProduct('AP-BB-01')} />
          <PCard navigate={navigate} product={findProduct('AP-MAG-10')} />
          <PCard navigate={navigate} product={findProduct('AP-SSS-01')} />
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
          <img src={R('storyWorkshop', 'photos/story-workshop.jpg')} alt="The Apex Predator workshop" />
        </div>
        <div className="story-text">
          <div className="eyebrow ink">OUR STORY</div>
          <h2 className="h2">From the deer camp to the workbench.</h2>
          <p>Apex Predator started in a Washington garage with one stubborn problem: factory magazines that wouldn't feed in the cold. Two seasons later, we'd 3D-printed our way to something better — and we haven't stopped.</p>
          <p>Today every part we ship is designed, tested, and finished by hunters, for hunters. No outsourced foreign tooling, no compromise.</p>
          <PBtn kind="link" onClick={() => navigate('#/about')}>Read the full story <AR/></PBtn>
        </div>
      </section>

      {/* Tech callout */}
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
        <a className="tech-link" onClick={() => navigate('#/tech')}>Deep dive on the process <AR/></a>
      </section>

      {/* Field reports */}
      <section className="section section-light field-reports">
        <div className="section-head">
          <div>
            <div className="eyebrow ink">FIELD REPORTS</div>
            <h2 className="h2">Cycled in -12°F. Filled the freezer.</h2>
          </div>
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

      <Foot navigate={navigate} />
    </>
  );
};

// ============ SHOP ============
const ShopPage = ({ navigate }) => {
  const [selectedCats, setCats] = usePageState([]);
  const [selectedCals, setCals] = usePageState([]);
  const [selectedCaps, setCaps] = usePageState([]);
  const [sort, setSort] = usePageState('featured');
  const [sortOpen, setSortOpen] = usePageState(false);

  const toggle = (set, val, current) => {
    if (current.includes(val)) set(current.filter(x => x !== val));
    else set([...current, val]);
  };

  const filtered = usePageMemo(() => {
    let out = PRODUCTS.slice();
    if (selectedCats.length) out = out.filter(p => selectedCats.includes(p.category));
    if (selectedCals.length) out = out.filter(p => selectedCals.includes(p.fit));
    if (selectedCaps.length) {
      out = out.filter(p => {
        if (selectedCaps.includes('Single') && p.capacity === 1) return true;
        if (selectedCaps.includes('5') && p.capacity === 5) return true;
        if (selectedCaps.includes('10') && p.capacity === 10) return true;
        return false;
      });
    }
    if (sort === 'price-asc')  out.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') out.sort((a, b) => b.price - a.price);
    if (sort === 'name')       out.sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [selectedCats, selectedCals, selectedCaps, sort]);

  const filterCount = selectedCats.length + selectedCals.length + selectedCaps.length;
  const clearAll = () => { setCats([]); setCals([]); setCaps([]); };
  const sortLabels = { featured: 'Featured', 'price-asc': 'Price ↑', 'price-desc': 'Price ↓', name: 'Name A→Z' };

  return (
    <>
      <Announce/>
      <Nav navigate={navigate} currentPage="shop" />
      <div className="page-header">
        <div className="crumbs">
          <span onClick={() => navigate('#/')} style={{cursor:'pointer'}}>Home</span>
          <span>/</span>Shop<span>/</span>All Products
        </div>
        <h1 className="page-h1">The full line</h1>
        <p className="page-sub">{PRODUCTS.length} products. Every one designed, printed, and finished in Washington.</p>
      </div>
      <div className="shop-layout">
        <aside className="shop-filters">
          <div className="ff-block">
            <h6>Category</h6>
            <ul>
              {CATEGORIES.map(c => {
                const count = PRODUCTS.filter(p => p.category === c).length;
                const on = selectedCats.includes(c);
                return (
                  <li key={c} onClick={() => toggle(setCats, c, selectedCats)}>
                    <span className={`cb ${on ? 'on' : ''}`}></span> {c} <i>{count}</i>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ff-block">
            <h6>Caliber / Fit</h6>
            <ul>
              {CALIBERS.map(c => {
                const on = selectedCals.includes(c);
                return (
                  <li key={c} onClick={() => toggle(setCals, c, selectedCals)}>
                    <span className={`cb ${on ? 'on' : ''}`}></span> {c}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ff-block">
            <h6>Capacity</h6>
            <ul>
              {CAPACITIES.map(c => {
                const on = selectedCaps.includes(c);
                return (
                  <li key={c} onClick={() => toggle(setCaps, c, selectedCaps)}>
                    <span className={`cb ${on ? 'on' : ''}`}></span> {c === 'Single' ? 'Single' : `${c}-rd`}
                  </li>
                );
              })}
            </ul>
          </div>
          {filterCount > 0 && (
            <button className="ff-clear" onClick={clearAll}>CLEAR ALL FILTERS ({filterCount})</button>
          )}
        </aside>
        <div className="shop-main">
          <div className="shop-toolbar">
            <div className="shop-count">{filtered.length} products{filterCount > 0 ? ` · ${filterCount} filter${filterCount > 1 ? 's' : ''} applied` : ''}</div>
            <div className="shop-sort" style={{position:'relative'}}>
              <span>Sort</span>
              <span className="sort-pill" onClick={() => setSortOpen(!sortOpen)}>{sortLabels[sort]} ▾</span>
              {sortOpen && (
                <ul className="sort-dropdown" onMouseLeave={() => setSortOpen(false)}>
                  {Object.entries(sortLabels).map(([k, l]) => (
                    <li key={k} className={sort === k ? 'on' : ''}
                        onClick={() => { setSort(k); setSortOpen(false); }}>{l}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="grid grid-3">
            {filtered.length === 0 && (
              <div className="empty-shop">
                No products match those filters.<br/>
                <span style={{ fontSize:11, opacity:0.6, marginTop:8, display:'inline-block' }}>
                  Try clearing one or two.
                </span>
              </div>
            )}
            {filtered.map(p => (
              <PCard key={p.sku} product={p} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>
      <Foot navigate={navigate} />
    </>
  );
};

// ============ PDP ============
const ProductPage = ({ sku, navigate }) => {
  const product = findProduct(sku);
  const { addItem } = useCart();
  const [qty, setQty] = usePageState(1);
  const [fit, setFit] = usePageState(product?.fit);
  const [openAcc, setOpenAcc] = usePageState('specs');
  const [activeThumb, setActiveThumb] = usePageState(0);

  if (!product) {
    return (
      <>
        <Announce/>
        <Nav navigate={navigate} currentPage="shop" />
        <div className="page-header"><h1 className="page-h1">Product not found.</h1>
          <PBtn kind="primary" onClick={() => navigate('#/shop')}>Back to shop <AR/></PBtn></div>
      </>
    );
  }

  const soldOut = product.tag === 'SOLD OUT';
  const fitOptions = product.category === 'Magazines' || product.category === 'Sleds'
    ? ['.30-06', '6.5 Creedmoor', '.270']
    : (product.category === 'Bolt Blocks' ? ['Short Action', 'Long Action'] : null);

  const related = PRODUCTS.filter(p => p.category === product.category && p.sku !== product.sku).slice(0, 4);
  if (related.length < 4) {
    related.push(...PRODUCTS.filter(p => p.category !== product.category && !related.includes(p)).slice(0, 4 - related.length));
  }

  const toggleAcc = (k) => setOpenAcc(openAcc === k ? null : k);

  return (
    <>
      <Announce/>
      <Nav navigate={navigate} currentPage="product" />
      <div className="pdp">
        <div className="pdp-gallery">
          {product.image ? (
            <div className="pdp-main-photo">
              <img src={product.image} alt={product.name} />
            </div>
          ) : (
            <div className="pdp-main-img">
              <PH label={`${product.name.toUpperCase()} · VIEW ${activeThumb + 1}`} tone="wheat" />
            </div>
          )}
          <div className="pdp-thumbs">
            {[0, 1, 2, 3].map(i => (
              <div key={i}
                   className={`thumb ${product.image ? 'thumb-photo' : ''} ${i === activeThumb ? 'on' : ''}`}
                   onClick={() => setActiveThumb(i)}>
                {product.image ? (
                  <img src={product.image} alt="" />
                ) : (
                  <PH label={`${i + 1}`} tone="wheat" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pdp-info">
          <div className="crumbs">
            <span onClick={() => navigate('#/')} style={{cursor:'pointer'}}>Home</span>
            <span>/</span>
            <span onClick={() => navigate('#/shop')} style={{cursor:'pointer'}}>Shop</span>
            <span>/</span>
            {product.category}
          </div>
          {product.tag && (
            <div className="pc-tag" style={{position:'static', display:'inline-block', marginBottom:8}}>
              {product.tag}
            </div>
          )}
          <h1>{product.name}</h1>
          <div className="pdp-sku">{product.sku}{fit ? ` · ${fit}` : ''}</div>
          <div className="price-row">
            <div className="pdp-price">${product.price}</div>
            <div className="pdp-stars">★★★★★</div>
            <div className="pdp-reviews">128 reviews</div>
          </div>
          <p className="pdp-desc">{product.desc}</p>

          {fitOptions && (
            <div className="pdp-variant">
              <h6>{product.category === 'Bolt Blocks' ? 'Action' : 'Caliber / Fit'}</h6>
              <div className="pdp-options">
                {fitOptions.map(f => (
                  <button key={f}
                          className={`pdp-opt ${fit === f ? 'on' : ''}`}
                          onClick={() => setFit(f)}>{f}</button>
                ))}
              </div>
            </div>
          )}

          <div className="pdp-add-row">
            <div className="pdp-qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <PBtn kind="primary" size="lg"
                  style={{flex:1}}
                  disabled={soldOut}
                  onClick={() => !soldOut && addItem(product.sku, qty, { fit })}>
              {soldOut ? 'SOLD OUT' : `ADD ${qty} TO CART · $${product.price * qty}`}
              {!soldOut && <span style={{marginLeft:8}}>→</span>}
            </PBtn>
          </div>

          <div className="pdp-meta-row">
            <div><b>FREE SHIPPING</b><span>orders $99+</span></div>
            <div><b>LIFETIME</b><span>guarantee</span></div>
            <div><b>MADE IN</b><span>Washington, USA</span></div>
          </div>

          <div className="pdp-accordion">
            {[
              ['specs', 'Specifications',
                <table>
                  <tbody>{product.specs.map(([k, v]) => (
                    <tr key={k}><td>{k}</td><td>{v}</td></tr>
                  ))}</tbody>
                </table>],
              ['fit', 'Fitment & Installation',
                <p>Snap-fit, zero-tool installation. Cycles with all major bolt-action receivers in the listed caliber. If your rifle isn't on the list, email us — we'll print a sample.</p>],
              ['shipping', 'Shipping & Returns',
                <p>Free shipping on orders over $99. Ships from Spokane, WA within 1–2 business days. 30-day returns. Lifetime guarantee on every part — if it breaks, we replace it.</p>],
            ].map(([k, h, body]) => (
              <div key={k} className={`pdp-acc-item ${openAcc === k ? 'open' : ''}`}>
                <div className="pdp-acc-h" onClick={() => toggleAcc(k)}>
                  <span>{h}</span>
                  <span className="pdp-acc-arrow">▾</span>
                </div>
                <div className="pdp-acc-body">
                  <div className="pdp-acc-body-inner">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="pdp-related">
        <div className="section-head">
          <div>
            <div className="eyebrow ink">PAIR IT WITH</div>
            <h2 className="h2">Built to go together.</h2>
          </div>
          <a className="see-all" onClick={() => navigate('#/shop')}>All products <AR/></a>
        </div>
        <div className="grid grid-4">
          {related.map(p => <PCard key={p.sku} product={p} navigate={navigate} />)}
        </div>
      </section>

      <Foot navigate={navigate} />
    </>
  );
};

// ============ CART PAGE ============
const CartPage = ({ navigate }) => {
  const { items, updateQty, removeItem, subtotal, addItem } = useCart();
  const tax = subtotal * 0.07;
  const shipping = subtotal === 0 ? 0 : (subtotal >= 99 ? 0 : 12);
  const total = subtotal + tax + shipping;

  return (
    <>
      <Announce/>
      <Nav navigate={navigate} currentPage="cart" />
      <div className="page-header">
        <div className="crumbs">
          <span onClick={() => navigate('#/')} style={{cursor:'pointer'}}>Home</span><span>/</span>Cart
        </div>
        <h1 className="page-h1">Your kit</h1>
        <p className="page-sub">
          {items.length === 0 ? 'No products yet.' :
            `${items.length} product${items.length > 1 ? 's' : ''} · ships in 1–2 business days.`}
        </p>
      </div>

      {items.length === 0 ? (
        <div style={{ textAlign:'center', padding:'40px 28px 100px' }}>
          <p style={{ marginBottom: 18, opacity: 0.6 }}>You haven't added anything to your kit.</p>
          <PBtn kind="primary" onClick={() => navigate('#/shop')}>SHOP THE LINE <AR/></PBtn>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-row-h">
              <span>PRODUCT</span>
              <span>QTY</span>
              <span>PRICE</span>
              <span></span>
            </div>
            {items.map((it, i) => {
              const p = findProduct(it.sku);
              if (!p) return null;
              return (
                <div className="cart-row" key={i}>
                  <div className="cr-prod">
                    <div onClick={() => navigate(`#/product/${p.sku}`)} style={{cursor:'pointer'}}>
                      {p.image ? (
                        <div className="cr-photo"><img src={p.image} alt={p.name} /></div>
                      ) : (
                        <PH label={p.name.toUpperCase()} tone="wheat" width={84} height={104} />
                      )}
                    </div>
                    <div>
                      <div className="cr-name" onClick={() => navigate(`#/product/${p.sku}`)}
                           style={{cursor:'pointer'}}>{p.name}</div>
                      <div className="cr-sku">{p.sku}{it.variant?.fit ? ` · ${it.variant.fit}` : ''}</div>
                      <div className="cr-actions">
                        <span onClick={() => navigate(`#/product/${p.sku}`)}>View</span>
                        <span>·</span>
                        <span onClick={() => removeItem(i)}>Remove</span>
                      </div>
                    </div>
                  </div>
                  <div className="cr-qty">
                    <button onClick={() => updateQty(i, it.qty - 1)}>−</button>
                    <span>{it.qty}</span>
                    <button onClick={() => updateQty(i, it.qty + 1)}>+</button>
                  </div>
                  <div className="cr-price">${(p.price * it.qty).toFixed(2)}</div>
                  <div className="cr-x" onClick={() => removeItem(i)}>×</div>
                </div>
              );
            })}
            <div className="cart-upsell">
              <div className="eyebrow ink">PAIR IT WITH</div>
              <div className="upsell-row">
                {['AP-LDR-01','AP-FP-02','AP-ACC-K1'].map(sk => (
                  <PCard key={sk} product={findProduct(sk)} navigate={navigate} size="sm" />
                ))}
              </div>
            </div>
          </div>
          <aside className="cart-summary">
            <h4>Order summary</h4>
            <div className="cs-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="cs-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
            <div className="cs-row"><span>Sales tax (est.)</span><span>${tax.toFixed(2)}</span></div>
            <div className="cs-divider"></div>
            <div className="cs-total"><span>TOTAL</span><span>${total.toFixed(2)}</span></div>
            <div className="cs-promo">
              <input placeholder="Promo code" />
              <button>APPLY</button>
            </div>
            <PBtn kind="primary"
                  style={{width:'100%', marginTop:14}}
                  onClick={() => alert('In production: redirect to Shopify checkout')}>
              CHECKOUT <AR/>
            </PBtn>
            <div className="cs-trust">
              <div>🔒 Secure checkout · Shopify</div>
              <div>↻ Free returns within 30 days</div>
              <div>★ Lifetime guarantee on every part</div>
            </div>
          </aside>
        </div>
      )}
      <Foot navigate={navigate} />
    </>
  );
};

Object.assign(window, { HomePage, ShopPage, ProductPage, CartPage });
