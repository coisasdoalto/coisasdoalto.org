import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { Post } from "~/components/Post";
import { getAllPosts, getPostBySlug } from "~/lib/api";

type Params = {
	params: {
		slug: string;
	};
};

export default async function PostView({ params }: Params) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return <Post post={post} />;
}

export function generateMetadata({ params }: Params): Metadata {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const title = `${post.title} | Coisas do Alto`;

	return {
		title,
		openGraph: {
			title,
			// images: [post.ogImage.url],
		},
	};
}

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
