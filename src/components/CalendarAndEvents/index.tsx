import { useEffect, useState } from 'react'

import CalendarComponent from './Calendar'
import { EventCard } from './EventCard'

export const CalendarAndEvents = () => {
  const [avoidHydration, setAvoidHydration] = useState(false)
  // my solution to avoid hidratation error in the react-calendar
  // see more on https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setAvoidHydration(true)
  }, [])
  return (
    <section className="flex flex-1 px-8 pt-8">
      <div className="w-80 bg-primary">
        {avoidHydration && <CalendarComponent />}
        <div className="mt-7 flex w-full flex-col">
          <p className="mb-3">Next Event</p>
          <div className="flex w-full flex-col items-center justify-center">
            <EventCard />
          </div>
        </div>
      </div>
    </section>
  )
}
