import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const behavior = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/behavior" }),
    schema: z.object({
        items: z.array(
            z.object({
                type: z.string(),
                title1: z.string(),
                title2: z.string(),
                description: z.string(),
                reason: z.string(),
            })
        ),
    }),
});

export const collections = { behavior };