import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

export interface CreateEventParams {
  title: string
  description: string
  date: string
  startAt: string
  endAt: string
}
export interface UserContextData {
  saveEventOnLocalStorage: (event: CreateEventParams) => void // como e um localStorage os metodos nao precisam ser asyncronos
  removeEventFromLocalStorage: (id: string) => void
  getAllEventsFromLocalStorage: () => CreateEventParams[]
  updateEvent: (titleOldEvent: string, newEvent: CreateEventParams) => void
  newEvent: boolean
}

export interface CreateEventProviderProps {
  children: ReactNode
}

const EventsContext = createContext({} as UserContextData)
const CreateEventProvider = ({ children }: CreateEventProviderProps) => {
  const [newEvent, setNewEvent] = useState<boolean>(false)

  const saveEventOnLocalStorage = (event: CreateEventParams) => {
    localStorage.setItem(`${event.title}`, JSON.stringify(event))
    setNewEvent(!newEvent)
    toast.success(`Event ${event.title} created!`)
  }

  const removeEventFromLocalStorage = (id: string) => {
    localStorage.removeItem(id)
    setNewEvent(!newEvent)
    toast.success(`Event ${id} removed!`)
  }

  const updateEvent = (titleOldEvent: string, newEvent: CreateEventParams) => {
    const event = localStorage.getItem(titleOldEvent)
    if (event) {
      localStorage.setItem(`${newEvent.title}`, JSON.stringify(newEvent))
      setNewEvent(!newEvent)
      localStorage.removeItem(titleOldEvent)
      toast.success(`Event ${newEvent.title} updated!`)
    }
    return null
  }

  const getAllEventsFromLocalStorage = () => {
    if (typeof window === 'undefined') return []
    const eventsInLocalStorage = Object.keys(localStorage)
    let eventsLength = eventsInLocalStorage.length
    const eventsArray = []
    while (eventsLength !== 0) {
      eventsLength -= 1 // decrementing the length of the array to avoid linting errors
      try {
        eventsArray.push(
          JSON.parse(
            localStorage.getItem(eventsInLocalStorage[eventsLength]!) as string
          )
        )
      } catch (error) {
        // this catch is to avoid the error when the localStorage is empty or not Json serializable
        // because this they dont catch the error, without this the app will crash
      }
    }
    if (eventsArray.length === 0) return []
    return eventsArray.filter((event) => event.title) as CreateEventParams[] // my solution to avoid the window parameters in localStorage
  }

  return (
    <EventsContext.Provider
      value={{
        saveEventOnLocalStorage,
        removeEventFromLocalStorage,
        getAllEventsFromLocalStorage,
        updateEvent,
        newEvent
      }}
    >
      {children}
    </EventsContext.Provider>
  )
}

export { CreateEventProvider, EventsContext }
