import RenderNavButtons, { IRenderNavButtonParams } from './NavButtons'
import { controlItems, systemItems, userItems } from './navItem'

export const AsideNavigation = ({
  selectedItem,
  setSelectedItem
}: Omit<IRenderNavButtonParams, 'item'>) => {
  return (
    <nav className="mt-5 flex h-full w-full flex-col items-start">
      <div className="hidden w-full flex-col justify-center lg:flex">
        <RenderNavButtons
          item={controlItems}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <div className="mt-5 flex w-full flex-1 flex-col justify-between">
        <div className="flex w-full flex-col justify-between">
          <p className="text-sm font-normal text-navTitle">My account</p>
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
    </nav>
  )
}
