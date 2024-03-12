import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  'articles': articleCollection,
};