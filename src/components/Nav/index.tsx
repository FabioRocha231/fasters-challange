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
  return (
    <nav className="mt-5 flex w-full flex-col items-start gap-4 py-2.5 px-10">
      <div className="hidden w-full flex-col justify-center lg:flex">
        <RenderNavButtons item={controlItems} />
      </div>
      <div className="hidden w-full flex-col justify-center lg:flex">
        <RenderNavButtons item={userItems} />
      </div>
      <div className="hidden w-full flex-col justify-center lg:flex">
        <RenderNavButtons item={systemItems} />
      </div>

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  )
}

export default memo(Nav)
