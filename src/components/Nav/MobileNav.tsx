import Link from 'next/link'
import { memo, ReactNode, useEffect, useMemo, useState } from 'react'

import { navItems } from './navItem'

interface Props {
  children?: ReactNode
  isOpen: boolean
  setIsOpen: any
}

const MobileNav = ({ isOpen, setIsOpen }: Props) => {
  const [shouldRender, setRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) setRender(true)
    if (!isOpen) setTimeout(() => setRender(false), 450)
  }, [isOpen])
  const renderItems = useMemo(() => {
    return navItems?.map(({ name, href }) => (
      <Link href={href} key={href}>
        <a
          onClick={() => setIsOpen(false)}
          className="w-full text-center transition duration-500 hover:text-secondary"
        >
          <small>{name}</small>
        </a>
      </Link>
    ))
  }, [])

  return (
    <>
      {shouldRender && (
        <div
          style={{
            animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .5s`
          }}
          className="glass fixed inset-0 z-[4]"
        >
          <div className="overlay" onClick={() => setIsOpen(false)} />
          <div
            style={{
              width: 'clamp(300px, 30vw, 600px)',
              animation: `${isOpen ? 'fromLeft' : 'toRight'} .5s`
            }}
            className="border-white-50/5 absolute right-0 z-[5] h-full max-w-full rounded-xl border-l-2 bg-primary p-4 shadow-md"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
              <p className="absolute top-10 right-6 cursor-pointer font-black">
                X
              </p>
              {renderItems}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(MobileNav)
