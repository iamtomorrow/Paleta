
import { createContext, useState } from "react";
import { ChildrenProps } from "../Types/types";

interface NavigationContextProps {
    currentRoute: string
    updateRoute: ( route: string ) => void
}

export const NavigationContext = createContext<NavigationContextProps>({ currentRoute: "Route", updateRoute: ( ) => { }});

export const NavigationContextProvider = ({ children }: ChildrenProps) => {
    const [ currentRoute, setCurrentRoute ] = useState<string>("");

    const updateRoute = ( route: string ) => {
        setCurrentRoute( prev => route );
    }

    return (
        <NavigationContext.Provider value={{ currentRoute, updateRoute }}>
            { children }
        </NavigationContext.Provider>
    )
}