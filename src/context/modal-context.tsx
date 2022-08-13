import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface ComponentWithChildren {
  children: ReactNode
}

const ModalContext = createContext({} as any)

const ModalProvider = ({ children }: any) => {
  const [title, setTitle] = useState<JSX.Element>()
  const [body, setBody] = useState<JSX.Element>()
  const [minWidth, setMinWidth] = useState('600px')
  const [desirableWidth, setDesirableWidth] = useState('15vw')
  const [maxWidth, setMaxWidth] = useState('900px')
  const [shouldOverlayClose, setShouldOverlayClose] = useState(true)

  const [isOpen, setIsOpen] = useState(false)
  const [shouldRender, setRender] = useState(isOpen)

  useEffect(() => {
    const el = document.querySelector('html')
    if (isOpen) {
      setRender(true)
      el?.classList.add('lock-scroll')
    }

    // timer to ensure the animation end
    if (!isOpen) {
      setTimeout(() => setRender(false), 450)
    }

    return () => {
      el?.classList.remove('lock-scroll')
    }
  }, [isOpen])

  return (
    <ModalContext.Provider
      value={{
        body,
        title,
        isOpen,
        setBody,
        minWidth,
        setTitle,
        maxWidth,
        setIsOpen,
        setMinWidth,
        setMaxWidth,
        setRender,
        shouldRender,
        desirableWidth,
        setDesirableWidth,
        shouldOverlayClose,
        setShouldOverlayClose,
        close: () => setIsOpen(false)
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext)

const Main = ({ children }: ComponentWithChildren) => {
  const { shouldRender, isOpen, shouldOverlayClose, close } = useModal()

  return (
    <>
      {shouldRender && (
        <div
          className="fixed inset-0 z-[4] backdrop-blur-sm"
          style={{ animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .5s` }}
        >
          <div
            className="absolute h-full w-full cursor-pointer bg-secondary opacity-70"
            onClick={() => shouldOverlayClose && close()}
          />
          {children}
        </div>
      )}
    </>
  )
}

const ModalCard = ({ children }: ComponentWithChildren) => {
  const { minWidth, desirableWidth, maxWidth } = useModal()

  return (
    <div
      style={{
        width: `clamp(${minWidth}, ${desirableWidth}, ${maxWidth})`
      }}
      className={`
        absolute top-[50%] left-[50%] z-[5] max-h-[80vh]
        min-h-[180px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-secondary
        lg:w-[30vw]
      `}
    >
      {children}
    </div>
  )
}

const Header = () => {
  const { title, close } = useModal()

  return (
    <div
      className={`flex flex-row items-center ${
        title ? 'border-brand-blue-300 mb-3.5 border-b pb-2' : ''
      }`}
    >
      {title && <p className="mr-auto ml-3 font-semibold">{title}</p>}
      <div onClick={close} className="ml-auto mr-2 cursor-pointer font-black">
        X
      </div>
    </div>
  )
}

const Body = (): any => {
  const { body } = useModal()
  return body
}

export { Body, Header, Main, ModalCard, ModalContext, ModalProvider, useModal }
