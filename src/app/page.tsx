import { Center, Divider, Stack, Title } from "@mantine/core";
import { Hero } from "~/components/Hero";
import { LastArticlesItem } from "~/components/LastArticlesItem/LastArticlesItem";

import { getAllPosts } from "~/lib/api";

export default function HomePage() {
	const allPosts = getAllPosts({ status: "published" });

	// const tags = Array.from(
	// 	new Set(
	// 		allPosts
	// 			.map((item) => item.tags)
	// 			.reduce((tags, item) => tags.concat(item), []),
	// 	),
	// );

	return (
		<>
			<Hero />
			<Center mt="lg">
				<Stack>
					<Title order={2}>Últimos conteúdos adicionados</Title>

					<Stack gap={0}>
						{allPosts.map((post) => (
							<>
								<LastArticlesItem
									key={post.slug}
									href={`/posts/${post.slug}`}
									itemName={post.title}
									author={post.author}
								/>
								<Divider my="sm" />
							</>
						))}
					</Stack>
				</Stack>
			</Center>
		</>
	);
}
