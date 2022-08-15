// import { useModal } from '@/hooks'

import { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar'

import Svg, { SvgIcons } from '@/atoms/Svg'
import { Nav } from '@/components'
import AsideComponent from '@/components/AsideComponent'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const [avoidHydration, setAvoidHydration] = useState(false)
  const [date, onChange] = useState<Date>(new Date())
  // const { setIsOpen, setBody } = useModal()

  // const handleOpenModal = () => {
  //  setBody(<p>Maracutaia</p>)
  //  setIsOpen(true)
  //  }
  // my solution to avoid hidratation error in the react-calendar
  // see more on https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setAvoidHydration(true)
  }, [])
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
          <section className="flex flex-1 px-8 pt-8">
            <div className="w-80 bg-primary">
              {avoidHydration && (
                <Calendar
                  onChange={onChange}
                  value={date}
                  className="flex w-80 flex-col items-center rounded-lg border border-slate-300 p-4 text-xs"
                  onClickDecade={undefined}
                  locale="en"
                  next2Label={null}
                  prev2Label={null}
                  prevLabel={
                    <Svg
                      name={SvgIcons.ArrowLeft}
                      width={24}
                      height={24}
                      alt="arrow-left"
                    />
                  }
                  nextLabel={
                    <Svg
                      name={SvgIcons.ArrowRight}
                      width={24}
                      height={24}
                      alt="arrow-right"
                    />
                  }
                />
              )}
            </div>
          </section>
        </div>
      </main>
    </Main>
  )
}

export default Index
