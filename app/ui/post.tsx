export function Post({ post }: { post: { id: string; title: string } }) {
  return <li>{post.title}</li>
}
