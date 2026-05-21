// Apex Predator — shared brand atoms (logo, nav, footer, buttons, cards,
// placeholders). Exported to window so other Babel script blocks can use them.

const { useState } = React;

// Resource resolver — bundled standalone exports populate window.__resources
// with blob: URLs; in dev we fall back to the original relative paths.
const R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;
window.R = R;

// ============== ATOMS ==============

const Skull = ({ size = 40, tone = 'ink' }) => {
  const src = {
    ink:   R('skullInk',   'logos/skull-ink.png'),
    bone:  R('skullBone',  'logos/skull-bone.png'),
    brass: R('skullBrass', 'logos/skull-brass.png'),
  }[tone] || R('skullInk', 'logos/skull-ink.png');
  return <img src={src} alt="" style={{ width:size, height:size, objectFit:'contain', display:'block' }} />;
};

// Direction A lockup — primary logo throughout the site
const Logo = ({ size = 32, tone = 'ink', wordSize, descriptor = true }) => {
  const ws = wordSize ?? size * 0.40;
  const c = tone === 'bone' ? '#f4f1ea' : (tone === 'brass' ? '#b58c4a' : '#0a0a0a');
  return (
    <div className="logo-row" style={{ color: c }}>
      <Skull size={size} tone={tone} />
      <div className="logo-words">
        <div className="logo-word" style={{ fontSize: ws }}>APEX&nbsp;PREDATOR</div>
        {descriptor && (
          <div className="logo-desc" style={{ fontSize: Math.max(7, ws*0.28) }}>
            Precision&nbsp;·&nbsp;Made&nbsp;in&nbsp;USA
          </div>
        )}
      </div>
    </div>
  );
};

// Stacked vertical logo (centered)
const LogoStack = ({ size = 56, tone = 'ink' }) => {
  const c = tone === 'bone' ? '#f4f1ea' : (tone === 'brass' ? '#b58c4a' : '#0a0a0a');
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, color:c }}>
      <Skull size={size} tone={tone} />
      <div className="logo-word" style={{ fontSize:size*0.32 }}>APEX&nbsp;PREDATOR</div>
    </div>
  );
};

const Btn = ({ children, kind = 'primary', size = 'md', icon, style }) => {
  const cls = `ap-btn ap-btn-${kind} ap-btn-${size}`;
  return (
    <button className={cls} style={style}>
      <span>{children}</span>
      {icon && <span className="ap-btn-icon">{icon}</span>}
    </button>
  );
};

const ArrowR = () => <span style={{display:'inline-block', transform:'translateY(-1px)'}}>→</span>;

// Striped image placeholder with a monospace label
const Placeholder = ({ label = 'IMAGE', tone = 'wheat', ratio, height, width, style }) => {
  const styleObj = { ...style };
  if (ratio) styleObj.aspectRatio = ratio;
  if (height) styleObj.height = height;
  if (width) styleObj.width = width;
  return (
    <div className={`ap-ph ap-ph-${tone}`} style={styleObj}>
      <span>{label}</span>
    </div>
  );
};

// Product card (used in catalog + featured rows)
const ProductCard = ({ name, sku, price, tag, ratio = '4/5', size = 'md' }) => (
  <div className={`pc pc-${size}`}>
    <div className="pc-media">
      <Placeholder label={name.toUpperCase()} tone="wheat" ratio={ratio} />
      {tag && <div className="pc-tag">{tag}</div>}
    </div>
    <div className="pc-meta">
      <div className="pc-name">{name}</div>
      <div className="pc-sku">{sku}</div>
    </div>
    <div className="pc-foot">
      <div className="pc-price">{price}</div>
      <div className="pc-add">Add to cart <ArrowR/></div>
    </div>
  </div>
);

// ============== CHROME ==============

const SiteAnnouncement = () => (
  <div className="ap-announce">
    <span>FREE&nbsp;SHIPPING&nbsp;ON&nbsp;ORDERS&nbsp;OVER&nbsp;$99</span>
    <span className="dot">·</span>
    <span>LIFETIME&nbsp;GUARANTEE</span>
    <span className="dot">·</span>
    <span>MADE&nbsp;IN&nbsp;THE&nbsp;USA</span>
  </div>
);

const DesktopNav = ({ active, dark = false }) => (
  <div className={`ap-nav ${dark ? 'is-dark' : ''}`}>
    <div className="ap-nav-inner">
      <Logo size={36} tone={dark ? 'bone' : 'ink'} wordSize={14} descriptor={false} />
      <nav className="ap-nav-links">
        {['Shop', 'Technology', 'Our Story', 'Dealers', 'Contact'].map(l => (
          <a key={l} className={active === l ? 'is-active' : ''}>{l}</a>
        ))}
      </nav>
      <div className="ap-nav-right">
        <span className="ic">⌕</span>
        <span className="ic">♡</span>
        <span className="ic cart">
          <span className="cart-icon">⊠</span>
          <span className="cart-count">2</span>
        </span>
      </div>
    </div>
  </div>
);

// Mobile chrome: phone status bar + mobile nav
const MobileStatusBar = ({ dark = false }) => (
  <div className={`ap-status ${dark ? 'is-dark' : ''}`}>
    <span>9:41</span>
    <span className="dots">•••</span>
    <span>📶 100%</span>
  </div>
);

const MobileNav = ({ dark = false }) => (
  <div className={`ap-mnav ${dark ? 'is-dark' : ''}`}>
    <span className="ham">≡</span>
    <Logo size={26} tone={dark ? 'bone' : 'ink'} wordSize={11} descriptor={false} />
    <div className="ap-mnav-r">
      <span>⌕</span>
      <span className="cart-mini">⊠<i>2</i></span>
    </div>
  </div>
);

const Footer = () => (
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
          <input placeholder="your.email@hunt.com" readOnly />
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
        <a>Contact information</a>
        <a>Cookie preferences</a>
      </div>
    </div>
  </footer>
);

const MobileFooter = () => (
  <footer className="ap-foot-m">
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
    <div className="ap-foot-input">
      <input placeholder="your.email@hunt.com" readOnly />
      <button>JOIN</button>
    </div>
    <div className="ap-foot-bottom-m">
      <div className="ap-foot-legal-m">
        <span>© 2026 APEX PREDATOR</span>
        <a>Privacy</a><a>Refund</a><a>Terms</a>
        <a>Shipping</a><a>Contact</a><a>Cookies</a>
      </div>
    </div>
  </footer>
);

// ============== EXPORT TO WINDOW ==============
Object.assign(window, {
  Skull, Logo, LogoStack, Btn, ArrowR, Placeholder, ProductCard,
  SiteAnnouncement, DesktopNav, MobileStatusBar, MobileNav, Footer, MobileFooter,
});
