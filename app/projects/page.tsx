// imports
import { getPosts } from '@/app/lib/posts'
import { Post } from '@/app/ui/post'
 

export default async function Page() {
  const posts = await getPosts()
  return (
    <div>
            <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
    
    <h1>Projects</h1>
    <h3>lalaal</h3>
    <h4>lalaal</h4>
    <h3>lalaal</h3>
    <h4>lalaal</h4>
    </div>

  )
}