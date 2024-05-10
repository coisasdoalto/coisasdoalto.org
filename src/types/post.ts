import type { z } from "zod";

import type { postSchema } from "~/schema/post";

export type Post = z.infer<typeof postSchema> & {
	content: string;
	slug: string;
	status: "draft" | "published";
};
