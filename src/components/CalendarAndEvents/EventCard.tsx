import { useContext } from 'react'

import Svg, { SvgIcons } from '@/atoms/Svg'
import { ModalContext } from '@/context/modal-context'

export const EventCard = () => {
  const { setIsOpen } = useContext(ModalContext)
  return (
    <article
      className="flex w-full cursor-pointer flex-col rounded-lg border border-slate-300 p-2 transition-all hover:scale-105"
      onClick={() => setIsOpen(true)}
    >
      <p className="text-sm">Entrevista com RH</p>
      <p className="text-xs">January 4, 2022</p>
      <span className="mt-3 flex flex-row items-center gap-x-2">
        <Svg name={SvgIcons.Clock} width={24} height={24} alt="clock" />
        <p className="text-xs text-textHover">08:00 - 09:30 AM</p>
      </span>
    </article>
  )
}
