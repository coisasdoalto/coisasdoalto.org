import { Anchor, Center, Stack, Text, Title } from "@mantine/core";

import { getAllPosts } from "~/lib/api";

export default function HomePage() {
	const allPosts = getAllPosts();

	return (
		<>
			<Title ta="center" mt={100}>
				Coisas do Alto
			</Title>
			<Center mt="lg">
				<Stack>
					{allPosts.map((post) => (
						<Anchor key={post.slug} href={`/posts/${post.slug}`}>
							<Text>{post.title}</Text>
						</Anchor>
					))}
				</Stack>
			</Center>
		</>
	);
}
