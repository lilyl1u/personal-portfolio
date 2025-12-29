
//server component 
import LikeButton from '@/app/ui/like-button'
import { getPost } from '@/app/lib/data'
import Carousel from '@/app/carousel'
import {cookies, headers} from 'next/headers'
import {Suspense} from 'react'


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
        <div className="embla__slide">Tear: Red Hot Chili Peppers</div>
        <div className="embla__slide">Mardy Bum: Arctic Monkeys</div>
        <div className="embla__slide">Blur: The Marias</div>
        </Carousel>


      <LikeButton likes={post.likes} />
    </div>
  )
}


 