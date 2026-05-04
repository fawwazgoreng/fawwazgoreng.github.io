import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const behavior = defineCollection({
    type: "data",
    schema: z.array(
        z.object({
            type: z.string(),
            title1: z.string(),
            title2: z.string().optional(),
            description: z.string(),
            reason: z.string(),
        }),
    ),
});

const projects = defineCollection({
    type: "data",
    schema: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
            status: z.enum(["Stable", "In-Progress", "Legacy"]),
            techStack: z.array(z.string()),
        }),
    ),
});

export const collections = { behavior, projects };
