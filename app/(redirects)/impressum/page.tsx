import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  getLocalizedPath,
  localeCookieName,
  resolveLocalePreference,
} from "@/src/i18n/routing";

export default async function ImpressumPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const locale = resolveLocalePreference({
    cookieLocale: cookieStore.get(localeCookieName)?.value,
    acceptLanguage: headerStore.get("accept-language"),
  });

  redirect(getLocalizedPath(locale, "impressum"));
}