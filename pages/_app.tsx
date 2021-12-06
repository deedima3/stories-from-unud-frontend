import { AppProps } from "next/dist/shared/lib/router/router"
import myTheme from "../components/Themes/theme"
import AOS from 'aos'
import "aos/dist/aos.css"
import 'tailwindcss/tailwind.css'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import UserProvider from "../lib/context/UserProvider"

library.add(fab, faCheckSquare, faCoffee, faGithub, faCommentAlt)

function MyApp({ Component, pageProps }: AppProps) {

  
  useEffect(() => {
    AOS.init({ duration: 2000 });
    return () => {
    }
  }, [])

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
      
  )
}

export default MyApp
