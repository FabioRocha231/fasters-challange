import Nav from '../Nav'

export default function AsideComponent() {
  return (
    <aside className="flex h-screen w-80 flex-col items-center self-start border-r border-slate-300 bg-primary p-10">
      <figure className="flex w-full flex-row items-center justify-center rounded-lg bg-navHover p-4">
        <p className="text-textHover">LOGO</p>
      </figure>
      <Nav isAside />
    </aside>
  )
}
