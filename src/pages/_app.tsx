import 'react-calendar/dist/Calendar.css'
import '../styles/global.css'
import '../styles/typography.css'
import 'react-toastify/dist/ReactToastify.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import { Modal } from '@/components'
import { CreateEventProvider } from '@/context/event-context'
import { ModalProvider } from '@/context/modal-context'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // my solution to avoid the any type error in the nextjs Component
  const AnyComponent = Component as any
  return (
    <ThemeProvider forcedTheme={'light'}>
      <CreateEventProvider>
        <ModalProvider>
          <AnyComponent {...pageProps} />
          <Modal />
          <ToastContainer className="text-sm" />
        </ModalProvider>
      </CreateEventProvider>
    </ThemeProvider>
  )
}

export default MyApp
