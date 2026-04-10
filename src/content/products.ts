import type { Locale } from "@/src/i18n/messages";

export const productLinks = {
  bolo237Live: "https://www.bolo237.com",
} as const;

const productShowcaseContent = {
  fr: {
    hub: {
      eyebrow: "Nos produits",
      titleLead: "Des cas produits qui montrent",
      titleAccent: "une exécution de A à Z.",
      description:
        "Nous ne voulons pas seulement dire que nous savons cadrer, designer, développer et mettre en ligne un produit. Nous voulons le prouver avec des cas publics qui rassurent un prospect avant même le premier appel. Cette section documente les produits déjà portés par DTSfuture et les prochaines créations qui viendront enrichir la vitrine.",
      primaryCta: "Voir le cas Bolo237",
      secondaryCta: "Nous contacter",
      proofTitle: "Ce que cette section doit rassurer",
      proofItems: [
        "Capacité à cadrer un produit à partir d'un problème réel et non d'une simple idée vague",
        "Design UX/UI pensé pour inspirer confiance et réduire la friction des premiers usages",
        "Implémentation web, logique métier et surfaces d'administration visibles et cohérentes",
        "Mise en ligne, SEO, performance et exploitation continue sur un produit déjà montrable",
      ],
      featured: {
        name: "Bolo237",
        status: "En ligne",
        tagline: "Marketplace emploi + artisans pour le Cameroun",
        summary:
          "Bolo237 montre que nous savons transformer un besoin local complexe en un produit clair, crédible et exploitable, depuis la promesse initiale jusqu'à la mise en ligne d'un service que de vrais utilisateurs peuvent parcourir, comprendre et utiliser.",
        detailCta: "Voir l'étude de cas",
        liveCta: "Voir le site live",
        tags: [
          "Stratégie produit",
          "UX/UI",
          "Développement web",
          "Mise en production",
        ],
      },
      pipelineTitle: "Produits actuels et à venir",
      pipelineDescription:
        "Bolo237 ouvre la bibliothèque. Carlite et les futures créations seront documentées ici avec le même niveau de clarté, pour montrer ce qui a été pensé, construit et livré.",
      roadmapCards: [
        {
          name: "Carlite",
          status: "En préparation",
          summary:
            "Une expérience de mobilité repensée pour les réalités du transport local, avec une logique de confiance, de clarté et d'usage quotidien.",
          tags: ["Mobilité", "Confiance", "Usage local"],
        },
        {
          name: "Le Lab DTSfuture",
          status: "À venir",
          summary:
            "Le lieu où seront formalisées les prochaines réponses produit pour le Cameroun et au-delà, avec un niveau d'exécution comparable.",
          tags: ["Exploration", "R&D produit", "Pipeline"],
        },
      ],
    },
    bolo237: {
      eyebrow: "Cas produit",
      title: "Bolo237",
      tagline: "Marketplace emploi + artisans pour le Cameroun",
      intro:
        "Bolo237 n'avait pas besoin d'un simple site vitrine. Il fallait une plateforme qui rende le marché plus lisible, plus fiable et plus actionnable pour des candidats, des entreprises et des artisans avec des usages différents, souvent mobiles, parfois fragiles en connectivité.",
      note:
        "Cette page présente ce que le produit permet d'observer publiquement aujourd'hui et ce que cela prouve pour un futur client : capacité de cadrage, exécution solide, arbitrages produit crédibles et mise en ligne exploitable.",
      quickFacts: [
        { label: "Parcours couverts", value: "Candidats, entreprises, artisans" },
        { label: "Terrain cible", value: "10 régions du Cameroun" },
        { label: "Surfaces produit", value: "Site public, flux métier et back-office" },
      ],
      ctas: {
        live: "Voir le site live",
        back: "Retour à nos produits",
        contact: "Discuter de votre projet",
      },
      challenge: {
        title: "Le défi initial",
        description:
          "Le cœur du problème n'était pas seulement de publier des annonces. Il fallait créer un environnement plus fiable et plus utile dans lequel plusieurs profils peuvent agir vite, sans perdre confiance ni se perdre dans l'interface.",
        items: [
          {
            title: "Confiance fragile",
            description:
              "Le recrutement local et les services d'artisans souffrent souvent d'un manque de vérification, de clarté et de signaux rassurants pour les utilisateurs.",
          },
          {
            title: "Usage majoritairement mobile",
            description:
              "Le produit devait rester lisible, rapide et agréable sur smartphone, y compris dans des conditions réseau loin d'être parfaites.",
          },
          {
            title: "Plusieurs métiers dans un seul produit",
            description:
              "Candidats, recruteurs et artisans n'ont pas les mêmes attentes. La structure devait donc rester simple tout en supportant plusieurs parcours utiles.",
          },
        ],
      },
      solution: {
        title: "La solution apportée",
        description:
          "La réponse a été de concevoir une plateforme plus structurée, plus rassurante et plus directe, qui relie offres d'emploi, profils vérifiés, services d'artisans et mise en relation sans friction inutile.",
        items: [
          {
            title: "Une plateforme claire pour plusieurs rôles",
            description:
              "Le produit organise distinctement les parcours candidats, entreprises et artisans, tout en gardant une promesse unique et compréhensible.",
          },
          {
            title: "Des mécanismes de confiance visibles",
            description:
              "Vérification d'identité, modération, signaux anti-fraude, structure éditoriale et points de contact visibles renforcent la crédibilité du service.",
          },
          {
            title: "Des usages locaux assumés",
            description:
              "WhatsApp, mobile-first, filtres utiles, contenus RH et navigation lisible montrent un produit pensé pour le terrain plutôt que pour une démo abstraite.",
          },
        ],
      },
      process: {
        title: "Ce que DTSfuture prend en charge",
        description:
          "Bolo237 sert de preuve sur l'ensemble de la chaîne de valeur : lecture du besoin, design, implémentation, mise en ligne et présence produit exploitable.",
        items: [
          {
            title: "Cadrage produit",
            description:
              "Transformation d'un besoin diffus en promesse claire, en parcours distincts et en priorités produit lisibles.",
          },
          {
            title: "Design & confiance",
            description:
              "Conception d'une interface plus structurante, plus rassurante et plus facile à utiliser pour plusieurs profils d'utilisateurs.",
          },
          {
            title: "Développement & logique métier",
            description:
              "Mise en œuvre de l'expérience web, des flux de compte, des pages de contenu et des briques métier visibles en production.",
          },
          {
            title: "Mise en ligne & exploitation",
            description:
              "Déploiement public, structure SEO, surfaces d'administration et conditions réelles d'usage pour un produit qui vit déjà hors du local.",
          },
        ],
      },
      stack: {
        title: "Technologies & architecture",
        description:
          "Sans exposer de détails internes sensibles, la plateforme publique permet déjà d'observer une exécution technique sérieuse et multi-couches.",
        note:
          "Les points ci-dessous s'appuient sur des éléments visibles publiquement : ils suffisent à montrer la maîtrise du front, du back-office, de l'intégration et de la mise en production.",
        items: [
          {
            title: "Frontend Next.js",
            description:
              "Le produit public est servi par Next.js, avec une structure de routes, de contenu et de rendu adaptée à un site transactionnel moderne.",
          },
          {
            title: "API métier séparée",
            description:
              "La logique applicative dialogue avec une API dédiée, ce qui permet d'isoler la couche métier et la persistance derrière le produit public.",
          },
          {
            title: "Back-office dédié",
            description:
              "Une surface d'administration distincte accompagne l'exploitation, la modération et les opérations autour de la plateforme.",
          },
          {
            title: "Déploiement & delivery",
            description:
              "Le site public est déployé sur Vercel avec une configuration de sécurité stricte, des assets optimisés et une structure prête pour la production.",
          },
          {
            title: "Intégrations d'usage local",
            description:
              "WhatsApp, vérification, filtres dynamiques et expériences mobile-first montrent un produit connecté aux usages réels du marché cible.",
          },
          {
            title: "Couche données & comptes",
            description:
              "Comptes, annonces, profils et interactions reposent sur une couche de données exploitée par le backend, indispensable à un produit de ce type.",
          },
        ],
      },
      proof: {
        title: "Ce que Bolo237 prouve à un client potentiel",
        description:
          "Si un client veut savoir si DTSfuture peut aller au-delà d'une maquette, d'un Figma ou d'une landing page persuasive, Bolo237 donne déjà une réponse concrète et visible en public.",
        items: [
          "Nous savons transformer un besoin local complexe en produit lisible, positionné et défendable commercialement.",
          "Nous savons concevoir une UX qui rassure, guide et convertit plusieurs types d'utilisateurs sans perdre la clarté du parcours.",
          "Nous savons relier design, logique métier, contenus, compte utilisateur, administration et mise en production dans une même exécution.",
          "Nous savons livrer un produit public qui peut être montré à des prospects, critiqué par des utilisateurs et amélioré dans la durée.",
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
        "We are not here to merely claim that we can scope, design, build, and launch products. We want to prove it through public cases that build confidence before the first call. This section documents the products DTSfuture has already carried and the next releases that will broaden the showcase.",
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
        status: "Live",
        tagline: "Jobs and artisans marketplace for Cameroon",
        summary:
          "Bolo237 shows that we can turn a complex local need into a product that is clear, credible, and operational, from the original promise to a live service real users can navigate, understand, and act on.",
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
        "Bolo237 opens the library. Carlite and the next creations will be documented here with the same level of clarity to show what was shaped, built, and shipped.",
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
            "The place where the next product answers for Cameroon and beyond will be formalized, with the same execution standard and the same public clarity.",
          tags: ["Exploration", "Product R&D", "Pipeline"],
        },
      ],
    },
    bolo237: {
      eyebrow: "Product case",
      title: "Bolo237",
      tagline: "Jobs and artisans marketplace for Cameroon",
      intro:
        "Bolo237 did not need a simple marketing site. It needed a platform that makes the market more legible, more trustworthy, and more actionable for candidates, employers, and artisans with different needs, mostly on mobile and often under imperfect connectivity.",
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