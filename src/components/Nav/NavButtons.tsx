import Link from 'next/link'
import { useMemo } from 'react'
import { toast } from 'react-toastify'

import Svg from '@/atoms/Svg'

import { Item } from './navItem'

export interface IRenderNavButtonParams {
  item: Item[]
  selectedItem: Omit<Item, 'icon'>
  setSelectedItem: ({ name, href }: Omit<Item, 'icon'>) => void
}

export default function RenderNavButtons({
  item,
  selectedItem,
  setSelectedItem
}: IRenderNavButtonParams) {
  const itemName = selectedItem.name
  const renderItems = useMemo(() => {
    return item.map((item) => (
      <span
        key={item.name}
        className={`group mt-2 flex w-full cursor-pointer items-center justify-start
        gap-x-3 rounded-lg p-3 transition-colors hover:bg-navHover ${
          item.name === itemName ? 'bg-navHover' : ''
        }`}
        onClick={() => {
          setSelectedItem(item)
        }}
      >
        <Svg name={item.icon} width={24} height={24} alt={item.name} />
        <Link href={item.href}>
          <a
            className={`group-hover:text-textHover ${
              item.name === itemName ? 'text-textHover' : ''
            }`}
          >
            <small className="font-medium">{item.name}</small>
          </a>
        </Link>
      </span>
    ))
  }, [selectedItem, toast])
  return <>{renderItems}</>
}
