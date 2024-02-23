import { z, reference, defineCollection } from 'astro:content';

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
  'chapters': chapters,
  'books': books,
};