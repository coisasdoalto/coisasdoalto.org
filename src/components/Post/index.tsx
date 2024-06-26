import { Anchor, Box, Breadcrumbs, Divider, Text, Title } from "@mantine/core";
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

				<Box component="header" mt="md">
					<Title order={1}>{post.title}</Title>
					<Text my={2}>Autor: {post.author}</Text>
					<Text
						my={2}
						style={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}
					>
						Traduzido de:{" "}
						<Anchor href={post.translatedFrom} target="_blank">
							{post.translatedFrom}
						</Anchor>
					</Text>

					<Divider my="md" />

					{/* <div>
            {post.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div> */}
				</Box>

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
