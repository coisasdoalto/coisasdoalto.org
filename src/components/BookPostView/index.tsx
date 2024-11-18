import { Box, Container, Divider, Title } from "@mantine/core";
import markdownToHtml from "~/lib/markdownToHtml";
import type { Post as PostType } from "~/types/post";

import { Article } from "../Article";
import { ReviewAlert } from "../ReviewAlert";

type BookPostView = {
	post: PostType;
};

export async function BookPostView({ post }: BookPostView) {
	const content = await markdownToHtml(post.content);

	return (
		<Container pt="md">
			<ReviewAlert link={post.translatedFrom} />

			<Box id="book-post-view-header" component="header">
				<Title order={1}>{post.title}</Title>
				<Divider my="md" />
			</Box>

			<Article>{content}</Article>
		</Container>
	);
}
