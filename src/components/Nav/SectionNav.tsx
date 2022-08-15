import PtData from '@/atoms/Date'

import MobileNav from './MobileNav'
import { SectionNavButtons } from './SectionNavButtons'
import { SectionNavForm } from './SectionNavForm'

export interface ISectionNavProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen(value: boolean): void
}

export const SectionNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen
}: ISectionNavProps) => {
  return (
    <header className="flex w-full flex-row border-b border-slate-300 p-10">
      <nav className="flex w-full items-center">
        <PtData />
        <SectionNavButtons>
          <SectionNavForm />
        </SectionNavButtons>
      </nav>
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  )
}
