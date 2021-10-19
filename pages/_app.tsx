import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/shared/lib/router/router"
import myTheme from "../components/Themes/theme"
import AOS from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
    return () => {
    }
  }, [])

  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
