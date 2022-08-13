import Link from 'next/link'
import { useTheme } from 'next-themes'
import { memo, useMemo, useState } from 'react'

import MobileNav from './MobileNav'
import { navItems } from './navItem'

export interface Item {
  name: string
  href: string
}

const Nav = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderItems = useMemo(() => {
    return navItems.map((item) => (
      <Link href={item.href} key={item.href}>
        <a>
          <small>{item.name}</small>
        </a>
      </Link>
    ))
  }, [])

  return (
    <nav className="z-[6] mb-5 flex w-full items-center gap-4 bg-secondary py-2.5 px-10 shadow-md">
      <div className="w-full lg:w-2/12">
        <Link href="/">
          <a className="small">Logo</a>
        </Link>
      </div>

      <div className="hidden w-full justify-center gap-x-10 md:flex lg:w-10/12">
        {renderItems}
      </div>

      <div className="flex w-full items-center justify-end lg:w-2/12">
        <button
          className="small"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          Change theme
        </button>
        <small
          className="cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Open mobile nav
        </small>
      </div>

      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </nav>
  )
}

export default memo(Nav)
