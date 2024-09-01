"use client";

import {
	Anchor,
	Button,
	Center,
	Container,
	Drawer,
	Grid,
	GridCol,
	Stack,
	Title,
	useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PostView } from "~/components/PostView";

import type { Book } from "~/types/book";
import type { Post } from "~/types/post";

export function BooksView({ book, post }: { book: Book; post: Post }) {
	const [opened, { open, close }] = useDisclosure(false);

	const { colorScheme } = useMantineColorScheme();

	const isDarkMode = colorScheme === "dark";

	const { chapter: currentChapter } = useParams<{ chapter: string }>();

	const ChaptersSection = () => (
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
			<Drawer
				opened={opened}
				onClose={close}
				position="bottom"
				overlayProps={{ blur: 4 }}
				offset={16}
				radius="md"
				title="Capítulos"
				portalProps={{
					target: "#drawer",
				}}
			>
				<ChaptersSection />
			</Drawer>

			<Button onClick={() => open()} variant="filled" color="blue">
				Ver capítulos
			</Button>

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
							<ChaptersSection />
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
