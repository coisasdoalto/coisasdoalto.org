import { Anchor, Breadcrumbs } from "@mantine/core";
import markdownToHtml from "~/lib/markdownToHtml";
import type { Post as PostType } from "~/types/post";

import classes from "./styles.module.css";

type PostProps = {
	post: PostType;
};

export async function Post({ post }: PostProps) {
	const content = await markdownToHtml(post.content);

	return (
		<div>
			<div>
				<Breadcrumbs component="nav" className={classes.breadcrumb}>
					<Anchor href="/">Início</Anchor>

					<Anchor underline="never">{post.title}</Anchor>
				</Breadcrumbs>

				<header>
					<h1>{post.title}</h1>
					<h2>Autor: {post.author}</h2>

					<hr />

					{/* <div>
            {post.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div> */}
				</header>

				<article
					// biome-ignore lint/security/noDangerouslySetInnerHtml: We need it to render post
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>
			</div>
		</div>
	);
}
