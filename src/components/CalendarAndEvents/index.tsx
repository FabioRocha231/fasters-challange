import { useContext, useEffect, useState } from 'react'

import { CreateEventParams, EventsContext } from '@/context/event-context'

import { SchedulerView } from '../SchedulerTable'
import CalendarComponent from './Calendar'
import { EventCard } from './EventCard'

export const CalendarAndEvents = () => {
  const [avoidHydration, setAvoidHydration] = useState(false)
  const { getAllEventsFromLocalStorage, newEvent } = useContext(EventsContext)
  const [events, setEvents] = useState<CreateEventParams[]>([])
  const [currentSchedulerDate, setCurrentSchedulerDate] = useState(new Date())

  function getDateFromCalendar(date: Date | string) {
    setCurrentSchedulerDate(new Date(date))
  }
  // my solution to avoid hidratation error in the react-calendar
  // see more on https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setAvoidHydration(true)
  }, [])

  useEffect(() => {
    setEvents(getAllEventsFromLocalStorage())
  }, [newEvent])

  return (
    <section className="flex p-8 overflow-y-hidden">
      <div className="w-80 overflow-x-hidden">
        {avoidHydration && (
          <CalendarComponent getDateFromCalendar={getDateFromCalendar} />
        )}
        <div className="mt-7 flex w-full flex-col">
          <p className="mb-3">Next Event</p>

          <div className="flex h-full w-full flex-col items-center justify-center">
            {events?.length === 0 && <p className="p-4">Nothing to show</p>}
            {events?.map((event) => (
              <EventCard {...event} key={event.title} />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-8 flex w-full flex-1 scrollbar-thumb-transparent">
        <SchedulerView
          events={events?.map((event) => ({
            startDate: new Date(`${event.date} ${event.startAt}`),
            endDate: new Date(`${event.date} ${event.endAt}`),
            title: event.title
          }))}
          currentDate={currentSchedulerDate}
        />
      </div>
    </section>
  )
}
