import { Alert, Anchor, Box, Container, Divider, Title } from "@mantine/core";
import markdownToHtml from "~/lib/markdownToHtml";
import type { Post as PostType } from "~/types/post";

import { IconInfoCircle } from "@tabler/icons-react";
import { Article } from "../Article";

type BookPostView = {
	post: PostType;
};

export async function BookPostView({ post }: BookPostView) {
	const content = await markdownToHtml(post.content);

	return (
		<Container pt="md">
			<Alert
				mb={20}
				variant="light"
				color="gray"
				title="Tradução"
				icon={<IconInfoCircle />}
			>
				Este texto foi traduzido com ferramentas de IA, e ainda não foi revisado
				por um humano. Pode conter erros graves. Confira sempre o link do texto
				original:{" "}
				<Anchor size="sm" href={post.translatedFrom} target="_blank">
					{post.translatedFrom}
				</Anchor>
			</Alert>

			<Box id="book-post-view-header" component="header">
				<Title order={1}>{post.title}</Title>
				<Divider my="md" />
			</Box>

			<Article>{content}</Article>
		</Container>
	);
}
