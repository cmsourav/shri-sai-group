# PRD — Shri Sai Group Cinematic Website

## Original problem statement
Premium, cinematic, fully responsive STATIC (frontend-only) corporate website for SHRI SAI GROUP, a diversified business group founded by Kishor Anchan Manchi, showcasing the parent brand + 4 ventures: Sai Neravu Trust (community/donations), KIRA Boutique Designer (Aari artistry/embroidery/boutique), KY Travels (bus travel/ticket booking via external redirect), Shri Sai Tyre (tyre sales/services). Taglines: "A Legacy of Trust. A Vision for Tomorrow." / "Diversified Ventures. Shared Values." No backend, DB, auth, admin, payments, or booking engine. Forms validate frontend-only with explicitly labelled demonstration state. All unverified details (phone, email, address, UPI, QR, booking URL, routes, brands, hours) shown as clearly marked placeholders — never invented.

## Architecture
- React 19 (CRA/craco) + react-router-dom 7 + Tailwind + framer-motion 11 + lenis (smooth scroll) + lucide-react
- No backend used. Frontend-only static site.
- Key files: src/App.js (routes + Lenis + AnimatePresence transitions), src/lib/site.js (themes, images, ventures, placeholder contacts), src/components/{layout/Nav, layout/Footer, layout/Hero, motion/Reveal, motion/MaskedLines, motion/ParallaxImage, shared/Lightbox, shared/DemoForm, shared/CtaButton, shared/ContactInvite, shared/PlaceholderChip, Seo}
- Pages: Home, About, Trust, Boutique, Travels, Tyre, Contact (7 routes)
- Per-venture theme tokens (parent dark gold, trust warm light, boutique blush light, travels navy orange, tyre charcoal red)
- Typography: Cormorant Garamond (display) + Manrope (body)

## User personas
- Visitors/customers of the four ventures; people looking up the group; potential donors (trust); boutique customers (appointments); bus travellers (redirect to official booking); vehicle owners (tyre enquiries)

## Core requirements (static)
7 pages, shared nav+footer, cinematic heroes, scroll-triggered masked text reveals, parallax images, hover micro-interactions, page transitions, reduced-motion support, galleries + lightbox, per-page SEO titles/descriptions, honest placeholders for every unverified detail, demo-only forms, BOOK TICKETS disabled until real URL supplied.

## What's been implemented
- 2026-11-10: Full MVP — all 7 pages built and verified (desktop 1920 + mobile 390). Cinematic home hero with taglines, editorial intro, immersive 4-venture stacked showcase, founder section (Kishor Anchan Manchi, typographic — no photo supplied), contact invitation, footer with venture links + placeholder contacts. About page (profile, founder, ventures, group contact strip). Trust page (about, activities, gallery+lightbox, support section with placeholder UPI/QR, copy-UPI button, disabled enlarge/download until real QR). Boutique page (services, categorized portfolio gallery with filter+lightbox, appointment enquiry form with validation + demo notice). KY Travels (AC/Non-AC services, fleet gallery, routes placeholder, BOOK TICKETS visibly disabled). Shri Sai Tyre (about, brands placeholder, services, gallery, location/contact placeholders, enquiry form). Contact page (details placeholders + general enquiry form with validation + demo notice). Lenis smooth scroll, MaskedLines/Reveal/ParallaxImage animations, glass nav with ventures dropdown, fullscreen staggered mobile menu, film-grain overlay, reduced-motion support, per-page SEO.
- Verified: build passes; home/trust/boutique/travels/tyre/about/contact render; lightbox open/keyboard-close; portfolio filter; empty-submit shows errors on all forms; valid submit shows explicitly-labelled demonstration notice; BOOK TICKETS disabled; mobile menu navigation; no horizontal overflow.

- 2026-11-10 (2): EmailJS enquiry system — every venture now has its own contact form: new form sections added to Sai Neravu Trust (name/phone/email/enquiry-type/message) and KY Travels (name/phone/route/date/message); boutique, tyre and group contact forms kept. @emailjs/browser installed; src/lib/emailjs.js sends via one template with {{to_email}} routed from a fixed allowlist (REACT_APP_EMAIL_TO_TRUST/BOUTIQUE/TRAVELS/TYRE/GROUP — dummy gmail placeholders in frontend/.env until real IDs arrive). While REACT_APP_EMAILJS_PUBLIC_KEY/SERVICE_ID/TEMPLATE_ID are placeholders, forms show a clearly labelled "Demo configuration" banner and demo notice; once real keys are set, submissions genuinely send and show a success state only after the send resolves (rate-limited, generic failure notice otherwise). Verified: all 5 forms validate, show demo state, build compiles.

## Prioritized backlog (Phase 2 — needs client-supplied details)
- P0: EmailJS keys (public key, service ID, template ID) + the 5 real recipient emails — drop into frontend/.env, forms go live instantly. Template needs fields: to_email, venture, form_name, name, email, phone, message, details, time
- P0: Real contact details (phone, WhatsApp, email, office address + Google Maps link, Instagram/social handles) — wire into src/lib/site.js CONTACT
- P0: Sai Neravu Trust verified donation QR image + real UPI ID + beneficiary + contribution contact — enable enlarge/download buttons
- P0: KY Travels real booking URL — activate BOOK TICKETS; confirmed routes/destinations; amenity list
- P1: Confirmed tyre brands/products, services list, opening hours, address
- P1: Authentic photos: founder portrait, trust activities, boutique portfolio, bus fleet (exterior/interior), tyre showroom/workshop
- P2: Trust activities details; founder profile copy

## Next tasks
- Collect the P0 items from the owner, then swap placeholders (single source: src/lib/site.js + page-level placeholder blocks)
- Phase 3 ideas: structured data (LocalBusiness/Organization JSON-LD), sitemap, image optimisation, real enquiry delivery (Resend), multilingual
