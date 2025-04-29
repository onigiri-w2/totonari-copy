import type { EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  emblaApi: EmblaCarouselType | undefined
}
const Dots = ({ emblaApi }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="flex justify-center">
      {scrollSnaps.map((_, index) => (
        <div
          key={index}
          className={`mx-2 size-2 rounded-full ${index === selectedIndex ? 'bg-gray' : 'bg-lightest-gray'
            }`}
        />
      ))}
    </div>
  )
}

export default Dots
