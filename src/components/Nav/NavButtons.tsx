import Link from 'next/link'
import { useMemo } from 'react'

import Svg from '@/atoms/Svg'

import { Item } from './navItem'

export interface IRenderNavButtonParams {
  item: Item[]
}

export default function RenderNavButtons({ item }: IRenderNavButtonParams) {
  const renderItems = useMemo(() => {
    return item.map((item) => (
      <span
        key={item.name}
        className="group flex w-full cursor-pointer items-center justify-start gap-x-3 rounded-lg p-3 transition-colors hover:bg-navHover"
      >
        <Svg name={item.icon} width={24} height={24} alt={item.name} />
        <Link href={item.href}>
          <a className="group-hover:text-textHover">
            <small className="font-medium">{item.name}</small>
          </a>
        </Link>
      </span>
    ))
  }, [])
  return <>{renderItems}</>
}
