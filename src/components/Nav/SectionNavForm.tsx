import { useContext } from 'react'

import Svg, { SvgIcons } from '@/atoms/Svg'
import { ModalContext } from '@/context/modal-context'

import { CreateEventBody } from '../Modal/CreateEventBody'

export const SectionNavForm = () => {
  const { setIsOpen, setBody, setTitle } = useContext(ModalContext)
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
          setTitle('Create Event')
          setBody(<CreateEventBody />)
        }}
        className="group ml-40 rounded-lg bg-eventBtn py-2 px-4 transition-colors hover:bg-navHover"
      >
        <p className="text-sm font-normal text-eventBtn group-hover:text-textHover">
          + Create event
        </p>
      </button>
      <form className="ml-4 flex flex-1">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-navTitle"
        >
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Svg name={SvgIcons.Search} width={24} height={24} alt="Search" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg bg-search p-4 pl-10 text-sm font-normal text-navTitle"
            placeholder="Search task, event, calendar"
            required
          />
        </div>
      </form>
    </>
  )
}
