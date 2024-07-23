"use client";

import { Button, Center, Grid, GridCol, Stack, Title } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { PostView } from "~/components/PostView";

import type { Book } from "~/types/book";
import type { Post } from "~/types/post";

export function BooksView({ book, post }: { book: Book; post: Post }) {
	const router = useRouter();

	const queryParams = useSearchParams();

	const currentChapter = queryParams.get("chapter");

	const updateChapterOnQueryString = (selectedChapter: string) => {
		const params = new URLSearchParams(window.location.search);

		params.set("chapter", selectedChapter);

		router.replace(`${window.location.pathname}?${params.toString()}`);
	};

	useEffect(() => {
		if (!currentChapter) {
			updateChapterOnQueryString(book.chapters[0]);
		}
	}, [book.chapters[0], currentChapter, updateChapterOnQueryString]);

	return (
		<Center mt="lg">
			<Grid>
				<GridCol span={3}>
					<Stack>
						<Title order={2}>{book.title}</Title>
						<Title order={3}>{book.author}</Title>
						<Title order={4}>Capítulos</Title>

						<Stack gap="xs">
							{book.chapters.map((chapter) => (
								<Button
									key={chapter}
									size="compact-sm"
									variant={chapter === currentChapter ? "filled" : "outline"}
									style={{
										textTransform: "capitalize",
									}}
									onClick={() => updateChapterOnQueryString(chapter)}
								>
									{chapter.replace(/-/g, " ")}
								</Button>
							))}
						</Stack>
					</Stack>
				</GridCol>

				<GridCol span={9}>
					<PostView post={post} />
				</GridCol>
			</Grid>
		</Center>
	);
}
