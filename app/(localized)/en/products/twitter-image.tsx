import { createShareImage, getShareImageAlt, shareImageContentType, shareImageSize } from "@/src/seo/create-share-image";

export const alt = getShareImageAlt("en", "products");
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function Image() {
  return createShareImage("en", "products");
}