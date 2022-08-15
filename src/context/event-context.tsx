import { createContext, ReactNode, useState } from 'react'

export interface CreateEventParams {
  title: string
  description: string
  date: string
  startAt: string
  endAt: string
}
// import { toast } from "react-toastify";
export interface UserContextData {
  saveEventOnLocalStorage: (event: CreateEventParams) => void // como e um localStorage os metodos nao precisam ser asyncronos
  removeEventFromLocalStorage: (id: string) => void
  getAllEventsFromLocalStorage: () => CreateEventParams[]
  newEvent: boolean
  setNewEvent(newEvent: boolean): void
}

export interface CreateEventProviderProps {
  children: ReactNode
}

const EventsContext = createContext({} as UserContextData)
const CreateEventProvider = ({ children }: CreateEventProviderProps) => {
  const [newEvent, setNewEvent] = useState<boolean>(false)
  const saveEventOnLocalStorage = (event: CreateEventParams) => {
    localStorage.setItem(`${event.title}`, JSON.stringify(event))
  }
  const removeEventFromLocalStorage = (id: string) => {
    localStorage.removeItem(id)
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
        // this catch is to avoid the error when the localStorage is empty or not Json serialible
        // because this they dont have any event
      }
    }
    if (eventsArray.length === 0) return []
    return eventsArray as CreateEventParams[]
  }

  return (
    <EventsContext.Provider
      value={{
        saveEventOnLocalStorage,
        removeEventFromLocalStorage,
        getAllEventsFromLocalStorage,
        newEvent,
        setNewEvent
      }}
    >
      {children}
    </EventsContext.Provider>
  )
}

export { CreateEventProvider, EventsContext }
