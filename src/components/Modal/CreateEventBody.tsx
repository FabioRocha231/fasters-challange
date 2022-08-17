import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CreateEventParams, EventsContext } from '@/context/event-context'
import { ModalContext } from '@/context/modal-context'

const CreateEventBody = () => {
  const { saveEventOnLocalStorage } = useContext(EventsContext)
  const { close } = useContext(ModalContext)
  const { register, handleSubmit } = useForm<CreateEventParams>()

  const onSubmit: SubmitHandler<CreateEventParams> = (data) => {
    saveEventOnLocalStorage(data)
    close()
  }

  return (
    <div className="flex w-full justify-center bg-primary p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <label htmlFor="title" className="text-sm font-medium">
          Title:
        </label>
        <input
          {...register('title', { required: true })}
          id="title"
          type="text"
          placeholder="Put your event title here"
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="description" className="text-sm font-medium">
          Description:
        </label>
        <input
          {...register('description', { required: true })}
          id="description"
          type="text"
          placeholder="description of event"
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="date" className="text-sm font-medium">
          Date:
        </label>
        <input
          {...register('date', { required: true })}
          id="date"
          type="date"
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
          min={new Date().getDay()}
        />
        <label htmlFor="time" className="text-sm font-medium">
          Start at:
        </label>
        <input
          {...register('startAt', { required: true })}
          id="time"
          type="time"
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="time" className="text-sm font-medium">
          End at:
        </label>
        <input
          {...register('endAt', { required: true })}
          id="time"
          type="time"
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <button className="text-white mt-3 rounded-lg bg-navHover py-2 px-4 text-textHover transition-colors hover:bg-eventBtn hover:text-secondary">
          Create
        </button>
      </form>
    </div>
  )
}

export { CreateEventBody }
