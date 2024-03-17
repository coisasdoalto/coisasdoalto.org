import { $, chalk } from "zx";

import fs from "node:fs/promises";
import path from "node:path";

import dayjs from "dayjs";
import matter from "gray-matter";
import slugify from "slugify";

const markdownPostsDirPath = path.resolve("_posts");
const docxPostsDirPath = path.resolve("data");

(async () => {
	const docxPosts = await fs.readdir(docxPostsDirPath);

	for (const post of docxPosts) {
		console.log("Converting file: ", chalk.blue(post));

		const postContent = (
			await $`pandoc ${path.resolve(docxPostsDirPath, post)} -t markdown`
				.nothrow()
				.quiet()
		).stdout.trim();

		// TODO: enchance data with AI
		const postMetadata = {
			title: post.replace(".docx", ""),
			date: dayjs(new Date()).format("YYYY-MM-DD"),
			excerpt: "",
			author: "",
			tags: [],
		};

		const postWithMetadata = matter.stringify(postContent, postMetadata);

		const postName = slugify(post.replace(".docx", ".md"), {
			lower: true,
		});

		await fs.writeFile(
			path.resolve(markdownPostsDirPath, postName),
			Buffer.from(postWithMetadata),
		);
	}
})();
