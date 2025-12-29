'use client'

import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'

function Carousel({
    children,
}:{
    children?: React.ReactNode
}) {
  const [emblaRef] = useEmblaCarousel()
  return <div ref={emblaRef} className="embla">
    <div className="embla__container">
      {children}
    </div>
  </div>
}
export default Carousel