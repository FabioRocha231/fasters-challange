// import { useModal } from '@/hooks'
import { Nav } from '@/components'
import AsideComponent from '@/components/AsideComponent'
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
        <section className="flex w-full flex-1 flex-col bg-primary">
          <Nav />
        </section>
      </main>
    </Main>
  )
}

export default Index
