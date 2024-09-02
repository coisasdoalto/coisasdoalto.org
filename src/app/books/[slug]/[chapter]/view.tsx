"use client";

import {
	Anchor,
	Button,
	Container,
	Flex,
	Grid,
	GridCol,
	Stack,
	Title,
	useMantineColorScheme,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { BookPostView } from "~/components/BookPostView";
import type { Book } from "~/types/book";
import type { Post } from "~/types/post";

import { ChaptersDrawer } from "./ChaptersDrawer";

export function BooksView({ book, post }: { book: Book; post: Post }) {
	const { colorScheme } = useMantineColorScheme();

	const isDarkMode = colorScheme === "dark";

	const { chapter: currentChapter } = useParams<{ chapter: string }>();

	const currentChapterIndex = book.chapters.findIndex(
		(chapter) => chapter.slug === currentChapter,
	);
	const prevChapter = book.chapters[currentChapterIndex - 1];
	const nextChapter = book.chapters[currentChapterIndex + 1];

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
					>
						<BookPostView post={post} />

						<Flex gap="md" mt="-2rem" mb="4rem">
							{prevChapter && (
								<Button
									component={Link}
									href={`/books/${book.slug}/${prevChapter.slug}`}
									variant="outline"
									leftSection={<IconChevronLeft size={14} />}
									fullWidth
									title={prevChapter.title}
								>
									Anterior
								</Button>
							)}
							{nextChapter && (
								<Button
									component={Link}
									href={`/books/${book.slug}/${nextChapter.slug}`}
									variant="outline"
									rightSection={<IconChevronRight size={14} />}
									fullWidth
									title={nextChapter.title}
								>
									Próximo
								</Button>
							)}
						</Flex>
					</GridCol>
				</Grid>
			</Container>
		</>
	);
}
