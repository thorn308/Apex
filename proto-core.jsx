// Apex Predator — interactive prototype.
// Hash-based router, cart context + drawer, live filters, full PDP.
// Reuses brand atoms from brand.jsx and styles from styles.css + prototype-styles.css.

const { useState, useEffect, useMemo, useCallback, useRef, createContext, useContext } = React;
const { Skull, Logo, LogoStack, Placeholder, ArrowR } = window;

// Resource resolver — when bundled standalone the host populates
// window.__resources with blob: URLs; otherwise we fall back to the
// original relative paths so the live dev prototype still loads them.
const R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

// ============ DATA ============
const PRODUCTS = [
  { sku:'AP-BB-01',    name:'Bolt Block',                 price:54, category:'Bolt Blocks',  fit:'Short Action',  capacity:null, tag:'NEW',
    image:'photos/bolt-block.png',
    desc:'Snap-fit bolt block, SLS-printed in PA12. Zero-tool install, dead-quiet operation, lifetime guaranteed.',
    specs:[['Material','SLS PA12 Nylon'],['Weight','0.4 oz'],['Action','Short'],['Tolerance','±0.1 mm'],['Origin','Made in USA']] },
  { sku:'AP-BB-LA',    name:'Bolt Block — Long Action',   price:58, category:'Bolt Blocks',  fit:'Long Action',   capacity:null, tag:null,
    desc:'Long-action variant of our flagship bolt block. Same snap-fit, same lifetime warranty.',
    specs:[['Material','SLS PA12 Nylon'],['Weight','0.45 oz'],['Action','Long'],['Tolerance','±0.1 mm'],['Origin','Made in USA']] },
  { sku:'AP-MAG-10',   name:'10-Round Magazine',          price:39, category:'Magazines',    fit:'.30-06',        capacity:10,   tag:null,
    image:'photos/mag-10rd.png',
    desc:'10-round box magazine. Cold-cycled to -30°F. Feeds when factory mags won\'t.',
    specs:[['Material','SLS PA12 Nylon'],['Capacity','10 rounds'],['Caliber','.30-06 / .270'],['Cold rating','-30°F'],['Origin','Made in USA']] },
  { sku:'AP-MAG-05',   name:'5-Round Magazine',           price:29, category:'Magazines',    fit:'.30-06',        capacity:5,    tag:null,
    image:'photos/mag-5rd.png',
    desc:'Compact 5-round mag. Same feed reliability, smaller footprint.',
    specs:[['Material','SLS PA12 Nylon'],['Capacity','5 rounds'],['Caliber','.30-06 / .270'],['Cold rating','-30°F'],['Origin','Made in USA']] },
  { sku:'AP-MAG-3006', name:'Magazine · 30-06 / .270',    price:39, category:'Magazines',    fit:'.30-06',        capacity:10,   tag:'LOW STOCK',
    desc:'10-round mag tuned for .30-06 and .270 platforms.',
    specs:[['Material','SLS PA12 Nylon'],['Capacity','10 rounds'],['Caliber','.30-06 / .270'],['Cold rating','-30°F'],['Origin','Made in USA']] },
  { sku:'AP-MAG-65',   name:'Magazine · 6.5 Creedmoor',   price:39, category:'Magazines',    fit:'6.5 Creedmoor', capacity:10,   tag:null,
    desc:'Long-range hunter\'s favorite, cut for 6.5 Creedmoor.',
    specs:[['Material','SLS PA12 Nylon'],['Capacity','10 rounds'],['Caliber','6.5 Creedmoor'],['Cold rating','-30°F'],['Origin','Made in USA']] },
  { sku:'AP-SSS-01',   name:'Single Shot Sled',           price:48, category:'Sleds',        fit:'.30-06',        capacity:1,    tag:null,
    image:'photos/sled.png',
    desc:'Convert your detachable magazine to a precision single-shot loading port. Half the reloads, twice the shots.',
    specs:[['Material','SLS PA12 Nylon'],['Type','Single-shot sled'],['Caliber','.30-06'],['Weight','0.5 oz'],['Origin','Made in USA']] },
  { sku:'AP-SSS-65',   name:'Sled · 6.5 Creedmoor',       price:48, category:'Sleds',        fit:'6.5 Creedmoor', capacity:1,    tag:null,
    desc:'Single-shot sled cut for 6.5 Creedmoor magazine boxes.',
    specs:[['Material','SLS PA12 Nylon'],['Type','Single-shot sled'],['Caliber','6.5 Creedmoor'],['Weight','0.5 oz'],['Origin','Made in USA']] },
  { sku:'AP-FP-02',    name:'Magazine Floorplate',        price:18, category:'Accessories',  fit:'Universal',     capacity:null, tag:null,
    desc:'Replacement floorplate for our magazine line. Snap-fit, hand-finished.',
    specs:[['Material','SLS PA12 Nylon'],['Type','Floorplate'],['Origin','Made in USA']] },
  { sku:'AP-LDR-01',   name:'Loader Tool',                price:14, category:'Accessories',  fit:'Universal',     capacity:null, tag:null,
    desc:'Speed-loader for our 10-round mags. Saves thumbs in cold weather.',
    specs:[['Material','SLS PA12 Nylon'],['Type','Loader'],['Origin','Made in USA']] },
  { sku:'AP-ACC-K1',   name:'Accessory Kit',              price:24, category:'Accessories',  fit:'Universal',     capacity:null, tag:null,
    desc:'Cleaning kit, loader tool, and floorplate spare in one bundle.',
    specs:[['Includes','Loader · Floorplate · Cleaning kit'],['Origin','Made in USA']] },
  { sku:'AP-CK-01',    name:'Field Cleaning Kit',         price:32, category:'Accessories',  fit:'Universal',     capacity:null, tag:'SOLD OUT',
    desc:'Compact field cleaning kit. Brass-bristle brushes, microfiber, oil.',
    specs:[['Type','Cleaning kit'],['Origin','Made in USA']] },
];

const CATEGORIES = ['Magazines', 'Bolt Blocks', 'Sleds', 'Accessories'];
const CALIBERS   = ['.30-06', '6.5 Creedmoor', '.270', 'Universal'];
const CAPACITIES = ['5', '10', 'Single'];

const findProduct = (sku) => PRODUCTS.find(p => p.sku === sku);

// ============ ROUTING ============
function useRouter() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = useCallback((to) => {
    window.location.hash = to;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return [hash, navigate];
}

const parseRoute = (hash) => {
  const path = hash.replace(/^#/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return { page: 'home' };
  if (parts[0] === 'shop') return { page: 'shop' };
  if (parts[0] === 'cart') return { page: 'cart' };
  if (parts[0] === 'product') return { page: 'product', sku: parts[1] };
  if (parts[0] === 'about') return { page: 'about' };
  if (parts[0] === 'tech') return { page: 'tech' };
  if (parts[0] === 'contact') return { page: 'contact' };
  return { page: 'home' };
};

// ============ CART CONTEXT ============
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ap-cart') || '[]'); }
    catch { return []; }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [bump, setBump] = useState(false);
  const toastTimer = useRef();
  const bumpTimer = useRef();

  useEffect(() => {
    localStorage.setItem('ap-cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((sku, qty = 1, variant = {}) => {
    setItems(curr => {
      const key = sku + '|' + (variant.fit||'') + '|' + (variant.cap||'');
      const ix = curr.findIndex(it => (it.sku + '|' + (it.variant?.fit||'') + '|' + (it.variant?.cap||'')) === key);
      if (ix >= 0) {
        const next = [...curr];
        next[ix] = { ...next[ix], qty: next[ix].qty + qty };
        return next;
      }
      return [...curr, { sku, qty, variant, addedAt: Date.now() }];
    });
    setBump(true);
    clearTimeout(bumpTimer.current);
    bumpTimer.current = setTimeout(() => setBump(false), 400);
    setDrawerOpen(true);
    const p = findProduct(sku);
    setToast({ name: p?.name || sku });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  const updateQty = useCallback((index, qty) => {
    setItems(curr => {
      if (qty <= 0) return curr.filter((_, i) => i !== index);
      return curr.map((it, i) => i === index ? { ...it, qty } : it);
    });
  }, []);

  const removeItem = useCallback((index) => {
    setItems(curr => curr.filter((_, i) => i !== index));
  }, []);

  const count = items.reduce((s, it) => s + it.qty, 0);
  const subtotal = items.reduce((s, it) => {
    const p = findProduct(it.sku);
    return s + (p ? p.price * it.qty : 0);
  }, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, updateQty, removeItem, count, subtotal,
      drawerOpen, setDrawerOpen, bump, toast, setToast,
    }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

// ============ ATOMS ============
const PBtn = ({ children, kind = 'primary', size = 'md', icon, onClick, style, disabled }) => (
  <button
    className={`ap-btn ap-btn-${kind} ap-btn-${size}`}
    onClick={onClick}
    style={style}
    disabled={disabled}
  >
    <span>{children}</span>
    {icon && <span className="ap-btn-icon">{icon}</span>}
  </button>
);

// Interactive product card — click goes to PDP, quick-add button on hover
const PCard = ({ product, navigate, size = 'md' }) => {
  const { addItem } = useCart();
  const soldOut = product.tag === 'SOLD OUT';
  return (
    <div className={`pc pc-${size}`} onClick={() => navigate(`#/product/${product.sku}`)}>
      <div className="pc-media">
        {product.image ? (
          <div className="pc-photo" style={{ aspectRatio: '4/5' }}>
            <img src={product.image} alt={product.name} />
          </div>
        ) : (
          <Placeholder label={product.name.toUpperCase()} tone="wheat" ratio="4/5" />
        )}
        {product.tag && <div className="pc-tag">{product.tag}</div>}
        {!soldOut && (
          <button className="pc-quick-add" onClick={(e) => {
            e.stopPropagation();
            addItem(product.sku, 1, { fit: product.fit });
          }}>
            QUICK ADD
          </button>
        )}
      </div>
      <div className="pc-meta">
        <div className="pc-name">{product.name}</div>
        <div className="pc-sku">{product.sku}{product.fit ? ` · ${product.fit}` : ''}</div>
      </div>
      <div className="pc-foot">
        <div className="pc-price">${product.price}</div>
        <div className="pc-add">{soldOut ? 'View' : 'Add to cart'} <ArrowR/></div>
      </div>
    </div>
  );
};

// ============ CHROME ============
const Announce = () => (
  <div className="ap-announce">
    <span>FREE&nbsp;SHIPPING&nbsp;ON&nbsp;ORDERS&nbsp;OVER&nbsp;$99</span>
    <span className="dot">·</span>
    <span>LIFETIME&nbsp;GUARANTEE</span>
    <span className="dot">·</span>
    <span>MADE&nbsp;IN&nbsp;THE&nbsp;USA</span>
  </div>
);

const Nav = ({ navigate, currentPage, dark = false }) => {
  const { count, bump, setDrawerOpen } = useCart();
  const links = [
    ['Shop', '#/shop'],
    ['Technology', '#/tech'],
    ['Our Story', '#/about'],
    ['Dealers', '#/contact'],
    ['Contact', '#/contact'],
  ];
  const activeFor = (label) => {
    if (label === 'Shop' && currentPage === 'shop') return true;
    if (label === 'Shop' && currentPage === 'product') return true;
    if (label === 'Technology' && currentPage === 'tech') return true;
    if (label === 'Our Story' && currentPage === 'about') return true;
    if (label === 'Contact' && currentPage === 'contact') return true;
    return false;
  };
  return (
    <div className={`ap-nav ${dark ? 'is-dark' : ''}`}>
      <div className="ap-nav-inner">
        <div onClick={() => navigate('#/')} style={{ cursor:'pointer' }}>
          <Logo size={36} tone={dark ? 'bone' : 'ink'} wordSize={14} descriptor={false} />
        </div>
        <nav className="ap-nav-links">
          {links.map(([l, to]) => (
            <a key={l} className={activeFor(l) ? 'is-active' : ''} onClick={() => navigate(to)}>{l}</a>
          ))}
        </nav>
        <div className="ap-nav-right">
          <button className="ham-btn" onClick={() => window.dispatchEvent(new CustomEvent('ap-open-menu'))} aria-label="Menu">≡</button>
          <span className="ic" title="Search">⌕</span>
          <span className="ic cart" title="Cart" onClick={() => setDrawerOpen(true)}>
            <span>⊠</span>
            {count > 0 && <span className={`cart-count ${bump ? 'bump' : ''}`}>{count}</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ open, onClose, navigate, currentPage }) => {
  const links = [
    ['Shop', '#/shop', 'shop'],
    ['Technology', '#/tech', 'tech'],
    ['Our Story', '#/about', 'about'],
    ['Cart', '#/cart', 'cart'],
    ['Contact', '#/contact', 'contact'],
  ];
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <div className="mm-head">
        <Logo size={32} tone="bone" wordSize={13} descriptor={false} />
        <span className="close" onClick={onClose}>✕</span>
      </div>
      <div className="mm-links">
        {links.map(([l, to, page]) => (
          <a key={l}
             className={currentPage === page ? 'is-active' : ''}
             onClick={() => { navigate(to); onClose(); }}>{l}</a>
        ))}
      </div>
      <div className="mm-foot">© 2026 APEX PREDATOR · MADE IN USA</div>
    </div>
  );
};

const Foot = ({ navigate }) => (
  <footer className="ap-foot">
    <div className="ap-foot-top">
      <p className="ap-foot-tag">BE APEX.</p>
      <div className="ap-foot-social">
        <span title="Instagram">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none"/>
          </svg>
        </span>
        <span title="Facebook" className="letter">f</span>
        <span title="YouTube">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2.5" y="6" width="19" height="12" rx="3"/>
            <path d="M10.5 9l5 3-5 3z" fill="currentColor" stroke="none"/>
          </svg>
        </span>
        <span title="X" className="letter">X</span>
      </div>
      <div className="ap-foot-news">
        <div className="ap-foot-input">
          <input placeholder="your.email@hunt.com" />
          <button>JOIN ↗</button>
        </div>
      </div>
    </div>
    <div className="ap-foot-bottom">
      <div className="ap-foot-bottom-inner">
        <span>© 2026 APEX PREDATOR</span>
        <a>Privacy policy</a>
        <a>Refund policy</a>
        <a>Terms of service</a>
        <a>Shipping policy</a>
        <a onClick={() => navigate('#/contact')}>Contact information</a>
        <a>Cookie preferences</a>
      </div>
    </div>
  </footer>
);

// ============ CART DRAWER ============
const CartDrawer = ({ navigate }) => {
  const { items, drawerOpen, setDrawerOpen, updateQty, removeItem, subtotal } = useCart();
  return (
    <>
      <div className={`cart-backdrop ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`cart-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="cart-drawer-h">
          <h3>Your kit · {items.length}</h3>
          <span className="close" onClick={() => setDrawerOpen(false)}>✕</span>
        </div>
        <div className="cart-drawer-body">
          {items.length === 0 && (
            <div className="cart-drawer-empty">
              <p>Your kit is empty.</p>
              <PBtn kind="primary" onClick={() => { setDrawerOpen(false); navigate('#/shop'); }}>
                SHOP THE LINE <ArrowR/>
              </PBtn>
            </div>
          )}
          {items.map((it, i) => {
            const p = findProduct(it.sku);
            if (!p) return null;
            return (
              <div className="cart-line" key={i}>
                <div className="cl-img">
                  {p.image ? (
                    <div className="cl-photo"><img src={p.image} alt="" /></div>
                  ) : (
                    <Placeholder label={p.name.split(' ')[0].toUpperCase()} tone="wheat" />
                  )}
                </div>
                <div>
                  <div className="cl-name">{p.name}</div>
                  <div className="cl-sku">{p.sku}</div>
                  {it.variant?.fit && <div className="cl-variant">{it.variant.fit}</div>}
                  <div className="cl-qty">
                    <button onClick={() => updateQty(i, it.qty - 1)}>−</button>
                    <span>{it.qty}</span>
                    <button onClick={() => updateQty(i, it.qty + 1)}>+</button>
                  </div>
                </div>
                <div className="cl-right">
                  <div className="cl-price">${p.price * it.qty}</div>
                  <span className="cl-x" onClick={() => removeItem(i)}>✕</span>
                </div>
              </div>
            );
          })}
        </div>
        {items.length > 0 && (
          <div className="cart-drawer-f">
            <div className="cs-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="cs-row"><span>Shipping</span><span>{subtotal >= 99 ? 'FREE' : 'Calculated at checkout'}</span></div>
            <div className="cs-divider"></div>
            <div className="cs-total"><span>TOTAL</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="drawer-ctas">
              <PBtn kind="primary" onClick={() => { setDrawerOpen(false); window.location.hash = '#/checkout'; setTimeout(() => alert('In production: redirect to Shopify checkout'), 100); }}>
                CHECKOUT <ArrowR/>
              </PBtn>
              <PBtn kind="ghost-dark" onClick={() => { setDrawerOpen(false); navigate('#/cart'); }}>
                View full cart <ArrowR/>
              </PBtn>
            </div>
            <div className="cs-trust-small">🔒 SECURE CHECKOUT · ↻ 30-DAY RETURNS · ★ LIFETIME</div>
          </div>
        )}
      </aside>
    </>
  );
};

const Toast = () => {
  const { toast } = useCart();
  return (
    <div className={`toast ${toast ? 'show' : ''}`}>
      <span className="check">✓</span>
      <span>Added to your kit</span>
    </div>
  );
};

Object.assign(window, { PRODUCTS, CATEGORIES, CALIBERS, CAPACITIES, findProduct,
  useRouter, parseRoute, CartProvider, useCart, PBtn, PCard,
  Announce, Nav, MobileMenu, Foot, CartDrawer, Toast });
