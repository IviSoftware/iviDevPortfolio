import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    primaryTech: z.string().optional(),
    videoUrl: z.string(),
    mockupImage: z.string().optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    status: z.enum(['draft', 'published']).default('published'),
    publishDate: z.date(),
    challenges: z.array(z.string()),
    results: z.array(z.string()),
    process: z.object({
      research: z.string(),
      design: z.string(),
      development: z.string(),
      testing: z.string(),
    }),
    gallery: z.array(z.object({
      image: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    metrics: z.object({
      performance: z.string().optional(),
      users: z.string().optional(),
      conversion: z.string().optional(),
      other: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};