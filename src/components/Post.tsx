import markdownToHtml from "~/lib/markdownToHtml";
import type { Post as PostType } from "~/types/post";

type PostProps = {
	post: PostType;
};

export async function Post({ post }: PostProps) {
	const content = await markdownToHtml(post.content);

	return (
		<div>
			<div>
				<header>
					<h1>{post.title}</h1>
					<h2>Autor: {post.author}</h2>

					<hr />

					{/* <div>
            {post.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div> */}
				</header>

				<div
					// biome-ignore lint/security/noDangerouslySetInnerHtml: We need it to render post
					dangerouslySetInnerHTML={{
						__html: content,
					}}
				/>
			</div>
		</div>
	);
}
