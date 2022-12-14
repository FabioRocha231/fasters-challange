import { Calendar } from 'react-calendar'

import Svg, { SvgIcons } from '@/atoms/Svg'

interface CalendarProps {
  getDateFromCalendar: (date: Date | string) => void
}

export default function CalendarComponent({
  getDateFromCalendar
}: CalendarProps) {
  const date = new Date()
  return (
    <Calendar
      onChange={(value: Date) => {
        // getDateFromCalendar(value)
        const calendarCurrentDate = new Date(value)
        getDateFromCalendar(calendarCurrentDate)
      }}
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
