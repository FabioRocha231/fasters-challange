import { useContext, useEffect, useState } from 'react'

import { CreateEventParams, EventsContext } from '@/context/event-context'

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
    <section className="flex flex-1 px-8 pt-8">
      <div className="w-80 bg-primary">
        {avoidHydration && <CalendarComponent />}
        <div className="mt-7 flex w-full flex-col">
          <p className="mb-3">Next Event</p>
          <div className="flex w-full flex-col items-center justify-center">
            {events
              ?.filter((event) => event.title) // my solution to avoid the window infos in the localStorage
              .map((event, id) => (
                <EventCard key={id} {...event} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
