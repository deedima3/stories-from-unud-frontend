import React, { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

export interface UserContext {
    user: string | null;
    setUser: (c : string) => void
    removeUser: () => void
}
  
export const UserContext = createContext<UserContext>({
    user : "",
    setUser : () => {},
    removeUser : () => {} 
})

const UserProvider : React.FC = ({children}) => {

    const [user, setUser, removeUser] = useLocalStorage("user", null)

    return (
        <UserContext.Provider value={{user, setUser, removeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
