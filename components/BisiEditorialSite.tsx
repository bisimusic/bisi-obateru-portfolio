"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

type WorkItem = {
  metaLeft: string;
  metaRight: string;
  title: React.ReactNode;
  body: string;
  tags: string[];
};

const founderWork: WorkItem[] = [
  {
    metaLeft: "2024 — Present",
    metaRight: "Founder & CEO",
    title: (
      <>
        JustiGuide<em> — </em>AI for immigration law.
      </>
    ),
    body: "Platform pairing Dolores (attorney-side petition reviewer) with Relo (immigrant-facing pathway navigator), with legal and product depth on a converging roadmap. Acquired VisaNow.AI. Multi-model architecture across Anthropic, OpenAI, Gemini, Deepgram, and Voyage.",
    tags: ["LegalTech", "Multi-Agent AI", "Pre-Seed"],
  },
  {
    metaLeft: "March 2026",
    metaRight: "Research & Engineering",
    title: (
      <>
        Regulatory <em>Simulation</em> Engine.
      </>
    ),
    body: "Population-level model of immigration policy impact. First live run March 26, 2026 in 636ms. Built with the Stanford Immigration Policy Lab as a public-interest forecasting layer over the platform.",
    tags: ["Policy Modeling", "Stanford SIMS", "Open Research"],
  },
  {
    metaLeft: "2025 — Ongoing",
    metaRight: "Manuscript",
    title: (
      <>
        The Full Stack <em>Founder</em>.
      </>
    ),
    body: "A book on building across legal, technical, and cultural surfaces — drawn from running JustiGuide, Soundch3k, and a research affiliation in parallel. On the resilience of seven YC cycles and what immigrants teach builders.",
    tags: ["Book", "In Progress"],
  },
  {
    metaLeft: "2024 — Present",
    metaRight: "Architecture",
    title: (
      <>
        100-Agent <em>Registry</em>.
      </>
    ),
    body: "JSON registry across 12 departments with OpenShell YAML policy files. Designed to make every JustiGuide function inspectable, swappable, and governable — agentic infrastructure that doesn't hide the wiring.",
    tags: ["Agent Systems", "Governance"],
  },
];

const afrobisiWork: WorkItem[] = [
  {
    metaLeft: "Weekly · Sundays",
    metaRight: "Founder & Resident",
    title: (
      <>
        Sunday <em>Swervice</em>.
      </>
    ),
    body: "The weekly Afrofusion ritual at Eria Events in Sausalito. 300–400 heads on the floor, deep West African rhythm woven through house, amapiano, and Bay edge. Operated through Soundch3k LLC.",
    tags: ["Residency", "Afrofusion", "Community"],
  },
  {
    metaLeft: "2025",
    metaRight: "Production",
    title: (
      <>
        You.com <em>brand</em> activation.
      </>
    ),
    body: '"Search Is Dead. Welcome to You." — production proposal for a branded launch event at Shack15. Concept, music direction, and run-of-show built end-to-end through Soundch3k.',
    tags: ["Brand Event", "Production"],
  },
  {
    metaLeft: "2025",
    metaRight: "Civic Production",
    title: (
      <>
        Kellman for <em>Lt. Governor</em>.
      </>
    ),
    body: "Fundraising event concept for Janelle Kellman's California Lt. Governor campaign. Civic culture through sound — designed to convene donors and organizers around shared identity, not just a stage.",
    tags: ["Campaign", "Civic"],
  },
  {
    metaLeft: "2025",
    metaRight: "Diplomatic",
    title: (
      <>
        Consul General <em>panel + set</em>.
      </>
    ),
    body: "Panel and set at the French Consul General's Residence, organized through Ramp-Up Lab and the HEC Paris MBA program. Founder-mode upstairs, Bisi Music after the keynote.",
    tags: ["Diplomatic", "Panel"],
  },
];

const essays: Array<{
  date: string;
  founderTitle: React.ReactNode;
  afrobisiTitle: React.ReactNode;
  founderCat: string;
  afrobisiCat: string;
}> = [
  {
    date: "2026 · 04",
    founderTitle: (
      <>
        Why H-1B alternatives are the <em>founder&apos;s</em> moat.
      </>
    ),
    afrobisiTitle: (
      <>
        Reading a room when the room is <em>two cities</em>.
      </>
    ),
    founderCat: "Essay · LinkedIn",
    afrobisiCat: "Notes · Soundch3k",
  },
  {
    date: "2026 · 03",
    founderTitle: (
      <>
        Inside the <em>Regulatory Simulation Engine</em>.
      </>
    ),
    afrobisiTitle: (
      <>
        Building a residency that <em>outlasts</em> the algorithm.
      </>
    ),
    founderCat: "Talk · Stanford SIMS",
    afrobisiCat: "Essay",
  },
  {
    date: "2026 · 02",
    founderTitle: (
      <>
        You weren&apos;t built to <em>ask permission</em>.
      </>
    ),
    afrobisiTitle: (
      <>
        Production proposal as a <em>creative form</em>.
      </>
    ),
    founderCat: "Ignite Talk",
    afrobisiCat: "Process",
  },
  {
    date: "2025 · 11",
    founderTitle: (
      <>
        I self-filed my own engineer&apos;s <em>H-1B</em>. It got approved.
      </>
    ),
    afrobisiTitle: (
      <>
        Sausalito on a <em>Sunday night</em>.
      </>
    ),
    founderCat: "Field Note",
    afrobisiCat: "Field Note",
  },
  {
    date: "2025 · 10",
    founderTitle: (
      <>
        From Lagos to <em>Battlefield</em>: notes on Disrupt.
      </>
    ),
    afrobisiTitle: (
      <>
        Why the dance floor is <em>civic infrastructure</em>.
      </>
    ),
    founderCat: "Reflection",
    afrobisiCat: "Manifesto",
  },
];

function WorkGrid({ items }: { items: WorkItem[] }) {
  return (
    <div className="work-grid">
      {items.map((w, i) => (
        <article key={`${w.metaLeft}-${i}`} className="work-card">
          <div className="work-meta">
            <span>{w.metaLeft}</span>
            <span>{w.metaRight}</span>
          </div>
          <h3>{w.title}</h3>
          <p>{w.body}</p>
          <div className="tags">
            {w.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function BisiEditorialSite() {
  const toggleMode = useCallback(() => {
    const html = document.documentElement;
    const next = html.dataset.mode === "afrobisi" ? "founder" : "afrobisi";
    html.dataset.mode = next;
    try {
      localStorage.setItem("bisi-mode", next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    document
      .querySelectorAll(".portfolio-section .reveal, .cta .reveal")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("header.hero .reveal");
    nodes.forEach((el, i) => {
      window.setTimeout(() => el.classList.add("in"), 120 + i * 140);
    });
  }, []);

  const founderMarquee =
    "JustiGuide ✦ TIME Best Inventions 2025 ✦ TechCrunch Disrupt Pitch Showcase winner (Policy + Protection) ✦ Battlefield 200 winner ✦ NVIDIA Inception ✦ Stanford Immigration Policy Lab ✦ $123.4M Pipeline ✦ 47K+ Users ✦ ";
  const afrobisiMarquee =
    "Bisi Music ✦ Sunday Swervice ✦ Eria Events Sausalito ✦ Afrofusion ✦ Soundch3k LLC ✦ Brand Activations ✦ Consulate Sets ✦ ";

  return (
    <>
      <div className="topbar">
        <div className="mark">
          Bisi Obateru<span className="dot" />
          <span className="mode-founder">Founder</span>
          <span className="mode-afrobisi">Bisi Music</span>
        </div>
        <nav className="nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="#bio">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className="toggle"
          onClick={toggleMode}
          aria-label="Switch between Founder and Bisi Music mode"
        >
          <span className="mode-founder">Founder</span>
          <span className="mode-afrobisi">Bisi Music</span>
          <span className="switch" aria-hidden />
        </button>
      </div>

      <header className="hero">
        <div className="hero-masthead">
          <div className="eyebrow reveal">
            <span className="mode-founder">
              Founder &amp; CEO, JustiGuide · San Francisco
            </span>
            <span className="mode-afrobisi">
              DJ · Producer · Sunday Swervice · Sausalito
            </span>
          </div>

          <figure className="hero-portrait reveal mode-founder">
            <div className="hero-portrait-frame hero-portrait-frame--stage">
              <Image
                src="/images/bisi-justiguide-disrupt.png"
                alt="Bisi Obateru on stage at TechCrunch Disrupt with the JustiGuide screen"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 420px"
                className="hero-portrait-img"
              />
            </div>
          </figure>
          <figure className="hero-portrait reveal mode-afrobisi">
            <div className="hero-portrait-frame hero-portrait-frame--portrait">
              <Image
                src="/images/bisi-headshot.png"
                alt="Bisi Obateru"
                fill
                sizes="(max-width: 900px) 100vw, 360px"
                className="hero-portrait-img"
              />
            </div>
          </figure>

          <div className="hero-headline">
            <h1 className="reveal mode-founder">
              Rebuilding immigration as{" "}
              <em>rights-based infrastructure</em>
            </h1>
            <h1 className="reveal mode-afrobisi">
              Sound that moves <em>between</em> Lagos and the Bay.
            </h1>
          </div>
        </div>

        <div className="hero-meta reveal">
          <p className="mode-founder">
            <strong>JustiGuide</strong> is an AI-powered immigration legal
            platform reframing the U.S. system as rights-based infrastructure
            rather than permission-based bureaucracy. TIME Best Inventions 2025.
            TechCrunch Disrupt Pitch Showcase winner (Policy + Protection) and
            Battlefield 200 winner.
          </p>
          <p className="mode-founder">
            Lagos-born. F-1 alum. Stanford Immigration Policy Lab affiliate. Author
            of <em>The Full Stack Founder</em>. Building the platform I needed at
            twenty-one.
          </p>
          <p className="mode-afrobisi hero-music-bio">
            Bisi is a globally influenced Nigerian fusion artist, performer, and
            community builder whose warm presence, Afrohouse and Afropop sound,
            and commitment to art as a force for connection and social impact
            bring a distinctive energy to every gathering.
          </p>
          <p className="mode-afrobisi">
            <strong>Sunday Swervice</strong> is a weekly Afrofusion ritual at
            Eria Events in Sausalito — 300–400 heads, every week, since the
            beginning. Operated through Soundch3k LLC.
          </p>
          <p className="mode-afrobisi">
            Production, DJ sets, and brand activations that bridge West African
            rhythm and Bay Area edge. Past collaborations span tech launches,
            consulate events, and political fundraisers.
          </p>
        </div>
      </header>

      <div className="marquee">
        <div className="marquee-track">
          <span className="mode-founder">
            {founderMarquee}
            {founderMarquee}
          </span>
          <span className="mode-afrobisi">
            {afrobisiMarquee}
            {afrobisiMarquee}
          </span>
        </div>
      </div>

      <section id="work" className="portfolio-section">
        <div className="section-head reveal">
          <div className="section-num">§ 01 / Selected Work</div>
          <h2 className="section-title mode-founder">
            What I&apos;m <em>building</em>.
          </h2>
          <h2 className="section-title mode-afrobisi">
            What I&apos;m <em>making</em>.
          </h2>
        </div>

        <div className="mode-founder">
          <WorkGrid items={founderWork} />
        </div>
        <div className="mode-afrobisi">
          <WorkGrid items={afrobisiWork} />
        </div>
      </section>

      <section className="portfolio-section" style={{ paddingBlock: 0 }}>
        <div className="stats mode-founder">
          <div className="stat">
            <div className="stat-num">
              47<em>K+</em>
            </div>
            <div className="stat-label">Users on Platform</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              $123<em>.4M</em>
            </div>
            <div className="stat-label">Pipeline Value</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              636<em>ms</em>
            </div>
            <div className="stat-label">RSE First Run</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              7<em>×</em>
            </div>
            <div className="stat-label">YC Cycles · Resilience</div>
          </div>
        </div>
        <div className="stats mode-afrobisi">
          <div className="stat">
            <div className="stat-num">
              300<em>–400</em>
            </div>
            <div className="stat-label">Heads Weekly</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              32<em>×</em>
            </div>
            <div className="stat-label">Sundays · Mar–Oct &apos;25</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-label">Afrofusion Sets</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              50<em>+</em>
            </div>
            <div className="stat-label">Artists supported</div>
          </div>
        </div>
      </section>

      <section id="writing" className="portfolio-section">
        <div className="section-head reveal">
          <div className="section-num">§ 02 / Writing &amp; Talks</div>
          <h2 className="section-title">
            Notes from the <em>field</em>.
          </h2>
        </div>

        <div className="essay-list reveal">
          {essays.map((row) => (
            <div key={row.date} className="essay">
              <div className="essay-date">{row.date}</div>
              <div className="essay-title mode-founder">{row.founderTitle}</div>
              <div className="essay-title mode-afrobisi">{row.afrobisiTitle}</div>
              <div className="essay-cat mode-founder">{row.founderCat}</div>
              <div className="essay-cat mode-afrobisi">{row.afrobisiCat}</div>
              <div className="arrow" aria-hidden>
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="bio" className="portfolio-section">
        <div className="section-head reveal in mode-founder">
          <div className="section-num">§ 03 / About</div>
          <h2 className="section-title">
            A <em>working</em> biography.
          </h2>
        </div>
        <div className="section-head reveal in mode-afrobisi">
          <div className="section-num">§ 03 / Global brand</div>
          <h2 className="section-title">
            Music that holds <em>the room</em>.
          </h2>
        </div>

        <div className="bio reveal in">
          <div className="bio-block mode-founder">
            <div className="bio-text">
              <p>
                Bisi Obateru was born in Lagos and arrived in the U.S. on an F-1
                visa. The platform that became JustiGuide started as the platform
                Bisi needed at twenty-one — a way to navigate a system designed to
                feel arbitrary, and to reframe immigration as{" "}
                <em>rights-based infrastructure</em> rather than permission-based
                bureaucracy.
              </p>
              <p>
                Today, JustiGuide is a technology company unifying product and legal
                workflows on one surface, with two AI agents — Dolores and Relo —
                serving attorneys and immigrants on opposite sides of the same
                petition. The company holds TIME Best Inventions 2025; at TechCrunch
                Disrupt it was a Pitch Showcase winner (Policy + Protection) and a
                Battlefield 200 winner, and runs a research affiliation with the
                Stanford Immigration Policy Lab.
              </p>
              <p>
                Outside the company, Bisi is the founder and resident DJ of{" "}
                <em>Sunday Swervice</em> in Sausalito, and the author of a
                forthcoming book, <em>The Full Stack Founder</em>. The throughline:
                building infrastructure — legal, civic, cultural — for people
                who weren&apos;t given permission.
              </p>
            </div>
            <div className="bio-meta">
              <dl>
                <dt>Based</dt>
                <dd>San Francisco · Lagos</dd>
                <dt>Company</dt>
                <dd>JustiGuide Inc.</dd>
                <dt>Music</dt>
                <dd>Soundch3k LLC</dd>
                <dt>Research</dt>
                <dd>Stanford Immigration Policy Lab</dd>
                <dt>Writing</dt>
                <dd>
                  The Full Stack Founder <em>(2026)</em>
                </dd>
                <dt>Education</dt>
                <dd>SFSU — urban planning (prior study)</dd>
                <dt>Status</dt>
                <dd>Building. Booking. Writing.</dd>
              </dl>
            </div>
          </div>

          <div className="bio-block mode-afrobisi">
            <div className="bio-text">
              <p>
                Bisi is a globally influenced Nigerian fusion artist, performer,
                and community builder whose warm presence, Afrohouse and Afropop
                sound, and commitment to art as a force for connection and social
                impact bring a distinctive energy to every gathering.
              </p>
              <p>
                The public name for that work is <strong>Bisi Music</strong>, run
                through <strong>Soundch3k LLC</strong> — production, music
                direction, and full activations from tech launches to consulate
                programs to civic rooms. Same throughline: culture first, not
                wallpaper.
              </p>
              <p>
                The flagship room is <em>Sunday Swervice</em> — a weekly
                Afrofusion residency at <strong>Eria Events</strong> in Sausalito
                (300–400 on the floor, every Sunday), where the long set is the
                brand in its purest form.
              </p>
            </div>
            <div className="bio-meta">
              <dl>
                <dt>Global handle</dt>
                <dd>Bisi Music</dd>
                <dt>Company</dt>
                <dd>Soundch3k LLC</dd>
                <dt>Residency</dt>
                <dd>
                  Sunday Swervice · Eria Events, Sausalito
                </dd>
                <dt>Sound</dt>
                <dd>Afrohouse · Afropop · Nigerian fusion</dd>
                <dt>Format</dt>
                <dd>Performance · DJ · production · direction</dd>
                <dt>Footprint</dt>
                <dd>San Francisco Bay · Lagos · intl. bookings</dd>
                <dt>Status</dt>
                <dd>Weekly Sundays · production · activations</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-section" style={{ padding: 0 }}>
        <div className="cta">
          <div className="cta-inner reveal">
            <h2 className="mode-founder">
              Building, hiring, raising — <em>let&apos;s talk</em>.
            </h2>
            <h2 className="mode-afrobisi">
              Booking, producing, collaborating — <em>let&apos;s build</em>.
            </h2>

            <div className="cta-links">
              <a
                href="mailto:bisi@justi.guide"
                className="cta-link mode-founder"
              >
                Email · Founder<span className="arrow-w">→</span>
              </a>
              <a
                href="https://justiguide.com"
                className="cta-link mode-founder"
                target="_blank"
                rel="noopener noreferrer"
              >
                JustiGuide.com<span className="arrow-w">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bisiobateru"
                className="cta-link mode-founder"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn<span className="arrow-w">→</span>
              </a>
              <a href="#" className="cta-link mode-founder">
                Press kit<span className="arrow-w">→</span>
              </a>

              <a
                href="mailto:hello@soundch3k.com"
                className="cta-link mode-afrobisi"
              >
                Email · Booking<span className="arrow-w">→</span>
              </a>
              <a href="#" className="cta-link mode-afrobisi">
                Sunday Swervice<span className="arrow-w">→</span>
              </a>
              <a href="#" className="cta-link mode-afrobisi">
                Instagram · @afrobisi<span className="arrow-w">→</span>
              </a>
              <a href="#" className="cta-link mode-afrobisi">
                SoundCloud<span className="arrow-w">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <span>© 2026 Bisi Obateru</span>
        <span>San Francisco · Lagos</span>
        <a
          href="https://immigrationnavigator.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Navigator · Substack
        </a>
        <span>Site v1.0 · Built in conversation</span>
      </footer>
    </>
  );
}
