import { useEffect, useState } from "react";


export function useLocalStorage (baseValue : any) {
    
    const [user, setUser] = useState<string | null>(baseValue);

    const removeUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    };

    useEffect(() => {
        if (!user) return;
        localStorage.setItem("user", user);
    }, [user])

    useEffect(() => {
    setUser(localStorage.getItem("user"));
    }, []);
    
    return {user, setUser, removeUser}

}