import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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
            }),
        ),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        status: z.enum(["Stable", "In-Progress", "Legacy"]),
        techStack: z.array(z.string()),
        repoUrl: z.url(),
        body: z.string(),
        star: z.object({
            situation: z.string(),
            task: z.string(),
            action: z.string(),
            result: z.string(),
        }),
        technicalFailures: z.array(
            z.object({
                title: z.string(),
                what: z.string(),
                why: z.string(),
                lesson: z.string(),
            }),
        ),
    }),
});

export const collections = { behavior, projects };
