import { Button, Center, SimpleGrid, Stack, Title } from "@mantine/core";

import { getAllBooks, getBookBySlug } from "~/lib/api";

export default function BookPage({ params }: { params: { slug: string } }) {
	const book = getBookBySlug(params.slug);

	return (
		<Center mt="lg">
			<Stack>
				<Title order={2}>{book.title}</Title>
				<Title order={3}>{book.author}</Title>
				<Title order={4}>Capítulos</Title>

				<SimpleGrid cols={4}>
					{book.chapters.map((book) => (
						<Button
							variant="default"
							size="compact-sm"
							style={{ textTransform: "capitalize" }}
						>
							{book}
						</Button>
					))}
				</SimpleGrid>
			</Stack>
		</Center>
	);
}

export async function generateStaticParams() {
	const books = getAllBooks();

	return books.map((book) => ({
		slug: book.slug,
	}));
}
