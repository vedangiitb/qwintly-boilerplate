export const siteConfig = {
  name: "Qwintly",
  description:
    "Launch polished marketing sites fast with a modular Next.js starter.",
  url: "https://qwintly.com",
};

export const navLinks = [
  { label: "Sections", href: "#sections" },
  { label: "Templates", href: "#templates" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export const featureHighlights = [
  {
    title: "Composable sections",
    description:
      "Swap, reorder, and style sections with predictable structure and spacing.",
  },
  {
    title: "Design tokens baked in",
    description:
      "Color, type, and motion tokens are centralized for generator-friendly theming.",
  },
  {
    title: "Performance-first layout",
    description:
      "Lean markup, semantic structure, and sensible defaults keep Lighthouse green.",
  },
];

export const templates = [
  {
    name: "Studio Portfolio",
    summary: "A clean, editorial layout for agencies and designers.",
  },
  {
    name: "SaaS Launch",
    summary: "Feature-forward landing page with crisp CTAs and pricing.",
  },
  {
    name: "Founder Memo",
    summary: "Storytelling format for personal brands and newsletters.",
  },
];

export const processSteps = [
  {
    title: "Pick a baseline",
    description: "Select the section set and typography pairing for the brand.",
  },
  {
    title: "Generate content",
    description: "Inject copy, data, and imagery without touching layout code.",
  },
  {
    title: "Ship with confidence",
    description: "Every section is pre-styled, responsive, and accessible.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    detail: "Perfect for experiments and hack-week launches.",
    features: ["3 sections", "Basic theming", "Static export ready"],
  },
  {
    name: "Growth",
    price: "$39",
    detail: "For teams shipping multiple client sites per month.",
    features: ["All sections", "Custom tokens", "Priority templates"],
  },
  {
    name: "Studio",
    price: "$129",
    detail: "Best for agencies that need scale and customization.",
    features: ["Multi-brand support", "Dedicated templates", "VIP support"],
  },
];
