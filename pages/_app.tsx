import { AppProps } from "next/dist/shared/lib/router/router"
import myTheme from "../components/Themes/theme"
import AOS from 'aos'
import "aos/dist/aos.css"
import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faGithub)

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
    return () => {
    }
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
