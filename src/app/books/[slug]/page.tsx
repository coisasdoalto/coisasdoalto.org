import { getAllBooks, getBookBySlug, getBookChapter } from "~/lib/api";
import { BooksView } from "./view";

export default function BookPage({
	params,
	searchParams,
}: { params: { slug: string }; searchParams: { chapter: string } }) {
	const book = getBookBySlug(params.slug);

	const post = getBookChapter(
		params.slug,
		("chapter" in searchParams && searchParams.chapter) ||
			book.chapters[0].slug,
	);

	return <BooksView book={book} post={post} />;
}

export async function generateStaticParams() {
	const books = getAllBooks();

	return books.map((book) => ({
		slug: book.slug,
	}));
}
