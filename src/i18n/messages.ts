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
      badge: "Technologie-Studio aus Deutschland. Produkte, die Bestand haben.",
      titleLead: "Wir entwickeln digitale Produkte mit",
      titleAccent: "kompromissloser Ingenieurskultur.",
      description:
        "DTSfuture ist ein unabhängiges Studio aus Deutschland. Wir bauen digitale Produkte für deutsche und internationale Kunden – mit Ingenieursdisziplin, Produktklarheit und einer seltenen Sensibilität für reale Nutzung.",
      primaryCta: "Sehen, was wir bauen",
      secondaryCta: "Kontakt aufnehmen",
      stats: [
        { value: "DE", label: "Studio-Standort" },
        { value: "2", label: "Kontinente bedient" },
        { value: "100%", label: "Eigenbetrieb" },
      ],
    },
    adn: {
      eyebrow: "Unsere DNA",
      titleLead: "Wir bauen nicht aus",
      titleAccent: "dem Elfenbeinturm.",
      description:
        "Wir haben Reibung erlebt, bevor wir die Methode lernten. Deutsche Ingenieursstrenge trifft auf eine seltene Feldperspektive – genau deshalb fühlen sich unsere Produkte von Anfang an schärfer, stabiler und glaubwürdiger an.",
      items: {
        localInsight: {
          title: "Seltene Perspektive",
          description:
            "Wir kombinieren deutsche Ingenieurskultur mit einer Sensibilität für Märkte mit echter Reibung – eine Perspektive, die den Unterschied zwischen Politur und Substanz macht.",
        },
        europeanStandards: {
          title: "Deutsche Standards",
          description:
            "Sicherheit, Compliance, Stabilität und Produktdisziplin nach deutschen Maßstäben. Vertrauen entsteht ab dem ersten Kontakt.",
        },
        modernEngineering: {
          title: "Modernes Engineering",
          description:
            "Solide Architektur, CI/CD und Monitoring, damit wir schnell liefern können, ohne die Qualität zu gefährden.",
        },
        performanceFirst: {
          title: "Performance zuerst",
          description:
            "Optimiert für reale Bedingungen – vom deutschen Glasfaseranschluss bis zum mobilen Netz weltweit. Ein langsames Produkt verliert das Vertrauen, bevor es Akzeptanz gewinnt.",
        },
        socialImpact: {
          title: "Konkreter Mehrwert",
          description:
            "Jedes Produkt muss etwas Messbares verbessern. Keine Features um ihrer selbst willen – nur Ergebnisse, die Nutzer spüren.",
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
      titleAccent: "Wir haben gelernt, Produkte zu bauen, die tragen.",
      description:
        "DTSfuture ist ein Studio aus Deutschland mit internationaler DNA. Unsere Gründungsgeschichte führt von Kameruns Feldrealität zur deutschen Ingenieursstrenge – eine seltene Kombination, die heute in jede Zeile Code fließt, die wir für deutsche und internationale Kunden schreiben.",
      calloutTitle: "Vom gelebten Einblick zur deutschen Ausführung",
      calloutText:
        "Das Feld formt die Intuition. Deutsche Disziplin formt die Ausführung. DTSfuture existiert dort, wo beides zu einem Produkt wird, dem Kunden weltweit vertrauen können.",
      pageCta: "Die ganze Geschichte lesen",
      milestones: [
        {
          label: "Wurzeln",
          title: "Feldrealität vor den Folien",
          description:
            "Die Erfahrung Kameruns lehrte früh, was Nutzer wirklich aufhält: fragiles Vertrauen, unnötige Reibung, verschwendete Zeit. Eine seltene Perspektive, die heute jeder deutschen Produktdiskussion Tiefe gibt.",
        },
        {
          label: "Schmiede",
          title: "Strenge, geschmiedet in Deutschland",
          description:
            "Deutschland lieferte die Methode: saubere Architektur, Produktdisziplin, Sorgfalt und eine Kultur der Zuverlässigkeit. Hier wurde die Intuition in ein Ingenieurshandwerk verwandelt.",
        },
        {
          label: "Studio",
          title: "Für den deutschen und internationalen Markt",
          description:
            "DTSfuture ist heute ein Studio aus Deutschland. Wir bauen für Kunden, die Substanz wollen – und liefern Produkte wie Bolo237 als öffentlichen Beweis unserer Ausführungsfähigkeit.",
        },
      ],
    },
    storyPage: {
      eyebrow: "Unsere Geschichte",
      titleLead: "Vor DTSfuture gab es eine einfache Frustration.",
      titleAccent: "Zu sehen, wie echte Bedürfnisse hinter leeren Versprechungen verschwinden.",
      intro:
        "Der Ausgangspunkt war keine abstrakte Idee, um ein weiteres Startup zu gründen. Es war die menschliche Realität: verlorene Stunden, erschöpftes Vertrauen und digitale Produkte, die in der Theorie glänzen, aber in der Praxis versagen. Heute ist DTSfuture ein Studio aus Deutschland – mit einer Gründungsgeschichte, die unseren Blick auf Qualität für immer geprägt hat.",
      quote:
        "Die Messlatte ist nicht das Design. Die Messlatte ist radikale Nützlichkeit und Menschlichkeit.",
      chapters: [
        {
          label: "Die Wurzeln",
          title: "Kameruns Dringlichkeit",
          text:
            "Wer mit den Realitäten Kameruns aufwächst, lernt früh den Unterschied zwischen einer netten Idee und einem Service, der Menschen wirklich voranbringt. Wenn das Vertrauen fragil ist und jede digitale Hürde echtes Geld und Zeit kostet, ist die Messlatte nicht das Design. Die Messlatte ist radikale Nützlichkeit und Menschlichkeit. Diese Dringlichkeit hat uns gelehrt, Reibung zu hassen und Lösungen zu lieben – eine Perspektive, die kein deutsches Ingenieursstudio einfach nachbilden kann.",
        },
        {
          label: "Die Formung",
          title: "Deutsche Disziplin",
          text:
            "Die Ankunft in Deutschland hat diese Realität nicht ausgelöscht, sondern geschmiedet. Deutsche Ingenieurskultur, kompromisslose technische Strenge und eine absolute Kultur des Beweises haben die Intuition in ein Handwerk verwandelt. DTSfuture entstand genau hier – an der Schnittstelle zwischen gelebter Resilienz und methodischer Perfektion. Heute ist Deutschland unser Standort, unsere Ingenieursheimat und unser Qualitätsmaßstab.",
        },
        {
          label: "Die Positionierung",
          title: "Ein Studio aus Deutschland, für die Welt",
          text:
            "DTSfuture ist heute ein unabhängiges Studio aus Deutschland. Wir dienen deutschen und internationalen Kunden mit deutscher Ingenieursstrenge – und tragen die Feldperspektive als seltenen Vorteil in jedes Projekt. Bolo237, unser erstes internationales Flaggschiff, ist der öffentliche Beweis: in Deutschland gebaut, für Kamerun konzipiert, real im Markt.",
        },
      ],
      bridgeTitle: "Zwei Welten, eine Vision",
      bridgeText:
        "Kameruns Dringlichkeit und deutsche Disziplin sind keine Gegensätze – sie sind die beiden Hälften einer einzigen Überzeugung: Produkte, die wirklich halten, entstehen nur dort, wo Feldresilienz auf deutsche Ingenieursperfektion trifft. Genau diese Kombination bieten wir heute deutschen und internationalen Kunden.",
      pillarsTitle: "Was diese Geschichte heute hervorbringt",
      pillars: [
        "Ein Studio aus Deutschland, das deutsche Ingenieursstrenge mit seltener internationaler Perspektive verbindet.",
        "Eine Produktphilosophie, die auf Klarheit, Substanz und echten Marktbedingungen basiert.",
        "Kompromisslose Architektur, getragen von technischen Standards, die der Zeit standhalten.",
      ],
      closingTitle: "DTSfuture ist keine bloße Haltung.",
      closingText:
        "Es ist ein Versprechen ernsthafter Konstruktion – aus Deutschland für die Welt. Wenn eine Idee es verdient, auf dem Markt zu existieren, verdient sie mehr als einen schmeichelhaften Prototyp. Sie verdient ein Produkt, das hält, das Sicherheit gibt und das gemeinsam mit seinen Nutzern wächst.",
      primaryCta: "Über Ihr Projekt sprechen",
      secondaryCta: "Unsere Produkte sehen",
    },
    portfolio: {
      eyebrow: "Portfolio",
      titleLead: "Produkte, die gebaut wurden,",
      titleAccent: "um Vertrauen in der realen Welt zu gewinnen",
      description:
        "Jedes DTSfuture-Produkt ist der öffentliche Beweis unserer Arbeit. Bolo237 ist unser erstes internationales Flaggschiff – in Deutschland mit deutscher Ingenieurskultur gebaut, für den kamerunischen Markt konzipiert.",
      featuredTagline: "Internationales Flaggschiff, in Deutschland gebaut",
      featuredDescription:
        "Bolo237 ist unser erstes internationales Produkt: ein Jobmarktplatz, in Deutschland entwickelt und für Kamerun konzipiert. Der öffentliche Beweis, dass wir Produkte bauen, die in anspruchsvollen Märkten bestehen.",
      featuredTags: ["Mobile-first", "Echtzeit", "Verifizierte Profile", "International"],
      proofDescription:
        "Echte Bolo237-Screens sind in die Seite eingebettet, um eine Ausführung zu zeigen, die bereits greifbar, öffentlich und stark genug ist, um Vertrauen zu gewinnen.",
      exploreCta: "Den Bolo237-Fall ansehen",
      schmidtsTagline: "Digitale Sichtbarkeit für Hamburgs Zaunbau-Spezialisten",
      schmidtsDescription:
        "Schmidts Zaunbau Nord – über 20 Jahre Erfahrung, 2.000+ abgeschlossene Projekte, 4,8 Sterne auf Google. DTSfuture hat den Betrieb mit einer neuen Website, klarer Positionierung und gezielter Lead-Generierung digital neu aufgestellt.",
      schmidtsTags: ["Webentwicklung", "Branding", "Lead-Generierung", "SEO"],
      schmidtsExploreCta: "Den Schmidts-Fall ansehen",
      carliteTagline: "Mobilität, neu gedacht",
      carliteDescription:
        "Carlite bereitet ein Mobilitätserlebnis vor: klarer, sicherer und täglich wirklich nützlich – gebaut mit den gleichen Ingenieursstandards aus Deutschland.",
      carliteTags: ["Mitfahren", "Sicher", "GPS", "Mobile Bezahlung"],
      labTitle: "Das DTSfuture Lab",
      labDescription:
        "Weitere Produkte für den deutschen und internationalen Markt entstehen bereits. Wir gehen dorthin, wo echte Reibung eine substanzielle Produktantwort verdient.",
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
      titleAccent: "Sprechen wir.",
      description:
        "Ob Gründer aus Berlin, Investor aus München oder Unternehmer aus dem Ausland – wir verwandeln Ambition in Produkte mit Substanz, die dem Markt standhalten.",
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
        "Wir bauen digitale Produkte aus Deutschland – mit Ingenieursdisziplin, Produktklarheit und Standards, die nicht nachgeben.",
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
          "DTSfuture ist ein unabhängiges Technologie-Studio aus Deutschland. Wir entwickeln ehrgeizige digitale Produkte für den deutschen und internationalen Markt – mit kompromissloser Ingenieursdisziplin und einer seltenen Sensibilität für reale Nutzung. Unser erstes öffentliches Flaggschiff, Bolo237, ist ein in Deutschland gebautes, international konzipiertes Produkt und der sichtbare Beweis unserer Ausführungsfähigkeit.",
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
          "Die Webseite wird aus Deutschland veröffentlicht und richtet sich an ein deutsches und internationales Publikum. DTSfuture strebt danach, diese öffentliche Webseite mit den relevanten Anforderungen hinsichtlich Herausgeberidentifikation, Transparenz, Datenschutz, Sicherheit und Nutzerinformation in Einklang zu bringen, wie sie in Deutschland und auf europäischer Ebene gelten sowie mit den zwingenden Anforderungen, die für digitale Kommunikation in die Märkte relevant sind, die DTSfuture öffentlich bedient. Bei Änderungen der Funktionalität, des kommerziellen Umfangs oder des regulatorischen Kontexts sollten diese Seite und die Datenschutzerklärung entsprechend aktualisiert werden.",
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
      badge: "Technology studio from Germany. Products built to last.",
      titleLead: "We design digital products with",
      titleAccent: "uncompromising engineering rigor.",
      description:
        "DTSfuture is an independent studio based in Germany. We build digital products for German and international clients — with engineering discipline, product clarity, and a rare sensitivity to real-world usage.",
      primaryCta: "See what we are building",
      secondaryCta: "Get in touch",
      stats: [
        { value: "DE", label: "Studio location" },
        { value: "2", label: "Continents served" },
        { value: "100%", label: "Independent" },
      ],
    },
    adn: {
      eyebrow: "Our DNA",
      titleLead: "We do not build from",
      titleAccent: "an ivory tower.",
      description:
        "We lived the friction before we learned the method. German engineering rigor meets a rare field perspective — that is exactly why our products feel sharper, steadier, and more credible from day one.",
      items: {
        localInsight: {
          title: "Rare perspective",
          description:
            "We combine German engineering culture with a sensitivity to markets where friction is real — a perspective that makes the difference between polish and substance.",
        },
        europeanStandards: {
          title: "German standards",
          description:
            "Security, compliance, stability and product discipline shaped by German standards. Trust begins at the first interaction.",
        },
        modernEngineering: {
          title: "Modern engineering",
          description:
            "Solid architecture, CI/CD and monitoring so we can move fast without compromising quality.",
        },
        performanceFirst: {
          title: "Performance first",
          description:
            "Optimized for real conditions — from a German fiber connection to mobile networks worldwide. A slow product loses trust before it earns adoption.",
        },
        socialImpact: {
          title: "Concrete impact",
          description:
            "Every product must improve something measurable. No features for their own sake — only outcomes users actually feel.",
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
      titleAccent: "We learned to build products that carry weight.",
      description:
        "DTSfuture is a studio based in Germany with international DNA. Our founding story runs from Cameroon's field reality to German engineering rigor — a rare combination that flows into every line of code we write for German and international clients.",
      calloutTitle: "From lived insight to German execution",
      calloutText:
        "The field shapes intuition. German discipline shapes execution. DTSfuture exists where both become a product clients worldwide can trust.",
      pageCta: "Read the full story",
      milestones: [
        {
          label: "Roots",
          title: "Field reality before slides",
          description:
            "Growing up with Cameroon's realities taught us early what truly slows people down: fragile trust, unnecessary friction and wasted time. A rare perspective that now gives depth to every German product conversation.",
        },
        {
          label: "Forge",
          title: "Rigor forged in Germany",
          description:
            "Germany delivered the method: clean architecture, product discipline, attention to detail and a culture of reliability. Here intuition was turned into an engineering craft.",
        },
        {
          label: "Studio",
          title: "For the German and international market",
          description:
            "DTSfuture is now a studio based in Germany. We build for clients who want substance — and ship products like Bolo237 as public proof of our execution capability.",
        },
      ],
    },
    storyPage: {
      eyebrow: "Our Story",
      titleLead: "Before DTSfuture, there was one simple frustration.",
      titleAccent: "Too many real needs were left without a serious answer.",
      intro:
        "The starting point was not hype, nor the abstract desire to launch just another startup. The starting point was the human cost of friction: lost hours, worn-out trust, and services that promise a lot but fail when real life begins. Today, DTSfuture is a studio based in Germany — with a founding story that shapes our standard of quality forever.",
      quote:
        "The bar is not the design. The bar is radical usefulness and humanity.",
      chapters: [
        {
          label: "Roots",
          title: "Cameroon's urgency",
          text:
            "Growing up with Cameroon's realities means learning early the difference between an impressive idea and a service that actually moves people forward. When trust is fragile and every digital hurdle costs real money and time, the bar cannot be cosmetic. It has to be radically useful and human. That urgency taught us to hate friction and love substance — a perspective no German engineering studio can simply replicate.",
        },
        {
          label: "Transformation",
          title: "German discipline",
          text:
            "Arriving in Germany did not erase that reality. It forged it. German engineering culture, uncompromising technical rigor, and an absolute culture of proof turned intuition into craft. DTSfuture was built exactly there, between lived resilience and methodical perfection. Germany is now our location, our engineering home and our quality standard.",
        },
        {
          label: "Positioning",
          title: "A studio from Germany, for the world",
          text:
            "DTSfuture today is an independent studio based in Germany. We serve German and international clients with German engineering rigor — and carry our field perspective as a rare advantage into every project. Bolo237, our first international flagship, is the public proof: built in Germany, designed for Cameroon, real in the market.",
        },
      ],
      bridgeTitle: "Two worlds, one vision",
      bridgeText:
        "Cameroon's urgency and German discipline are not opposites — they are the two halves of one conviction: products that truly hold are only built where field resilience meets German engineering perfection. That is exactly the combination we offer German and international clients today.",
      pillarsTitle: "What this story produces today",
      pillars: [
        "A studio based in Germany that combines German engineering rigor with a rare international perspective.",
        "A product philosophy built on clarity, substance and real market conditions.",
        "Uncompromising architecture, carried by technical standards built to last.",
      ],
      closingTitle: "DTSfuture is not a posture.",
      closingText:
        "It is a commitment to serious construction — from Germany to the world. If an idea deserves to exist in the market, it deserves more than a flattering prototype. It deserves a product that holds up, reassures its users, and grows alongside them.",
      primaryCta: "Talk about your project",
      secondaryCta: "See our products",
    },
    portfolio: {
      eyebrow: "Portfolio",
      titleLead: "Products built to",
      titleAccent: "earn trust in the real world",
      description:
        "Every DTSfuture product is public proof of our work. Bolo237 is our first international flagship — built in Germany with German engineering culture, designed for the Cameroonian market.",
      featuredTagline: "International flagship, built in Germany",
      featuredDescription:
        "Bolo237 is our first international product: a jobs marketplace, developed in Germany and designed for Cameroon. The public proof that we build products able to hold up in demanding markets.",
      featuredTags: ["Mobile-first", "Real time", "Verified profiles", "International"],
      proofDescription:
        "Real Bolo237 screens are embedded across the site to show execution that is already tangible, already public, and already strong enough to earn confidence.",
      exploreCta: "See the Bolo237 case",
      schmidtsTagline: "Digital visibility for Hamburg's fencing specialists",
      schmidtsDescription:
        "Schmidts Zaunbau Nord — 20+ years of experience, 2,000+ completed projects, 4.8 stars on Google. DTSfuture repositioned the business with a new website, clear positioning, and targeted lead generation.",
      schmidtsTags: ["Web development", "Branding", "Lead generation", "SEO"],
      schmidtsExploreCta: "See the Schmidts case",
      carliteTagline: "Mobility, rethought",
      carliteDescription:
        "Carlite is preparing a mobility experience: clearer, safer and genuinely useful every day — built with the same German engineering standards.",
      carliteTags: ["Ride sharing", "Secure", "GPS", "Mobile payments"],
      labTitle: "The DTSfuture Lab",
      labDescription:
        "More products for the German and international market are already taking shape. We go wherever real friction deserves a substantial product answer.",
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
        "Whether you are a founder in Berlin, an investor in Munich, or an operator abroad — we turn ambition into products with substance that hold up under real market pressure.",
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
        "We build digital products from Germany — with engineering discipline, product clarity, and standards that do not bend.",
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
          "DTSfuture is an independent technology studio based in Germany. We build ambitious digital products for the German and international market — with uncompromising engineering discipline and a rare sensitivity to real-world usage. Our first public flagship, Bolo237, is a product built in Germany and designed for an international market, serving as the visible proof of our execution capability.",
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
          "The website is published from Germany and addresses a German and international audience. DTSfuture seeks to align this public-facing website with the relevant requirements around publisher identification, transparency, privacy, security and user information applicable in Germany and at the European level, as well as the mandatory requirements relevant to digital communication toward the markets DTSfuture publicly serves. If the site's functionality, commercial scope or regulatory context changes, this page and the privacy policy should be updated accordingly.",
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
