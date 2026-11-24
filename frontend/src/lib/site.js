const U = (id, w = 1600) =>
    `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const THEMES = {
    parent: { bg: "#050A14", fg: "#F5F5F5", accent: "#D4AF37", surface: "#0B1120", mode: "dark" },
    trust: { bg: "#FFF9F5", fg: "#2D2622", accent: "#E07A5F", surface: "#F7EFE7", mode: "light" },
    boutique: { bg: "#FAF6F2", fg: "#1A1516", accent: "#8A3043", surface: "#F3ECE6", mode: "light" },
    travels: { bg: "#08101C", fg: "#F2F4F7", accent: "#E25822", surface: "#101A2C", mode: "dark" },
    tyre: { bg: "#0F0F0F", fg: "#E0E0E0", accent: "#D32F2F", surface: "#1A1A1A", mode: "dark" },
};

export const LOGO = "/logo.png";

export const IMG = {
    /* ——— Parent brand ——— */
    logo: LOGO,
    corporate: U("photo-1766445318570-1dc4bf3f5d79", 2200), // warm cinematic ceiling, hero
    corporate2: U("photo-1527576539890-dfa815648363"), // curved facade
    founder: "https://res.cloudinary.com/r7b7h6c6/image/upload/v1795279665/kishor.png",
    founderTexture: U("photo-1556139930-c23fa4a4f934", 2200), // dark abstract texture
    skyline: U("photo-1449824913935-59a10b8d2000", 2200),
    office: U("photo-1497366216548-37526070297c"),
    building: U("photo-1560179707-f14e90ef3623"),
    architecture: U("photo-1554469384-e58fac16e23a"),
    /* ——— Sai Neravu Trust ——— */
    trustLogo: "https://res.cloudinary.com/r7b7h6c6/image/upload/v1795280349/sai-neravu.png",
    trustHero: U("photo-1628717341663-0007b0ee2597", 2200), // volunteers packing bags
    handsUnity: U("photo-1630068846062-3ffe78aa5049"),
    handsHeart: U("photo-1469571486292-0ba58a3f068b"),
    volunteers: U("photo-1593113598332-cd288d649433"),
    children: U("photo-1488521787991-ed7bbaae773c"),
    community: U("photo-1509099836639-18ba1795216d"),
    charityBox: U("photo-1532629345422-7515f3d16bb6"),
    trustGirl: U("photo-1729283530749-8bb89bb618e7"),
    /* ——— KIRA Boutique ——— */
    boutiqueLogo: "https://res.cloudinary.com/r7b7h6c6/image/upload/v1794937067/kira.png",
    boutiqueHero: U("photo-1744502672203-98316831f121", 2200), // silk & hand detail
    boutiqueDress: U("photo-1705970268643-ee5981567df5"),
    embroidery1: U("photo-1579207238889-e1122bfc0c89"),
    embroidery2: U("photo-1680034976848-d9fe95466aba"),
    aariWork: U("photo-1610030469983-98e550d6193c"),
    fabric: U("photo-1528459801416-a9e53bbf4e17"),
    atelier: U("photo-1558769132-cb1aea458c5e"),
    silk: U("photo-1583391733956-3750e0ff4e8b"),
    saree: U("photo-1594633312681-425c7b97ccd1"),
    fashionRail: U("photo-1445205170230-053b83016050"),
    /* ——— KY Travels ——— */
    travelsHero: U("photo-1790360740621-41c1861d78e9", 2200), // coach toward mountains
    busNight2: U("photo-1730127143554-4342739f2732"),
    busSunset: U("photo-1546955870-9fc9e5534349"),
    busRed: U("photo-1598710877888-edaa20acfb92"),
    busHighway: U("photo-1544620347-c4fd4a3d5957"),
    busNight: U("photo-1570125909232-eb263c188f7e"),
    sleeper: U("photo-1464219789935-c2d9d9aba644"),
    driver: U("photo-1470224114660-3f6686c562eb"),
    coach: U("photo-1557223562-6c77ef16210f"),
    highway: U("photo-1578844251758-2f71da64c96f"),
    /* ——— Shri Sai Tyre ——— */
    tyreLogo: "https://res.cloudinary.com/r7b7h6c6/image/upload/v1795284199/tyrelogo.png",
    tyreHero: U("photo-1571335746824-742511d49bce", 2200), // four tyres, moody
    tyreWork: U("photo-1645445522156-9ac06bc7a767"),
    tyreMount: U("photo-1792792944402-5e94ce198dce"),
    tyreStack: U("photo-1786489623872-2ebdfe51297c"),
    carRoad: U("photo-1503376780353-7e6692767b70"),
    workshop: U("photo-1486262715619-67b85e0b08d3"),
    tyreService: U("photo-1615906655593-ad0386982a0f"),
};

export const VIDEO = {
    corporate: "https://res.cloudinary.com/r7b7h6c6/video/upload/v1794936921/hero-bg.mp4",
};

export const FOUNDER = "Kishor Anchan Manchi";
export const FOUNDER_BIO =
    "When I started Shri Sai Group, my dream was to build something meaningful by bringing different businesses together under one name. Every step of this journey has taught me the value of hard work, patience, teamwork and trust. I believe that business is not just about growth; it is also about creating opportunities for others and being there for people when they need support. Through our ventures and Sai Neravu Trust, I hope to make a positive difference in people's lives. My aim is to keep growing, stay connected to our roots and build something that we can all be proud of.";
export const FOUNDER_INSTAGRAM = "https://www.instagram.com/kishor.anchan.manchi?dmpr=Y2R3dDc3cDJ3aWU3";

export const INSTAGRAM = {
    group: {
        display: "@shri.sai.group",
        href: "https://www.instagram.com/shri.sai.group?jplx=eGVpNmRoM29tYXlt",
    },
    trust: {
        display: "@sai_neravu_trust_mangalore",
        href: "https://www.instagram.com/sai_neravu_trust_mangalore?avpt=MXdyY3R2NGpyOHBiaw==",
    },
    boutique: {
        display: "@kira.boutique.designer",
        href: "https://www.instagram.com/kira.boutique.designer?hvrq=MWRha3FkNjF6NzZsOA==",
    },
    travels: {
        display: "@ky_travels.in",
        href: "https://www.instagram.com/ky_travels.in?cnvx=dm9mbDhxNGt1MnRi",
    },
};

export const WHATSAPP = {
    boutique: {
        display: "WhatsApp — +91 78295 60631",
        href: "https://wa.me/917829560631?text=Hello,+I'm+interested+in+your+designs.+I+would+like+to+make+an+enquiry.",
    },
};

export const VENTURES = [
    {
        id: "trust",
        index: "01",
        name: "Sai Neravu Trust",
        logo: IMG.trustLogo,
        instagram: INSTAGRAM.trust,
        tagline: "Community Initiatives & Donations",
        path: "/sai-neravu-trust",
        theme: "trust",
        image: IMG.handsHeart,
        imageAlt: "Hands joined together holding a painted heart",
        desc: "The community arm of Shri Sai Group — initiatives that give back, and a trusted channel for contributions.",
    },
     {
        id: "tyre",
        index: "02",
        name: "Shri Sai Tyre",
        logo: IMG.tyreLogo,
        tagline: "Tyre Sales & Related Services",
        path: "/shri-sai-tyre",
        theme: "tyre",
        image: IMG.tyreStack,
        imageAlt: "Tyres being handled in a workshop",
        desc: "Tyre sales and related services — dependable products and workshop support for your vehicle.",
    },
     {
        id: "travels",
        index: "03",
        name: "KY Travels",
        instagram: INSTAGRAM.travels,
        tagline: "Bus Travel & Ticket Booking",
        path: "/ky-travels",
        theme: "travels",
        image: IMG.busHighway,
        imageAlt: "Coach travelling on an open highway",
        desc: "Comfortable AC and Non-AC sleeper bus travel, with booking through the official KY Travels platform.",
    },
    {
        id: "boutique",
        index: "04",
        name: "KIRA Boutique Designer",
        logo: IMG.boutiqueLogo,
        instagram: INSTAGRAM.boutique,
        whatsapp: WHATSAPP.boutique,
        tagline: "Aari Artistry, Embroidery & Boutique Design",
        path: "/kira-boutique",
        theme: "boutique",
        image: IMG.embroidery2,
        imageAlt: "Intricate hand embroidery on fine fabric",
        desc: "A design atelier for Aari artistry, fine embroidery and bespoke boutique creations.",
    },
];

/* Every entry below is an UNVERIFIED placeholder until the business supplies real details. */
export const CONTACT = {
    phone: { display: "+91 ••••• •••••", href: null },
    whatsapp: { display: "WhatsApp — number to be updated", href: null },
    email: { display: "Email — to be updated", href: null },
    address: { display: "Office address — to be updated", href: null },
    instagram: INSTAGRAM.group,
};

export const PLACEHOLDER_NOTE = "Placeholder — awaiting verified details";
