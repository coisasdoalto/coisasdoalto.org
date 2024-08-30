import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { bookSchema } from "~/schema/book";
import { postSchema } from "~/schema/post";
import type { Post } from "~/types/post";

type Status = "draft" | "published" | "all";

type Chapter = {
	slug: string;
	title: string;
};

const sortAlphaNumerically = (a: Chapter, b: Chapter) => {
	const isPreface = a.slug === "preface";

	if (isPreface) {
		return -1;
	}

	return a.slug.localeCompare(b.slug, undefined, {
		numeric: true,
	});
};

const postsDirectory = path.join(process.cwd(), "_posts");
const booksDirectory = path.join(process.cwd(), "_books");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = path.join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const parsedContent = postSchema.parse({ ...data, slug: realSlug, content });

	return { ...parsedContent, content, slug: realSlug };
}

export function getAllPosts(options?: {
	status?: Status;
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

export function getAllBooks(options?: {
	status?: Status;
}) {
	const { status = "all" } = options || {};

	const books = fs.readdirSync(booksDirectory);

	const allBooks = books.map((book) => {
		const fullPath = path.join(booksDirectory, book, "index.md");
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		const chapters = fs
			.readdirSync(path.join(booksDirectory, book))
			.filter((item) => item !== "index.md")
			.map((item) => {
				const fullPath = path.join(booksDirectory, book, item);
				const fileContents = fs.readFileSync(fullPath, "utf8");
				const { data } = matter(fileContents);
				return {
					slug: item.replace(".md", ""),
					title: data.title,
				};
			})
			.sort(sortAlphaNumerically);

		const realSlug = book.replace(/\.md$/, "");

		const parsedContent = bookSchema.parse({
			...data,
			chapters,
			slug: realSlug,
		});

		return parsedContent;
	});

	if (status === "all") {
		return allBooks;
	}

	return allBooks.filter((item) => item.status === status);
}

export function getBookBySlug(slug: string) {
	const bookPath = path.join(booksDirectory, slug);
	const indexFile = path.join(bookPath, "index.md");

	const fileContents = fs.readFileSync(indexFile, "utf8");
	const { data } = matter(fileContents);

	const chapters = fs
		.readdirSync(bookPath)
		.filter((item) => item !== "index.md")
		.map((item) => {
			const fullPath = path.join(bookPath, item);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data } = matter(fileContents);
			return {
				slug: item.replace(".md", ""),
				title: data.title,
			};
		})
		.sort(sortAlphaNumerically);

	const realSlug = slug.replace(/\.md$/, "");

	const parsedContent = bookSchema.parse({ ...data, chapters, slug: realSlug });

	return parsedContent;
}

export function getBookChapter(slug: string, chapter: string): Post {
	const bookPath = path.join(booksDirectory, slug);
	const chapterFile = path.join(bookPath, `${chapter}.md`);

	const fileContents = fs.readFileSync(chapterFile, "utf8");
	const { data, content } = matter(fileContents);

	const parsedContent = postSchema.parse({ ...data, slug: chapter, content });

	return { ...parsedContent, content, slug: chapter };
}
