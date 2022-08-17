import { CalendarAndEvents, Nav } from '@/components'
import AsideComponent from '@/components/AsideComponent'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Faster Table"
          description="A front-end challange by Fasters"
        />
      }
    >
      <main className="flex w-full flex-row bg-secondary scrollbar">
        <AsideComponent />
        <div className="flex max-h-screen w-full flex-1 flex-col bg-primary">
          <Nav />
          <CalendarAndEvents />
        </div>
      </main>
    </Main>
  )
}

export default Index
