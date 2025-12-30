import { posts } from '@/app/lib/posts'

export default async function Page({
    params,
}:{
    params: Promise< {slug: string}>
}){
    const {slug} = await params
    const post = posts.find(p => p.slug === slug)
    if (!post){
        return <h1> post not found</h1>
    }
    return(
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}