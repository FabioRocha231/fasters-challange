import { useContext } from 'react'

import Svg, { SvgIcons } from '@/atoms/Svg'
import { CreateEventParams } from '@/context/event-context'
import { ModalContext } from '@/context/modal-context'

export const EventCard = ({
  title,
  date,
  startAt,
  endAt
}: CreateEventParams) => {
  const { setIsOpen, setBody } = useContext(ModalContext)
  return (
    <article
      className="mt-3 flex w-full cursor-pointer flex-col rounded-lg border border-slate-300 p-2 transition-all hover:scale-105"
      onClick={() => {
        setIsOpen(true)
        setBody(<h1>Alooooo</h1>)
      }}
    >
      <p className="text-sm">{title}</p>
      <p className="text-xs">{date}</p>
      <span className="mt-3 flex flex-row items-center gap-x-2">
        <Svg name={SvgIcons.Clock} width={24} height={24} alt="clock" />
        <p className="text-xs text-textHover">
          {startAt} - {endAt} {Number(startAt?.slice(0, 1)) >= 12 ? 'PM' : 'AM'}
        </p>
      </span>
    </article>
  )
}