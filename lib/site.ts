/**
 * Canonical site origin for metadata and JSON-LD. Prefer NEXT_PUBLIC_SITE_URL
 * in production (custom domain), then Vercel deployment URL, then localhost.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  if (process.env.VERCEL === "1" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const siteTitle =
  "Bisi Obateru — Founder, Builder, Bisi Music" as const;

export const siteDescription =
  "Founder & CEO of JustiGuide (AI immigration legal platform, TIME Best Inventions 2025; TechCrunch Disrupt). Sunday Swervice / Soundch3k. Stanford Immigration Policy Lab. San Francisco and Lagos. Articles with Bisi Obateru appear in The Navigator (Substack), on LinkedIn, and in company and press coverage; related links are in site metadata and structured data.";

export const siteKeywords = [
  "Bisi Obateru",
  "JustiGuide",
  "immigration",
  "legal technology",
  "Founder & CEO",
  "Bisi Music",
  "Sunday Swervice",
  "Soundch3k",
  "Sausalito",
  "San Francisco",
  "Stanford Immigration Policy Lab",
  "The Full Stack Founder",
] as const;

/** Phrases for search: articles with/by/about Bisi Obateru (metadata only). */
export const articleSeoKeywords = [
  "articles with Bisi Obateru",
  "Bisi Obateru articles",
  "writing by Bisi Obateru",
] as const;

/**
 * Off-site writing and coverage to expose in JSON-LD + meta only (not shown on the page).
 * Add or edit entries here; optional description helps structured data, not the UI.
 */
export const bisiObateruArticleLinks = [
  {
    name: "The Navigator — Substack",
    url: "https://immigrationnavigator.substack.com/",
    description:
      "Immigration, policy, and field notes; essays featuring or by Bisi Obateru.",
  },
  {
    name: "Bisi Obateru on LinkedIn",
    url: "https://www.linkedin.com/in/bisiobateru/",
    description: "Long-form posts, talks, and updates (articles and commentary).",
  },
  {
    name: "JustiGuide — company and press",
    url: "https://justiguide.com/",
    description:
      "Product news and coverage; many articles on JustiGuide reference founder Bisi Obateru.",
  },
] as const;
