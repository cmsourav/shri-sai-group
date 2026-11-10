# Shri Sai Group — Cinematic Corporate Website Plan

A premium, cinematic, fully responsive static website for Shri Sai Group, the diversified business group founded by Kishor Anchan Manchi. One cohesive site presenting the parent brand and its four ventures, built purely as a frontend experience — no backend, database, auth, admin, or payments.

## Who it's for

Visitors and customers of all four ventures — Sai Neravu Trust (community & donations), KIRA Boutique Designer (Aari artistry & boutique design), KY Travels (bus travel), and Shri Sai Tyre (tyre sales & services) — as well as anyone looking up the group. Confirmed goals: bring in enquiries for the ventures, build trust and reputation, and be found when people search.

## Core features and experience

- **Seven pages, one identity:** Home (Shri Sai Group), About, Sai Neravu Trust, KIRA Boutique Designer, KY Travels, Shri Sai Tyre, Contact — sharing one navigation system and footer.
- **Cinematic home page:** full-viewport hero with "A Legacy of Trust. A Vision for Tomorrow." and "Diversified Ventures. Shared Values.", animated headline entrance, scroll indicator, CONTACT SHRI SAI GROUP CTA; editorial intro section; an immersive scroll-driven venture showcase (not a four-card grid); founder section for Kishor Anchan Manchi; contact invitation; footer.
- **Four venture pages, four personalities:** Sai Neravu Trust warm and human-centred (about, activities, gallery, support/contribute section with enlarge/download QR and copy-UPI-ID controls); KIRA Boutique elegant and fashion-inspired (services, categorized portfolio gallery with lightbox, appointment enquiry form); KY Travels adventurous and cinematic (AC/Non-AC sleeper services, exterior/interior gallery, routes, BOOK TICKETS external redirect, secondary CTAs); Shri Sai Tyre bold and industrial (products, services, gallery, location & contact, customer enquiry form).
- **Contact page:** official contact details, enquiry-type form with frontend validation, direct phone / email / WhatsApp actions.
- **Honesty rules:** forms validate on the frontend and show an explicitly labelled demonstration state — never a fake success message. Any detail not yet supplied (phone, WhatsApp, email, address, UPI ID, QR, booking URL, routes, brands, opening hours) appears as a clearly marked placeholder; booking stays visibly unavailable until the real URL arrives. Nothing is invented.
- **Motion:** smooth scrolling, scroll-triggered text and image reveals (masked headings, word/line-by-line entrance, parallax, image scaling), refined hover micro-interactions, elegant page transitions, reduced-motion support, smooth performance on mobile.
- **SEO & accessibility:** unique titles and descriptions per page, semantic structure, heading hierarchy, alt text, keyboard-friendly navigation, contrast, responsive images — supporting the "be found when people search" goal.

## User flow

1. Visitor lands on the cinematic home hero, meets the parent brand and tagline.
2. Scrolls through the intro, the four-venture showcase, and the founder section.
3. Enters a venture page with its own visual personality; explores services, galleries (with lightbox), and details.
4. Converts through the venture's primary action: SUPPORT / CONTRIBUTE (trust), ENQUIRE NOW (boutique), BOOK TICKETS (travels — external redirect), SEND ENQUIRY (tyre) — plus WhatsApp / phone / email links everywhere.
5. Contact page serves as the group-level fallback with a general enquiry form.

## UI/UX feel

Award-quality editorial corporate design: large cinematic imagery, oversized display typography, generous negative space, asymmetric layouts, subtle gradients and lighting, distinct colour personalities per venture under one timeless parent palette, and fluid purposeful animation throughout. No generic card grids, no template look, no decoration for its own sake.

## Implementation phases

**Phase 1 — MVP (built now):**
- Full seven-page static site: home, about, four venture pages, contact
- Shared premium navigation (desktop + mobile) and footer
- Cinematic home page with hero, intro, venture showcase, founder, contact CTA
- All venture pages with their required sections, galleries and lightbox
- Enquiry forms with frontend validation and labelled demonstration state
- Donation section with placeholder QR/UPI + enlarge, download and copy-UPI controls
- Booking CTA visibly unavailable until the real URL is supplied
- Smooth scrolling, scroll-triggered animations, hover micro-interactions, page transitions, reduced-motion support
- Responsive layouts for desktop, tablet and mobile
- Per-page SEO titles/descriptions and accessibility basics
- Placeholders for every unverified detail (contacts, address, UPI, QR, booking URL, routes, brands)

**Phase 2 (later):**
- Swap every placeholder for verified real content: phone numbers, WhatsApp, email, address + Google Maps link, Instagram/social handles
- Real donation QR code and UPI ID for Sai Neravu Trust
- Real KY Travels booking URL, confirmed routes and destinations
- Confirmed tyre brands, services, opening hours
- Authentic business/founder photographs replacing curated stock imagery

**Phase 3 (later):**
- Deeper SEO: structured data, sitemap, local-business markup
- Performance tuning and image optimisation pass
- Optional extras if ever wanted: real enquiry delivery (email service), blog/news section, multilingual content

## Assumptions

- Goal is all three: enquiries, reputation, and search visibility — design and SEO serve all three.
- Audience is customers of all four ventures; each venture page speaks to its own audience.
- No differentiator was provided, so the hero carries the supplied taglines verbatim and no other claims are made.
- No verified contact details, UPI/QR, booking URL, routes, brands or hours were supplied — all appear as clearly labelled placeholders to be replaced in Phase 2.
- Reach-out defaults (from the unanswered question): WhatsApp links, labelled enquiry forms, phone-call links, and social links will all be present, wired to placeholders until real details arrive.
- Copy language is English, matching the brief.
- The site is a static frontend only — forms never claim to send or store anything; donations show instructions, not payment processing; booking redirects externally.
- Founder's photograph is not supplied; the founder section uses an elegant typographic/portrait layout without a fake photo.
