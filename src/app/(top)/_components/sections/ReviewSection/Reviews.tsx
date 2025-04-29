"use client"

import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import type { ReviewDataType } from './types'
import { data } from './data/data'
import clsx from 'clsx'

export default function Reviews() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    startIndex: 1,
    containScroll: false,
    watchDrag: true,
    breakpoints: {
      '(min-width: 1372px)': {
        watchDrag: false,
      },
    },
  })

  const classNames = {
    card: clsx(
      "shrink-0 grow-0 overflow-hidden",
      "rounded-[30px] border-1 border-primary bg-white pb-[28px]",
      "w-[263px]",
      "md:w-[316px]",
      "lg:translate-x-[-176px]",
    )
  }

  return (
    <div className="w-full overflow-hidden pb-[4px]" ref={emblaRef}>
      <div className="mx-auto flex max-w-[1372px] lg:justify-between">
        {data.map((review: ReviewDataType, index: number) => (
          <div key={index} className={classNames.card + ` ${index !== 0 && 'ml-[20px] md:ml-[36px]'}`} >
            <div className='w-full aspect-silver'>
              <img src={review.image} alt="Review Image" className='w-full h-full object-cover' loading="lazy" />
            </div>
            <div className="mt-[22px] text-center text-[9px] leading-[16px] tracking-40 md:text-[10px]">
              <p className="whitespace-pre-wrap">{review.person.row1st}</p>
              <p className="whitespace-pre-wrap">{review.person.row2nd}</p>
            </div>
            <div className="mt-[12px] space-y-[9px] px-[24px] tracking-40 md:px-[28px]">
              <p className="text-[10px] leading-[18px] md:text-[12px] md:leading-[22px]">
                {renderBoldText(review.description, review.boldTexts)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const renderBoldText = (text: string, phrases: string[]) => {
  let result: (React.ReactElement | string)[] = [text];

  phrases.forEach(phrase => {
    result = result.flatMap(segment => {
      if (typeof segment === 'string') {
        const parts = segment.split(phrase);
        return parts.reduce<(string | React.ReactElement)[]>((acc, part, i) => {
          if (i === 0) return [part];
          return [...acc, <b key={`${phrase}-${i}`}>{phrase}</b>, part];
        }, []);
      }
      return [segment];
    });
  });

  return result;
};
