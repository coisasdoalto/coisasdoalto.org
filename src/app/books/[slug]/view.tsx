"use client";

import {
	Anchor,
	Button,
	Center,
	Container,
	Grid,
	GridCol,
	Stack,
	Title,
	useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import { useParams } from "next/navigation";
import ChaptersDrawer from "~/components/ChaptersDrawer";
import { PostView } from "~/components/PostView";

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
						variant={chapter.slug === currentChapter ? "light" : "outline"}
						color={isDarkMode && chapter.slug === currentChapter ? "blue" : ""}
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
			<ChaptersDrawer content={chaptersSection} />

			<Center p="lg" bg={colorScheme === "dark" ? "gray.9" : "gray.3"}>
				<Title ta="center">{book.title}</Title>
			</Center>

			<Container size="lg">
				<Grid>
					<GridCol
						visibleFrom="md"
						span={{
							md: 3,
							sm: 0,
						}}
					>
						<Stack gap="md">
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
						<PostView post={post} hideBreadcrumb />
					</GridCol>
				</Grid>
			</Container>
		</>
	);
}
