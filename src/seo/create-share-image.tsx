import { ImageResponse } from "next/og";

type ShareLocale = "de" | "en";
type ShareVariant = "site" | "press" | "products" | "bolo237";

export const shareImageSize = {
  width: 1200,
  height: 630,
};

export const shareImageContentType = "image/png";

const shareCopy = {
  de: {
    site: {
      badge: "Studio aus Deutschland",
      title: "Digitale Produkte mit deutscher Ingenieurskultur.",
      description:
        "Unabhängiges Technologie-Studio aus Deutschland. Für den deutschen und internationalen Markt – mit Substanz statt Politur.",
      tags: ["Made in Germany", "International", "Engineering-first"],
      footer: "www.dtsfuture.com",
      highlight: "Vertrauen schaffen. Klar liefern. Mit Absicht vorankommen.",
      alt: "DTSfuture Social-Share-Vorschau.",
    },
    press: {
      badge: "Media kit",
      title: "DTSfuture Pressebereich",
      description:
        "Medienkontakt, Boilerplate und Marken-Assets für LinkedIn, X und Facebook.",
      tags: ["Press kit", "Brand assets", "Interview contact"],
      footer: "Medienpaket & Presse",
      highlight: "Vertrauen schaffen. Klar liefern. Mit Absicht vorankommen.",
      alt: "DTSfuture Pressebereich Social-Share-Vorschau.",
    },
    products: {
      badge: "Unsere Produkte",
      title: "Öffentliche Fälle, die vor dem ersten Anruf überzeugen.",
      description:
        "Bolo237, unser internationales Flaggschiff aus Deutschland, öffnet eine Bibliothek mit Produktnachweisen: Konzeption, Design, Entwicklung, Launch.",
      tags: ["Made in Germany", "International", "Engineering-first"],
      footer: "/de/produkte",
      highlight: "Sichtbare Fälle für anspruchsvolle Partner.",
      alt: "DTSfuture Produkte Social-Share-Vorschau.",
    },
    bolo237: {
      badge: "Internationales Flaggschiff",
      title: "Bolo237: in Deutschland gebaut, für Kamerun konzipiert.",
      description:
        "Unser erstes internationales Produkt. Deutsche Ingenieursstrenge trifft auf Feldperspektive – als öffentlicher Beweis unserer Ausführung.",
      tags: ["Made in Germany", "International", "Live"],
      footer: "/de/produkte/bolo237",
      highlight: "Vom Ausgangsbedürfnis bis zum Launch – Ausführung sichtbar und vertretbar.",
      alt: "Bolo237 Fallstudie Social-Share-Vorschau.",
    },
  },
  en: {
    site: {
      badge: "Studio from Germany",
      title: "Digital products built with German engineering.",
      description:
        "An independent technology studio based in Germany. For the German and international market — substance over polish.",
      tags: ["Made in Germany", "International", "Engineering-first"],
      footer: "www.dtsfuture.com",
      highlight: "Earn trust. Ship with clarity. Move with intent.",
      alt: "DTSfuture social share preview.",
    },
    press: {
      badge: "Media kit",
      title: "DTSfuture press room",
      description:
        "Media contact, company boilerplate and brand assets ready for LinkedIn, X and Facebook.",
      tags: ["Press kit", "Brand assets", "Interview contact"],
      footer: "Media kit & press",
      highlight: "Build trust. Ship clearly. Move with intent.",
      alt: "DTSfuture press room social share preview.",
    },
    products: {
      badge: "Our products",
      title: "Public product cases that reassure before the first call.",
      description:
        "Bolo237, our international flagship built in Germany, opens a library of product proof: scoping, design, development, launch.",
      tags: ["Made in Germany", "International", "Engineering-first"],
      footer: "/en/products",
      highlight: "Visible cases for prospects who want proof, not promises.",
      alt: "DTSfuture products page social share preview.",
    },
    bolo237: {
      badge: "International flagship",
      title: "Bolo237: built in Germany, designed for Cameroon.",
      description:
        "Our first international product. German engineering rigor meets field perspective — as public proof of our execution.",
      tags: ["Made in Germany", "International", "Live"],
      footer: "/en/products/bolo237",
      highlight: "From the initial need to public launch, the execution is already visible.",
      alt: "Bolo237 case-study social share preview.",
    },
  },
} as const;

function BrandMark() {
  return (
    <svg width="208" height="208" viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" rx="18" fill="#F8F6F0" />
      <rect x="2" y="2" width="60" height="60" rx="16" stroke="#1A1715" strokeWidth="4" />
      <rect x="14" y="14" width="10" height="36" rx="4" fill="#1A1715" />
      <path d="M27 16C27 16 50 16 50 32C50 48 27 48 27 48" stroke="#C0392B" strokeWidth="9" strokeLinecap="round" />
      <circle cx="47" cy="32" r="4.5" fill="#234B2C" />
    </svg>
  );
}

export function getShareImageAlt(locale: ShareLocale, variant: ShareVariant) {
  return shareCopy[locale][variant].alt;
}

export function createShareImage(locale: ShareLocale, variant: ShareVariant) {
  const copy = shareCopy[locale][variant];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F8F6F0",
          color: "#1A1715",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(192,57,43,0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(35,75,44,0.16), transparent 26%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 40,
            border: "1px solid rgba(26,23,21,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.94), rgba(248,246,240,0.92))",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "54px 58px",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "68%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  alignSelf: "flex-start",
                  borderRadius: 999,
                  padding: "10px 18px",
                  background: "rgba(255,255,255,0.88)",
                  border: "1px solid rgba(26,23,21,0.08)",
                  color: "#C0392B",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: 1.3,
                  textTransform: "uppercase",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "#234B2C",
                    boxShadow: "0 0 0 6px rgba(35,75,44,0.14)",
                  }}
                />
                {copy.badge}
              </div>
              <div
                style={{
                  marginTop: 34,
                  fontSize: 74,
                  lineHeight: 1.04,
                  fontWeight: 800,
                  letterSpacing: -3.4,
                  maxWidth: "95%",
                }}
              >
                {copy.title}
              </div>
              <div
                style={{
                  marginTop: 24,
                  maxWidth: "90%",
                  color: "rgba(26,23,21,0.72)",
                  fontSize: 30,
                  lineHeight: 1.35,
                }}
              >
                {copy.description}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
                {copy.tags.map((tag) => (
                  <div
                    key={tag}
                    style={{
                      borderRadius: 999,
                      padding: "11px 18px",
                      background: "rgba(255,255,255,0.92)",
                      border: "1px solid rgba(26,23,21,0.08)",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "rgba(26,23,21,0.66)",
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                color: "rgba(26,23,21,0.58)",
                fontSize: 24,
              }}
            >
              <div style={{ fontWeight: 700, color: "#1A1715", fontSize: 28 }}>DTSfuture</div>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "rgba(26,23,21,0.18)",
                }}
              />
              <div>{copy.footer}</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "32%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                width: 300,
                height: 300,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 40,
                background: "#FFFFFF",
                border: "1px solid rgba(26,23,21,0.08)",
                boxShadow: "0 32px 80px -48px rgba(26,23,21,0.38)",
              }}
            >
              <BrandMark />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                borderRadius: 34,
                padding: "28px 30px",
                background: "#1A1715",
                color: "#F8F6F0",
              }}
            >
              <div
                style={{
                  fontSize: 17,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                  color: "rgba(248,246,240,0.54)",
                }}
              >
                Made in Germany
              </div>
              <div style={{ fontSize: 28, lineHeight: 1.28, fontWeight: 600 }}>
                {copy.highlight}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    shareImageSize,
  );
}