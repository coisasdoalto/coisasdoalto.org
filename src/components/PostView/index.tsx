import {
	Anchor,
	Box,
	Breadcrumbs,
	Container,
	Divider,
	Text,
	Title,
} from "@mantine/core";
import markdownToHtml from "~/lib/markdownToHtml";
import type { Post as PostType } from "~/types/post";

import classes from "./styles.module.css";

type PostProps = {
	post: PostType;
};

export async function PostView({ post }: PostProps) {
	const content = await markdownToHtml(post.content);

	return (
		<Container pt="md">
			<Breadcrumbs component="nav" className={classes.breadcrumb}>
				<Anchor href="/">Início</Anchor>

				<Anchor underline="never">{post.title}</Anchor>
			</Breadcrumbs>

			<Box component="header" mt="md">
				<Title order={1}>{post.title}</Title>
				<Text my={2}>Autor: {post.author}</Text>
				{post.translatedFrom && (
					<Text
						my={2}
						style={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}
					>
						Traduzido de:{" "}
						<Anchor
							href={post.translatedFrom}
							target="_blank"
							rel="noopener noreferrer"
						>
							{post.translatedFrom}
						</Anchor>
					</Text>
				)}

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
				className={classes.article}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: We need it to render post
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
		</Container>
	);
}
