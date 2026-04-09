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
          padding: "90px",
        }}
      >
        <img
          src={svgToDataUrl(pressAssetSvg.mark)}
          alt="DTSfuture mark"
          width={920}
          height={920}
        />
      </div>
    ),
    {
      width: 1200,
      height: 1200,
    },
  );

  const buffer = await image.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": 'attachment; filename="dtsfuture-mark-color.png"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}