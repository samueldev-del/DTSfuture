import type { Locale } from "@/src/i18n/messages";

export const productLinks = {
  bolo237Live: "https://www.bolo237.com",
} as const;

const productShowcaseContent = {
  de: {
    hub: {
      eyebrow: "Unsere Produkte",
      titleLead: "Produktfälle, die zeigen,",
      titleAccent: "wie End-to-End-Ausführung aussieht.",
      description:
        "Wir behaupten nicht, wir beweisen. DTSfuture ist ein Studio aus Deutschland – und Bolo237, unser erstes internationales Flaggschiff, ist der öffentliche Beweis, dass wir Produkte aus Deutschland für anspruchsvolle internationale Märkte liefern können. Dieser Bereich dokumentiert, was wir tragen und was als Nächstes kommt.",
      primaryCta: "Den Bolo237-Fall ansehen",
      secondaryCta: "Kontakt aufnehmen",
      proofTitle: "Was dieser Bereich belegen soll",
      proofItems: [
        "Produktkonzeption aus einem echten Marktproblem heraus, nicht aus einer vagen Idee",
        "Vertrauensförderndes UX/UI-Design, das Reibung beim ersten Besuch reduziert",
        "Web-Implementierung, Geschäftslogik und Admin-Oberflächen, die öffentlich beobachtbar sind",
        "Deployment, SEO, Performance und laufender Betrieb eines bereits lieferbaren Produkts",
      ],
      featured: {
        name: "Bolo237",
        status: "Live · International",
        tagline: "Internationales Flaggschiff – in Deutschland gebaut, für Kamerun konzipiert",
        summary:
          "Bolo237 ist unser erstes internationales Produkt: ein Jobs- und Handwerker-Marktplatz, in Deutschland mit deutscher Ingenieurskultur entwickelt und für den kamerunischen Markt konzipiert. Der öffentliche Beweis, dass wir Produkte liefern, die in anspruchsvollen Märkten bestehen.",
        detailCta: "Fallstudie ansehen",
        liveCta: "Live-Produkt sehen",
        tags: [
          "Produktstrategie",
          "UX/UI",
          "Webentwicklung",
          "Produktions-Deployment",
        ],
      },
      pipelineTitle: "Aktuelle und kommende Produkte",
      pipelineDescription:
        "Bolo237 eröffnet die Bibliothek. Die nächsten Produkte für den deutschen und internationalen Markt werden hier mit demselben Maß an Klarheit dokumentiert – mit deutscher Ingenieurskultur und kompromissloser Ausführung.",
      roadmapCards: [
        {
          name: "Carlite",
          status: "In Vorbereitung",
          summary:
            "Ein Mobilitätserlebnis, neu gedacht für lokale Transportrealitäten, mit stärkeren Vertrauenssignalen, klareren Abläufen und täglicher Nützlichkeit, die man spürt.",
          tags: ["Mobilität", "Vertrauen", "Lokale Nutzung"],
        },
        {
          name: "Das DTSfuture Lab",
          status: "Kommt als Nächstes",
          summary:
            "Der Ort, an dem die nächsten Produktantworten für den deutschen und internationalen Markt formalisiert werden – mit demselben Ausführungsstandard und derselben öffentlichen Klarheit.",
          tags: ["Erkundung", "Produkt-F&E", "Pipeline"],
        },
      ],
    },
    bolo237: {
      eyebrow: "Internationales Flaggschiff",
      title: "Bolo237",
      tagline: "Internationales Flaggschiff – in Deutschland gebaut, für Kamerun konzipiert",
      intro:
        "Bolo237 ist unser erstes internationales Produkt – in Deutschland mit deutscher Ingenieurskultur entwickelt und für den kamerunischen Markt konzipiert. Es brauchte keine einfache Präsentationswebseite, sondern eine Plattform, die den Markt lesbarer, zuverlässiger und handlungsfähiger macht – für Kandidaten, Arbeitgeber und Handwerker mit unterschiedlichen Bedürfnissen, meist auf dem Handy und oft unter unvollkommener Konnektivität.",
      note:
        "Diese Seite zeigt, was das Produkt bereits öffentlich sichtbar macht und was das für einen zukünftigen Kunden beweist: disziplinierte Konzeption, glaubwürdige Produktentscheidungen, starke Ausführung und eine Lieferung, die bereits live und nutzbar ist.",
      quickFacts: [
        { label: "Nutzerreisen", value: "Kandidaten, Arbeitgeber, Handwerker" },
        { label: "Marktabdeckung", value: "10 Regionen Kameruns" },
        { label: "Produktoberflächen", value: "Öffentliche Website, Geschäftsabläufe und Back-Office" },
      ],
      ctas: {
        live: "Live-Produkt sehen",
        back: "Zurück zu unseren Produkten",
        contact: "Ihr Projekt besprechen",
      },
      challenge: {
        title: "Die ursprüngliche Herausforderung",
        description:
          "Das Kernproblem war nicht nur die Veröffentlichung von Stellenanzeigen. Es ging darum, ein zuverlässigeres und nützlicheres Umfeld zu schaffen, in dem mehrere Nutzertypen schnell handeln können, ohne Vertrauen zu verlieren oder sich in der Oberfläche zu verlieren.",
        items: [
          {
            title: "Vertrauen war fragil",
            description:
              "Lokale Rekrutierung und Handwerkerservices leiden oft unter schwacher Verifizierung, mangelnder Klarheit und zu wenigen beruhigenden Signalen für Nutzer.",
          },
          {
            title: "Mobil war der Standard",
            description:
              "Das Produkt musste auf Smartphones lesbar, schnell und angenehm bleiben – auch unter realen Netzwerkbedingungen.",
          },
          {
            title: "Mehrere Rollen in einem Produkt",
            description:
              "Kandidaten, Arbeitgeber und Handwerker erwarten nicht dasselbe. Die Struktur musste daher einfach bleiben und gleichzeitig mehrere nützliche Abläufe unterstützen.",
          },
        ],
      },
      solution: {
        title: "Die gelieferte Lösung",
        description:
          "Die Antwort war eine Plattform, die strukturierter, beruhigender und direkter wirkt – Stellenanzeigen, verifizierte Profile, Handwerkerservices und Kontaktabläufe ohne unnötige Reibung verbindet.",
        items: [
          {
            title: "Eine Plattform, mehrere Rollen",
            description:
              "Das Produkt trennt Kandidaten-, Arbeitgeber- und Handwerkerabläufe, während es ein klares Versprechen behält, das leicht verständlich bleibt.",
          },
          {
            title: "Sichtbare Vertrauensmechanismen",
            description:
              "Identitätsverifizierung, Moderation, Anti-Betrugs-Signale, redaktionelle Struktur und sichtbare Kontaktpunkte stärken die Glaubwürdigkeit des Dienstes.",
          },
          {
            title: "Lokale Nutzungsmuster respektiert",
            description:
              "WhatsApp, Mobile-first-Abläufe, nützliche Filter, HR-Inhalte und übersichtliche Navigation zeigen ein Produkt, das für das Feld und nicht nur für eine Demo konzipiert wurde.",
          },
        ],
      },
      process: {
        title: "Was DTSfuture übernimmt",
        description:
          "Bolo237 dient als Beweis über die gesamte Wertschöpfungskette: Bedürfnis verstehen, Erlebnis gestalten, Produkt implementieren und eine öffentliche Oberfläche launchen, die Menschen tatsächlich nutzen können.",
        items: [
          {
            title: "Produktkonzeption",
            description:
              "Ein diffuses Bedürfnis in ein klares Versprechen, eigenständige Abläufe und verständliche Produktprioritäten umwandeln.",
          },
          {
            title: "Design & Vertrauen",
            description:
              "Eine Oberfläche gestalten, die sich strukturierter, beruhigender und für mehrere Nutzerprofile einfacher zu nutzen anfühlt.",
          },
          {
            title: "Entwicklung & Geschäftslogik",
            description:
              "Das Weberlebnis, Kontoabläufe, Inhaltsseiten und die in der Produktion sichtbaren Geschäftsbausteine aufbauen.",
          },
          {
            title: "Deployment & Betrieb",
            description:
              "Öffentlicher Launch, SEO-Struktur, Admin-Oberflächen und reale Nutzungsbedingungen für ein Produkt, das bereits außerhalb des lokalen Rechners lebt.",
          },
        ],
      },
      stack: {
        title: "Technologie & Architektur",
        description:
          "Ohne sensible Interna preiszugeben, zeigt das öffentliche Produkt bereits eine ernsthafte, mehrschichtige technische Ausführung.",
        note:
          "Die folgenden Punkte stützen sich auf öffentlich beobachtbare Elemente. Sie reichen aus, um die Beherrschung des Frontends, des Back-Offices, der Integrationen und des Produktions-Deployments zu zeigen.",
        items: [
          {
            title: "Next.js-Frontend",
            description:
              "Das öffentliche Produkt wird mit Next.js bereitgestellt, mit einer Routen-, Inhalts- und Rendering-Struktur, die für eine moderne transaktionale Website geeignet ist.",
          },
          {
            title: "Dedizierte Business-API",
            description:
              "Die Anwendungslogik kommuniziert mit einer dedizierten API, die die Geschäftslogik und die Persistenzschicht hinter der öffentlichen Oberfläche isoliert.",
          },
          {
            title: "Dediziertes Back-Office",
            description:
              "Eine eigenständige Administrationsoberfläche unterstützt Betrieb, Moderation und tägliches Plattformmanagement.",
          },
          {
            title: "Deployment & Delivery",
            description:
              "Die öffentliche Website ist auf Vercel mit strengen Sicherheits-Headern, optimierten Assets und einer produktionsreifen Routenstruktur deployt.",
          },
          {
            title: "Integrationen für lokale Nutzung",
            description:
              "WhatsApp, Verifizierung, dynamische Filter und Mobile-first-Abläufe zeigen ein Produkt, das mit dem echten Verhalten seines Zielmarkts verbunden ist.",
          },
          {
            title: "Daten- und Kontenschicht",
            description:
              "Konten, Anzeigen, Profile und Interaktionen basieren auf einer vom Backend verwalteten Datenschicht, die für ein Produkt dieser Art unerlässlich ist.",
          },
        ],
      },
      proof: {
        title: "Was Bolo237 einem potenziellen Kunden beweist",
        description:
          "Wenn ein Kunde wissen möchte, ob DTSfuture über Mockups, Decks oder überzeugende Landing Pages hinausgehen kann, liefert Bolo237 bereits eine konkrete Antwort in der Öffentlichkeit.",
        items: [
          "Wir können ein komplexes lokales Marktbedürfnis in ein Produkt mit klarer Struktur und einer kommerziell glaubwürdigen Position verwandeln.",
          "Wir können ein Erlebnis gestalten, das mehrere Nutzerprofile beruhigt, führt und konvertiert, ohne Klarheit zu verlieren.",
          "Wir können Design, Geschäftslogik, Inhalte, Konten, Administration und Produktions-Deployment in ein kohärentes Produkt verbinden.",
          "Wir können ein öffentliches Produkt liefern, das Interessenten gezeigt, von Nutzern kritisiert und im Laufe der Zeit verbessert werden kann.",
        ],
      },
    },
  },
  en: {
    hub: {
      eyebrow: "Our products",
      titleLead: "Product cases that show",
      titleAccent: "end-to-end execution.",
      description:
        "We do not claim, we prove. DTSfuture is a studio based in Germany — and Bolo237, our first international flagship, is the public evidence that we can ship products from Germany to demanding international markets. This section documents what we carry today and what comes next.",
      primaryCta: "See the Bolo237 case",
      secondaryCta: "Get in touch",
      proofTitle: "What this section is here to prove",
      proofItems: [
        "Product scoping from a real market problem instead of a vague feature list",
        "Trust-oriented UX/UI design that reduces friction from the first visit",
        "Web implementation, business logic and admin surfaces that can be observed publicly",
        "Deployment, SEO, performance and ongoing operation on a product that already ships",
      ],
      featured: {
        name: "Bolo237",
        status: "Live · International",
        tagline: "International flagship — built in Germany, designed for Cameroon",
        summary:
          "Bolo237 is our first international product: a jobs and artisans marketplace, developed in Germany with German engineering culture and designed for the Cameroonian market. Public proof that we ship products able to hold up in demanding markets.",
        detailCta: "View case study",
        liveCta: "See the live product",
        tags: [
          "Product strategy",
          "UX/UI",
          "Web development",
          "Production delivery",
        ],
      },
      pipelineTitle: "Current and upcoming products",
      pipelineDescription:
        "Bolo237 opens the library. The next products for the German and international market will be documented here with the same clarity — carried by German engineering culture and uncompromising execution.",
      roadmapCards: [
        {
          name: "Carlite",
          status: "In progress",
          summary:
            "A mobility experience redesigned for local transport realities, with stronger trust cues, clearer flows, and everyday usefulness people can actually feel.",
          tags: ["Mobility", "Trust", "Local usage"],
        },
        {
          name: "The DTSfuture Lab",
          status: "Coming next",
          summary:
            "The place where the next product answers for the German and international market are formalized, with the same execution standard and the same public clarity.",
          tags: ["Exploration", "Product R&D", "Pipeline"],
        },
      ],
    },
    bolo237: {
      eyebrow: "International flagship",
      title: "Bolo237",
      tagline: "International flagship — built in Germany, designed for Cameroon",
      intro:
        "Bolo237 is our first international product — developed in Germany with German engineering culture and designed for the Cameroonian market. It did not need a simple marketing site. It needed a platform that makes the market more legible, more trustworthy, and more actionable for candidates, employers, and artisans with different needs, mostly on mobile and often under imperfect connectivity.",
      note:
        "This page shows what the product already makes visible in public and what that proves to a future client: disciplined scoping, credible product decisions, strong execution, and a delivery that is already live and usable.",
      quickFacts: [
        { label: "User journeys", value: "Candidates, employers, artisans" },
        { label: "Market coverage", value: "10 regions of Cameroon" },
        { label: "Product surfaces", value: "Public site, business flows and back office" },
      ],
      ctas: {
        live: "See the live product",
        back: "Back to our products",
        contact: "Discuss your project",
      },
      challenge: {
        title: "The initial challenge",
        description:
          "The core problem was not just about publishing job listings. It was about creating a more reliable and more useful environment where several user types can act quickly without losing trust or getting lost in the interface.",
        items: [
          {
            title: "Trust was fragile",
            description:
              "Local recruitment and artisan services often suffer from weak verification, poor clarity and too few reassuring signals for users.",
          },
          {
            title: "Mobile was the default",
            description:
              "The product had to stay readable, fast and pleasant on smartphones, including under real network constraints.",
          },
          {
            title: "Multiple jobs inside one product",
            description:
              "Candidates, employers and artisans do not expect the same thing. The structure therefore had to stay simple while supporting several useful journeys.",
          },
        ],
      },
      solution: {
        title: "The solution delivered",
        description:
          "The answer was a platform that feels more structured, more reassuring, and more direct, connecting job listings, verified profiles, artisan services, and contact flows without unnecessary friction.",
        items: [
          {
            title: "One platform, several roles",
            description:
              "The product separates candidate, employer and artisan journeys while keeping one clear promise that remains easy to understand.",
          },
          {
            title: "Visible trust mechanisms",
            description:
              "Identity verification, moderation, anti-fraud signals, editorial structure and visible contact points reinforce the service's credibility.",
          },
          {
            title: "Local usage patterns respected",
            description:
              "WhatsApp, mobile-first flows, useful filters, HR content and straightforward navigation show a product designed for the field, not just for a demo.",
          },
        ],
      },
      process: {
        title: "What DTSfuture takes care of",
        description:
          "Bolo237 serves as proof across the full value chain: understanding the need, shaping the experience, implementing the product, and launching a public surface people can actually use.",
        items: [
          {
            title: "Product scoping",
            description:
              "Turning a diffuse need into a clear promise, distinct journeys and understandable product priorities.",
          },
          {
            title: "Design & trust",
            description:
              "Designing an interface that feels more structured, more reassuring and easier to use for several user profiles.",
          },
          {
            title: "Development & business logic",
            description:
              "Building the web experience, account flows, content pages and the business bricks visible in production.",
          },
          {
            title: "Deployment & operation",
            description:
              "Public launch, SEO structure, admin surfaces and real-world usage conditions for a product that already lives outside the local machine.",
          },
        ],
      },
      stack: {
        title: "Technology & architecture",
        description:
          "Without exposing sensitive internals, the public product already reveals a serious, multi-layer technical execution.",
        note:
          "The points below rely on publicly observable elements. They are enough to show mastery of the frontend, the back office, integrations and production delivery.",
        items: [
          {
            title: "Next.js frontend",
            description:
              "The public product is served with Next.js, with a route, content and rendering structure suited to a modern transactional website.",
          },
          {
            title: "Dedicated business API",
            description:
              "Application logic communicates with a dedicated API, isolating business logic and the persistence layer behind the public surface.",
          },
          {
            title: "Dedicated back office",
            description:
              "A distinct administration surface supports operations, moderation and day-to-day platform management.",
          },
          {
            title: "Deployment & delivery",
            description:
              "The public site is deployed on Vercel with strict security headers, optimized assets and a production-ready route structure.",
          },
          {
            title: "Local usage integrations",
            description:
              "WhatsApp, verification, dynamic filters and mobile-first flows show a product connected to the real behavior of its target market.",
          },
          {
            title: "Data and account layer",
            description:
              "Accounts, listings, profiles and interactions rely on a backend-managed data layer, which is essential for a product of this type.",
          },
        ],
      },
      proof: {
        title: "What Bolo237 proves to a potential client",
        description:
          "If a client wants to know whether DTSfuture can go beyond mockups, decks, or persuasive landing pages, Bolo237 already provides a concrete answer in public.",
        items: [
          "We can turn a complex local market need into a product with a clear structure and a commercially credible position.",
          "We can design an experience that reassures, guides and converts several user profiles without losing clarity.",
          "We can connect design, business logic, content, accounts, administration and production delivery into one coherent product.",
          "We can ship a public product that can be shown to prospects, critiqued by users and improved over time.",
        ],
      },
    },
  },
} as const;

export function getProductShowcaseContent(locale: Locale) {
  return productShowcaseContent[locale];
}
