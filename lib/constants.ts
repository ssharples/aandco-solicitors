export const SITE_CONFIG = {
  name: "Alexander & Co Solicitors LLP",
  tagline: "LOCAL LAW FOR LIFE",
  description: "Your solicitors in Derby, Loughborough, Alvaston, Spondon, Eastwood and West Bridgford. For the times in your life when civil legal advice is vital to resolve or organise personal and business matters, Alexander & Co are here to help and support you.",
  phone: "01332 600005",
  fax: "01332 600010",
  address: "56 Friar Gate, Derby, DE1 1DF",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/aandcollp",
  twitter: "https://twitter.com/AandCo_",
  instagram: "https://www.instagram.com/aandcosolicitorsllp/",
  linkedin: "https://www.linkedin.com/company/alexander-&-co.-solicitors-llp/",
} as const;

export const KEY_MESSAGES = [
  "Whether it is making a will, resolving a business dispute, agreeing the terms of a separation or buying a home, we give you our personal attention. We know how complex legal matters can be and we believe reassurance is best provided in person, rather than online.",
  "Your contact with us starts with a face to face meeting. That way you get to know your solicitor and feel more comfortable in general with the legal ins and outs of your particular civil matter.",
  "We really believe in providing outstanding service to our clients – the feedback we receive reflects this. Since December 2000 we have been awarded the highly regarded 'LEXCEL' quality standard for legal practice.",
] as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  category: "individuals" | "business";
  slug: string;
}

export const SERVICES: Service[] = [
  {
    id: "property",
    title: "Property",
    description: "Expert conveyancing and property law services for buying, selling, and transferring property.",
    category: "individuals",
    slug: "property",
  },
  {
    id: "wills",
    title: "Wills",
    description: "Professional will drafting services to ensure your wishes are carried out.",
    category: "individuals",
    slug: "wills",
  },
  {
    id: "relationship-breakdowns",
    title: "Relationship Breakdowns",
    description: "Sensitive and expert advice on divorce, separation, and family matters.",
    category: "individuals",
    slug: "relationship-breakdowns",
  },
  {
    id: "disputes",
    title: "Disputes",
    description: "Resolution of civil disputes through negotiation, mediation, or litigation.",
    category: "individuals",
    slug: "disputes",
  },
  {
    id: "landlord-tenant",
    title: "Landlord and Tenant",
    description: "Legal advice for landlords and tenants on residential and commercial leases.",
    category: "individuals",
    slug: "landlord-tenant",
  },
  {
    id: "powers-of-attorney",
    title: "Powers Of Attorney",
    description: "Setting up lasting powers of attorney to protect your future interests.",
    category: "individuals",
    slug: "powers-of-attorney",
  },
  {
    id: "personal-injury",
    title: "Personal Injury",
    description: "Expert representation for personal injury claims and compensation.",
    category: "individuals",
    slug: "personal-injury",
  },
  {
    id: "probate",
    title: "Probate",
    description: "Assistance with estate administration and probate matters.",
    category: "individuals",
    slug: "probate",
  },
  {
    id: "settlement-agreements",
    title: "Settlement Agreements",
    description: "Professional advice on employment settlement agreements.",
    category: "individuals",
    slug: "settlement-agreements",
  },
  {
    id: "business-property",
    title: "Property",
    description: "Commercial property transactions and advice for businesses.",
    category: "business",
    slug: "business-property",
  },
  {
    id: "business-landlord-tenant",
    title: "Landlord and Tenant",
    description: "Commercial lease agreements and landlord-tenant matters.",
    category: "business",
    slug: "business-landlord-tenant",
  },
  {
    id: "business-disputes",
    title: "Disputes",
    description: "Commercial dispute resolution and business litigation services.",
    category: "business",
    slug: "business-disputes",
  },
  {
    id: "licensing",
    title: "Licensing",
    description: "Licensing applications and advice for businesses.",
    category: "business",
    slug: "licensing",
  },
];

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
