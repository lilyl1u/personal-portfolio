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
    
    <h1>Work Experience</h1>
    <h3>Jan 2026 - Present</h3>
    <h4>Rocket: Software Engineer</h4>
    <h3>May 2025 - Aug 2025</h3>
    <h4>Faire: Software Engineer</h4>
    </div>

  )
}