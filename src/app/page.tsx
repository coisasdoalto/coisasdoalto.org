import { Center, Stack, Title } from "@mantine/core";
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
			<Title ta="center">Coisas do Alto</Title>
			<Center mt="lg">
				<Stack>
					{/* <Group grow w="100%">
						<ContentCard>Livros</ContentCard>
						<ContentCard>Artigos</ContentCard>
						<ContentCard>Séries</ContentCard>
					</Group>

					<Divider my="xl" />

					<Title order={2}>Temas / assuntos</Title>

					<Grid>
						{tags.map((tag) => {
							return (
								<GridCol span={4}>
									<ContentCard key={tag}>{tag}</ContentCard>
								</GridCol>
							);
						})}
					</Grid>
-					<Divider my="xl" />*/}

					<Title order={2}>Últimos conteúdos adicionados</Title>

					<Stack gap={0}>
						{allPosts.map((post) => (
							<LastArticlesItem
								key={post.slug}
								href={`/posts/${post.slug}`}
								itemName={post.title}
								author={post.author}
							/>
						))}
					</Stack>
				</Stack>
			</Center>
		</>
	);
}
