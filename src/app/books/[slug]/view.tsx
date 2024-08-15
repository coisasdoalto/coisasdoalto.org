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
import { useParams, useRouter } from "next/navigation";
import { PostView } from "~/components/PostView";

import type { Book } from "~/types/book";
import type { Post } from "~/types/post";

export function BooksView({ book, post }: { book: Book; post: Post }) {
	const router = useRouter();

	const { colorScheme } = useMantineColorScheme();

	const { chapter: currentChapter } = useParams<{ chapter: string }>();

	return (
		<>
			<Center p="lg" bg={colorScheme === "dark" ? "gray.9" : "gray.3"}>
				<Title ta="center">{book.title}</Title>
			</Center>

			<Container size="lg">
				<Grid>
					<GridCol span={3}>
						<Stack mt="md">
							<Title order={4}>Capítulos</Title>

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
											variant={
												chapter.slug === currentChapter ? "filled" : "outline"
											}
											fullWidth
										>
											{chapter.title}
										</Button>
									</Anchor>
								))}
							</Stack>
						</Stack>
					</GridCol>

					<GridCol span={9}>
						<PostView post={post} />
					</GridCol>
				</Grid>
			</Container>
		</>
	);
}
