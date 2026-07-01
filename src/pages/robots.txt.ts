/*
  Endpoint de Astro para generar robots.txt dinámicamente.
  
  En Astro, cualquier archivo en src/pages/ que exporte una función GET
  se convierte en una ruta que devuelve la respuesta que vos definís.
  
  src/pages/robots.txt.ts → /robots.txt
  
  ¿Por qué dinámico y no un archivo estático en public/?
  Porque así la URL del sitemap se genera automáticamente desde
  el valor de "site" en astro.config.mjs — sin hardcodear la URL.
*/
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, "") ?? "";

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${siteUrl}/sitemap-index.xml`,
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
};
