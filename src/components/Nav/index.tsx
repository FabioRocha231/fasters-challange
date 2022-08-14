// import { useTheme } from 'next-themes'
import { memo, useState } from 'react'

import PtData from '@/atoms/Date'
import Svg, { SvgIcons } from '@/atoms/Svg'

import MobileNav from './MobileNav'
import RenderNavButtons from './NavButtons'
import { controlItems, systemItems, userItems } from './navItem'

export interface Item {
  name: string
  href: string
}

export interface INavProps {
  isAside?: boolean
}

const Nav = ({ isAside }: INavProps) => {
  // const { resolvedTheme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Omit<Item, 'icon'>>({
    name: 'Agenda',
    href: '/'
  })
  const asideNavigation = () => {
    return (
      <nav className="mt-5 flex h-full w-full flex-col items-start">
        <div className="hidden w-full flex-col justify-center lg:flex">
          <RenderNavButtons
            item={controlItems}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>

        <div className="mt-5 flex w-full flex-1 flex-col justify-between">
          <div className="flex w-full flex-col justify-between">
            <p className="text-sm font-normal text-navTitle">My Account</p>
            <div className="mt-5 hidden w-full flex-col justify-center lg:flex">
              <RenderNavButtons
                item={userItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between">
            <p className="text-sm font-normal text-navTitle">System</p>
            <div className="mt-5 hidden w-full flex-col justify-center gap-y-5 lg:flex">
              <RenderNavButtons
                item={systemItems}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const sectionNav = () => {
    return (
      <header className="flex w-full flex-row border-b border-slate-300 p-10">
        <nav className="flex w-full items-center">
          <PtData />
          <button className="group ml-40 rounded-lg bg-eventBtn py-2 px-4 transition-colors hover:bg-navHover">
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
                <Svg
                  name={SvgIcons.Search}
                  width={24}
                  height={24}
                  alt="Search"
                />
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
            <button className="items-cemter flex rounded-lg bg-search p-4 transition-colors hover:bg-navHover">
              <Svg
                name={SvgIcons.Profile}
                width={24}
                height={24}
                alt="profile"
              />
            </button>
          </span>
        </nav>
        <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </header>
    )
  }
  return isAside ? asideNavigation() : sectionNav()
}

export default memo(Nav)
