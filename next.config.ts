import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/impressum",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/politique-de-confidentialite",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/fr/privacy-policy",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/en/politique-de-confidentialite",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/fr/privacy-policy",
        destination: "/fr/politique-de-confidentialite",
        permanent: true,
      },
      {
        source: "/en/politique-de-confidentialite",
        destination: "/en/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
