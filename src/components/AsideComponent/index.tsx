import Svg, { SvgIcons } from '@/atoms/Svg'

import Nav from '../Nav'

export default function AsideComponent() {
  return (
    <aside className="flex h-screen w-80 flex-col items-center self-start border-r border-slate-300 bg-primary p-10">
      <figure className="flex max-w-max flex-row items-center justify-center bg-logo p-4">
        <Svg
          name={SvgIcons.FasterLogo}
          width={205}
          height={41}
          alt={'Fasters Logo'}
        />
      </figure>
      <Nav isAside />
    </aside>
  )
}
