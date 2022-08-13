import { ReactNode } from 'react'

type Props = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: Props) => (
  <>
    {props.meta}
    {props.children}
  </>
)

export { Main }
