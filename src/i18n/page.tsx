import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { resolveLocalePreference, localeCookieName } from "@/src/i18n/routing";

export default async function RootPage() {
  const cookieStore = await cookies();
  const headersList = await headers();

  // On récupère le cookie et la langue du navigateur
  const cookieLocale = cookieStore.get(localeCookieName)?.value;
  const acceptLanguage = headersList.get("accept-language");

  // On utilise TA fonction pour déterminer si on le renvoie vers "de" ou "en"
  const locale = resolveLocalePreference({
    cookieLocale,
    acceptLanguage,
  });

  // Redirection immédiate vers le bon dossier
  redirect(`/${locale}`);
}