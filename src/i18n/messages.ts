export const supportedLocales = ["fr", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const messages = {
  fr: {
    meta: {
      homeTitle: "DTSfuture - Studio Technologique",
      homeDescription:
        "DTSfuture conçoit des produits numériques ambitieux pour le Cameroun, avec une exécution rigoureuse, une esthétique premium et une obsession pour l'utilité réelle.",
      productsTitle: "Nos Produits | DTSfuture",
      productsDescription:
        "Produits et cas DTSfuture: Bolo237, methodes de travail, execution produit et preuves de livraison de A a Z.",
      bolo237Title: "Bolo237 | DTSfuture",
      bolo237Description:
        "Cas produit Bolo237: defi initial, solution apportee, execution produit et technologies visibles derriere la plateforme.",
      impressumTitle: "Impressum | DTSfuture",
      impressumDescription:
        "Informations d'éditeur et de contact du projet privé DTSfuture, site personnel et non commercial.",
      pressTitle: "Presse | DTSfuture",
      pressDescription:
        "Espace presse DTSfuture: contact média, présentation courte, chiffres clés et assets téléchargeables.",
      storyTitle: "Notre Histoire | DTSfuture",
      storyDescription:
        "Le recit DTSfuture: du vecu au Cameroun, a la discipline acquise en Allemagne, jusqu'a la decision de construire des produits qui tiennent vraiment.",
      privacyTitle: "Politique de confidentialité | DTSfuture",
      privacyDescription:
        "Politique de confidentialité de DTSfuture, en français et en anglais selon la préférence du visiteur.",
    },
    common: {
      homeAriaLabel: "DTSfuture - Accueil",
      primaryNavAriaLabel: "Navigation principale",
      languageSwitcherLabel: "Choisir la langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      languageShort: {
        fr: "FR",
        en: "EN",
      },
      productsMenu: "Nos Produits",
      products: "Produits",
      dna: "Notre ADN",
      story: "Notre Histoire",
      contact: "Contact",
      contactUs: "Nous contacter",
      legal: "Légal",
      website: "Site web",
      email: "E-mail",
      phone: "Téléphone",
      address: "Adresse",
      live: "En ligne",
      comingSoon: "Bientôt",
      productProof: "Preuve produit",
      allRightsReserved: "Tous droits réservés.",
      footerBottomLine: "Nous ne decorons pas le futur. Nous le construisons pour qu'il tienne.",
      host: "Hébergeur",
      press: "Presse",
      privacy: "Confidentialité",
      impressum: "Impressum",
      country: "Allemagne",
      appIcon: "Icône app",
    },
    hero: {
      badge: "Une idée forte pour le Cameroun mérite un produit irréprochable.",
      titleLead: "Nous concevons les produits numériques que le marché attend",
      titleAccent: "au Cameroun.",
      description:
        "DTSfuture transforme des frictions quotidiennes en expériences claires, désirables et assez solides pour gagner la confiance du terrain.",
      primaryCta: "Voir ce que nous construisons",
      secondaryCta: "Nous contacter",
      stats: [
        { value: "2", label: "Produits en cours" },
        { value: "10", label: "Régions couvertes" },
        { value: "237", label: "Code du Cameroun" },
      ],
    },
    adn: {
      eyebrow: "Notre ADN",
      titleLead: "Nous ne construisons pas depuis",
      titleAccent: "une tour d'ivoire.",
      description:
        "Nous avons connu la friction avant d'apprendre la méthode. C'est précisément ce mélange qui nous permet de livrer des produits plus justes, plus robustes et plus crédibles.",
      items: {
        localInsight: {
          title: "Compréhension locale",
          description:
            "Des interfaces pensées pour les usages réels au Cameroun. Pas de solution hors-sol, pas de copier-coller paresseux.",
        },
        europeanStandards: {
          title: "Standards européens",
          description:
            "Sécurité, conformité, stabilité et discipline produit pour inspirer confiance dès la première interaction.",
        },
        modernEngineering: {
          title: "Ingénierie moderne",
          description:
            "Architecture solide, CI/CD et monitoring pour livrer vite sans sacrifier la qualité.",
        },
        performanceFirst: {
          title: "Performance d'abord",
          description:
            "Optimisé pour des connexions mobiles réelles, parce qu'une app lente perd la confiance avant même de convaincre.",
        },
        socialImpact: {
          title: "Impact concret",
          description:
            "Chaque produit doit améliorer une réalité mesurable: trouver un job, se déplacer mieux, accéder plus vite à un service fiable.",
        },
        solidInfrastructure: {
          title: "Infrastructure solide",
          description:
            "Des fondations pensées pour tenir dans le temps et monter en charge sans casser l'expérience.",
        },
      },
    },
    story: {
      eyebrow: "Notre Histoire",
      titleLead: "Nous avons vu ce qui bloque.",
      titleAccent: "Nous avons appris à construire ce qui débloque.",
      description:
        "DTSfuture n'est pas né d'une tendance. Le projet est né d'un décalage clair: trop de besoins réels, trop peu de produits fiables pour y répondre. Le Cameroun a donné l'urgence du problème. L'Allemagne a donné la discipline nécessaire pour construire des réponses sérieuses.",
      calloutTitle: "Du vécu à l'exécution",
      calloutText:
        "Le terrain donne l'intuition. La rigueur donne la vitesse juste. DTSfuture existe à l'endroit où les deux deviennent un produit crédible.",
      pageCta: "Lire l'histoire complete",
      milestones: [
        {
          label: "Terrain",
          title: "Le terrain avant les slides",
          description:
            "Grandir au Cameroun, c'est comprendre ce qui freine vraiment l'élan: le manque de confiance, l'accès incertain, la friction inutile et le temps perdu.",
        },
        {
          label: "Discipline",
          title: "L'exigence apprise en Allemagne",
          description:
            "L'Allemagne a apporté la méthode: architecture propre, exigence produit, culture du détail et obsession de la fiabilité.",
        },
        {
          label: "Impact",
          title: "Construire ce qui mérite d'exister",
          description:
            "DTSfuture relie ces deux forces pour lancer des produits utiles, désirables et suffisamment solides pour durer sur le marché africain.",
        },
      ],
    },
    storyPage: {
      eyebrow: "Notre Histoire",
      titleLead: "Avant DTSfuture, il y avait une frustration simple.",
      titleAccent: "Voir trop de besoins reels rester sans reponse serieuse.",
      intro:
        "Le point de depart n'etait pas une mode, ni l'envie abstraite de lancer une startup de plus. Le point de depart, c'etait le cout humain de la friction: des heures perdues, une confiance usee, des services qui promettent beaucoup mais tiennent mal quand la vraie vie commence.",
      quote:
        "Quand un produit manque de clarte, de fiabilite ou de respect pour le terrain, ce ne sont pas juste des pixels qui ratent. Ce sont des opportunites qui se ferment.",
      chapters: [
        {
          label: "Origine",
          title: "Le Cameroun a donne l'urgence",
          text:
            "Grandir avec les realites du Cameroun, c'est voir tres tot la difference entre une idee brillante sur le papier et un service qui aide vraiment quelqu'un a avancer. Quand la confiance est fragile, quand le mobile est la porte d'entree principale, quand chaque friction coute du temps ou de l'argent, la barre n'est pas esthetique. Elle est pratique, humaine et economique.",
        },
        {
          label: "Transformation",
          title: "L'Allemagne a impose la discipline",
          text:
            "L'experience allemande n'a pas efface cette realite. Elle l'a structuree. Rigueur technique, exigence produit, souci du detail, respect de la fiabilite, culture de la preuve: tout cela a donne un cadre plus solide a une intuition deja presente. DTSfuture s'est construit a cet endroit precis, entre le vecu et la methode.",
        },
        {
          label: "Decision",
          title: "Construire seulement ce qui merite d'exister",
          text:
            "Le projet n'a donc pas vocation a produire du bruit. Il sert a construire des produits assez clairs pour etre compris, assez utiles pour etre adoptes et assez solides pour tenir quand le marche commence a les juger. Bolo237 existe deja comme preuve de cette intention: un produit public, expose, perfectible, mais reel.",
        },
      ],
      bridgeTitle: "Ce que DTSfuture veut changer",
      bridgeText:
        "Nous voulons fermer le fosse entre la qualite que les usages africains meritent et la qualite qu'ils recoivent souvent. Cela demande de la sensibilite locale, de la discipline europeenne et une obsession simple: ne pas livrer quelque chose de joli mais fragile.",
      pillarsTitle: "Ce que cette histoire produit aujourd'hui",
      pillars: [
        "Une exigence produit qui commence par la confiance et se termine par l'execution.",
        "Des experiences pensees pour le mobile, la clarte et les contraintes du terrain.",
        "Une ambition africaine portee par des standards techniques qui tiennent dans le temps.",
      ],
      closingTitle: "DTSfuture n'est pas une posture.",
      closingText:
        "C'est une promesse de construction serieuse. Si une idee merite d'exister sur le marche, elle merite mieux qu'un prototype flatteur. Elle merite un produit qui tient, qui rassure et qui avance avec ses utilisateurs.",
      primaryCta: "Parler de votre projet",
      secondaryCta: "Voir nos produits",
    },
    portfolio: {
      eyebrow: "Portfolio",
      titleLead: "Des produits conçus pour",
      titleAccent: "gagner la confiance du terrain",
      description:
        "Chaque produit DTSfuture s'attaque à un besoin réel avec un niveau d'exécution pensé pour convaincre les utilisateurs, rassurer les partenaires et crédibiliser la vision.",
      featuredTagline: "La marketplace de l'emploi camerounais",
      featuredDescription:
        "Bolo237 met en relation talents, artisans qualifiés et entreprises dans un environnement plus structuré, plus professionnel et nettement plus fiable.",
      featuredTags: ["Mobile-first", "Temps réel", "Profils vérifiés", "10 régions"],
      proofDescription:
        "Des captures réelles de Bolo237 sont intégrées à la vitrine pour montrer une exécution déjà tangible, déjà visible et déjà assez sérieuse pour inspirer confiance.",
      exploreCta: "Voir l'etude Bolo237",
      secondaryTagline: "Le covoiturage réinventé pour le Cameroun",
      secondaryDescription:
        "Carlite prépare une expérience de mobilité pensée pour les réalités du transport local: plus lisible, plus sûre et réellement utile au quotidien.",
      secondaryTags: ["Covoiturage", "Sécurisé", "GPS intégré", "Paiement mobile"],
      labTitle: "Le Lab DTSfuture",
      labDescription:
        "D'autres solutions pour le Cameroun et l'Afrique sont déjà en préparation. Nous allons là où la friction mérite enfin une vraie réponse produit.",
    },
    bolo237Preview: {
      brandAlt: "Visuel de marque Bolo237",
      iconAlt: "Icône de l'application Bolo237",
      homepageAlt: "Capture d'écran de la page d'accueil Bolo237",
      mobileAlt: "Vue mobile de Bolo237",
      imageBadges: ["Home active", "Visuel marque", "Icône app"],
    },
    cta: {
      titleLead: "Une idée à transformer en produit solide ?",
      titleAccent: "Parlons-en.",
      description:
        "Que vous soyez fondateur, investisseur ou porteur de vision, nous pouvons transformer une intuition locale en produit plus net, plus fort et plus crédible.",
    },
    pwa: {
      badge: "Installer",
      title: "Ajouter DTSfuture à l'écran d'accueil",
      description:
        "Installez la vitrine comme une app mobile pour l'ouvrir plus vite, en plein écran et avec un accès direct depuis votre téléphone.",
      iosDescription:
        "Sur iPhone et iPad, l'installation passe par le menu de partage de Safari. Nous vous montrons les étapes en deux secondes.",
      iosStepsTitle: "Sur iPhone / iPad",
      iosSteps: [
        "Touchez le bouton de partage dans Safari.",
        "Choisissez \"Ajouter à l'écran d'accueil\".",
        "Confirmez pour installer DTSfuture.",
      ],
      installCta: "Installer maintenant",
      iosCta: "Voir comment",
      dismissCta: "Plus tard",
      closeAriaLabel: "Fermer la carte d'installation",
    },
    footer: {
      brandBlurb:
        "Nous concevons des produits numériques ambitieux, utiles et crédibles pour le Cameroun, avec une exigence d'exécution qui ne se négocie pas.",
      productsHeading: "Produits",
      contactHeading: "Contact",
      pressHeading: "Presse",
      legalHeading: "Légal",
      labLink: "Le Lab",
      addressLabel: "Voir l'adresse",
      press: {
        heading: "Presse",
        blurb:
          "Media kit, contact journaliste et assets de marque prêts à être exploités dans un contexte éditorial.",
        pageLink: "Media kit & presse",
        contactLink: "Demande media",
        assetLabels: {
          kit: "Press kit ZIP",
          wordmark: "Logo wordmark PNG",
          mark: "Icône couleur PNG",
        },
      },
      legalLinks: {
        impressum: "Impressum",
        privacy: "Politique de confidentialité",
      },
    },
    legal: {
      press: {
        eyebrow: "Presse",
        title: "Espace presse",
        intro:
          "Cet espace regroupe les informations essentielles pour la presse, les médias, les podcasts, les investisseurs et les partenaires qui souhaitent présenter DTSfuture avec des éléments fiables et directement exploitables.",
        disclaimer:
          "Les demandes média, interviews, citations et besoins en assets peuvent être centralisés via l'email de contact ci-dessous. Les éléments fournis ici sont pensés pour un usage éditorial et de présentation de la marque.",
        headings: {
          boilerplate: "Présentation courte",
          facts: "Chiffres clés",
          assets: "Assets téléchargeables",
          contact: "Contact média",
        },
        quickFactsTitle: "Informations clés",
        boilerplate:
          "DTSfuture est un studio technologique indépendant qui conçoit des produits numériques ambitieux pour le Cameroun. Le projet relie une compréhension directe du terrain à une exécution disciplinée acquise en Allemagne, afin de lancer des services utiles, crédibles et solides dès leurs premières versions.",
        facts: {
          foundedLabel: "Année de lancement",
          marketLabel: "Terrain d'action",
          productsLabel: "Produits portés",
          languagesLabel: "Langues publiques",
          languagesValue: "Français, English",
        },
        assetsDescription:
          "Les logos ci-dessous sont telechargeables en image PNG pour un usage presse, editorial et presentation. Merci de conserver les proportions et les couleurs de marque lors de leur utilisation.",
        brandPreviewHeading: "Apercu de marque",
        brandPreviewDescription:
          "Le media kit rassemble une base propre: iconographie, wordmark, boilerplate et point de contact. L'objectif est simple: permettre a un media de reprendre DTSfuture proprement en quelques minutes.",
        downloadKitCta: "Telecharger le press kit",
        contactCta: "Contacter la presse",
        includedItems: [
          "Wordmark PNG",
          "Icone couleur PNG",
          "Boilerplate FR",
          "Boilerplate EN",
        ],
        topicsHeading: "Angles editoriaux",
        topics: [
          "Tech produit pour le Cameroun",
          "Execution entre Allemagne et Afrique",
          "Bolo237 et le futur de l'emploi local",
          "Design de confiance pour les usages terrain",
          "Studios independants et lancement de produits",
        ],
        downloads: {
          kit: {
            title: "DTSfuture Press Kit",
            description: "Archive ZIP complete avec logos, boilerplate et elements de base pour article ou dossier media.",
          },
          wordmark: {
            title: "Wordmark DTSfuture",
            description: "Version PNG horizontale pour articles, dossiers de presse et visuels larges.",
          },
          mark: {
            title: "Icône DTSfuture",
            description: "Version PNG compacte pour avatar, vignettes, presse et mentions rapides.",
          },
        },
        contactLead:
          "Pour toute demande d'interview, citation, dossier média, logo, prise de parole ou mise en relation, écrivez à",
        contactRoleLabel: "Interlocuteur",
        contactRoleValue: "Samuel DJOMMOU THENGHO · Founder & Product Builder",
      },
      impressum: {
        eyebrow: "Impressum · Projet privé",
        title: "Impressum",
        intro:
          "Le site dtsfuture.com est un site personnel et non commercial. Cette page présente les informations d'éditeur et de contact actuellement disponibles pour le projet privé DTSfuture.",
        disclaimer:
          "Les informations d'editeur, de domaine et d'hebergement ci-dessous correspondent a la configuration actuellement utilisee pour le site public.",
        headings: {
          editor: "Éditeur du site",
          publication: "Responsable de la publication",
          hosting: "Hébergement",
          legalScope: "Cadre juridique et portee territoriale",
          intellectualProperty: "Propriété intellectuelle",
          contact: "Contact",
        },
        details: {
          projectName: "Nom du projet",
          siteEditor: "Éditeur du site",
          siteNature: "Nature du site",
          address: "Adresse",
          email: "Email de contact",
          phone: "Téléphone",
          website: "Site web",
          host: "Plateforme d'hebergement",
          hostAddress: "Infrastructure",
          hostContact: "Domaine et DNS",
        },
        editorText:
          "Le présent site est édité par DTSfuture. Il s'agit d'un projet privé, personnel et non commercial publié depuis l'Allemagne.",
        publicationLead: "Le responsable de la publication est",
        publicationBetween: "Il peut être contacté via",
        publicationPhoneLead: "ou au",
        hostingText:
          "Le site est deployee sur Vercel. Le nom de domaine dtsfuture.com a ete achete chez Hostinger et son DNS pointe vers l'infrastructure Vercel.",
        legalScopeText:
          "Le site est edite depuis l'Allemagne et s'adresse notamment a une audience interessee par le Cameroun. DTSfuture cherche a aligner cette vitrine avec les exigences pertinentes de transparence, d'identification de l'editeur, de confidentialite, de securite et d'information applicables en Allemagne, ainsi qu'avec les exigences imperatives pertinentes pour la communication numerique vers le Cameroun. En cas d'evolution fonctionnelle, commerciale ou reglementaire, ces mentions et la politique de confidentialite devront etre mises a jour.",
        intellectualPropertyText:
          "L'ensemble des contenus présents sur ce site, notamment les textes, éléments visuels, logos, interfaces, composants graphiques et éléments de marque, est protégé par les règles relatives à la propriété intellectuelle. Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation préalable écrite, est interdite.",
        contactLead: "Pour toute question relative au site ou à son exploitation, vous pouvez écrire à",
        contactPhoneLead: "appeler le",
        contactAddressLead: "ou nous écrire à l'adresse",
      },
      privacy: {
        eyebrow: "Confidentialité",
        title: "Politique de confidentialité",
        intro:
          "Cette politique décrit de manière transparente la façon dont les données personnelles peuvent être traitées dans le cadre de l'utilisation du site vitrine DTSfuture.",
        disclaimer:
          "Cette politique decrit la configuration actuellement publiee pour dtsfuture.com. Elle cherche a couvrir les exigences de transparence, de securite et de confidentialite pertinentes pour une publication depuis l'Allemagne et une disponibilite du site vers le Cameroun. Elle devra etre revue en cas d'evolution fonctionnelle ou commerciale.",
        sections: [
          {
            title: "Données concernées",
            text: "Le site vitrine DTSfuture peut traiter des données techniques de navigation, des journaux de sécurité, ainsi que les informations que vous choisissez de transmettre volontairement par email lorsque vous contactez l'équipe.",
          },
          {
            title: "Finalités du traitement",
            text: "Ces données sont utilisées pour assurer le fonctionnement du site, maintenir sa sécurité, répondre aux demandes reçues et améliorer la qualité de l'expérience proposée.",
          },
          {
            title: "Base légale",
            text: "Les traitements reposent, selon les cas, sur l'intérêt légitime de DTSfuture à exploiter son site, sur l'exécution de mesures précontractuelles lorsqu'une prise de contact est engagée, ou sur le respect d'obligations légales applicables.",
          },
          {
            title: "Destinataires",
            text: "Les données sont destinées aux personnes autorisées au sein de DTSfuture et, lorsque nécessaire, à ses prestataires techniques intervenant pour l'hébergement, la maintenance, la sécurité ou l'exploitation du site.",
          },
          {
            title: "Portee territoriale et cadre juridique",
            text: "Le site est edite depuis l'Allemagne et s'adresse notamment a des visiteurs interesses par le Cameroun. DTSfuture cherche a respecter les exigences pertinentes de transparence, de protection des donnees, de securite et d'information applicables a la publication du site en Allemagne, ainsi que les obligations imperatives pertinentes lorsqu'un service numerique est accessible depuis le Cameroun.",
          },
          {
            title: "Transferts et prestataires techniques",
            text: "L'hebergement via Vercel, la gestion du domaine via Hostinger et certains flux techniques peuvent impliquer des traitements ou des transits de donnees techniques hors du pays depuis lequel vous consultez le site. DTSfuture limite ces flux au necessaire, reduit la quantite de donnees traitees et s'appuie sur les garanties techniques et contractuelles disponibles chez ses prestataires.",
          },
          {
            title: "Durée de conservation",
            text: "Les données sont conservées pendant une durée proportionnée à leur finalité, puis supprimées ou archivées conformément aux exigences légales et opérationnelles applicables.",
          },
          {
            title: "Vos droits",
            text: "Vous pouvez demander l'accès, la rectification, l'effacement, la limitation du traitement, l'opposition ou la portabilité de vos données lorsque ces droits sont applicables. Vous pouvez également introduire une réclamation auprès de l'autorité compétente.",
          },
          {
            title: "Cookies et mesure d'audience",
            text: "Dans la configuration actuellement publiée, le site n'embarque aucun outil de mesure d'audience, aucun pixel marketing et aucun cookie publicitaire. Le seul stockage navigateur intentionnel côté interface publique est le cookie fonctionnel dtsfuture-locale, conservé jusqu'à 12 mois pour mémoriser la langue choisie (fr ou en). Si des outils d'analyse, de personnalisation ou de marketing sont ajoutés plus tard, cette politique devra être mise à jour avec le détail des traceurs utilisés et, si nécessaire, un mécanisme de consentement préalable.",
          },
          {
            title: "Sécurité",
            text: "DTSfuture met en oeuvre des mesures techniques et organisationnelles adaptees afin de proteger les donnees contre l'acces non autorise, la divulgation, l'alteration ou la destruction non souhaitee. Cela inclut notamment l'usage du HTTPS, des en-tetes de securite renforces, une limitation des surfaces exposees et une vigilance particuliere sur les dependances et la configuration de publication.",
          },
        ],
        contactHeading: "Contact relatif aux données personnelles",
        contactLead: "Pour exercer vos droits ou poser une question relative à la confidentialité, vous pouvez écrire à",
        contactPhoneLead: "appeler le",
        contactAddressLead: "ou nous écrire à",
      },
    },
  },
  en: {
    meta: {
      homeTitle: "DTSfuture - Technology Studio",
      homeDescription:
        "DTSfuture builds ambitious digital products for Cameroon with rigorous execution, premium product thinking and an obsession for real usefulness.",
      productsTitle: "Our Products | DTSfuture",
      productsDescription:
        "DTSfuture products and case studies: Bolo237, delivery process and end-to-end product execution proof.",
      bolo237Title: "Bolo237 | DTSfuture",
      bolo237Description:
        "Bolo237 product case: initial challenge, delivered solution and the visible technologies behind the platform.",
      impressumTitle: "Impressum | DTSfuture",
      impressumDescription:
        "Publisher and contact information for DTSfuture, a private personal non-commercial project.",
      pressTitle: "Press | DTSfuture",
      pressDescription:
        "DTSfuture press room: media contact, company boilerplate, key facts and downloadable brand assets.",
      storyTitle: "Our Story | DTSfuture",
      storyDescription:
        "The DTSfuture story: lived reality in Cameroon, execution discipline learned in Germany, and the decision to build products that truly hold up.",
      privacyTitle: "Privacy Policy | DTSfuture",
      privacyDescription:
        "DTSfuture privacy policy, available in French and English based on the visitor's preference.",
    },
    common: {
      homeAriaLabel: "DTSfuture - Home",
      primaryNavAriaLabel: "Main navigation",
      languageSwitcherLabel: "Choose language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageShort: {
        fr: "FR",
        en: "EN",
      },
      productsMenu: "Our Products",
      products: "Products",
      dna: "Our DNA",
      story: "Our Story",
      contact: "Contact",
      contactUs: "Get in touch",
      legal: "Legal",
      website: "Website",
      email: "Email",
      phone: "Phone",
      address: "Address",
      live: "Live",
      comingSoon: "Coming soon",
      productProof: "Product proof",
      allRightsReserved: "All rights reserved.",
      footerBottomLine: "We do not decorate the future. We build it to hold.",
      host: "Hosting provider",
      press: "Press",
      privacy: "Privacy Policy",
      impressum: "Impressum",
      country: "Germany",
      appIcon: "App icon",
    },
    hero: {
      badge: "A serious idea for Cameroon deserves a serious product.",
      titleLead: "We design the digital products the market is waiting for",
      titleAccent: "in Cameroon.",
      description:
        "DTSfuture turns local friction into clear, desirable and high-trust products built to perform in the real world.",
      primaryCta: "See what we are building",
      secondaryCta: "Get in touch",
      stats: [
        { value: "2", label: "Products underway" },
        { value: "10", label: "Regions covered" },
        { value: "237", label: "Cameroon country code" },
      ],
    },
    adn: {
      eyebrow: "Our DNA",
      titleLead: "We do not build from",
      titleAccent: "an ivory tower.",
      description:
        "We experienced the friction before we learned the method. That combination is exactly why we build products that feel sharper, stronger and more credible.",
      items: {
        localInsight: {
          title: "Local insight",
          description:
            "Interfaces shaped for real behavior in Cameroon. No detached product thinking, no lazy copy-paste from other markets.",
        },
        europeanStandards: {
          title: "European standards",
          description:
            "Security, compliance, stability and product discipline that create trust from the very first interaction.",
        },
        modernEngineering: {
          title: "Modern engineering",
          description:
            "Solid architecture, CI/CD and monitoring so we can move fast without compromising quality.",
        },
        performanceFirst: {
          title: "Performance first",
          description:
            "Optimized for real mobile connectivity, because a slow product loses trust before it earns adoption.",
        },
        socialImpact: {
          title: "Concrete impact",
          description:
            "Every product must improve something measurable: finding work, moving better, accessing reliable services faster.",
        },
        solidInfrastructure: {
          title: "Solid infrastructure",
          description:
            "Foundations built to last and scale without breaking the user experience when growth arrives.",
        },
      },
    },
    story: {
      eyebrow: "Our Story",
      titleLead: "We have seen what slows people down.",
      titleAccent: "We have learned how to build what moves them forward.",
      description:
        "DTSfuture was not created to follow a trend. It was created because the gap was obvious: too many real needs, too few reliable products. Cameroon gave the urgency of the problem. Germany gave the discipline required to build serious answers.",
      calloutTitle: "From lived insight to execution",
      calloutText:
        "The field gives intuition. Rigor gives the right speed. DTSfuture exists where both become a credible product.",
      pageCta: "Read the full story",
      milestones: [
        {
          label: "Reality",
          title: "Reality before slides",
          description:
            "Growing up in Cameroon means understanding what truly slows people down: lack of trust, fragile access, unnecessary friction and wasted time.",
        },
        {
          label: "Discipline",
          title: "Rigor learned in Germany",
          description:
            "Germany added method: clean architecture, product discipline, attention to detail and a culture of reliability.",
        },
        {
          label: "Execution",
          title: "Build what deserves to exist",
          description:
            "DTSfuture connects those two forces to launch products that are useful, desirable and strong enough to last in African markets.",
        },
      ],
    },
    storyPage: {
      eyebrow: "Our Story",
      titleLead: "Before DTSfuture, there was one simple frustration.",
      titleAccent: "Too many real needs were left without a serious answer.",
      intro:
        "The starting point was not hype, and it was not the abstract desire to launch just another startup. The starting point was the human cost of friction: lost hours, worn-out trust, and services that promise a lot but fail when real life begins.",
      quote:
        "When a product lacks clarity, reliability or respect for real conditions, it is not just pixels failing. It is opportunity closing.",
      chapters: [
        {
          label: "Origin",
          title: "Cameroon gave the urgency",
          text:
            "Growing up with Cameroon's realities means learning early that there is a big difference between an impressive idea on paper and a service that genuinely helps someone move forward. When trust is fragile, when mobile is the main entry point, and when each friction costs time or money, the standard cannot be cosmetic. It has to be practical, human and economic.",
        },
        {
          label: "Transformation",
          title: "Germany imposed the discipline",
          text:
            "The German experience did not erase that reality. It gave it structure. Technical rigor, product discipline, attention to detail, respect for reliability, a culture of proof: all of that gave a stronger frame to an intuition that already existed. DTSfuture was built exactly there, between lived reality and method.",
        },
        {
          label: "Decision",
          title: "Build only what deserves to exist",
          text:
            "The project therefore is not here to create noise. It exists to build products clear enough to be understood, useful enough to be adopted, and strong enough to hold once the market starts judging them. Bolo237 already stands as proof of that intent: a public product, exposed, improvable, but real.",
        },
      ],
      bridgeTitle: "What DTSfuture wants to change",
      bridgeText:
        "We want to close the gap between the quality African usage deserves and the quality it often receives. That requires local sensitivity, European discipline, and one simple obsession: never ship something that looks polished but breaks under reality.",
      pillarsTitle: "What this story produces today",
      pillars: [
        "Product discipline that starts with trust and ends with execution.",
        "Experiences designed for mobile, clarity and real-world constraints.",
        "African ambition carried by technical standards built to last.",
      ],
      closingTitle: "DTSfuture is not a posture.",
      closingText:
        "It is a commitment to serious construction. If an idea deserves to exist in the market, it deserves better than a flattering prototype. It deserves a product that holds up, reassures people and grows with its users.",
      primaryCta: "Talk about your project",
      secondaryCta: "See our products",
    },
    portfolio: {
      eyebrow: "Portfolio",
      titleLead: "Products designed to",
      titleAccent: "earn trust in the real world",
      description:
        "Every DTSfuture product addresses a real need with an execution level meant to convince users, reassure partners and legitimize the vision.",
      featuredTagline: "The Cameroonian jobs marketplace",
      featuredDescription:
        "Bolo237 connects talent, skilled workers and companies in an environment that is more structured, more professional and noticeably more trustworthy.",
      featuredTags: ["Mobile-first", "Real time", "Verified profiles", "10 regions"],
      proofDescription:
        "Real Bolo237 captures are embedded directly in the site to show an execution that is already tangible, already visible, and already serious enough to build confidence.",
      exploreCta: "See the Bolo237 case",
      secondaryTagline: "Ride sharing reimagined for Cameroon",
      secondaryDescription:
        "Carlite is preparing a mobility experience built for local transport realities: clearer, safer and genuinely useful every day.",
      secondaryTags: ["Ride sharing", "Secure", "Built-in GPS", "Mobile payments"],
      labTitle: "The DTSfuture Lab",
      labDescription:
        "More solutions for Cameroon and Africa are already taking shape. We go wherever real friction deserves a serious product answer.",
    },
    bolo237Preview: {
      brandAlt: "Bolo237 brand visual",
      iconAlt: "Bolo237 app icon",
      homepageAlt: "Screenshot of the Bolo237 homepage",
      mobileAlt: "Mobile view of Bolo237",
      imageBadges: ["Live home", "Brand visual", "App icon"],
    },
    cta: {
      titleLead: "Have an idea that deserves a stronger product?",
      titleAccent: "Let's talk.",
      description:
        "Whether you are a founder, investor or operator, we can turn local intuition into a product that feels sharper, stronger and more credible.",
    },
    pwa: {
      badge: "Install",
      title: "Add DTSfuture to your home screen",
      description:
        "Install the site like a mobile app to launch it faster, open it fullscreen and keep it one tap away on your phone.",
      iosDescription:
        "On iPhone and iPad, installation goes through Safari's share menu. We can show the exact steps instantly.",
      iosStepsTitle: "On iPhone / iPad",
      iosSteps: [
        "Tap the Safari share button.",
        "Choose \"Add to Home Screen\".",
        "Confirm to install DTSfuture.",
      ],
      installCta: "Install now",
      iosCta: "Show steps",
      dismissCta: "Later",
      closeAriaLabel: "Close install card",
    },
    footer: {
      brandBlurb:
        "We design digital products for Cameroon with ambition, usefulness and an execution standard that is not negotiable.",
      productsHeading: "Products",
      contactHeading: "Contact",
      pressHeading: "Press",
      legalHeading: "Legal",
      labLink: "The Lab",
      addressLabel: "View address",
      press: {
        heading: "Press",
        blurb:
          "Media kit, journalist contact and clean brand assets ready for editorial use.",
        pageLink: "Media kit & press",
        contactLink: "Press inquiry",
        assetLabels: {
          kit: "Press kit ZIP",
          wordmark: "Wordmark PNG",
          mark: "Color icon PNG",
        },
      },
      legalLinks: {
        impressum: "Impressum",
        privacy: "Privacy Policy",
      },
    },
    legal: {
      press: {
        eyebrow: "Press",
        title: "Press room",
        intro:
          "This page gathers the essential information for journalists, media outlets, podcasts, investors and partners who need reliable materials to present DTSfuture accurately.",
        disclaimer:
          "Media requests, interviews, quotes and asset requests can be handled through the contact address below. The elements provided here are intended for editorial and brand presentation usage.",
        headings: {
          boilerplate: "Boilerplate",
          facts: "Key facts",
          assets: "Downloadable assets",
          contact: "Media contact",
        },
        quickFactsTitle: "Quick facts",
        boilerplate:
          "DTSfuture is an independent technology studio building ambitious digital products for Cameroon. The project combines direct local insight with execution discipline learned in Germany to launch services that are useful, credible and strong enough from their first versions.",
        facts: {
          foundedLabel: "Launch year",
          marketLabel: "Primary focus",
          productsLabel: "Products carried",
          languagesLabel: "Public languages",
          languagesValue: "French, English",
        },
        assetsDescription:
          "The assets below can be downloaded directly as PNG images for press, editorial and presentation usage. Please preserve brand proportions and colors when using them.",
        brandPreviewHeading: "Brand preview",
        brandPreviewDescription:
          "The media kit packages the clean essentials: iconography, wordmark, boilerplate and a direct press contact. The goal is simple: make DTSfuture easy to cover accurately in minutes.",
        downloadKitCta: "Download press kit",
        contactCta: "Contact press",
        includedItems: [
          "Wordmark PNG",
          "Color icon PNG",
          "French boilerplate",
          "English boilerplate",
        ],
        topicsHeading: "Editorial angles",
        topics: [
          "Product technology for Cameroon",
          "Execution between Germany and Africa",
          "Bolo237 and the future of local jobs",
          "Trust-centered design for real-world usage",
          "Independent studios launching digital products",
        ],
        downloads: {
          kit: {
            title: "DTSfuture Press Kit",
            description: "Complete ZIP archive with logos, boilerplate and core assets for media coverage or press decks.",
          },
          wordmark: {
            title: "DTSfuture wordmark",
            description: "Horizontal PNG version for articles, media decks and wide editorial layouts.",
          },
          mark: {
            title: "DTSfuture icon",
            description: "Compact PNG version for avatars, thumbnails, press usage and quick mentions.",
          },
        },
        contactLead:
          "For interviews, quotes, media decks, logos, speaking requests or any press-related inquiry, write to",
        contactRoleLabel: "Spokesperson",
        contactRoleValue: "Samuel DJOMMOU THENGHO · Founder & Product Builder",
      },
      impressum: {
        eyebrow: "Impressum · Private project",
        title: "Impressum",
        intro:
          "The website dtsfuture.com is a personal, non-commercial website. This page presents the currently available publisher and contact information for the private DTSfuture project.",
        disclaimer:
          "The publisher, domain and hosting details below reflect the configuration currently used for the public website.",
        headings: {
          editor: "Site publisher",
          publication: "Publication manager",
          hosting: "Hosting",
          legalScope: "Legal and territorial scope",
          intellectualProperty: "Intellectual property",
          contact: "Contact",
        },
        details: {
          projectName: "Project name",
          siteEditor: "Site publisher",
          siteNature: "Site nature",
          address: "Address",
          email: "Contact email",
          phone: "Phone",
          website: "Website",
          host: "Hosting platform",
          hostAddress: "Infrastructure",
          hostContact: "Domain and DNS",
        },
        editorText:
          "This website is published by DTSfuture. It is a private, personal and non-commercial project published from Germany.",
        publicationLead: "The publication manager is",
        publicationBetween: "He can be reached at",
        publicationPhoneLead: "or by phone at",
        hostingText:
          "The site is deployed on Vercel. The dtsfuture.com domain name was purchased through Hostinger and its DNS points to the Vercel infrastructure.",
        legalScopeText:
          "The website is published from Germany and notably addresses an audience interested in Cameroon. DTSfuture seeks to align this public-facing website with the relevant requirements around publisher identification, transparency, privacy, security and user information applicable in Germany, as well as the mandatory requirements relevant to digital communication toward Cameroon. If the site's functionality, commercial scope or regulatory context changes, this page and the privacy policy should be updated accordingly.",
        intellectualPropertyText:
          "All content on this website, including text, visual assets, logos, interfaces, graphic components and brand elements, is protected by intellectual property rules. Any reproduction, representation, adaptation or exploitation, in whole or in part, without prior written authorization is prohibited.",
        contactLead: "For any question regarding the website or its operation, you can write to",
        contactPhoneLead: "call",
        contactAddressLead: "or write to",
      },
      privacy: {
        eyebrow: "Privacy",
        title: "Privacy Policy",
        intro:
          "This policy transparently describes how personal data may be processed when using the DTSfuture showcase website.",
        disclaimer:
          "This policy describes the configuration currently published for dtsfuture.com. It is drafted to cover the transparency, security and privacy expectations relevant to a website published from Germany and accessible from Cameroon. It should be reviewed again if the site's features or commercial scope evolve.",
        sections: [
          {
            title: "Data concerned",
            text: "The DTSfuture showcase website may process technical browsing data, security logs and any information you voluntarily send by email when contacting the team.",
          },
          {
            title: "Processing purposes",
            text: "This data is used to operate the website, keep it secure, respond to incoming requests and improve the overall quality of the experience provided.",
          },
          {
            title: "Legal basis",
            text: "Processing is based, depending on the case, on DTSfuture's legitimate interest in operating its site, on pre-contractual steps when contact is initiated, or on compliance with applicable legal obligations.",
          },
          {
            title: "Recipients",
            text: "Data is intended for authorized persons within DTSfuture and, when necessary, for technical providers involved in hosting, maintenance, security or operation of the site.",
          },
          {
            title: "Territorial scope and legal framework",
            text: "The site is published from Germany and is notably accessible to visitors interested in Cameroon. DTSfuture seeks to respect the relevant transparency, privacy, security and information obligations applicable to the publication of the site in Germany, as well as the relevant mandatory obligations when a digital service is accessible from Cameroon.",
          },
          {
            title: "Transfers and technical providers",
            text: "Hosting through Vercel, domain management through Hostinger and certain technical flows may involve processing or transit of technical data outside the country from which you access the website. DTSfuture limits those flows to what is necessary, reduces the amount of data processed and relies on the technical and contractual safeguards available from its providers.",
          },
          {
            title: "Retention period",
            text: "Data is kept for a period proportionate to its purpose, then deleted or archived in line with applicable legal and operational requirements.",
          },
          {
            title: "Your rights",
            text: "You may request access, rectification, erasure, restriction of processing, objection or portability of your data where those rights apply. You may also lodge a complaint with the competent authority.",
          },
          {
            title: "Cookies and analytics",
            text: "In the configuration currently published, the site embeds no audience measurement tool, no marketing pixel and no advertising cookie. The only intentional browser-side persistence used by the public interface is the functional dtsfuture-locale cookie, kept for up to 12 months to remember the selected language (fr or en). If analytics, personalization or marketing tools are added later, this policy must be updated with the details of the trackers used and, where required, a prior consent mechanism.",
          },
          {
            title: "Security",
            text: "DTSfuture implements appropriate technical and organizational measures to protect data against unauthorized access, disclosure, alteration or unwanted destruction. This notably includes HTTPS, strengthened security headers, limited exposed surfaces and ongoing attention to dependencies and deployment configuration.",
          },
        ],
        contactHeading: "Privacy contact",
        contactLead: "To exercise your rights or ask a privacy-related question, you can write to",
        contactPhoneLead: "call",
        contactAddressLead: "or write to",
      },
    },
  },
} as const;

export type TranslationMessages = (typeof messages)[Locale];

export function isLocale(value: string): value is Locale {
  return (supportedLocales as readonly string[]).includes(value);
}

export function getPageMeta(locale: Locale, pathname: string) {
  const meta = messages[locale].meta;

  if (pathname === "/impressum") {
    return {
      title: meta.impressumTitle,
      description: meta.impressumDescription,
    };
  }

  if (pathname === "/politique-de-confidentialite") {
    return {
      title: meta.privacyTitle,
      description: meta.privacyDescription,
    };
  }

  return {
    title: meta.homeTitle,
    description: meta.homeDescription,
  };
}
