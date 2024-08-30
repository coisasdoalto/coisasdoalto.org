import { Container, Divider, Stack, Title } from "@mantine/core";
import { Fragment } from "react";
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
							<Fragment key={book.slug}>
								<LastArticlesItem
									href={`/books/${book.slug}/${book.chapters[0].slug}`}
									itemName={book.title}
									author={book.author}
								/>
								<Divider my="md" />
							</Fragment>
						))}
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
