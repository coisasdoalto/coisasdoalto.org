import { z } from "zod";

export const postSchema = z.object({
	title: z.string(),
	author: z.string(),
	date: z.coerce.date(),
	excerpt: z.string().optional(),
	tags: z.array(z.string()),
	status: z.literal("draft").or(z.literal("published")),
});
