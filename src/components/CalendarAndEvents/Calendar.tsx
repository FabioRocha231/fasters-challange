import { useState } from 'react'
import { Calendar } from 'react-calendar'

import Svg, { SvgIcons } from '@/atoms/Svg'

export default function CalendarComponent() {
  const [date, onChange] = useState<Date>(new Date())
  return (
    <Calendar
      onChange={onChange}
      value={date}
      className="flex w-full flex-col items-center rounded-lg border border-slate-300 p-4 text-xs"
      onClickDecade={undefined}
      locale="en"
      next2Label={null}
      prev2Label={null}
      prevLabel={
        <Svg
          name={SvgIcons.ArrowLeft}
          width={24}
          height={24}
          alt="arrow-left"
        />
      }
      nextLabel={
        <Svg
          name={SvgIcons.ArrowRight}
          width={24}
          height={24}
          alt="arrow-right"
        />
      }
    />
  )
}
