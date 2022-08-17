import { useContext } from 'react'

import Svg, { SvgIcons } from '@/atoms/Svg'
import { CreateEventParams } from '@/context/event-context'
import { ModalContext } from '@/context/modal-context'

import { UpdateEventBody } from '../Modal/UpdateEventBody'

export const EventCard = ({
  title,
  date,
  startAt,
  description,
  endAt
}: CreateEventParams) => {
  const { setIsOpen, setBody, setTitle } = useContext(ModalContext)
  const localeDate = new Date(date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  return (
    <article
      className="mt-3 flex w-full cursor-pointer flex-col rounded-lg border border-slate-300 p-2 transition-all hover:animate-pulse"
      onClick={() => {
        setIsOpen(true)
        setTitle('Update or Delete Event')
        setBody(
          <UpdateEventBody
            title={title}
            description={description}
            date={date}
            startAt={startAt}
            endAt={endAt}
          />
        )
      }}
    >
      <p className="text-sm">{title}</p>
      <p className="text-xs">
        {`${localeDate.split(' ')[0]} ${
          +localeDate.split(' ')[1]!.slice(0, 2)! + 1
        }, ${localeDate.split(',')[1]}`}
      </p>
      <span className="mt-3 flex flex-row items-center gap-x-2">
        <Svg name={SvgIcons.Clock} width={24} height={24} alt="clock" />
        <p className="text-xs text-textHover">
          {startAt} - {endAt} {Number(startAt?.slice(0, 1)) >= 12 ? 'PM' : 'AM'}
        </p>
      </span>
    </article>
  )
}
