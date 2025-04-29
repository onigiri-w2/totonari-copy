"use client"

import ExpandIcon from './ExpandIcon'
import QuestionImg from './question.svg'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import { data } from './data'
import styles from './styles.module.css'

const DIVIDE_INDEX = 6
type FaqDataType = {
  q: string
  a: string
}

export default function Faq() {
  return (
    <div className="border-primary">
      <Accordion transition transitionTimeout={1000}>
        <div className="lg:hidden">
          {data.map((faq, index) => (
            <Item faq={faq} key={faq.q + 'spmd'} bottomBorder={index === data.length - 1} />
          ))}
        </div>
        <div className="hidden lg:flex lg:space-x-[60px]">
          <div className="flex-1">
            {data.slice(0, DIVIDE_INDEX).map((faq, index) => (
              <Item faq={faq} key={faq.q} bottomBorder={index === DIVIDE_INDEX - 1} />
            ))}
          </div>
          <div className="flex-1">
            {data.slice(DIVIDE_INDEX).map((faq, index) => (
              <Item faq={faq} key={faq.q} bottomBorder={index === data.length - (DIVIDE_INDEX + 1)} />
            ))}
          </div>
        </div>
      </Accordion>
    </div>
  )
}

type ItemProps = {
  faq: FaqDataType
  bottomBorder?: boolean
}
const Item = ({ faq, bottomBorder = false }: ItemProps) => {
  const splitedFaq = faq.a.split('\\n')
  return (
    <AccordionItem
      header={() => {
        return (
          <div className="flex items-center">
            <QuestionImg className="size-[32px]" />
            <p className="ml-[16px] mr-[28px] flex-1 text-left text-[13px] font-medium leading-[22px] tracking-40 md:text-[15px] md:leading-[24px] lg:text-[16px]">
              {faq.q}
            </p>
            <div className="ml-auto">
              <ExpandIcon />
            </div>
          </div>
        )
      }}
      className={`border-t-1 px-[8px] ${bottomBorder && 'border-b-1'}`}
      buttonProps={{
        className: ({ isEnter }) =>
          `py-[24px] w-full cursor-pointer ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{
        className: `${styles.itemContent} ml-[48px] mr-[48px]`,
      }}
    >
      <p className="pb-[24px] text-[11px] leading-[20px] tracking-40 md:text-[12px] md:leading-[22px] lg:text-[13px]">
        {splitedFaq.map((text, index) => (
          <span key={text + index}>
            {text}
            {index !== splitedFaq.length - 1 && <br />}
          </span>
        ))}
      </p>
    </AccordionItem>
  )
}

