import React from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx';
import { StaticImageData } from 'next/image';

import { data } from "./data";

export default function Scenes() {
  const classNames = {
    container: clsx(
      "mt-[40px] space-y-[17px]",
      "md:mt-[36px] md:space-y-0 md:flex md:w-full ",
      "lg:mx-auto"
    )
  }
  return (
    <div className={classNames.container}>
      {data.map((scene, index) => (
        <div key={index} className="md:flex-1">
          <Scene
            label={scene.label}
            texts={scene.texts}
            svg={scene.svg}
          />
        </div>
      ))}
    </div>
  )
}


type TextType = {
  title: string
  description: string
}
type DeviceType = 'mobile' | 'tablet' | 'desktop'
type SceneProps = {
  label: string,
  texts: {
    mobile: TextType,
    tablet: TextType,
    desktop: TextType
  },
  svg: StaticImageData;
}
const Scene = ({ label, texts, svg: svgPath }: SceneProps) => {
  const deviceTypes: DeviceType[] = ['mobile', 'tablet', 'desktop'];
  const deviceStyles = {
    title: {
      mobile: "text-[16px] leading-[22px] tracking-40 md:hidden",
      tablet: "text-[16px] leading-[24px] tracking-40 hidden md:block lg:hidden",
      desktop: "text-[17px] leading-[25px] tracking-40 hidden lg:block"
    },
    description: {
      mobile: "text-[12px] leading-[22px] md:hidden",
      tablet: "text-[12px] leading-[22px] hidden md:block lg:hidden",
      desktop: "text-[13px] leading-[24px] hidden lg:block"
    }
  }
  return (
    <div className="flex flex-col items-center text-center">
      <img src={svgPath.src} alt={label} className="h-[180px] w-auto lg:h-[260px]" loading='lazy' />
      <div className="md:h-[48px] lg:flex lg:h-[50px] lg:flex-col lg:justify-center">
        <div>
          {deviceTypes.map(device => (
            <ParagraphWithBreaks
              key={`title-${device}`}
              className={deviceStyles.title[device]}
              text={texts[device].title}
            />
          ))}
        </div>
      </div>
      <div className="mt-[13px]">
        {deviceTypes.map(device => (
          <ParagraphWithBreaks
            key={`description-${device}`}
            className={deviceStyles.description[device]}
            text={texts[device].description}
          />
        ))}
      </div>
    </div>
  )
}



type Props = ComponentPropsWithoutRef<'p'> & {
  text: string
}
const ParagraphWithBreaks: React.FC<Props> = ({ text, ...rest }) => {
  const splitText = text.split('\\n')
  return (
    <p {...rest}>
      {splitText.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== splitText.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  )
}



