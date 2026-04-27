import { bisiObateruArticleLinks, getSiteUrl } from "@/lib/site";

const linkedIn = "https://www.linkedin.com/in/bisiobateru";
const justiGuide = "https://justiguide.com";
const substack = "https://immigrationnavigator.substack.com/";

export function JsonLd() {
  const base = getSiteUrl();
  const imageUrl = `${base}/images/bisi-headshot.png`;
  const articleListId = `${base}/#articles-with-bisi-obateru`;

  const articleListItems = bisiObateruArticleLinks.map((item, i) => ({
    "@type": "ListItem" as const,
    position: i + 1,
    name: item.name,
    url: item.url,
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "Bisi Obateru",
        alternateName: "Bisi Music",
        description:
          "Bisi Music is the global music brand; Bisi Obateru is the founder, DJ, and builder behind JustiGuide, Sunday Swervice, and Soundch3k. Off-site writing is listed in structured data (not shown on-page).",
        inLanguage: "en-US",
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": articleListId,
        name: "Articles and writing: Bisi Obateru",
        description:
          "Off-site resources where articles, essays, or features involve or are authored by Bisi Obateru. These links are for search and structured data; they are not rendered as a list in the main page content.",
        numberOfItems: articleListItems.length,
        itemListElement: articleListItems,
        about: { "@id": `${base}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: base,
        name: "Bisi Obateru — Founder, Builder, Bisi Music",
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#person` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          caption: "Bisi Obateru",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: "Bisi Obateru",
        alternateName: ["Bisi Music"],
        givenName: "Bisi",
        familyName: "Obateru",
        url: base,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        jobTitle: "Founder & CEO, JustiGuide",
        worksFor: {
          "@type": "Organization",
          name: "JustiGuide",
          url: justiGuide,
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "San Francisco State University",
          sameAs: "https://www.sfsu.edu/",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US",
        },
        homeLocation: {
          "@type": "Place",
          name: "San Francisco",
        },
        sameAs: [linkedIn, justiGuide, substack],
        subjectOf: { "@id": articleListId },
        knowsAbout: [
          "Bisi Music",
          "Music production",
          "Immigration law",
          "Legal technology",
          "Artificial intelligence",
          "Urban planning",
        ],
        description:
          "Performs and produces under the Bisi Music brand. Lagos-born founder of JustiGuide, TIME Best Inventions 2025; Sunday Swervice residency in Sausalito; Stanford Immigration Policy Lab affiliate; author of The Full Stack Founder. For articles with Bisi Obateru, see the ItemList in structured data (The Navigator, LinkedIn, and related coverage).",
      },
      {
        "@type": "Organization",
        "@id": `${justiGuide}#organization`,
        name: "JustiGuide",
        url: justiGuide,
        founder: { "@id": `${base}/#person` },
        description:
          "AI-powered immigration legal platform: rights-based infrastructure, not permission-based bureaucracy.",
        award: "TIME Best Inventions 2025; TechCrunch Disrupt — Battlefield 200; Pitch Showcase (Policy + Protection)",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
