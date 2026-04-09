import type { Locale } from "@/src/i18n/messages";

export const productLinks = {
  bolo237Live: "https://www.bolo237.com",
} as const;

const productShowcaseContent = {
  fr: {
    hub: {
      eyebrow: "Nos produits",
      titleLead: "Des cas produits qui montrent",
      titleAccent: "une execution de A a Z.",
      description:
        "Nous ne voulons pas seulement dire que nous savons cadrer, designer, developper et mettre en ligne un produit. Nous voulons le prouver. Cette section documente les produits deja portes par DTSfuture et les prochaines creations qui viendront enrichir la vitrine.",
      primaryCta: "Voir le cas Bolo237",
      secondaryCta: "Nous contacter",
      proofTitle: "Ce que cette section doit rassurer",
      proofItems: [
        "Cadrage produit a partir d'un probleme reel",
        "Design UX/UI pense pour inspirer confiance",
        "Implementation web, logique metier et surfaces d'administration",
        "Mise en ligne, SEO, performance et exploitation continue",
      ],
      featured: {
        name: "Bolo237",
        status: "En ligne",
        tagline: "Marketplace emploi + artisans pour le Cameroun",
        summary:
          "Bolo237 montre notre capacite a concevoir une plateforme utile, lisible et credible, depuis la promesse produit jusqu'a la mise en ligne d'un service exploitable par de vrais utilisateurs.",
        detailCta: "Voir l'etude de cas",
        liveCta: "Voir le site live",
        tags: [
          "Strategie produit",
          "UX/UI",
          "Developpement web",
          "Mise en production",
        ],
      },
      pipelineTitle: "Produits actuels et a venir",
      pipelineDescription:
        "Bolo237 ouvre la bibliotheque. Carlite et les futures creations seront documentes ici avec le meme niveau de clarte, pour montrer ce qui a ete pense, construit et livre.",
      roadmapCards: [
        {
          name: "Carlite",
          status: "En preparation",
          summary:
            "Une experience de mobilite repensee pour les realites du transport local, avec une logique de confiance, de clarte et d'usage quotidien.",
          tags: ["Mobilite", "Confiance", "Usage local"],
        },
        {
          name: "Le Lab DTSfuture",
          status: "A venir",
          summary:
            "Le lieu ou seront formalises les prochaines reponses produit pour le Cameroun et au-dela, avec un niveau d'execution comparable.",
          tags: ["Exploration", "R&D produit", "Pipeline"],
        },
      ],
    },
    bolo237: {
      eyebrow: "Cas produit",
      title: "Bolo237",
      tagline: "Marketplace emploi + artisans pour le Cameroun",
      intro:
        "Bolo237 n'avait pas besoin d'un simple site vitrine. Il fallait une plateforme qui rende le marche plus lisible, plus fiable et plus actionnable pour des candidats, des entreprises et des artisans avec des usages differents, souvent mobiles, parfois fragiles en connectivite.",
      note:
        "Cette page presente ce que le produit permet d'observer publiquement aujourd'hui et ce que cela prouve en termes de maitrise du processus produit, du design jusqu'a la mise en ligne.",
      quickFacts: [
        { label: "Parcours couverts", value: "Candidats, entreprises, artisans" },
        { label: "Terrain cible", value: "10 regions du Cameroun" },
        { label: "Surfaces produit", value: "Site public, flux metier et back-office" },
      ],
      ctas: {
        live: "Voir le site live",
        back: "Retour a nos produits",
        contact: "Discuter de votre projet",
      },
      challenge: {
        title: "Le defi initial",
        description:
          "Le coeur du probleme n'etait pas seulement de publier des annonces. Il fallait creer un environnement plus fiable et plus utile dans lequel plusieurs profils peuvent agir vite, sans perdre confiance ni se perdre dans l'interface.",
        items: [
          {
            title: "Confiance fragile",
            description:
              "Le recrutement local et les services d'artisans souffrent souvent d'un manque de verification, de clarte et de signaux rassurants pour les utilisateurs.",
          },
          {
            title: "Usage majoritairement mobile",
            description:
              "Le produit devait rester lisible, rapide et agreable sur smartphone, y compris dans des conditions reseau loin d'etre parfaites.",
          },
          {
            title: "Plusieurs metiers dans un seul produit",
            description:
              "Candidats, recruteurs et artisans n'ont pas les memes attentes. La structure devait donc rester simple tout en supportant plusieurs parcours utiles.",
          },
        ],
      },
      solution: {
        title: "La solution apportee",
        description:
          "La reponse a ete de concevoir une plateforme plus structuree, plus rassurante et plus directe, qui relie offres d'emploi, profils verifies, services d'artisans et mise en relation sans friction inutile.",
        items: [
          {
            title: "Une plateforme claire pour plusieurs roles",
            description:
              "Le produit organise distinctement les parcours candidats, entreprises et artisans, tout en gardant une promesse unique et comprensible.",
          },
          {
            title: "Des mecanismes de confiance visibles",
            description:
              "Verification d'identite, moderation, signaux anti-fraude, structure editoriale et points de contact visibles renforcent la credibilite du service.",
          },
          {
            title: "Des usages locaux assumes",
            description:
              "WhatsApp, mobile-first, filtres utiles, contenus RH et navigation lisible montrent un produit pense pour le terrain plutot que pour une demo abstraite.",
          },
        ],
      },
      process: {
        title: "Ce que DTSfuture prend en charge",
        description:
          "Bolo237 sert de preuve sur l'ensemble de la chaine de valeur: lecture du besoin, design, implementation, mise en ligne et presence produit exploitable.",
        items: [
          {
            title: "Cadrage produit",
            description:
              "Transformation d'un besoin diffus en promesse claire, en parcours distincts et en priorites produit lisibles.",
          },
          {
            title: "Design & confiance",
            description:
              "Conception d'une interface plus structurante, plus rassurante et plus facile a utiliser pour plusieurs profils d'utilisateurs.",
          },
          {
            title: "Developpement & logique metier",
            description:
              "Mise en oeuvre de l'experience web, des flux de compte, des pages de contenu et des briques metier visibles en production.",
          },
          {
            title: "Mise en ligne & exploitation",
            description:
              "Deploiement public, structure SEO, surfaces d'administration et conditions reelles d'usage pour un produit qui vit deja hors du local.",
          },
        ],
      },
      stack: {
        title: "Technologies & architecture",
        description:
          "Sans exposer de details internes sensibles, la plateforme publique permet deja d'observer une execution technique serieuse et multi-couches.",
        note:
          "Les points ci-dessous s'appuient sur des elements visibles publiquement: ils suffisent a montrer la maitrise du front, du back-office, de l'integration et de la mise en production.",
        items: [
          {
            title: "Frontend Next.js",
            description:
              "Le produit public est servi par Next.js, avec une structure de routes, de contenu et de rendu adaptee a un site transactionnel moderne.",
          },
          {
            title: "API metier separee",
            description:
              "La logique applicative dialogue avec une API dediee, ce qui permet d'isoler la couche metier et la persistence derriere le produit public.",
          },
          {
            title: "Back-office dedie",
            description:
              "Une surface d'administration distincte accompagne l'exploitation, la moderation et les operations autour de la plateforme.",
          },
          {
            title: "Deploiement & delivery",
            description:
              "Le site public est deploye sur Vercel avec une configuration de securite stricte, des assets optimises et une structure prete pour la production.",
          },
          {
            title: "Integrations d'usage local",
            description:
              "WhatsApp, verification, filtres dynamiques et experiences mobile-first montrent un produit connecte aux usages reels du marche cible.",
          },
          {
            title: "Couche donnees & comptes",
            description:
              "Comptes, annonces, profils et interactions reposent sur une couche de donnees exploitee par le backend, indispensable a un produit de ce type.",
          },
        ],
      },
      proof: {
        title: "Ce que Bolo237 prouve a un client potentiel",
        description:
          "Si un client veut savoir si DTSfuture peut aller au-dela d'une maquette ou d'une landing page, Bolo237 donne deja une reponse concrete.",
        items: [
          "Nous savons transformer un besoin local en produit lisible et positionne clairement.",
          "Nous savons concevoir une UX qui rassure, guide et convertit plusieurs types d'utilisateurs.",
          "Nous savons relier design, logique metier, contenus, compte utilisateur et mise en production.",
          "Nous savons livrer un produit public qui peut etre montre, critique, utilise et ameliore dans la duree.",
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
        "We do not want to simply say that we can scope, design, build and ship products. We want to prove it. This section documents the products already carried by DTSfuture and the next releases that will expand the showcase.",
      primaryCta: "See the Bolo237 case",
      secondaryCta: "Get in touch",
      proofTitle: "What this section is meant to reassure",
      proofItems: [
        "Product scoping from a real market problem",
        "Trust-oriented UX/UI design",
        "Web implementation, business logic and admin surfaces",
        "Deployment, SEO, performance and ongoing operation",
      ],
      featured: {
        name: "Bolo237",
        status: "Live",
        tagline: "Jobs and artisans marketplace for Cameroon",
        summary:
          "Bolo237 demonstrates our ability to shape a useful, legible and credible platform, from the product promise to the launch of a live service that real users can act on.",
        detailCta: "View case study",
        liveCta: "Visit live site",
        tags: [
          "Product strategy",
          "UX/UI",
          "Web development",
          "Production delivery",
        ],
      },
      pipelineTitle: "Current and upcoming products",
      pipelineDescription:
        "Bolo237 opens the library. Carlite and future creations will be documented here with the same level of clarity to show what was thought through, built and delivered.",
      roadmapCards: [
        {
          name: "Carlite",
          status: "In progress",
          summary:
            "A mobility experience redesigned for local transport realities, with a stronger trust layer, clearer flows and real everyday usefulness.",
          tags: ["Mobility", "Trust", "Local usage"],
        },
        {
          name: "The DTSfuture Lab",
          status: "Coming next",
          summary:
            "The place where the next product responses for Cameroon and beyond will be formalized, with the same execution standard.",
          tags: ["Exploration", "Product R&D", "Pipeline"],
        },
      ],
    },
    bolo237: {
      eyebrow: "Product case",
      title: "Bolo237",
      tagline: "Jobs and artisans marketplace for Cameroon",
      intro:
        "Bolo237 did not need a simple marketing website. It needed a platform that makes the market more legible, more trustworthy and more actionable for candidates, employers and artisans with different needs, mostly on mobile and often under imperfect connectivity conditions.",
      note:
        "This page presents what the product already makes observable in public and what that proves about our ability to handle the full process, from design through deployment.",
      quickFacts: [
        { label: "User journeys", value: "Candidates, employers, artisans" },
        { label: "Market coverage", value: "10 regions of Cameroon" },
        { label: "Product surfaces", value: "Public site, business flows and back office" },
      ],
      ctas: {
        live: "Visit live site",
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
          "The response was to design a more structured, more reassuring and more direct platform that connects job listings, verified profiles, artisan services and direct contact without unnecessary friction.",
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
          "Bolo237 serves as proof across the full value chain: reading the need, designing the experience, implementing the product and launching a usable public surface.",
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
          "Without exposing sensitive internal details, the public product already reveals a serious multi-layer technical execution.",
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
          "If a client wants to know whether DTSfuture can go beyond a mockup or a marketing landing page, Bolo237 already provides a concrete answer.",
        items: [
          "We can turn a local market need into a product with a clear structure and a credible position.",
          "We can design an experience that reassures, guides and converts several user profiles.",
          "We can connect design, business logic, content, accounts and production delivery into one coherent product.",
          "We can ship a public product that can be shown, critiqued, used and improved over time.",
        ],
      },
    },
  },
} as const;

export function getProductShowcaseContent(locale: Locale) {
  return productShowcaseContent[locale];
}