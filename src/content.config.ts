import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    eyebrow: z.string(),
    author: z.string(),
    authorBio: z.string(),
    readTime: z.string(),
    updatedDate: z.string(),
    heroGradient: z.enum(["warm", "cool"]),
    image: z.string(),
    related: z.array(z.string()).optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    accentColor: z.string(),
    days: z.number().optional(),
    updatedDate: z.string(),
  }),
});

export const collections = { guides, courses };