/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";

import { pressAssetSvg, svgToDataUrl } from "@/src/brand/press-assets";

export const dynamic = "force-static";
export const runtime = "nodejs";

export async function GET() {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          padding: "80px",
        }}
      >
        <img
          src={svgToDataUrl(pressAssetSvg.wordmark)}
          alt="DTSfuture wordmark"
          width={2200}
          height={420}
        />
      </div>
    ),
    {
      width: 2400,
      height: 900,
    },
  );

  const buffer = await image.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": 'attachment; filename="dtsfuture-wordmark-dark.png"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}