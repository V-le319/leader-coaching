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
    whoFor: z.string().optional(),
    pullQuote: z.string().optional(),
    sections: z.array(z.object({
      heading: z.string(),
      body: z.string(),
    })).optional(),
    mistakes: z.array(z.string()).optional(), // for bullet-list sections like "Common mistakes"
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    accentColor: z.string(),
    order: z.number(),
    dek: z.string().optional(),
    price: z.number().optional(),
    priceInstallments: z.string().optional(),
    duration: z.string().optional(),
    format: z.string().optional(),
    studentCount: z.string().optional(),
    outcomes: z.array(z.string()).optional(),
    modules: z.array(z.object({
      title: z.string(),
      description: z.string(),
      length: z.string(),
    })).optional(),
    forYou: z.array(z.string()).optional(),
    notForYou: z.array(z.string()).optional(),
    testimonialQuote: z.string().optional(),
    testimonialAuthor: z.string().optional(),
    instructorName: z.string().optional(),
    instructorBio: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    guarantee: z.string().optional(),
  }),
});

export const collections = { guides, courses };