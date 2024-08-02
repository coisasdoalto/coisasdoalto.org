import { Center, Stack, Title } from "@mantine/core";
import { LastArticlesItem } from "~/components/LastArticlesItem/LastArticlesItem";

import { getAllBooks } from "~/lib/api";

export default function BooksPage() {
	const allBooks = getAllBooks();

	return (
		<>
			<Center mt="lg">
				<Stack>
					<Title order={2}>Livros</Title>

					<Stack gap={0} flex={1}>
						{allBooks.map((post) => (
							<LastArticlesItem
								key={post.slug}
								href={`/books/${post.slug}`}
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
