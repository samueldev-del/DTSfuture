export const pressAssetSvg = {
  wordmark: `<svg viewBox="0 0 210 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="8" height="32" rx="3" fill="#1A1715"/><path d="M12 6C12 6 36 6 36 20C36 34 12 34 12 34" stroke="#C0392B" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="33" cy="20" r="3" fill="#234B2C"/><text x="50" y="28.5" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="800" font-size="24" letter-spacing="-0.04em" fill="#1A1715">DTS</text><text x="99" y="28.5" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="500" font-size="24" letter-spacing="-0.04em" fill="#C0392B">future.</text></svg>`,
  mark: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="18" fill="#F8F6F0"/><rect x="2" y="2" width="60" height="60" rx="16" stroke="#1A1715" stroke-width="4"/><rect x="14" y="14" width="10" height="36" rx="4" fill="#1A1715"/><path d="M27 16C27 16 50 16 50 32C50 48 27 48 27 48" stroke="#C0392B" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="47" cy="32" r="4.5" fill="#234B2C"/></svg>`,
} as const;

export function svgToDataUrl(svg: string) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}