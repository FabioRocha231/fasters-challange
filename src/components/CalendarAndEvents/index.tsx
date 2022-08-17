import { useContext, useEffect, useState } from 'react'

import { CreateEventParams, EventsContext } from '@/context/event-context'

import { SchedulerView } from '../SchedulerTable'
import CalendarComponent from './Calendar'
import { EventCard } from './EventCard'

export const CalendarAndEvents = () => {
  const [avoidHydration, setAvoidHydration] = useState(false)
  const [events, setEvents] = useState<CreateEventParams[]>([])
  const { getAllEventsFromLocalStorage, newEvent } = useContext(EventsContext)
  // my solution to avoid hidratation error in the react-calendar
  // see more on https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setAvoidHydration(true)
  }, [])

  console.log(events)
  useEffect(() => {
    setEvents(getAllEventsFromLocalStorage())
  }, [newEvent])
  return (
    <section className="flex px-8 pt-8 overflow-y-hidden">
      <div className="w-80">
        {avoidHydration && <CalendarComponent />}
        <div className="mt-7 flex w-full flex-col">
          <p className="mb-3">Next Event</p>
          <div className="flex w-full flex-col items-center justify-center">
            {events?.length === 0 && <p className="p-4">Noothing to show</p>}
            {events?.map((event, i) => (
              <EventCard {...event} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-8 flex w-full flex-1 scrollbar-thumb-transparent">
        <SchedulerView />
      </div>
    </section>
  )
}
