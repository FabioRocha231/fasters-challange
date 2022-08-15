import 'react-calendar/dist/Calendar.css'
import '../styles/global.css'
import '../styles/typography.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Modal } from '@/components'
import { ModalProvider } from '@/context/modal-context'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // my solution to avoid the any type error in the nextjs app
  const AnyComponent = Component as any
  return (
    <ThemeProvider>
      <ModalProvider>
        <AnyComponent {...pageProps} />
        <Modal />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default MyApp
