import React, { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

export interface UserContext {
    user: string | undefined;
    setUser: (c : string) => void
    removeUser: () => void
}
  
export const UserContext = createContext<UserContext>({
    user : "",
    setUser : () => {},
    removeUser : () => {} 
})

const UserProvider : React.FC = ({children}) => {

    const [user, setUser] = useState('')
    
    const [userLocal, setUserLocal, removeUser] = useLocalStorage("user", "")

    useEffect(() => {
        setUser(user!);
    },[userLocal])
      
    return (
        <UserContext.Provider value={{user, setUser, removeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
