// import { useModal } from '@/hooks'

import { Nav } from '@/components'
import AsideComponent from '@/components/AsideComponent'
import { CalendarAndEvents } from '@/components/CalendarAndEvents'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  // const { setIsOpen, setBody } = useModal()

  // const handleOpenModal = () => {
  //  setBody(<p>Maracutaia</p>)
  //  setIsOpen(true)
  //  }
  return (
    <Main
      meta={
        <Meta
          title="Faster Table"
          description="A front-end challange by Fasters"
        />
      }
    >
      <main className="flex w-full flex-row bg-secondary">
        <AsideComponent />
        <div className="flex w-full flex-1 flex-col bg-primary">
          <Nav />
          <CalendarAndEvents />
        </div>
      </main>
    </Main>
  )
}

export default Index
