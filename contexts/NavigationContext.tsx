
import { createContext, useState } from "react";
import { ChildrenProps } from "../Types/types";

interface NavigationContextProps {
    currentRoute: string
    routeHistory: string[]
    updateRoute: ( route: string ) => void
}

export const NavigationContext = createContext<NavigationContextProps>({ currentRoute: "Route", routeHistory: ["Home"], updateRoute: ( ) => { }});

export const NavigationContextProvider = ({ children }: ChildrenProps) => {
    const [ currentRoute, setCurrentRoute ] = useState<string>("");
    const [ routeHistory, setRouteHistory ] = useState<string[]>([]);

    const updateRoute = ( route: string ) => {
        setCurrentRoute( route );
        let updatedHistory = routeHistory;
        updatedHistory.unshift(route);
        setRouteHistory( updatedHistory );
        // console.log( routeHistory );
    }

    return (
        <NavigationContext.Provider value={{ currentRoute, routeHistory, updateRoute }}>
            { children }
        </NavigationContext.Provider>
    )
}