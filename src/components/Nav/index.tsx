// import { useTheme } from 'next-themes'
import { memo, useState } from 'react'

import MobileNav from './MobileNav'

import { controlItems, userItems, systemItems } from './navItem'
import RenderNavButtons from './NavButtons'

export interface Item {
  name: string
  href: string
}

const Nav = () => {
  // const { resolvedTheme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className="flex w-full flex-col items-start gap-4 py-2.5 px-10">
      <div className="hidden w-full flex-col justify-center gap-x-10 lg:flex lg:w-10/12">
        <RenderNavButtons item={controlItems} />
      </div>
      <div className="hidden w-full flex-col justify-center gap-x-10 lg:flex lg:w-10/12">
        <RenderNavButtons item={userItems} />
      </div>
      <div className="hidden w-full flex-col justify-center gap-x-10 lg:flex lg:w-10/12">
        <RenderNavButtons item={systemItems} />
      </div>

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  )
}

export default memo(Nav)
