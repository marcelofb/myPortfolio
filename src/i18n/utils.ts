import { es } from "./es";
import { en } from "./en";

/*
  useTranslations recibe el idioma actual ("es" o "en")
  y devuelve el objeto de traducciones correspondiente.
  
  Uso en un componente .astro:
    const t = useTranslations(lang);
    t.nav.about  → "Sobre mí" o "About" según el idioma
*/
export function useTranslations(lang: "es" | "en") {
  return lang === "en" ? en : es;
}

/*
  getLangFromUrl extrae el idioma de la URL actual.
  / o /cualquier-cosa → "es"
  /en/ o /en/cualquier-cosa → "en"
*/
export function getLangFromUrl(url: URL): "es" | "en" {
  const [, first] = url.pathname.split("/");
  if (first === "en") return "en";
  return "es";
}

/*
  getAlternateUrl devuelve la URL equivalente en el otro idioma.
  Útil para el botón de cambio de idioma.
  /about → /en/about
  /en/about → /about
*/
export function getAlternateUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === "es") {
    return "/en" + url.pathname;
  }
  return url.pathname.replace(/^\/en/, "") || "/";
}
