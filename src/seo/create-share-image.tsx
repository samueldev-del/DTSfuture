import { ImageResponse } from "next/og";

type ShareLocale = "fr" | "en";
type ShareVariant = "site" | "press" | "products" | "bolo237";

export const shareImageSize = {
  width: 1200,
  height: 630,
};

export const shareImageContentType = "image/png";

const shareCopy = {
  fr: {
    site: {
      badge: "Studio technologique",
      title: "Des produits numériques ambitieux pour le Cameroun.",
      description:
        "Exécution rigoureuse, design premium et obsession pour l'utilité réelle.",
      tags: ["Bolo237", "Carlite", "Cameroon-first"],
      footer: "www.dtsfuture.com",
      highlight: "Inspirer confiance. Livrer clairement. Avancer avec intention.",
      alt: "Aperçu social du site DTSfuture.",
    },
    press: {
      badge: "Media kit",
      title: "Espace presse DTSfuture",
      description:
        "Contact média, boilerplate et assets de marque prêts pour LinkedIn, X et Facebook.",
      tags: ["Press kit", "Brand assets", "Interview contact"],
      footer: "Media kit & presse",
      highlight: "Inspirer confiance. Livrer clairement. Avancer avec intention.",
      alt: "Aperçu social de l'espace presse DTSfuture.",
    },
    products: {
      badge: "Nos produits",
      title: "Des cas publics qui rassurent avant le premier appel.",
      description:
        "Bolo237 ouvre une bibliothèque de preuves produit : cadrage, design, développement et mise en ligne visibles.",
      tags: ["Bolo237", "Exécution produit", "Preuve client"],
      footer: "/fr/projets",
      highlight: "Des cas montrables pour rassurer un prospect exigeant.",
      alt: "Aperçu social de la page produits DTSfuture.",
    },
    bolo237: {
      badge: "Cas produit",
      title: "Bolo237 : une preuve d'exécution de bout en bout.",
      description:
        "Défi initial, solution apportée et architecture visible pour montrer une exécution produit déjà publique.",
      tags: ["Challenge", "Solution", "Technologies"],
      footer: "/fr/projets/bolo237",
      highlight: "Du besoin initial à la mise en ligne, exécution visible et défendable.",
      alt: "Aperçu social du cas produit Bolo237.",
    },
  },
  en: {
    site: {
      badge: "Technology studio",
      title: "Ambitious digital products for Cameroon.",
      description:
        "Rigorous execution, premium product judgment, and an obsession with usefulness that holds up in the real world.",
      tags: ["Bolo237", "Carlite", "Cameroon-first"],
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
        "Bolo237 opens a library of product proof: scoping, design, development, and delivery made visible.",
      tags: ["Bolo237", "Product execution", "Client proof"],
      footer: "/en/products",
      highlight: "Visible cases for prospects who want proof, not promises.",
      alt: "DTSfuture products page social share preview.",
    },
    bolo237: {
      badge: "Product case",
      title: "Bolo237: end-to-end execution, made public.",
      description:
        "Original challenge, delivered response, and observable architecture showing a product that is already live.",
      tags: ["Challenge", "Solution", "Technology"],
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
                Cameroon-first
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