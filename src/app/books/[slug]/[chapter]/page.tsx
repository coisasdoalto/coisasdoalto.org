import { getAllBooks, getBookBySlug, getBookChapter } from "~/lib/api";
import { BooksView } from "./view";

type BooksPageParams = {
	params: { slug: string; chapter: string };
};

export default function BookPage({ params }: BooksPageParams) {
	const book = getBookBySlug(params.slug);

	const post = getBookChapter(params.slug, params.chapter);

	return <BooksView book={book} post={post} />;
}

export async function generateStaticParams() {
	type BooksStaticParams = {
		slug: string;
		chapter: string;
	};

	const books = getAllBooks();

	return books.reduce((_books, book) => {
		_books.push(
			...book.chapters.map((chapter) => ({
				slug: book.slug,
				chapter: chapter.slug,
			})),
		);

		return _books;
	}, [] as BooksStaticParams[]);
}
