import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    labelBg: z.string(),
    order: z.number(),
    eyebrow: z.string().optional(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    readTime: z.string().optional(),
    updatedDate: z.string().optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    accentColor: z.string(),
    order: z.number(),
  }),
});

export const collections = { guides, courses };