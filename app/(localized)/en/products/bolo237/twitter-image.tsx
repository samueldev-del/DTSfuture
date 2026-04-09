import { createShareImage, getShareImageAlt, shareImageContentType, shareImageSize } from "@/src/seo/create-share-image";

export const alt = getShareImageAlt("en", "bolo237");
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function Image() {
  return createShareImage("en", "bolo237");
}