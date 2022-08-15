import { useContext } from 'react'

import PtData from '@/atoms/Date'
import Svg, { SvgIcons } from '@/atoms/Svg'
import { ModalContext } from '@/context/modal-context'

import MobileNav from './MobileNav'

export interface ISectionNavProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen(value: boolean): void
}

export const SectionNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen
}: ISectionNavProps) => {
  const { setIsOpen } = useContext(ModalContext)
  return (
    <header className="flex w-full flex-row border-b border-slate-300 p-10">
      <nav className="flex w-full items-center">
        <PtData />
        <button
          onClick={() => setIsOpen(true)}
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

        <span className="ml-4 flex flex-row gap-x-4">
          <button className="flex items-center rounded-lg bg-search p-4 transition-colors hover:bg-navHover">
            <Svg
              name={SvgIcons.NotificationBing}
              width={24}
              height={24}
              alt="notifications"
            />
          </button>
          <button className="flex items-center rounded-lg bg-search p-4 transition-colors hover:bg-navHover">
            <Svg name={SvgIcons.Profile} width={24} height={24} alt="profile" />
          </button>
        </span>
      </nav>
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  )
}
