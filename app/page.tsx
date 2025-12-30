
//server component 
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/app/lib/data'
import { posts } from '@/app/lib/posts'
import { photosAsia } from '@/app/lib/photos'
import {photosNorthAmerica} from '@/app/lib/photos'
import {songs } from '@/app/lib/songs'
import Carousel from '@/app/carousel'
import {cookies, headers} from 'next/headers'
import {Suspense} from 'react'
import Link from 'next/link'


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(id)
 
  return (
    <div>
      <h1> Made by </h1>
      <p> <strong>Lily Liu </strong></p>
        <Carousel>
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </Carousel>
      <h1> Technical skills: Languages</h1>
        <Carousel>
        <div className="embla__slide">Python</div>
        <div className="embla__slide">C++</div>
        <div className="embla__slide">C#</div>
        <div className="embla__slide">C</div>
        <div className="embla__slide">Java</div>
        </Carousel>
        <h1> Technical skills: Tools </h1>
        <Carousel>
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
        </Carousel>
      <h1> Technical skills: Frameworks & Libraries </h1>
        <Carousel>
        <div className="embla__slide">React</div>
        <div className="embla__slide">Angular</div>
        <div className="embla__slide">Slide 3</div>
        </Carousel>

      <h1> Recently played songs</h1>
        <Carousel>
        {songs.map(song => (
          <div key={song.id} className="embla__slide">
            <img src={song.url} 
            alt={song.title}
            style={{ width: "150px", height: "auto" }} />
          </div>
        ))}
      </Carousel>

        <h1> Travel Photography: North America</h1>
        <Carousel>
          {photosNorthAmerica.map(photo => (
            <div key={photo.id} className="embla__slide">
              <img 
                src={photo.url}
                alt={photo.title}
                style={{ width: "200px", height: "auto" }} />
            </div>
          ))}
        </Carousel>

        <h1> Travel Photography: Asia</h1>
                <Carousel>
          {photosAsia.map(photo => (
            <div key={photo.id} className="embla__slide">
              <img src={photo.url} alt={photo.title} />
            </div>
          ))}
        </Carousel>
        


      <LikeButton likes={post.likes} />
    </div>
  )
}


 