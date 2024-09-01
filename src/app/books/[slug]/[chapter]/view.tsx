"use client";

import {
	Anchor,
	Button,
	Container,
	Grid,
	GridCol,
	Stack,
	Title,
	useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChaptersDrawer } from "./ChaptersDrawer";

import { BookPostView } from "~/components/BookPostView";
import type { Book } from "~/types/book";
import type { Post } from "~/types/post";

export function BooksView({ book, post }: { book: Book; post: Post }) {
	const { colorScheme } = useMantineColorScheme();

	const isDarkMode = colorScheme === "dark";

	const { chapter: currentChapter } = useParams<{ chapter: string }>();

	const chaptersSection = (
		<Stack gap="xs">
			{book.chapters.map((chapter) => (
				<Anchor
					key={chapter.slug}
					component={Link}
					href={`/books/${book.slug}/${chapter.slug}`}
					underline="never"
					title={`Ver capítulo ${chapter.title}`}
				>
					<Button
						size="compact-sm"
						variant={chapter.slug === currentChapter ? "light" : "default"}
						color={chapter.slug === currentChapter ? "blue" : ""}
						fullWidth
					>
						{chapter.title}
					</Button>
				</Anchor>
			))}
		</Stack>
	);

	return (
		<>
			<Stack p="lg" bg={isDarkMode ? "gray.9" : "gray.3"} gap="xs">
				<Title ta="center">{book.title}</Title>
				<Title order={2} ta="center">
					{book.author}
				</Title>
			</Stack>

			<ChaptersDrawer>{chaptersSection}</ChaptersDrawer>

			<Container size="lg">
				<Grid>
					<GridCol
						visibleFrom="md"
						span={{
							md: 3,
							sm: 0,
						}}
					>
						<Stack gap="md" mt="md">
							<Title order={4}>Capítulos</Title>
							{chaptersSection}
						</Stack>
					</GridCol>

					<GridCol
						span={{
							sm: 12,
							md: 9,
						}}
						mb="xl"
					>
						<BookPostView post={post} />
					</GridCol>
				</Grid>
			</Container>
		</>
	);
}
