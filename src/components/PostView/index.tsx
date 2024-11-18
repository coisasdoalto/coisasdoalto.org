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

import { Article } from "../Article";
import { ReviewAlert } from "../ReviewAlert";
import classes from "./styles.module.css";

type PostProps = {
	post: PostType;
};

export async function PostView({ post }: PostProps) {
	const content = await markdownToHtml(post.content);

	return (
		<Container pt="md">
			<ReviewAlert link={post.translatedFrom} />

			<Breadcrumbs component="nav" className={classes.breadcrumb} mb="md">
				<Anchor href="/">Início</Anchor>

				<Anchor underline="never">{post.title}</Anchor>
			</Breadcrumbs>

			<Box component="header">
				<Title order={1}>{post.title}</Title>
				<Text my={2}>Autor: {post.author}</Text>

				<Divider my="md" />

				{/* <div>
            {post.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div> */}
			</Box>

			<Article>{content}</Article>
		</Container>
	);
}
