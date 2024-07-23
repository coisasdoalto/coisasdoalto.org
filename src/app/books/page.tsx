import { Container, Divider, Stack, Title } from "@mantine/core";
import { Hero } from "~/components/Hero";
import { LastArticlesItem } from "~/components/LastArticlesItem/LastArticlesItem";

import { getAllBooks } from "~/lib/api";

export default function BooksPage() {
	const allBooks = getAllBooks();

	return (
		<>
			<Hero />
			<Container mt="lg" size="sm">
				<Stack>
					<Title order={2}>Livros</Title>

					<Stack gap={0} flex={1}>
						{allBooks.map((book) => (
							<>
								<LastArticlesItem
									key={book.slug}
									href={`/books/${book.slug}`}
									itemName={book.title}
									author={book.author}
								/>
								<Divider my="md" />
							</>
						))}
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
