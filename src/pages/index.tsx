// import { useModal } from '@/hooks'
import Svg, { SvgIcons } from '@/atoms/Svg'
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
      <section className="w-full bg-secondary">
        <aside className="flex h-screen w-80 flex-col items-center self-start bg-primary py-10">
          <figure className="flex max-w-max flex-row items-center justify-center bg-logo p-4 rounded-lg">
            <Svg
              name={SvgIcons.FasterLogo}
              width={205}
              height={41}
              alt={'Fasters Logo'}
            />
          </figure>
        </aside>
      </section>
    </Main>
  )
}

export default Index
