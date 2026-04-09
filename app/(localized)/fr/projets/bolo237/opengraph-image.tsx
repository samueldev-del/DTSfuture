import { createShareImage, getShareImageAlt, shareImageContentType, shareImageSize } from "@/src/seo/create-share-image";

export const alt = getShareImageAlt("fr", "bolo237");
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function Image() {
  return createShareImage("fr", "bolo237");
}