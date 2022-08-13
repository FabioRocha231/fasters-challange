import Svg from '@/atoms/Svg'
import Link from 'next/link'
import { useMemo } from 'react'
import { Item } from './navItem'

export interface IRenderNavButtonParams {
  item: Item[]
}

export default function RenderNavButtons({ item }: IRenderNavButtonParams) {
  const renderItems = useMemo(() => {
    return item.map((item) => (
      <span key={item.name} className="flex items-center justify-start gap-x-3 p-4 cursor-pointer">
        <Svg name={item.icon} width={24} height={24} alt={item.name} />
        <Link href={item.href}>
          <a>
            <small>{item.name}</small>
          </a>
        </Link>
      </span>
    ))
  }, [])
  return <>{renderItems}</>
}
