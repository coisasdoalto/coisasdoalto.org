import markdownToHtml from '~/lib/markdownToHtml';
import { Post } from '~/types/post';

type PostProps = {
  post: Post
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
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        >
        </div>
      </div>
    </div>
  );
}
