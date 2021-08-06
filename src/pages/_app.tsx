import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/themes'
import { SwitchMode } from '../components/Switch'
import { AuthContextProvider } from '../context/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <SwitchMode />
      </ChakraProvider>
    </AuthContextProvider>
  )
}

export default MyApp
