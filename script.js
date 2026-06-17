:root {
  /* Menorah Gold LLP static website palette */
  --maroon: #4b0f1b;
  --maroon-2: #6e1a2a;
  --maroon-3: #2b0710;
  --gold: #c9a35a;
  --gold-deep: #9a6e2c;
  --ivory: #fff8eb;
  --ivory-2: #f5ead8;
  --paper: #ffffff;
  --black: #110b0d;
  --ink: #2c1b1f;
  --muted: #766a66;
  --line: rgba(75, 15, 27, 0.13);
  --line-light: rgba(255, 255, 255, 0.16);
  --shadow-soft: 0 20px 60px rgba(40, 14, 20, 0.09);
  --shadow-deep: 0 34px 90px rgba(31, 8, 13, 0.26);
  --header-height: 76px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + 22px);
  overflow-x: clip;
}

body {
  margin: 0;
  min-width: 320px;
  overflow-x: clip;
  color: var(--ink);
  background: var(--ivory);
  font-family: "Segoe UI", Tahoma, Arial, sans-serif;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body.menu-open {
  overflow: hidden;
}

body::selection {
  color: var(--paper);
  background: var(--maroon-2);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(calc(100% - 40px), 1240px);
  margin-inline: auto;
}

.skip-link {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 100;
  padding: 10px 14px;
  border-radius: 999px;
  color: var(--paper);
  background: var(--black);
  transform: translateY(-150%);
  transition: transform 180ms ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 90;
  min-height: var(--header-height);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--paper);
  background: rgba(17, 11, 13, 0.28);
  backdrop-filter: blur(18px);
  transition:
    background 260ms ease,
    color 260ms ease,
    box-shadow 260ms ease,
    border-color 260ms ease;
}

.site-header.is-scrolled,
.site-header.is-open {
  color: var(--ink);
  background: rgba(255, 248, 235, 0.94);
  border-color: var(--line);
  box-shadow: 0 10px 30px rgba(31, 8, 13, 0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-height);
  gap: 22px;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  gap: 12px;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: contain;
  background: rgba(255, 248, 235, 0.88);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.brand-copy {
  display: grid;
  line-height: 1.05;
}

.brand-copy span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.12rem, 1.8vw, 1.45rem);
  letter-spacing: 0.02em;
}

.brand-copy small {
  margin-top: 2px;
  color: var(--gold);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.26em;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.3vw, 32px);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-nav a {
  position: relative;
  padding-block: 8px;
  color: currentColor;
  transition: color 180ms ease;
}

.site-nav a:not(.nav-cta)::after {
  position: absolute;
  right: 0;
  bottom: 2px;
  left: 0;
  height: 1px;
  background: var(--gold);
  content: "";
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 220ms ease;
}

.site-nav a:hover::after,
.site-nav a.is-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-cta {
  padding: 11px 18px;
  border: 1px solid rgba(201, 163, 90, 0.55);
  border-radius: 999px;
  color: var(--paper);
  background: rgba(201, 163, 90, 0.12);
}

.site-header.is-scrolled .nav-cta,
.site-header.is-open .nav-cta {
  color: var(--maroon);
  background: rgba(201, 163, 90, 0.14);
}

.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid currentColor;
  border-radius: 50%;
  color: currentColor;
  background: transparent;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 999px;
  background: currentColor;
  transition:
    transform 220ms ease,
    opacity 220ms ease;
}

.site-header.is-open .menu-toggle span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.site-header.is-open .menu-toggle span:nth-child(2) {
  opacity: 0;
}

.site-header.is-open .menu-toggle span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.hero {
  position: relative;
  display: grid;
  align-items: center;
  min-height: 88svh;
  padding-top: var(--header-height);
  overflow: hidden;
  color: var(--paper);
  background: var(--black);
}

.hero-media,
.hero-shade {
  position: absolute;
  inset: 0;
}

.hero-media {
  background:
    linear-gradient(90deg, rgba(17, 11, 13, 0.8) 0%, rgba(43, 7, 16, 0.55) 42%, rgba(17, 11, 13, 0.22) 100%),
    url("./assets/hero-jewellery.jpg") center / cover no-repeat;
  transform: scale(1.04);
  animation: heroDrift 18s ease-in-out infinite alternate;
}

.hero-shade {
  background:
    radial-gradient(circle at 22% 45%, rgba(201, 163, 90, 0.2), transparent 34%),
    linear-gradient(180deg, rgba(17, 11, 13, 0.32), rgba(17, 11, 13, 0.76));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
  padding-block: clamp(70px, 11vw, 138px);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px;
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.24em;
  line-height: 1.4;
  text-transform: uppercase;
}

.eyebrow::before {
  display: inline-block;
  width: 34px;
  height: 1px;
  background: currentColor;
  content: "";
}

.hero h1,
.section h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: 0;
}

.hero h1 {
  max-width: 760px;
  color: #fff2d5;
  font-size: clamp(3.25rem, 9.5vw, 8.2rem);
  line-height: 0.9;
  text-wrap: balance;
}

.hero-lede {
  max-width: 660px;
  margin: 28px 0 0;
  color: rgba(255, 248, 235, 0.78);
  font-size: clamp(1rem, 1.6vw, 1.3rem);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 38px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 14px 22px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.83rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    background 220ms ease,
    color 220ms ease,
    border-color 220ms ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button-primary {
  color: var(--maroon-3);
  background: linear-gradient(135deg, #ead19a, var(--gold));
  box-shadow: 0 18px 45px rgba(201, 163, 90, 0.26);
}

.button-primary:hover,
.button-primary:focus-visible {
  box-shadow: 0 24px 55px rgba(201, 163, 90, 0.32);
}

.button-light {
  color: var(--paper);
  border-color: rgba(255, 255, 255, 0.36);
  background: rgba(255, 255, 255, 0.08);
}

.button-light:hover,
.button-light:focus-visible {
  border-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.14);
}

.hero-proof {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 680px;
  margin: 48px 0 0;
  border-top: 1px solid var(--line-light);
  border-bottom: 1px solid var(--line-light);
}

.hero-proof div {
  padding: 20px 20px 20px 0;
  border-right: 1px solid var(--line-light);
}

.hero-proof div + div {
  padding-left: 20px;
}

.hero-proof div:last-child {
  border-right: 0;
}

.hero-proof dt {
  color: var(--gold);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.28rem, 2vw, 1.75rem);
  line-height: 1.05;
}

.hero-proof dd {
  margin: 7px 0 0;
  color: rgba(255, 248, 235, 0.65);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-cue {
  position: absolute;
  right: 50%;
  bottom: 22px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 248, 235, 0.76);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transform: translateX(50%);
}

.hero-cue::after {
  width: 38px;
  height: 1px;
  background: currentColor;
  content: "";
}

.trust-strip {
  color: var(--paper);
  background: var(--maroon-3);
}

.trust-strip-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.trust-strip-grid div {
  display: grid;
  gap: 8px;
  min-height: 112px;
  align-content: center;
  padding: 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.trust-strip-grid div:first-child {
  padding-left: 0;
}

.trust-strip-grid div:last-child {
  border-right: 0;
  padding-right: 0;
}

.trust-strip-grid span {
  color: var(--gold);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.35rem;
}

.trust-strip-grid strong {
  color: rgba(255, 248, 235, 0.82);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
}

.section {
  position: relative;
  padding-block: clamp(78px, 9vw, 128px);
}

.section-heading {
  max-width: 760px;
}

.section-heading.centered {
  margin-inline: auto;
  text-align: center;
}

.section-heading.centered .eyebrow {
  justify-content: center;
}

.section h2 {
  color: var(--maroon-3);
  font-size: clamp(2.35rem, 5.2vw, 5rem);
  line-height: 0.98;
  text-wrap: balance;
}

.section p {
  color: var(--muted);
}

.section-copy > p:not(.eyebrow),
.section-heading > p:not(.eyebrow) {
  max-width: 650px;
  margin: 22px 0 0;
  font-size: 1rem;
  line-height: 1.85;
}

.section-heading.centered > p:not(.eyebrow) {
  margin-inline: auto;
}

.about-section,
.gallery-section {
  background: var(--ivory);
}

.about-grid,
.why-grid,
.trust-grid,
.contact-grid,
.faq-grid {
  display: grid;
  align-items: center;
  gap: clamp(40px, 7vw, 88px);
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
}

.about-signature {
  display: inline-grid;
  margin-top: 34px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

.about-signature span {
  color: var(--maroon);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.45rem;
}

.about-signature small {
  color: var(--gold-deep);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.image-panel {
  position: relative;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  background: var(--maroon-3);
  box-shadow: var(--shadow-deep);
}

.image-panel img {
  width: 100%;
  min-height: 520px;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
}

.image-panel:hover img {
  transform: scale(1.04);
}

.image-panel::after {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.image-panel figcaption {
  position: absolute;
  right: 24px;
  bottom: 24px;
  left: 24px;
  display: grid;
  gap: 6px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.32);
  color: var(--paper);
}

.image-panel figcaption span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.55rem, 3vw, 2.2rem);
}

.image-panel figcaption small {
  max-width: 420px;
  color: rgba(255, 248, 235, 0.76);
}

.plans-section {
  color: var(--paper);
  background:
    linear-gradient(rgba(43, 7, 16, 0.92), rgba(43, 7, 16, 0.94)),
    url("./assets/gold-texture.jpg") center / cover fixed;
}

.plans-section .section-heading h2,
.plans-section .section-heading p {
  color: var(--paper);
}

.plans-section .section-heading p {
  color: rgba(255, 248, 235, 0.68);
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 54px;
}

.plan-card,
.reason-card,
.enquiry-form {
  border-radius: 8px;
  box-shadow: var(--shadow-soft);
}

.plan-card {
  display: flex;
  flex-direction: column;
  min-height: 390px;
  padding: clamp(26px, 4vw, 38px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.07);
  transition:
    transform 260ms ease,
    border-color 260ms ease,
    background 260ms ease;
}

.plan-card:hover {
  transform: translateY(-8px);
  border-color: rgba(201, 163, 90, 0.45);
  background: rgba(255, 255, 255, 0.1);
}

.plan-card.featured {
  color: var(--maroon-3);
  background: linear-gradient(140deg, #f7e2ad, #c7a058);
}

.card-kicker {
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.featured .card-kicker {
  color: var(--maroon);
}

.plan-card h3,
.reason-card h3 {
  margin: 18px 0 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.55rem, 2.4vw, 2.35rem);
  font-weight: 500;
  line-height: 1.08;
}

.plan-card p {
  flex: 1;
  margin: 18px 0 0;
  color: rgba(255, 248, 235, 0.68);
}

.plan-card.featured p {
  color: rgba(43, 7, 16, 0.75);
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 30px;
  color: var(--gold);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.featured .text-link {
  color: var(--maroon);
}

.text-link span {
  transition: transform 200ms ease;
}

.text-link:hover span {
  transform: translateX(4px);
}

.why-section {
  background: var(--paper);
}

.reason-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.reason-card {
  min-height: 255px;
  padding: 28px;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, var(--paper), #fffaf1);
  transition:
    transform 240ms ease,
    box-shadow 240ms ease,
    border-color 240ms ease;
}

.reason-card:hover {
  transform: translateY(-6px);
  border-color: rgba(201, 163, 90, 0.5);
  box-shadow: 0 26px 68px rgba(40, 14, 20, 0.12);
}

.reason-icon {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(201, 163, 90, 0.5);
  border-radius: 50%;
  color: var(--gold-deep);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.15rem;
  background: #fff6e2;
}

.reason-card p {
  margin: 14px 0 0;
  color: var(--muted);
}

.trust-section {
  overflow: hidden;
  color: var(--paper);
  background: var(--maroon-3);
}

.texture-band {
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background:
    linear-gradient(90deg, rgba(43, 7, 16, 0.86), rgba(43, 7, 16, 0.52)),
    url("./assets/gold-texture.jpg") center / cover no-repeat;
}

.trust-grid {
  position: relative;
  z-index: 1;
}

.trust-copy h2,
.trust-copy p {
  color: var(--paper);
}

.trust-copy p {
  color: rgba(255, 248, 235, 0.72);
}

.check-list {
  display: grid;
  gap: 14px;
  margin: 30px 0 0;
  padding: 0;
  list-style: none;
}

.check-list li {
  position: relative;
  padding: 15px 16px 15px 46px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: rgba(255, 248, 235, 0.82);
  background: rgba(255, 255, 255, 0.05);
}

.check-list li::before {
  position: absolute;
  top: 16px;
  left: 17px;
  width: 16px;
  height: 16px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  content: "";
}

.check-list li::after {
  position: absolute;
  top: 20px;
  left: 21px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold);
  content: "";
}

.trust-image img {
  min-height: 560px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 250px;
  gap: 18px;
  margin-top: 48px;
}

.gallery-item {
  position: relative;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  background: var(--maroon-3);
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.tall {
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 600ms ease;
}

.gallery-item::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 34%, rgba(17, 11, 13, 0.72));
  content: "";
}

.gallery-item figcaption {
  position: absolute;
  right: 18px;
  bottom: 16px;
  left: 18px;
  z-index: 1;
  color: var(--paper);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.25rem;
}

.gallery-item:hover img {
  transform: scale(1.05);
  filter: saturate(1.05) contrast(1.04);
}

.faq-section {
  background: var(--paper);
}

.faq-grid {
  align-items: start;
  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
}

.faq-list {
  border-top: 1px solid var(--line);
}

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
  padding: 26px 0;
  border: 0;
  color: var(--maroon-3);
  background: transparent;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  line-height: 1.2;
  text-align: left;
}

.faq-question span {
  position: relative;
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  border: 1px solid var(--line);
  border-radius: 50%;
}

.faq-question span::before,
.faq-question span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13px;
  height: 1px;
  background: var(--gold-deep);
  content: "";
  transform: translate(-50%, -50%);
}

.faq-question span::after {
  transform: translate(-50%, -50%) rotate(90deg);
  transition: transform 180ms ease;
}

.faq-question[aria-expanded="true"] span::after {
  transform: translate(-50%, -50%) rotate(0deg);
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 260ms ease;
}

.faq-answer.is-open {
  grid-template-rows: 1fr;
}

.faq-answer > div {
  overflow: hidden;
}

.faq-answer p {
  max-width: 760px;
  margin: 0;
  padding: 0 72px 26px 0;
  color: var(--muted);
}

.contact-section {
  color: var(--paper);
  background: linear-gradient(135deg, var(--maroon-3), var(--maroon));
}

.contact-grid {
  align-items: start;
}

.contact-copy h2,
.contact-copy p {
  color: var(--paper);
}

.contact-copy p:not(.eyebrow) {
  color: rgba(255, 248, 235, 0.72);
}

.contact-details {
  display: grid;
  gap: 16px;
  margin-top: 34px;
}

.contact-details p {
  display: grid;
  gap: 5px;
  margin: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.contact-details strong {
  color: var(--gold);
  font-size: 0.76rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact-details span,
.contact-details a {
  color: rgba(255, 248, 235, 0.8);
}

.contact-details a:hover {
  color: var(--gold);
}

.enquiry-form {
  display: grid;
  gap: 18px;
  padding: clamp(24px, 4vw, 38px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
}

.enquiry-form label {
  display: grid;
  gap: 8px;
}

.enquiry-form label span {
  color: var(--gold);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.enquiry-form input,
.enquiry-form select,
.enquiry-form textarea {
  width: 100%;
  min-height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  color: var(--paper);
  background: rgba(17, 11, 13, 0.34);
  outline: 0;
  padding: 13px 14px;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
}

.enquiry-form select {
  color-scheme: dark;
}

.enquiry-form textarea {
  resize: vertical;
}

.enquiry-form input::placeholder,
.enquiry-form textarea::placeholder {
  color: rgba(255, 248, 235, 0.44);
}

.enquiry-form input:focus,
.enquiry-form select:focus,
.enquiry-form textarea:focus {
  border-color: rgba(201, 163, 90, 0.8);
  background: rgba(17, 11, 13, 0.5);
  box-shadow: 0 0 0 4px rgba(201, 163, 90, 0.12);
}

.form-button {
  width: 100%;
  margin-top: 6px;
}

.form-note {
  margin: 0;
  color: rgba(255, 248, 235, 0.54);
  font-size: 0.86rem;
}

.site-footer {
  color: var(--paper);
  background: var(--black);
}

.footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(160px, 0.5fr) minmax(220px, 0.7fr);
  gap: 40px;
  padding-block: 58px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand .brand-logo {
  background: var(--ivory);
}

.footer-grid p {
  max-width: 440px;
  margin: 20px 0 0;
  color: rgba(255, 248, 235, 0.58);
}

.footer-grid nav {
  display: grid;
  gap: 12px;
}

.footer-grid nav a,
.footer-bottom a {
  color: rgba(255, 248, 235, 0.62);
  transition: color 180ms ease;
}

.footer-grid nav a:hover,
.footer-bottom a:hover {
  color: var(--gold);
}

.footer-legal p {
  margin: 0 0 10px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-block: 22px;
  color: rgba(255, 248, 235, 0.46);
  font-size: 0.9rem;
}

.footer-bottom p {
  margin: 0;
}

.whatsapp-float {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 80;
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 50%;
  color: var(--maroon-3);
  background: linear-gradient(135deg, #efd28f, var(--gold));
  box-shadow: 0 18px 45px rgba(43, 7, 16, 0.24);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;
}

.whatsapp-float:hover,
.whatsapp-float:focus-visible {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 24px 55px rgba(43, 7, 16, 0.3);
}

.whatsapp-float span {
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes heroDrift {
  from {
    transform: scale(1.04) translateX(0);
  }

  to {
    transform: scale(1.09) translateX(1.2%);
  }
}

@media (max-width: 1100px) {
  .about-grid,
  .why-grid,
  .trust-grid,
  .contact-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .plan-grid {
    grid-template-columns: 1fr;
  }

  .plan-card {
    min-height: auto;
  }

  .trust-image {
    order: 2;
  }
}

@media (max-width: 920px) {
  :root {
    --header-height: 72px;
  }

  .container {
    width: min(calc(100% - 32px), 1240px);
  }

  .brand-logo {
    width: 44px;
    height: 44px;
  }

  .menu-toggle {
    display: inline-block;
    flex: 0 0 auto;
  }

  .site-nav {
    position: fixed;
    top: var(--header-height);
    right: 0;
    left: 0;
    display: grid;
    max-height: calc(100svh - var(--header-height));
    padding: 18px 20px 26px;
    overflow-y: auto;
    color: var(--ink);
    background: rgba(255, 248, 235, 0.98);
    border-bottom: 1px solid var(--line);
    box-shadow: 0 26px 70px rgba(31, 8, 13, 0.12);
    transform: translateY(-120%);
    visibility: hidden;
    transition:
      transform 260ms ease,
      visibility 260ms ease;
  }

  .site-header.is-open .site-nav {
    transform: translateY(0);
    visibility: visible;
  }

  .site-nav a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }

  .site-nav a::after {
    display: none;
  }

  .nav-cta {
    display: inline-flex;
    justify-content: center;
    margin-top: 8px;
    padding: 14px 18px;
    border-bottom: 1px solid rgba(201, 163, 90, 0.55);
  }

  .hero {
    min-height: 88svh;
  }

  .hero-content {
    padding-block: 72px 90px;
  }

  .hero-media {
    background:
      linear-gradient(180deg, rgba(17, 11, 13, 0.56) 0%, rgba(43, 7, 16, 0.84) 68%, rgba(17, 11, 13, 0.92) 100%),
      url("./assets/hero-jewellery.jpg") center / cover no-repeat;
  }

  .hero-proof {
    grid-template-columns: 1fr;
    max-width: 420px;
  }

  .hero-proof div,
  .hero-proof div + div {
    padding: 16px 0;
    border-right: 0;
    border-bottom: 1px solid var(--line-light);
  }

  .hero-proof div:last-child {
    border-bottom: 0;
  }

  .trust-strip-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .trust-strip-grid div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .trust-strip-grid div:nth-child(2) {
    border-right: 0;
    padding-right: 0;
  }

  .trust-strip-grid div:nth-child(3) {
    padding-left: 0;
    border-bottom: 0;
  }

  .trust-strip-grid div:nth-child(4) {
    border-bottom: 0;
  }

  .reason-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 220px;
  }

  .gallery-item.large,
  .gallery-item.wide {
    grid-column: span 2;
  }

  .gallery-item.tall {
    grid-row: span 1;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(calc(100% - 28px), 1240px);
  }

  .section {
    padding-block: 68px;
  }

  .hero h1 {
    font-size: clamp(2.75rem, 16vw, 4.7rem);
  }

  .hero-lede {
    margin-top: 22px;
  }

  .hero-actions {
    display: grid;
    gap: 12px;
  }

  .button {
    width: 100%;
    min-height: 52px;
  }

  .hero-cue {
    display: none;
  }

  .trust-strip-grid {
    grid-template-columns: 1fr;
  }

  .trust-strip-grid div,
  .trust-strip-grid div:nth-child(2),
  .trust-strip-grid div:nth-child(3),
  .trust-strip-grid div:nth-child(4) {
    min-height: 92px;
    padding: 22px 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .trust-strip-grid div:last-child {
    border-bottom: 0;
  }

  .image-panel img,
  .trust-image img {
    min-height: 390px;
  }

  .image-panel figcaption {
    right: 18px;
    bottom: 18px;
    left: 18px;
  }

  .plan-card,
  .reason-card,
  .enquiry-form {
    padding: 24px;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 260px;
  }

  .gallery-item.large,
  .gallery-item.wide,
  .gallery-item.tall {
    grid-column: auto;
    grid-row: auto;
  }

  .faq-question {
    gap: 16px;
    padding: 22px 0;
  }

  .faq-answer p {
    padding-right: 0;
  }

  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .whatsapp-float {
    right: 16px;
    bottom: 16px;
    width: 54px;
    height: 54px;
  }
}

@media (max-width: 380px) {
  .brand-copy span {
    font-size: 1.02rem;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  [data-reveal] {
    opacity: 1;
    transform: none;
  }
}