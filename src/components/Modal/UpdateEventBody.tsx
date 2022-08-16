import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CreateEventParams, EventsContext } from '@/context/event-context'

const UpdateEventBody = ({
  title,
  description,
  date,
  startAt,
  endAt
}: CreateEventParams) => {
  const { updateEvent, removeEventFromLocalStorage } = useContext(EventsContext)
  const { register, handleSubmit } = useForm<CreateEventParams>()
  const onSubmit: SubmitHandler<CreateEventParams> = (data) => {
    updateEvent(title, data)
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
          placeholder={`${title}`}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="description" className="text-sm font-medium">
          Description:
        </label>
        <input
          {...register('description', { required: true })}
          id="description"
          type="text"
          placeholder={`${description}`}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="date" className="text-sm font-medium">
          Date:
        </label>
        <input
          {...register('date', { required: true })}
          id="date"
          type="date"
          placeholder={`${date}`}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="time" className="text-sm font-medium">
          Start at:
        </label>
        <input
          {...register('startAt', { required: true })}
          id="time"
          type="time"
          placeholder={`${startAt}`}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <label htmlFor="time" className="text-sm font-medium">
          End at:
        </label>
        <input
          {...register('endAt', { required: true })}
          id="time"
          type="time"
          placeholder={`${endAt}`}
          className="mb-2 rounded-lg bg-search p-2 text-sm font-medium text-navTitle"
        />
        <span className="flex flex-row gap-x-2">
          <button className="mt-3 flex flex-1 justify-center rounded-lg bg-navHover py-2 px-4 text-textHover transition-colors hover:bg-eventBtn hover:text-secondary">
            Update
          </button>
          <button
            className="flex-2 text-white mt-3 flex rounded-lg bg-deleteBtn py-2 px-4 transition-colors hover:bg-deleteBtnHover hover:text-secondary"
            onClick={(e) => {
              e.preventDefault()
              removeEventFromLocalStorage(title)
            }}
          >
            Delete
          </button>
        </span>
      </form>
    </div>
  )
}

export { UpdateEventBody }
