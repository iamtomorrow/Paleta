
import { createContext, useState } from "react";
import { ChildrenProps, ColorProps } from "../Types/types";
import { API } from "../api/api";

interface LibraryContextProps {
    library: ColorProps[]
    getLibrary: ( ) => void,
}

const LibraryContextInitialState = {
    library: [],
    getLibrary: ( ) => { },
}

export const LibraryContext = createContext<LibraryContextProps>(LibraryContextInitialState);

export const LibraryContextProvider = ({ children }: ChildrenProps ) => {
    const [ library, setLibrary ] = useState<ColorProps[]>([]);

    const getLibrary = async ( ) => {
        let lib = await API.getLibrary( );
        setLibrary( lib );
    }

    return (
        <LibraryContext.Provider value={{ library, getLibrary }}>
            { children }
        </LibraryContext.Provider>
    )
}