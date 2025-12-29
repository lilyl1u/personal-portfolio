'use client' //used to create a client component
 
import { useState } from 'react'
 
export default function LikeButton({ likes }: { likes: number }) {
  const[count, setCount] = useState(likes)
 
  //to return something
  return (
    <button onClick={() => setCount(count + 1)}>
      ❤️ {count} Likes
    </button>
  )
}