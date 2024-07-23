import { $, chalk } from "zx";

import fs from "node:fs/promises";
import path from "node:path";

import dayjs from "dayjs";
import matter from "gray-matter";
import slugify from "slugify";
import yargs from "yargs/yargs";
import type { z } from "zod";

import type { postSchema } from "~/schema/post";

type Post = z.infer<typeof postSchema>;

const markdownPostsDirPath = path.resolve("_posts");
const docxPostsDirPath = path.resolve("data");

(async () => {
	const argv = await yargs(process.argv.slice(2))
		.options({
			status: {
				choices: ["draft", "published"] as Post["status"][],
				default: "published" as const,
			},
		})
		.parse();

	console.log("Converting files with status:", chalk.blue(argv.status));

	const docxPosts = await fs.readdir(docxPostsDirPath);

	for (const post of docxPosts) {
		console.log("Converting file: ", chalk.blue(post));

		const postPath = path.resolve(docxPostsDirPath, post);

		const postContent = (
			await $`pandoc ${postPath} -t markdown`.nothrow().quiet()
		).stdout.trim();

		let title = post.replace(".docx", "");
		const author = (() => {
			/**
			 * Example: Notes about Acts 1 - William Kelly
			 *                             ^ author
			 */
			const match = title.match(/(?<=\s-\s)[^-]+$/);

			if (!match) return "";

			return match[0];
		})();

		// Remove author from title
		if (author) title = title.replace(` - ${author}`, "");

		const postCreatedAt = await fs.stat(postPath).then((stat) => stat.ctime);

		// TODO: enchance data with AI
		const postMetadata: Post = {
			title,
			date: dayjs(new Date(postCreatedAt)).format("YYYY-MM-DD"),
			excerpt: "",
			author,
			tags: [],
			status: argv.status,
		};

		const postWithMetadata = matter.stringify(postContent, postMetadata);

		const postFileName = slugify(post.replace(".docx", ".md"), {
			lower: true,
		});

		await fs.writeFile(
			path.resolve(markdownPostsDirPath, postFileName),
			Buffer.from(postWithMetadata),
		);
	}
})();
