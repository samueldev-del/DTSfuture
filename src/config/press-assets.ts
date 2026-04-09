export const pressDownloadAssets = [
  {
    key: "kit",
    href: "/press/dtsfuture-media-kit.zip",
    downloadFileName: "dtsfuture-media-kit.zip",
  },
  {
    key: "wordmark",
    href: "/brand-assets/dtsfuture-wordmark",
    downloadFileName: "dtsfuture-wordmark-dark.png",
  },
  {
    key: "mark",
    href: "/brand-assets/dtsfuture-mark",
    downloadFileName: "dtsfuture-mark-color.png",
  },
] as const;

export type PressDownloadAssetKey = (typeof pressDownloadAssets)[number]["key"];