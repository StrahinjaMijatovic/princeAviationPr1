// Central site data. Phone / WhatsApp are PLACEHOLDERS — swap for the
// client's real AOG numbers before launch.
export const CONTACT = {
  phoneDisplay: "+381 11 000 0000",
  phoneHref: "tel:+38111000000",
  aogDisplay: "+381 63 000 000",
  aogHref: "tel:+38163000000",
  whatsappHref: "https://wa.me/38163000000",
  email: "ops@princeaviation.com",
  base: "Belgrade Nikola Tesla Airport (LYBE / BEG)",
};

export type Pillar = {
  index: string;
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  alt: string;
  side: "left" | "right";
};

export const PILLARS: Pillar[] = [
  {
    index: "01",
    id: "charter",
    eyebrow: "Private Charter",
    title: "Fly on your schedule",
    desc: "A managed fleet of business jets ready across Europe and beyond. Direct routings, discreet handling, and a crew that treats every departure as the only one that matters.",
    tags: ["On-demand jets", "Europe-wide", "24/7 dispatch", "VIP handling"],
    image: "/media/charter-sunset.jpg",
    alt: "Prince Aviation Citation banking above the coastline at sunset",
    side: "left",
  },
  {
    index: "02",
    id: "mro",
    eyebrow: "MRO · Aircraft Maintenance",
    title: "Maintained in-house",
    desc: "An approved maintenance organisation with hangar, tooling, and engineers under one roof. Line and base maintenance held to the same standard that keeps our own fleet flying.",
    tags: ["Part-145 grade", "Line & base", "Avionics", "Own hangar"],
    image: "/media/mro-engine.jpg",
    alt: "Prince Aviation engineer performing engine maintenance in the hangar",
    side: "right",
  },
  {
    index: "03",
    id: "academy",
    eyebrow: "Pilot Academy",
    title: "From first flight to the flight deck",
    desc: "A structured path from PPL to commercial ratings, flown on a modern training fleet with instructors who fly the line themselves. Careers built on real airmanship.",
    tags: ["PPL → CPL", "Modern fleet", "Line instructors", "Type prep"],
    image: "/media/academy-172.jpg",
    alt: "Prince Aviation Cessna 172 trainer YU-BRI in flight",
    side: "left",
  },
  {
    index: "04",
    id: "training",
    eyebrow: "Technical Training",
    title: "The people behind the aircraft",
    desc: "Approved technical courses for aircraft engineers and maintenance staff — theory, type, and hands-on instruction from a team that maintains aircraft every day.",
    tags: ["EASA-aligned", "Type courses", "Hands-on", "Exam prep"],
    image: "/media/training-tecnam.jpg",
    alt: "Prince Aviation Tecnam trainer YU-TCA over the Danube wetlands",
    side: "right",
  },
];

export const NAV_LINKS = PILLARS.map((p) => ({
  href: `#${p.id}`,
  label: p.eyebrow.replace(" · ", " / "),
  index: p.index,
}));
