export const supportedLocales = ["de", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const messages = {
  de: {
    meta: {
      homeTitle: "DTSfuture - Technologie-Studio",
      homeDescription:
        "DTSfuture entwickelt ehrgeizige digitale Produkte für Kamerun – mit rigoroser Ausführung, erstklassigem Produkturteil und dem Fokus auf echten Mehrwert.",
      productsTitle: "Unsere Produkte | DTSfuture",
      productsDescription:
        "DTSfuture Produktfälle: Bolo237, Arbeitsmethoden und sichtbare Belege für End-to-End-Ausführung.",
      bolo237Title: "Bolo237 | DTSfuture",
      bolo237Description:
        "Die Bolo237-Fallstudie: die ursprüngliche Herausforderung, die Produktantwort und die technischen Entscheidungen hinter einer bereits öffentlichen Plattform.",
      impressumTitle: "Impressum | DTSfuture",
      impressumDescription:
        "Angaben zum Herausgeber und Kontaktinformationen für DTSfuture, ein privates, nicht-kommerzielles Projekt.",
      pressTitle: "Presse | DTSfuture",
      pressDescription:
        "DTSfuture Pressebereich: Medienkontakt, Unternehmenstext, Kennzahlen und herunterladbare Marken-Assets.",
      storyTitle: "Unsere Geschichte | DTSfuture",
      storyDescription:
        "Die DTSfuture-Geschichte: gelebte Realität in Kamerun, Disziplin in Deutschland und die Entscheidung, Produkte zu bauen, die wirklich halten.",
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
      badge: "Kamerun verdient Produkte mit echter Disziplin.",
      titleLead: "Wir entwickeln die digitalen Produkte, auf die der Markt wartet",
      titleAccent: "in Kamerun.",
      description:
        "DTSfuture wandelt lokale Reibungspunkte in klare, begehrenswerte Produkte um – gebaut für Vertrauen, Schnelligkeit und reale Nutzung.",
      primaryCta: "Sehen, was wir bauen",
      secondaryCta: "Kontakt aufnehmen",
      stats: [
        { value: "2", label: "Produkte in Entwicklung" },
        { value: "10", label: "Abgedeckte Regionen" },
        { value: "237", label: "Ländervorwahl Kamerun" },
      ],
    },
    adn: {
      eyebrow: "Unsere DNA",
      titleLead: "Wir bauen nicht aus",
      titleAccent: "einem Elfenbeinturm heraus.",
      description:
        "Wir haben die Reibung erlebt, bevor wir die Methode lernten. Genau deshalb fühlen sich unsere Produkte von Anfang an schärfer, stabiler und glaubwürdiger an.",
      items: {
        localInsight: {
          title: "Lokales Verständnis",
          description:
            "Interfaces, die auf reales Verhalten in Kamerun ausgerichtet sind. Kein distanziertes Produktdenken, kein schlichtes Kopieren aus anderen Märkten.",
        },
        europeanStandards: {
          title: "Europäische Standards",
          description:
            "Sicherheit, Compliance, Stabilität und Produktdisziplin, die beim ersten Kontakt Vertrauen schaffen.",
        },
        modernEngineering: {
          title: "Modernes Engineering",
          description:
            "Solide Architektur, CI/CD und Monitoring, damit wir schnell liefern können, ohne die Qualität zu gefährden.",
        },
        performanceFirst: {
          title: "Performance zuerst",
          description:
            "Optimiert für reale mobile Verbindungen, denn ein langsames Produkt verliert das Vertrauen, bevor es Akzeptanz gewinnt.",
        },
        socialImpact: {
          title: "Konkreter Mehrwert",
          description:
            "Jedes Produkt muss etwas Messbares verbessern: Arbeit finden, mobiler sein, schneller auf zuverlässige Dienste zugreifen.",
        },
        solidInfrastructure: {
          title: "Solide Infrastruktur",
          description:
            "Grundlagen, die langfristig halten und skalieren, ohne das Nutzererlebnis zu beeinträchtigen, wenn Wachstum kommt.",
        },
      },
    },
    story: {
      eyebrow: "Unsere Geschichte",
      titleLead: "Wir haben gesehen, was Menschen aufhält.",
      titleAccent: "Wir haben gelernt, was sie voranbringt.",
      description:
        "DTSfuture entstand nicht aus Trendverfolgung. Es entstand aus einer offensichtlichen Lücke: zu viele echte Bedürfnisse, zu wenige zuverlässige Produkte. Kamerun gab die Dringlichkeit. Deutschland gab die Disziplin für ernsthafte Antworten.",
      calloutTitle: "Vom gelebten Einblick zur Ausführung",
      calloutText:
        "Das Feld formt die Intuition. Disziplin formt die Ausführung. DTSfuture existiert dort, wo beides zu einem Produkt wird, dem Menschen vertrauen können.",
      pageCta: "Die ganze Geschichte lesen",
      milestones: [
        {
          label: "Realität",
          title: "Realität vor den Folien",
          description:
            "In Kamerun aufzuwachsen bedeutet zu verstehen, was Menschen wirklich aufhält: Mangel an Vertrauen, fragiler Zugang, unnötige Reibung und verschwendete Zeit.",
        },
        {
          label: "Disziplin",
          title: "Strenge, gelernt in Deutschland",
          description:
            "Deutschland brachte die Methode: saubere Architektur, Produktdisziplin, Sorgfalt und eine Kultur der Zuverlässigkeit.",
        },
        {
          label: "Ausführung",
          title: "Bauen, was es verdient zu existieren",
          description:
            "DTSfuture verbindet diese beiden Kräfte, um Produkte zu launchen, die nützlich, begehrenswert und stark genug sind, um auf afrikanischen Märkten zu bestehen.",
        },
      ],
    },
    storyPage: {
      eyebrow: "Unsere Geschichte",
      titleLead: "Vor DTSfuture gab es eine einfache Frustration.",
      titleAccent: "Zu viele echte Bedürfnisse blieben ohne ernsthafte Antwort.",
      intro:
        "Der Ausgangspunkt war kein Hype und kein abstrakter Wunsch, einfach ein weiteres Startup zu gründen. Der Ausgangspunkt war der menschliche Preis der Reibung: verlorene Stunden, verbrauchtes Vertrauen und Dienste, die viel versprechen, aber scheitern, wenn das echte Leben beginnt.",
      quote:
        "Wenn einem Produkt Klarheit, Zuverlässigkeit oder Respekt für reale Bedingungen fehlt, scheitern nicht nur Pixel. Vertrauen bricht zusammen und Chancen schließen sich.",
      chapters: [
        {
          label: "Ursprung",
          title: "Kamerun gab die Dringlichkeit",
          text:
            "Mit den Realitäten Kameruns aufzuwachsen bedeutet, früh zu lernen, dass es einen großen Unterschied gibt zwischen einer beeindruckenden Idee auf dem Papier und einem Dienst, der jemandem wirklich hilft, voranzukommen. Wenn Vertrauen fragil ist, wenn Mobiltelefone der wichtigste Zugangspunkt sind und jede Reibung Zeit oder Geld kostet, kann der Maßstab nicht kosmetisch sein. Er muss praktisch, menschlich und wirtschaftlich sein.",
        },
        {
          label: "Wandel",
          title: "Deutschland setzte die Disziplin durch",
          text:
            "Die Erfahrung in Deutschland hat diese Realität nicht ausgelöscht. Sie hat ihr Struktur gegeben. Technische Strenge, Produktdisziplin, Sorgfalt, Zuverlässigkeitskultur, eine Kultur des Beweises: Das alles gab einer bereits vorhandenen Intuition einen stärkeren Rahmen. DTSfuture wurde genau dort aufgebaut, zwischen gelebter Realität und Methode.",
        },
        {
          label: "Entscheidung",
          title: "Nur bauen, was es verdient zu existieren",
          text:
            "Das Projekt ist also nicht hier, um Lärm zu erzeugen. Es existiert, um Produkte zu bauen, die klar genug sind, um verstanden zu werden, nützlich genug, um angenommen zu werden, und stark genug, um zu bestehen, sobald der Markt sie bewertet. Bolo237 steht bereits als Beweis für diese Absicht: ein öffentliches Produkt, sichtbar, verbesserungsfähig, aber real.",
        },
      ],
      bridgeTitle: "Was DTSfuture verändern will",
      bridgeText:
        "Wir wollen die Lücke schließen zwischen der Qualität, die afrikanische Märkte verdienen, und der Qualität, die sie zu oft bekommen. Das erfordert lokale Sensibilität, europäische Disziplin und eine einfache Obsession: nie etwas liefern, das poliert aussieht, aber unter der Realität bricht.",
      pillarsTitle: "Was diese Geschichte heute produziert",
      pillars: [
        "Produktdisziplin, die mit Vertrauen beginnt und mit Ausführung endet.",
        "Erlebnisse, die für Mobilgeräte, Klarheit und reale Einschränkungen gestaltet sind.",
        "Afrikanischer Ehrgeiz, getragen von technischen Standards, die für die Zukunft gebaut sind.",
      ],
      closingTitle: "DTSfuture ist keine Haltung.",
      closingText:
        "Es ist ein Bekenntnis zu ernsthafter Konstruktion. Wenn eine Idee es verdient, auf dem Markt zu existieren, verdient sie mehr als einen schmeichelhaften Prototyp. Sie verdient ein Produkt, das standhält, Vertrauen schafft und mit seinen Nutzern wächst.",
      primaryCta: "Über Ihr Projekt sprechen",
      secondaryCta: "Unsere Produkte sehen",
    },
    portfolio: {
      eyebrow: "Portfolio",
      titleLead: "Produkte, die darauf ausgelegt sind,",
      titleAccent: "Vertrauen in der realen Welt zu gewinnen",
      description:
        "Jedes DTSfuture-Produkt beginnt mit einem echten Bedürfnis und ist so gebaut, dass es Nutzer überzeugt, Partner beruhigt und die Vision kommerziell glaubwürdig macht.",
      featuredTagline: "Der kamerunische Jobmarktplatz",
      featuredDescription:
        "Bolo237 verbindet Talente, Fachkräfte und Unternehmen in einem Marktplatz, der strukturierter, professioneller und deutlich vertrauenswürdiger wirkt.",
      featuredTags: ["Mobile-first", "Echtzeit", "Verifizierte Profile", "10 Regionen"],
      proofDescription:
        "Echte Bolo237-Screens sind in die Seite eingebettet, um eine Ausführung zu zeigen, die bereits greifbar, öffentlich und stark genug ist, um Vertrauen zu gewinnen.",
      exploreCta: "Den Bolo237-Fall ansehen",
      carliteTagline: "Mitfahren, neu gedacht für Kamerun",
      carliteDescription:
        "Carlite bereitet ein Mobilitätserlebnis vor, das für lokale Transportrealitäten gebaut ist: klarer, sicherer und täglich wirklich nützlich.",
      carliteTags: ["Mitfahrgemeinschaft", "Sicher", "Integriertes GPS", "Mobile Bezahlung"],
      labTitle: "Das DTSfuture Lab",
      labDescription:
        "Weitere Lösungen für Kamerun und Afrika nehmen bereits Form an. Wir gehen dorthin, wo echte Reibung eine Produktantwort verdient, die standhält.",
    },
    bolo237Preview: {
      brandAlt: "Bolo237 Markenvisual",
      iconAlt: "Bolo237 App-Symbol",
      homepageAlt: "Screenshot der Bolo237-Startseite",
      mobileAlt: "Mobile Ansicht von Bolo237",
      imageBadges: ["Live-Startseite", "Markenvisual", "App-Symbol"],
    },
    cta: {
      titleLead: "Eine Idee, die mehr als Politur verdient?",
      titleAccent: "Lassen Sie uns reden.",
      description:
        "Ob Gründer, Investor oder Unternehmer – wir können lokalen Einblick in ein Produkt verwandeln, das schärfer, stärker und vertrauenswürdig ist.",
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
        "Wir bauen digitale Produkte für Kamerun mit Ehrgeiz, Nützlichkeit und Standards, die nicht nachgeben.",
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
          "DTSfuture ist ein unabhängiges Technologie-Studio, das ehrgeizige digitale Produkte für Kamerun entwickelt. Es kombiniert direkten Feldeinblick mit Ausführungsdisziplin, die in Deutschland erlernt wurde, um Dienste zu launchen, die nützlich, glaubwürdig und von Anfang an solide gebaut sind.",
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
          "Produkttechnologie für Kamerun",
          "Ausführung zwischen Deutschland und Afrika",
          "Bolo237 und die Zukunft des lokalen Arbeitsmarkts",
          "Vertrauenszentriertes Design für reale Nutzung",
          "Unabhängige Studios, die digitale Produkte launchen",
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
        eyebrow: "Impressum · Privates Projekt",
        title: "Impressum",
        intro:
          "Die Webseite dtsfuture.com ist eine persönliche, nicht-kommerzielle Webseite. Diese Seite enthält die derzeit verfügbaren Herausgeber- und Kontaktinformationen für das private Projekt DTSfuture.",
        disclaimer:
          "Die unten stehenden Angaben zu Herausgeber, Domain und Hosting entsprechen der aktuell für die öffentliche Webseite verwendeten Konfiguration.",
        headings: {
          editor: "Herausgeber der Website",
          publication: "Verantwortlicher für den Inhalt",
          hosting: "Hosting",
          legalScope: "Rechtlicher und territorialer Rahmen",
          intellectualProperty: "Geistiges Eigentum",
          contact: "Kontakt",
        },
        details: {
          projectName: "Projektname",
          siteEditor: "Herausgeber",
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
          "Diese Webseite wird von DTSfuture herausgegeben. Es handelt sich um ein privates, persönliches und nicht-kommerzielles Projekt, das aus Deutschland veröffentlicht wird.",
        publicationLead: "Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV ist",
        publicationBetween: "Er ist erreichbar unter",
        publicationPhoneLead: "oder telefonisch unter",
        hostingText:
          "Die Website wird auf Vercel bereitgestellt. Der Domainname dtsfuture.com wurde über Hostinger erworben und sein DNS zeigt auf die Vercel-Infrastruktur.",
        legalScopeText:
          "Die Webseite wird aus Deutschland veröffentlicht und richtet sich insbesondere an ein Publikum mit Interesse an Kamerun. DTSfuture strebt danach, diese öffentliche Webseite mit den relevanten Anforderungen hinsichtlich Herausgeberidentifikation, Transparenz, Datenschutz, Sicherheit und Nutzerinformation in Einklang zu bringen, wie sie in Deutschland gelten sowie den zwingenden Anforderungen, die für digitale Kommunikation in Richtung Kamerun relevant sind. Bei Änderungen der Funktionalität, des kommerziellen Umfangs oder des regulatorischen Kontexts sollten diese Seite und die Datenschutzerklärung entsprechend aktualisiert werden.",
        intellectualPropertyText:
          "Alle Inhalte dieser Webseite, einschließlich Texte, visuelle Assets, Logos, Interfaces, Grafikkomponenten und Markenelemente, sind durch das Recht des geistigen Eigentums geschützt. Jede Reproduktion, Darstellung, Anpassung oder Nutzung, ganz oder teilweise, ohne vorherige schriftliche Genehmigung ist untersagt.",
        contactLead: "Bei Fragen zur Webseite oder ihrem Betrieb können Sie schreiben an",
        contactPhoneLead: "anrufen unter",
        contactAddressLead: "oder schreiben an",
      },
      privacy: {
        eyebrow: "Datenschutz",
        title: "Datenschutzerklärung",
        intro:
          "Diese Erklärung beschreibt transparent, wie personenbezogene Daten bei der Nutzung der DTSfuture-Präsentationswebseite verarbeitet werden können.",
        disclaimer:
          "Diese Erklärung beschreibt die aktuell für dtsfuture.com veröffentlichte Konfiguration. Sie ist darauf ausgelegt, die Transparenz-, Sicherheits- und Datenschutzanforderungen zu erfüllen, die für eine aus Deutschland veröffentlichte und aus Kamerun zugängliche Webseite relevant sind. Sie sollte überprüft werden, wenn sich die Funktionen oder der kommerzielle Umfang der Website ändern.",
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
            text: "Die Verarbeitung basiert je nach Fall auf dem berechtigten Interesse von DTSfuture am Betrieb seiner Website, auf vorvertraglichen Maßnahmen bei Kontaktaufnahme oder auf der Erfüllung gesetzlicher Verpflichtungen.",
          },
          {
            title: "Empfänger",
            text: "Daten sind für autorisierte Personen innerhalb von DTSfuture bestimmt und, wenn nötig, für technische Dienstleister, die am Hosting, der Wartung, Sicherheit oder dem Betrieb der Website beteiligt sind.",
          },
          {
            title: "Territorialer Rahmen und Rechtsgrundlage",
            text: "Die Website wird aus Deutschland veröffentlicht und ist insbesondere für Besucher mit Interesse an Kamerun zugänglich. DTSfuture strebt danach, die relevanten Transparenz-, Datenschutz-, Sicherheits- und Informationspflichten zu erfüllen, die für die Veröffentlichung der Website in Deutschland gelten sowie die relevanten Pflichten, wenn ein digitaler Dienst aus Kamerun zugänglich ist.",
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
            text: "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch oder Übertragbarkeit Ihrer Daten beantragen, sofern diese Rechte anwendbar sind. Sie können auch eine Beschwerde bei der zuständigen Behörde einreichen.",
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
      homeTitle: "DTSfuture - Technology Studio",
      homeDescription:
        "DTSfuture builds ambitious digital products for Cameroon with rigorous execution, premium product judgment, and an obsession with usefulness that holds up in the real world.",
      productsTitle: "Our Products | DTSfuture",
      productsDescription:
        "DTSfuture product cases: Bolo237, working methods, and visible proof of end-to-end execution.",
      bolo237Title: "Bolo237 | DTSfuture",
      bolo237Description:
        "The Bolo237 case study: the original challenge, the product response, and the technical choices behind a platform already visible in public.",
      impressumTitle: "Impressum | DTSfuture",
      impressumDescription:
        "Publisher and contact information for DTSfuture, a private personal non-commercial project.",
      pressTitle: "Press | DTSfuture",
      pressDescription:
        "DTSfuture press room: media contact, company boilerplate, key facts and downloadable brand assets.",
      storyTitle: "Our Story | DTSfuture",
      storyDescription:
        "The DTSfuture story: lived reality in Cameroon, discipline forged in Germany, and the decision to build products that truly hold.",
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
      badge: "Cameroon deserves products built with real discipline.",
      titleLead: "We design the digital products the market is waiting for",
      titleAccent: "in Cameroon.",
      description:
        "DTSfuture turns local friction into clear, desirable products engineered for trust, speed, and real-world use.",
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
        "We lived the friction before we learned the method. That is exactly why our products feel sharper, steadier, and more credible from day one.",
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
      titleLead: "We have seen what holds people back.",
      titleAccent: "We learned to build what moves them forward.",
      description:
        "DTSfuture was not born from trend-chasing. It was born from an obvious gap: too many real needs, too few reliable products. Cameroon gave the urgency. Germany gave the discipline required to build serious answers.",
      calloutTitle: "From lived insight to execution",
      calloutText:
        "The field shapes intuition. Discipline shapes execution. DTSfuture exists where both become a product people can trust.",
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
        "When a product lacks clarity, reliability, or respect for real conditions, it is not just pixels failing. It is trust collapsing and opportunity closing.",
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
        "We want to close the gap between the quality African markets deserve and the quality they are too often given. That requires local sensitivity, European discipline, and one simple obsession: never ship something that looks polished but breaks under reality.",
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
        "Every DTSfuture product begins with a real need and is built to convince users, reassure partners, and make the vision commercially credible.",
      featuredTagline: "The Cameroonian jobs marketplace",
      featuredDescription:
        "Bolo237 connects talent, skilled workers, and companies inside a marketplace designed to feel more structured, more professional, and far more trustworthy.",
      featuredTags: ["Mobile-first", "Real time", "Verified profiles", "10 regions"],
      proofDescription:
        "Real Bolo237 screens are embedded across the site to show execution that is already tangible, already public, and already strong enough to earn confidence.",
      exploreCta: "See the Bolo237 case",
      carliteTagline: "Ride sharing reimagined for Cameroon",
      carliteDescription:
        "Carlite is preparing a mobility experience built for local transport realities: clearer, safer and genuinely useful every day.",
      carliteTags: ["Ride sharing", "Secure", "Built-in GPS", "Mobile payments"],
      labTitle: "The DTSfuture Lab",
      labDescription:
        "More solutions for Cameroon and Africa are already taking shape. We go wherever real friction deserves a product answer that can hold its ground.",
    },
    bolo237Preview: {
      brandAlt: "Bolo237 brand visual",
      iconAlt: "Bolo237 app icon",
      homepageAlt: "Screenshot of the Bolo237 homepage",
      mobileAlt: "Mobile view of Bolo237",
      imageBadges: ["Live home", "Brand visual", "App icon"],
    },
    cta: {
      titleLead: "Have an idea that deserves more than polish?",
      titleAccent: "Let's talk.",
      description:
        "Whether you are a founder, investor, or operator, we can turn local insight into a product that feels sharper, stronger, and ready to be trusted.",
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
        "We build digital products for Cameroon with ambition, usefulness, and standards that do not bend.",
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
          "DTSfuture is an independent technology studio building ambitious digital products for Cameroon. It combines direct field insight with execution discipline learned in Germany to launch services that are useful, credible, and built to hold from their first versions.",
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
