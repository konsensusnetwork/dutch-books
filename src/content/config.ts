import { z, reference, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date_published: z.date(),
    date_updated: z.date(),
    tags: z.array(z.string()),
    author: z.string().optional(),
    isDraft: z.boolean().optional(),
  }),
});

const books = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    subtitle: z.string().optional(),
  }),
});

const chapters = defineCollection({ 
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'articles': articles,
  'chapters': chapters,
  'books': books,
};