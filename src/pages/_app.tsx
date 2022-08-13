import '../styles/global.css'
import '../styles/typography.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Modal } from '@/components'
import { ModalProvider } from '@/context/modal-context'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <ModalProvider>
      <Component {...pageProps} />
      <Modal />
    </ModalProvider>
  </ThemeProvider>
)

export default MyApp
