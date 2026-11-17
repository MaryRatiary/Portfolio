import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seo = {
  seoTitle: z.string().min(25).max(65),
  seoDescription: z.string().min(110).max(165),
};

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      kind: z.enum(['web', 'ia', 'archive']),
      featured: z.number().nullable().default(null),
      order: z.number(),
      year: z.string(),
      client: z.string(),
      role: z.string().optional(),
      stack: z.array(z.string()).min(1),
      url: z.string().url().nullable(),
      cover: image(),
      coverAlt: z.string().min(10),
      gallery: z
        .array(z.object({ src: image(), alt: z.string().min(10), caption: z.string().min(5), wide: z.boolean().optional() }))
        .min(1),
      context: z.string(),
      built: z.string(),
      result: z.string(),
      ...seo,
    }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    short: z.string(),
    summary: z.string(),
    order: z.number(),
    deliverables: z.array(z.string()).min(3),
    stack: z.array(z.string()),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(4),
    related: z.array(z.string()),
    ...seo,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().min(25).max(65),
      description: z.string().min(110).max(165),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      translation: z.string().optional(),
    }),
});

export const collections = { projets, services, blog };
