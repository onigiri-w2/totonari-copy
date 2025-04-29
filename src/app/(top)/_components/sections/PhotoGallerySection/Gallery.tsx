"use client";

import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { motion } from 'framer-motion'
import { data } from './data/data'
import { useState, useEffect } from 'react'
import Dots from './Dots'


export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 0,
    watchDrag: true,
  }, [WheelGesturesPlugin()])

  return (
    <div className='flex flex-col w-full gap-[30px] lg:gap-[48px]'>
      <div className="relative mx-auto 
        md:w-[calc(100%_+_20px)] md:translate-x-[-10px] 
        lg:w-[calc(100%_+_25px)] lg:translate-x-[-12.5px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((v, index) => {
              return (
                <motion.div
                  key={index}
                  // 33.4%を採用してる理由
                  // https://github.com/davidjerleke/embla-carousel/issues/149
                  className="flex-auto shrink-0 grow-0 px-[10px] md:w-[calc(33.4%)] lg:px-[12.5px]"
                  transition={{ duration: 0.4 }}
                >
                  <PhotoColumn upperImg={v.upperImg.src} lowerImg={v.lowerImg.src} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <Dots emblaApi={emblaApi} />
      </div>
    </div>
  )
}



export const SpGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 0,
    watchDrag: true,
  })

  const [selectedSnap, setSelectedSnap] = useState(0)
  useEffect(() => {
    emblaApi?.on('select', () => {
      setSelectedSnap(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])


  return (
    <div className='flex flex-col gap-[30px]'>
      <div className="relative mx-auto w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {data.map((v, index) => {
              return (
                <motion.div
                  key={index}
                  className="w-[calc(100%_*_240_/_390)] flex-auto shrink-0 grow-0 px-[10px] opacity-50"
                  transition={{ duration: 0.4 }}
                  initial={{ opacity: index === selectedSnap ? 1 : 0.6 }}
                  animate={{
                    opacity: index === selectedSnap ? 1 : 0.6,
                  }}
                >
                  <PhotoColumn upperImg={v.upperImg.src} lowerImg={v.lowerImg.src} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <Dots emblaApi={emblaApi} />
      </div>
    </div>
  )

}


function PhotoColumn({ upperImg, lowerImg }: { upperImg: string; lowerImg: string; }) {
  return (
    <div className="flex flex-col w-full gap-[20px] lg:gap-[25px]">
      <div className='w-full aspect-[1/1]'>
        <img src={upperImg} alt="image" className="size-full" loading='lazy' />
      </div>
      <div className='w-full aspect-[1/1]'>
        <img src={lowerImg} alt="image" className="size-full" loading='lazy' />
      </div>
    </div>
  )
}


