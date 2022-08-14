// import { useTheme } from 'next-themes'
import { memo, useState } from 'react'

import MobileNav from './MobileNav'
import RenderNavButtons from './NavButtons'
import { controlItems, systemItems, userItems } from './navItem'

export interface Item {
  name: string
  href: string
}

const Nav = () => {
  // const { resolvedTheme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Omit<Item, 'icon'>>({
    name: 'Agenda',
    href: '/'
  })
  console.log(selectedItem)
  return (
    <nav className="mt-5 flex h-full w-full flex-col items-start gap-4 py-2.5 px-10">
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

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  )
}

export default memo(Nav)
