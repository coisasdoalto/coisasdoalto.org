import { z } from "zod";

export const postSchema = z.object({
	title: z.string(),
	author: z.string(),
	date: z.union([z.coerce.date(), z.string()]),
	excerpt: z.string().optional(),
	tags: z.array(z.string()),
	status: z.union([z.literal("draft"), z.literal("published")]),
});
