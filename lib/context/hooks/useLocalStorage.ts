import { useEffect, useState } from "react";

export function useLocalStorage (key : string, baseValue : any) {
    
    const [value, setValue] = useState<string | null>(baseValue);

    const removeValue = () => {
    setValue(null);
    localStorage.removeItem(key);
    };

    useEffect(() => {
        if (!value) return;
        localStorage.setItem(key, value);
    }, [value])

    useEffect(() => {
    setValue(localStorage.getItem(key));
    }, []);
    
    return [value, setValue, removeValue] as const

}