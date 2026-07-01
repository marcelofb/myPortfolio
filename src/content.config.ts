/*
  Content Collections — Astro 6 (nuevo formato con loaders).

  Cambios respecto a Astro 5:
  - El archivo se llama "content.config.ts" y vive en src/ (no en src/content/)
  - Cada colección necesita un "loader" que le dice a Astro dónde están los archivos
  - glob() busca archivos por patrón de ruta — aquí busca todos los .md y .mdx
    dentro de src/content/blog/

  El schema con Zod sigue igual — define qué campos puede tener el frontmatter
  de cada post y qué tipos tienen que ser.
*/
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(["es", "en"]).default("es"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
