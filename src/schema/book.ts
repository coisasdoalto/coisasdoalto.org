import { z } from "zod";

export const bookSchema = z.object({
	title: z.string(),
	author: z.string(),
	date: z.union([z.coerce.date(), z.string()]),
	slug: z.string(),
	excerpt: z.string().optional(),
	tags: z.array(z.string()),
	status: z.union([z.literal("draft"), z.literal("published")]),
	chapters: z
		.array(z.string())
		.transform((chapters) =>
			chapters.map((chapter) => chapter.replace(/\.md$/, "")),
		),
});
