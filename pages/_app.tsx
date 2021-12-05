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
import { UserData } from "../lib/UserData"

library.add(fab, faCheckSquare, faCoffee, faGithub, faCommentAlt)

export interface UserContext {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContext>({
  user : "",
  setUser : () => {}
})

function MyApp({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState("")
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
    return () => {
    }
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
