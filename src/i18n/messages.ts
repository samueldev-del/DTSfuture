export const supportedLocales = ["de", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const messages = {
  de: {
    meta: {
      homeTitle: "DTSfuture - Technologie-Studio aus Deutschland",
      homeDescription:
        "DTSfuture ist ein unabhängiges Technologie-Studio aus Deutschland. Wir entwickeln digitale Produkte für den deutschen und internationalen Markt – mit kompromissloser Ingenieursdisziplin und einer seltenen Sensibilität für reale Nutzung.",
      productsTitle: "Unsere Produkte | DTSfuture",
      productsDescription:
        "DTSfuture Produktfälle: Bolo237 als internationales Flaggschiff, Arbeitsmethoden und sichtbare Belege unserer Ausführung aus Deutschland.",
      bolo237Title: "Bolo237 | DTSfuture",
      bolo237Description:
        "Die Bolo237-Fallstudie: unser internationales Flaggschiff, in Deutschland mit deutscher Ingenieursdisziplin entwickelt, konzipiert für den kamerunischen Markt.",
      schmidtszaunbaunordTitle: "Schmidts Zaunbau Nord | DTSfuture",
      schmidtszaunbaunordDescription:
        "Wie DTSfuture einem etablierten Hamburger Zaunbau-Betrieb zu professioneller digitaler Sichtbarkeit verholfen hat – Website, Positionierung und Lead-Generierung.",
      impressumTitle: "Impressum | DTSfuture",
      impressumDescription:
        "Angaben zum Herausgeber und Kontaktinformationen für DTSfuture, ein privates, nicht-kommerzielles Projekt aus Deutschland.",
      pressTitle: "Presse | DTSfuture",
      pressDescription:
        "DTSfuture Pressebereich: Medienkontakt, Unternehmenstext, Kennzahlen und herunterladbare Marken-Assets.",
      storyTitle: "Unsere Geschichte | DTSfuture",
      storyDescription:
        "Die DTSfuture-Geschichte: von Kameruns Feldrealität zur deutschen Ingenieursstrenge – und warum beide Welten heute jedes unserer Produkte für den deutschen und internationalen Markt stärker machen.",
      privacyTitle: "Datenschutzerklärung | DTSfuture",
      privacyDescription:
        "Datenschutzerklärung von DTSfuture, verfügbar auf Deutsch und Englisch.",
    },
    common: {
      homeAriaLabel: "DTSfuture - Startseite",
      primaryNavAriaLabel: "Hauptnavigation",
      languageSwitcherLabel: "Sprache wählen",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      languageShort: {
        de: "DE",
        en: "EN",
      },
      productsMenu: "Unsere Produkte",
      products: "Produkte",
      dna: "Unsere DNA",
      story: "Unsere Geschichte",
      contact: "Kontakt",
      contactUs: "Kontakt aufnehmen",
      legal: "Rechtliches",
      website: "Webseite",
      email: "E-Mail",
      phone: "Telefon",
      address: "Adresse",
      live: "Live",
      comingSoon: "Bald verfügbar",
      productProof: "Produktnachweis",
      allRightsReserved: "Alle Rechte vorbehalten.",
      footerBottomLine: "Wir dekorieren die Zukunft nicht. Wir bauen sie, damit sie hält.",
      host: "Hosting-Anbieter",
      press: "Presse",
      privacy: "Datenschutz",
      impressum: "Impressum",
      country: "Deutschland",
      appIcon: "App-Symbol",
    },
    hero: {
      badge: "Privates Projekt-Portfolio & Entwickler-Labor",
      titleLead: "Mein digitales Labor für",
      titleAccent: "komplexe Web-Anwendungen.",
      description:
        "Willkommen bei DTSfuture. Ich bin Samuel, Softwareentwickler. Hier dokumentiere und präsentiere ich meine technischen Projekte – von skalierbaren Plattformen bis hin zu performanten lokalen Lösungen.",
      primaryCta: "Meine Projekte ansehen",
      secondaryCta: "Mich kontaktieren",
      stats: [
        { value: "5+", label: "Jahre IT-Erfahrung" },
        { value: "100%", label: "TypeScript & Next.js" },
        { value: "24/7", label: "Fokus auf Performance" },
      ],
    },
    adn: {
      eyebrow: "Meine DNA",
      titleLead: "Ich baue nicht aus",
      titleAccent: "dem Elfenbeinturm.",
      description:
        "Ich habe die Reibung in der Praxis erlebt, bevor ich die Methode lernte. Deutsche Ingenieursstrenge trifft auf meine internationale Feldperspektive – genau deshalb sind meine Projekte von Anfang an stabil und nutzerzentriert.",
      items: {
        localInsight: {
          title: "Seltene Perspektive",
          description: "Ich kombiniere deutsche Ingenieurskultur mit einer Sensibilität für Märkte mit echter Reibung.",
        },
        europeanStandards: {
          title: "Deutsche Standards",
          description: "Sicherheit, Compliance, Stabilität und Produktdisziplin nach strengen Maßstäben.",
        },
        modernEngineering: {
          title: "Modernes Engineering",
          description: "Solide Architektur, CI/CD und Monitoring für schnelle und hochwertige Lieferungen.",
        },
        performanceFirst: {
          title: "Performance zuerst",
          description: "Optimiert für reale Bedingungen – vom Glasfaseranschluss bis zum mobilen Netz.",
        },
        socialImpact: {
          title: "Konkreter Mehrwert",
          description: "Jedes Projekt muss etwas Messbares verbessern. Keine Features um ihrer selbst willen.",
        },
        solidInfrastructure: {
          title: "Solide Infrastruktur",
          description: "Grundlagen, die langfristig halten und skalieren.",
        },
      },
    },
    story: {
      eyebrow: "Über mich",
      titleLead: "Code, der reale Probleme löst.",
      titleAccent: "Architektur, die skaliert.",
      description:
        "DTSfuture ist mein persönlicher Raum für digitale Experimente und fertige Produkte. Meine Erfahrung reicht von der Systemadministration bis hin zur Full-Stack-Entwicklung für internationale Märkte.",
      calloutTitle: "Von der Infrastruktur zur Anwendung",
      calloutText:
        "Guter Code beginnt mit der richtigen Architektur. Ich verbinde Cloud-Expertise mit moderner Frontend-Entwicklung.",
      pageCta: "Meinen Lebenslauf ansehen",
      milestones: [
        {
          label: "Entwicklung",
          title: "Fullstack Engineering",
          description: "Entwicklung mit Next.js, TypeScript und modernen Backend-Technologien für schnelle und sichere Anwendungen.",
        },
        {
          label: "DevOps",
          title: "Infrastruktur & Cloud",
          description: "Erfahrung mit Azure, AWS, CI/CD-Pipelines und sicheren Server-Deployments.",
        },
        {
          label: "Praxis",
          title: "Reale Ausführung",
          description: "Keine reinen Theorien. Die Projekte hier (wie Bolo237 oder Schmidts Zaunbau) sind reale, funktionierende Systeme.",
        },
      ],
    },
    storyPage: {
      eyebrow: "Mein Werdegang",
      titleLead: "Von der Systemadministration",
      titleAccent: "zum Full-Stack Engineering.",
      intro:
        "Mein Weg in der IT begann nicht mit abstrakten Theorien, sondern mit realer Problemlösung. Heute verbinde ich tiefes Infrastruktur-Wissen mit moderner Produktentwicklung.",
      quote: "Die Messlatte ist radikale Nützlichkeit, Performance und Sicherheit.",
      chapters: [
        {
          label: "Infrastruktur",
          title: "Basis in der Systemadministration",
          text: "Die Arbeit mit VMware, Linux-Servern und Netzwerken (VLANs, Routing) hat mir ein tiefes Verständnis dafür gegeben, wie Systeme auf der untersten Ebene funktionieren. Wer Server administriert, schreibt später besseren, sichereren Code.",
        },
        {
          label: "Cloud & Automatisierung",
          title: "Der Weg zu DevOps",
          text: "Mit der Zeit verlagerte sich mein Fokus auf Automatisierung und Cloud-Infrastruktur. Azure, STACKIT, Terraform und Ansible wurden meine Werkzeuge, um Prozesse skalierbar und zuverlässig zu machen.",
        },
        {
          label: "Fullstack",
          title: "End-to-End Produktentwicklung",
          text: "Heute baue ich als Full-Stack-Entwickler komplette Plattformen (wie Bolo237). Ich kontrolliere den gesamten Zyklus: von der Datenbank und der API bis zum React/Next.js-Frontend und dem finalen Deployment.",
        },
      ],
      bridgeTitle: "Mein Entwickler-Ansatz",
      bridgeText: "Infrastruktur-Wissen und Frontend-Fähigkeiten sind für mich keine getrennten Welten. Sie sind die Voraussetzung, um performante und sichere Anwendungen zu bauen.",
      pillarsTitle: "Meine Schwerpunkte",
      pillars: [
        "Cloud & DevOps (Azure, AWS, Docker, Kubernetes).",
        "Moderne Web-Entwicklung (TypeScript, React, Next.js, Node.js).",
        "Sichere, skalierbare Architekturen mit Fokus auf Observability.",
      ],
      closingTitle: "Mehr als nur Code.",
      closingText: "Ich baue Systeme, die von Ende zu Ende funktionieren und in der Produktion bestehen.",
      primaryCta: "Meine Projekte sehen",
      secondaryCta: "Mich kontaktieren",
    },
    portfolio: {
      eyebrow: "Meine Projekte",
      titleLead: "Referenzen, die",
      titleAccent: "meine Arbeitsweise zeigen",
      description: "Diese Projekte sind meine praktischen Leistungsnachweise. Sie zeigen meine Fähigkeit, komplexe Anforderungen in funktionierende Software umzusetzen.",
      featuredTagline: "Eigenes Projekt (Full-Stack)",
      featuredDescription: "Bolo237 ist eine von mir entwickelte Plattform: ein Jobmarktplatz, der zeigt, wie ich komplexe Datenbankstrukturen, Authentifizierung und moderne Frontends verbinde.",
      featuredTags: ["Next.js", "TypeScript", "Full-Stack", "Deployment"],
      proofDescription: "Dieses Projekt demonstriert meine Fähigkeit, eine Idee von der Konzeption bis zur produktionsreifen Anwendung umzusetzen.",
      exploreCta: "Details ansehen",
      schmidtsTagline: "Freelance-Projekt (Webentwicklung)",
      schmidtsDescription: "Für Schmidts Zaunbau Nord habe ich eine professionelle, mehrsprachige und SEO-optimierte Webpräsenz entwickelt, die auf Lead-Generierung fokussiert ist.",
      schmidtsTags: ["Tailwind CSS", "SEO", "Lead-Generierung"],
      schmidtsExploreCta: "Details ansehen",
      carliteTagline: "In Entwicklung",
      carliteDescription: "Ein laufendes Projekt zur Entwicklung einer Mobilitätsplattform.",
      carliteTags: ["Backend", "API", "Mobile"],
      labTitle: "Weitere Experimente",
      labDescription: "In meinem GitHub-Profil finden sich weitere Repositories und technische Experimente.",
    },
    bolo237Preview: {
      brandAlt: "Bolo237 Markenvisual",
      iconAlt: "Bolo237 App-Symbol",
      homepageAlt: "Screenshot der Bolo237-Startseite",
      mobileAlt: "Mobile Ansicht von Bolo237",
      imageBadges: ["Live-Startseite", "Markenvisual", "App-Symbol"],
    },
    cta: {
      titleLead: "Interesse an meiner Arbeit?",
      titleAccent: "Lass uns reden.",
      description:
        "Ich bin immer offen für den fachlichen Austausch, Networking und neue Herausforderungen im Bereich Software Engineering.",
    },
    pwa: {
      badge: "Installieren",
      title: "DTSfuture zum Startbildschirm hinzufügen",
      description:
        "Installieren Sie die Seite wie eine mobile App, um sie schneller zu öffnen, im Vollbildmodus zu nutzen und mit einem Tap auf Ihrem Telefon zu erreichen.",
      iosDescription:
        "Auf iPhone und iPad erfolgt die Installation über das Teilen-Menü von Safari. Wir zeigen Ihnen die genauen Schritte sofort.",
      iosStepsTitle: "Auf iPhone / iPad",
      iosSteps: [
        "Safari-Teilen-Button antippen.",
        "\"Zum Home-Bildschirm\" wählen.",
        "DTSfuture-Installation bestätigen.",
      ],
      installCta: "Jetzt installieren",
      iosCta: "Schritte anzeigen",
      dismissCta: "Später",
      closeAriaLabel: "Installationskarte schließen",
    },
    footer: {
      brandBlurb:
        "DTSfuture ist das private, digitale Portfolio von Samuel Djommou Thengho.",
      productsHeading: "Produkte",
      contactHeading: "Kontakt",
      pressHeading: "Presse",
      legalHeading: "Rechtliches",
      labLink: "Das Lab",
      addressLabel: "Adresse anzeigen",
      press: {
        heading: "Presse",
        blurb:
          "Medienpaket, Journalistenkontakt und saubere Marken-Assets für die redaktionelle Nutzung.",
        pageLink: "Medienpaket & Presse",
        contactLink: "Presseanfrage",
        assetLabels: {
          kit: "Press-Kit ZIP",
          wordmark: "Wortmarke PNG",
          mark: "Farbsymbol PNG",
        },
      },
      legalLinks: {
        impressum: "Impressum",
        privacy: "Datenschutz",
      },
    },
    legal: {
      press: {
        eyebrow: "Presse",
        title: "Pressebereich",
        intro:
          "Diese Seite enthält die wesentlichen Informationen für Journalisten, Medien, Podcasts, Investoren und Partner, die DTSfuture präzise vorstellen möchten.",
        disclaimer:
          "Medienanfragen, Interviews, Zitate und Asset-Anfragen können über die unten stehende Kontaktadresse abgewickelt werden. Die hier bereitgestellten Materialien sind für redaktionelle und Marken-Präsentationszwecke bestimmt.",
        headings: {
          boilerplate: "Unternehmenstext",
          facts: "Kennzahlen",
          assets: "Herunterladbare Assets",
          contact: "Medienkontakt",
        },
        quickFactsTitle: "Schnellfakten",
        boilerplate:
          "DTSfuture ist das private, digitale Projekt-Portfolio des Softwareentwicklers Samuel Djommou Thengho. Es dient ausschließlich der Dokumentation seiner technischen Expertise in den Bereichen Full-Stack-Entwicklung, Cloud und DevOps.",
        facts: {
          foundedLabel: "Gründungsjahr",
          marketLabel: "Primärer Fokus",
          productsLabel: "Betreute Produkte",
          languagesLabel: "Öffentliche Sprachen",
          languagesValue: "Deutsch, Englisch",
        },
        assetsDescription:
          "Die untenstehenden Assets können direkt als PNG-Bilder für Presse, redaktionelle und Präsentationszwecke heruntergeladen werden. Bitte die Markenverhältnisse und -farben bei der Verwendung beibehalten.",
        brandPreviewHeading: "Markenvorschau",
        brandPreviewDescription:
          "Das Medienpaket enthält das Wesentliche: Ikonographie, Wortmarke, Boilerplate und einen direkten Pressekontakt. Das Ziel ist einfach: DTSfuture in wenigen Minuten präzise abdeckbar zu machen.",
        downloadKitCta: "Press-Kit herunterladen",
        contactCta: "Presse kontaktieren",
        includedItems: [
          "Wortmarke PNG",
          "Farbsymbol PNG",
          "Deutscher Boilerplate",
          "Englischer Boilerplate",
        ],
        topicsHeading: "Redaktionelle Themen",
        topics: [
          "Unabhängige Tech-Studios aus Deutschland",
          "Deutsche Ingenieurskultur im internationalen Produktbau",
          "Bolo237: ein internationales Flaggschiff aus Deutschland",
          "Vertrauenszentriertes Design für anspruchsvolle Märkte",
          "Produktdisziplin zwischen Europa und internationalen Märkten",
        ],
        downloads: {
          kit: {
            title: "DTSfuture Press Kit",
            description: "Komplettes ZIP-Archiv mit Logos, Boilerplate und Kernassets für Medienberichterstattung.",
          },
          wordmark: {
            title: "DTSfuture Wortmarke",
            description: "Horizontale PNG-Version für Artikel, Medien-Decks und breite redaktionelle Layouts.",
          },
          mark: {
            title: "DTSfuture Symbol",
            description: "Kompakte PNG-Version für Avatare, Thumbnails, Pressenutzung und schnelle Erwähnungen.",
          },
        },
        contactLead:
          "Für Interviews, Zitate, Medien-Decks, Logos, Sprecheranfragen oder andere pressebezogene Anfragen schreiben Sie an",
        contactRoleLabel: "Ansprechpartner",
        contactRoleValue: "Samuel DJOMMOU THENGHO · Founder & Product Builder",
      },
      impressum: {
        eyebrow: "Impressum · Privates Portfolio",
        title: "Impressum",
        intro:
          "Diese Webseite (dtsfuture.com) ist eine private, nicht-kommerzielle Bewerbungshomepage (Lebenslauf / Portfolio).",
        disclaimer:
          "Es werden auf dieser Webseite keine kommerziellen Dienstleistungen angeboten.",
        headings: {
          editor: "Betreiber der Webseite",
          publication: "Verantwortlicher für den Inhalt",
          hosting: "Hosting",
          legalScope: "Rechtlicher Rahmen",
          intellectualProperty: "Geistiges Eigentum",
          contact: "Kontakt",
        },
        details: {
          projectName: "Projektname",
          siteEditor: "Betreiber",
          siteNature: "Art der Website",
          address: "Adresse",
          email: "Kontakt-E-Mail",
          phone: "Telefon",
          website: "Webseite",
          host: "Hosting-Plattform",
          hostAddress: "Infrastruktur",
          hostContact: "Domain und DNS",
        },
        editorText:
          "Diese Webseite wird privat von Samuel Djommou Thengho betrieben. Es handelt sich um ein persönliches und nicht-kommerzielles Projekt.",
        publicationLead: "Verantwortlich für den Inhalt gemäß § 5 TMG / DDG ist",
        publicationBetween: "Er ist erreichbar unter",
        publicationPhoneLead: "oder telefonisch unter",
        hostingText:
          "Die Website wird auf Vercel bereitgestellt. Der Domainname dtsfuture.com wurde über Hostinger erworben.",
        legalScopeText:
          "Diese Seite dient ausschließlich der privaten Präsentation von beruflichen Fähigkeiten und Referenzprojekten. Sie stellt kein geschäftliches Angebot dar.",
        intellectualPropertyText:
          "Alle Inhalte dieser Webseite sind durch das Recht des geistigen Eigentums geschützt.",
        contactLead: "Bei Fragen zur Webseite können Sie schreiben an",
        contactPhoneLead: "anrufen unter",
        contactAddressLead: "oder schreiben an",
      },
      privacy: {
        eyebrow: "Datenschutz",
        title: "Datenschutzerklärung",
        intro:
          "Diese Erklärung beschreibt transparent, wie personenbezogene Daten bei der Nutzung der DTSfuture-Präsentationswebseite verarbeitet werden können.",
        disclaimer:
          "Diese Erklärung beschreibt die aktuell für dtsfuture.com veröffentlichte Konfiguration. Sie ist darauf ausgelegt, die Transparenz-, Sicherheits- und Datenschutzanforderungen zu erfüllen, die für eine aus Deutschland veröffentlichte und international zugängliche Webseite relevant sind. Sie sollte überprüft werden, wenn sich die Funktionen oder der kommerzielle Umfang der Website ändern.",
        sections: [
          {
            title: "Betroffene Daten",
            text: "Die DTSfuture-Präsentationswebseite kann technische Navigationsdaten, Sicherheitsprotokolle sowie Informationen verarbeiten, die Sie bei der Kontaktaufnahme freiwillig per E-Mail übermitteln.",
          },
          {
            title: "Verarbeitungszwecke",
            text: "Diese Daten werden verwendet, um die Webseite zu betreiben, ihre Sicherheit zu gewährleisten, eingehende Anfragen zu beantworten und die Qualität des bereitgestellten Erlebnisses zu verbessern.",
          },
          {
            title: "Rechtsgrundlage",
            text: "Die Verarbeitung basiert je nach Fall auf dem berechtigten Interesse von DTSfuture am Betrieb seiner Website, auf vorvertraglichen Maßnahmen bei Kontaktaufnahme oder auf der Erfüllung gesetzlicher Verpflichtungen nach DSGVO und BDSG.",
          },
          {
            title: "Empfänger",
            text: "Daten sind für autorisierte Personen innerhalb von DTSfuture bestimmt und, wenn nötig, für technische Dienstleister, die am Hosting, der Wartung, Sicherheit oder dem Betrieb der Website beteiligt sind.",
          },
          {
            title: "Territorialer Rahmen und Rechtsgrundlage",
            text: "Die Website wird aus Deutschland veröffentlicht und ist international zugänglich. DTSfuture strebt danach, die relevanten Transparenz-, Datenschutz-, Sicherheits- und Informationspflichten zu erfüllen, die für die Veröffentlichung der Website in Deutschland und im europäischen Raum gelten sowie die relevanten Pflichten in den Märkten, die öffentlich bedient werden.",
          },
          {
            title: "Übermittlungen und technische Dienstleister",
            text: "Hosting über Vercel, Domainverwaltung über Hostinger und bestimmte technische Abläufe können eine Verarbeitung oder Übertragung technischer Daten außerhalb des Landes beinhalten, von dem aus Sie die Website aufrufen. DTSfuture beschränkt diese Datenübermittlungen auf das Notwendige, reduziert die Datenmenge und stützt sich auf die bei seinen Dienstleistern verfügbaren technischen und vertraglichen Schutzmaßnahmen.",
          },
          {
            title: "Aufbewahrungsdauer",
            text: "Daten werden für einen Zeitraum aufbewahrt, der ihrem Zweck angemessen ist, und anschließend gemäß den geltenden gesetzlichen und operativen Anforderungen gelöscht oder archiviert.",
          },
          {
            title: "Ihre Rechte",
            text: "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch oder Übertragbarkeit Ihrer Daten nach DSGVO beantragen, sofern diese Rechte anwendbar sind. Sie können auch eine Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.",
          },
          {
            title: "Cookies und Analyse",
            text: "In der aktuell veröffentlichten Konfiguration verwendet die Website kein Besuchszählungstool, keinen Marketing-Pixel und kein Werbe-Cookie. Die einzige beabsichtigte browser-seitige Persistenz der öffentlichen Oberfläche ist das funktionale Cookie dtsfuture-locale, das bis zu 12 Monate gespeichert wird, um die gewählte Sprache zu merken (de oder en). Wenn später Analyse-, Personalisierungs- oder Marketing-Tools hinzugefügt werden, muss diese Erklärung mit den Details der verwendeten Tracker und, wo erforderlich, einem vorherigen Einwilligungsmechanismus aktualisiert werden.",
          },
          {
            title: "Sicherheit",
            text: "DTSfuture implementiert geeignete technische und organisatorische Maßnahmen zum Schutz von Daten vor unbefugtem Zugriff, Offenlegung, Veränderung oder unerwünschter Zerstörung. Dies umfasst insbesondere HTTPS, verstärkte Sicherheits-Header, begrenzte exponierte Oberflächen und kontinuierliche Aufmerksamkeit gegenüber Abhängigkeiten und Deployment-Konfiguration.",
          },
        ],
        contactHeading: "Datenschutzkontakt",
        contactLead: "Um Ihre Rechte auszuüben oder eine datenschutzbezogene Frage zu stellen, können Sie schreiben an",
        contactPhoneLead: "anrufen unter",
        contactAddressLead: "oder schreiben an",
      },
    },
  },
  en: {
    meta: {
      homeTitle: "DTSfuture - Technology Studio from Germany",
      homeDescription:
        "DTSfuture is an independent technology studio based in Germany. We design digital products for the German and international market — with uncompromising engineering discipline and a rare sensitivity to real-world usage.",
      productsTitle: "Our Products | DTSfuture",
      productsDescription:
        "DTSfuture product cases: Bolo237 as our international flagship, working methods, and visible proof of end-to-end execution from Germany.",
      bolo237Title: "Bolo237 | DTSfuture",
      bolo237Description:
        "The Bolo237 case study: our international flagship, built in Germany with German engineering discipline, designed for the Cameroonian market.",
      schmidtszaunbaunordTitle: "Schmidts Zaunbau Nord | DTSfuture",
      schmidtszaunbaunordDescription:
        "How DTSfuture gave an established Hamburg fencing company a professional digital presence — website, positioning, and lead generation.",
      impressumTitle: "Impressum | DTSfuture",
      impressumDescription:
        "Publisher and contact information for DTSfuture, a private non-commercial project based in Germany.",
      pressTitle: "Press | DTSfuture",
      pressDescription:
        "DTSfuture press room: media contact, company boilerplate, key facts and downloadable brand assets.",
      storyTitle: "Our Story | DTSfuture",
      storyDescription:
        "The DTSfuture story: from Cameroon's field reality to German engineering rigor — and why both worlds now make every product we ship to German and international clients stronger.",
      privacyTitle: "Privacy Policy | DTSfuture",
      privacyDescription:
        "DTSfuture privacy policy, available in German and English based on the visitor's preference.",
    },
    common: {
      homeAriaLabel: "DTSfuture - Home",
      primaryNavAriaLabel: "Main navigation",
      languageSwitcherLabel: "Choose language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageShort: {
        de: "DE",
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
      badge: "Private Project Portfolio & Developer Lab",
      titleLead: "My digital lab for",
      titleAccent: "complex web applications.",
      description:
        "Welcome to DTSfuture. I am Samuel, a Software Engineer. Here I document and showcase my technical projects – from scalable platforms to high-performance local solutions.",
      primaryCta: "View my projects",
      secondaryCta: "Get in touch",
      stats: [
        { value: "5+", label: "Years of IT experience" },
        { value: "100%", label: "TypeScript & Next.js" },
        { value: "24/7", label: "Focus on performance" },
      ],
    },
    adn: {
      eyebrow: "My DNA",
      titleLead: "I do not build",
      titleAccent: "from an ivory tower.",
      description: "I lived the friction before I learned the method. German engineering rigor meets my field perspective — that is exactly why my projects feel steadier from day one.",
      items: {
        localInsight: { title: "Rare perspective", description: "I combine engineering culture with a sensitivity to real-world usage." },
        europeanStandards: { title: "Strict standards", description: "Security, compliance, and stability built into every layer." },
        modernEngineering: { title: "Modern engineering", description: "Solid architecture, CI/CD and monitoring to move fast without compromising quality." },
        performanceFirst: { title: "Performance first", description: "Optimized for real conditions — from fiber connections to mobile networks." },
        socialImpact: { title: "Concrete impact", description: "Every project must improve something measurable." },
        solidInfrastructure: { title: "Solid infrastructure", description: "Foundations built to last and scale." },
      },
    },
    story: {
      eyebrow: "About me",
      titleLead: "Code that solves real problems.",
      titleAccent: "Architecture that scales.",
      description:
        "DTSfuture is my personal space for digital experiments and finished products. My experience ranges from system administration to full-stack development for international markets.",
      calloutTitle: "From infrastructure to application",
      calloutText:
        "Great code starts with the right architecture. I combine cloud expertise with modern frontend engineering.",
      pageCta: "View my resume",
      milestones: [
        {
          label: "Engineering",
          title: "Fullstack Development",
          description: "Building fast and secure applications with Next.js, TypeScript, and modern backend technologies.",
        },
        {
          label: "DevOps",
          title: "Infrastructure & Cloud",
          description: "Experience with Azure, AWS, CI/CD pipelines, and secure server deployments.",
        },
        {
          label: "Practice",
          title: "Real-world execution",
          description: "No pure theory. The projects here (like Bolo237 or Schmidts Zaunbau) are real, functional systems.",
        },
      ],
    },
    storyPage: {
      eyebrow: "My Background",
      titleLead: "From System Administration",
      titleAccent: "to Full-Stack Engineering.",
      intro: "My journey in IT did not start with abstract theories, but with real problem-solving. Today, I combine deep infrastructure knowledge with modern product development.",
      quote: "The bar is radical usefulness, performance, and security.",
      chapters: [
        { label: "Infrastructure", title: "Roots in System Administration", text: "Working with VMware, Linux servers, and networks gave me a deep understanding of how systems work at the lowest level." },
        { label: "Cloud & Automation", title: "The path to DevOps", text: "Over time, my focus shifted to automation and cloud infrastructure using Azure, STACKIT, Terraform, and Ansible." },
        { label: "Fullstack", title: "End-to-End Development", text: "Today, as a Full-Stack Developer, I build complete platforms, controlling the full cycle from database to frontend and deployment." },
      ],
      bridgeTitle: "My approach",
      bridgeText: "Infrastructure knowledge and frontend skills are not separate worlds to me. They are the foundation for building fast and secure applications.",
      pillarsTitle: "My focus areas",
      pillars: ["Cloud & DevOps (Azure, AWS, Docker).", "Modern Web Development (TypeScript, React, Next.js).", "Secure, scalable architectures."],
      closingTitle: "More than just code.",
      closingText: "I build systems that work from end to end and hold up in production.",
      primaryCta: "View my projects",
      secondaryCta: "Get in touch",
    },
    portfolio: {
      eyebrow: "My Projects",
      titleLead: "References that",
      titleAccent: "showcase my work",
      description: "These projects are my practical track record. They demonstrate my ability to turn complex requirements into working software.",
      featuredTagline: "Personal Project (Full-Stack)",
      featuredDescription: "Bolo237 is a platform I developed to demonstrate how I connect complex databases, authentication, and modern frontends.",
      featuredTags: ["Next.js", "TypeScript", "Full-Stack", "Deployment"],
      proofDescription: "This project demonstrates my ability to take an idea from concept to a production-ready application.",
      exploreCta: "View details",
      schmidtsTagline: "Freelance Project (Web Development)",
      schmidtsDescription: "For Schmidts Zaunbau Nord, I developed a professional, multilingual, and SEO-optimized website focused on lead generation.",
      schmidtsTags: ["Tailwind CSS", "SEO", "Lead generation"],
      schmidtsExploreCta: "View details",
      carliteTagline: "In Development",
      carliteDescription: "An ongoing project to build a mobility platform.",
      carliteTags: ["Backend", "API", "Mobile"],
      labTitle: "More experiments",
      labDescription: "You can find more repositories and technical experiments on my GitHub profile.",
    },
    bolo237Preview: {
      brandAlt: "Bolo237 brand visual",
      iconAlt: "Bolo237 app icon",
      homepageAlt: "Screenshot of the Bolo237 homepage",
      mobileAlt: "Mobile view of Bolo237",
      imageBadges: ["Live home", "Brand visual", "App icon"],
    },
    cta: {
      titleLead: "Interested in my work?",
      titleAccent: "Let's connect.",
      description:
        "I am always open to professional exchange, networking, and new challenges in software engineering.",
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
        "DTSfuture is the private digital portfolio of Samuel Djommou Thengho.",
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
          "DTSfuture is the private digital project portfolio of software engineer Samuel Djommou Thengho. It serves exclusively to document his technical expertise in full-stack development, cloud infrastructure, and DevOps.",
        facts: {
          foundedLabel: "Launch year",
          marketLabel: "Primary focus",
          productsLabel: "Products carried",
          languagesLabel: "Public languages",
          languagesValue: "German, English",
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
          "German boilerplate",
          "English boilerplate",
        ],
        topicsHeading: "Editorial angles",
        topics: [
          "Independent tech studios based in Germany",
          "German engineering culture in international product building",
          "Bolo237: an international flagship built in Germany",
          "Trust-centered design for demanding markets",
          "Product discipline between Europe and international markets",
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
        eyebrow: "Impressum · Private Portfolio",
        title: "Impressum",
        intro:
          "This website (dtsfuture.com) is a private, non-commercial application homepage (resume / portfolio).",
        disclaimer:
          "No commercial services are offered on this website.",
        headings: {
          editor: "Site operator",
          publication: "Publication manager",
          hosting: "Hosting",
          legalScope: "Legal scope",
          intellectualProperty: "Intellectual property",
          contact: "Contact",
        },
                details: {
                  projectName: "Project name",
                  siteEditor: "Site operator",
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
          "This website is operated privately by Samuel Djommou Thengho. It is a personal and non-commercial project.",
        publicationLead: "The person responsible for the content is",
        publicationBetween: "He can be reached at",
        publicationPhoneLead: "or by phone at",
        hostingText:
          "The site is deployed on Vercel. The dtsfuture.com domain name was purchased through Hostinger.",
        legalScopeText:
          "This site is intended solely for the private presentation of professional skills and reference projects. It does not constitute a commercial offer.",
        intellectualPropertyText:
          "All content on this website is protected by intellectual property rules.",
        contactLead: "For any question regarding the website, you can write to",
        contactPhoneLead: "call",
        contactAddressLead: "or write to",
      },
      privacy: {
        eyebrow: "Privacy",
        title: "Privacy Policy",
        intro:
          "This policy transparently describes how personal data may be processed when using the DTSfuture showcase website.",
        disclaimer:
          "This policy describes the configuration currently published for dtsfuture.com. It is drafted to cover the transparency, security and privacy expectations relevant to a website published from Germany and accessible internationally. It should be reviewed again if the site's features or commercial scope evolve.",
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
            text: "Processing is based, depending on the case, on DTSfuture's legitimate interest in operating its site, on pre-contractual steps when contact is initiated, or on compliance with applicable legal obligations under GDPR and BDSG.",
          },
          {
            title: "Recipients",
            text: "Data is intended for authorized persons within DTSfuture and, when necessary, for technical providers involved in hosting, maintenance, security or operation of the site.",
          },
          {
            title: "Territorial scope and legal framework",
            text: "The site is published from Germany and is internationally accessible. DTSfuture seeks to respect the relevant transparency, privacy, security and information obligations applicable to the publication of the site in Germany and across the European area, as well as the relevant mandatory obligations in the markets it publicly serves.",
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
            text: "You may request access, rectification, erasure, restriction of processing, objection or portability of your data under GDPR where those rights apply. You may also lodge a complaint with the competent supervisory authority.",
          },
          {
            title: "Cookies and analytics",
            text: "In the configuration currently published, the site embeds no audience measurement tool, no marketing pixel and no advertising cookie. The only intentional browser-side persistence used by the public interface is the functional dtsfuture-locale cookie, kept for up to 12 months to remember the selected language (de or en). If analytics, personalization or marketing tools are added later, this policy must be updated with the details of the trackers used and, where required, a prior consent mechanism.",
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

  if (pathname === "/datenschutz" || pathname === "/privacy-policy") {
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
