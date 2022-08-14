// import { useTheme } from 'next-themes'
import { memo, useState } from 'react'

import { AsideNavigation } from './AsideNavigation'
import { SectionNav } from './SectionNav'

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

  return isAside ? (
    <AsideNavigation
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  ) : (
    <SectionNav
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
  )
}

export default memo(Nav)
