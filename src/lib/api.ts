import fs from "node:fs";
import { join } from "node:path";

import matter from "gray-matter";

import { postSchema } from "~/schema/post";
import type { Post } from "~/types/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const parsedContent = postSchema.parse({ ...data, slug: realSlug, content });

	return { ...parsedContent, content, slug: realSlug };
}

export function getAllPosts(options?: {
	status?: "draft" | "published" | "all";
}): Post[] {
	const { status = "all" } = options || {};

	const slugs = getPostSlugs();

	const posts = slugs.map((slug) => getPostBySlug(slug));

	const filteredPosts =
		status === "all" ? posts : posts.filter((item) => item.status === status);

	// sort posts by date in descending order
	const sortedPosts = filteredPosts.sort((post1, post2) =>
		post1.date > post2.date ? -1 : 1,
	);

	return sortedPosts;
}
