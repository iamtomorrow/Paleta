
import { createContext, SetStateAction, useState } from "react";
import { ChildrenProps, ColorProps } from "../Types/types";
import { library } from "../data/data";

interface ColorContextProps {
    color: ColorProps | null,
    updateColor: ( id: string ) => void,
}

const ColorContextinitialParams = {
    color: null,
    updateColor: ( ) => { },
}

export const ColorContext = createContext<ColorContextProps>( ColorContextinitialParams );

export const ColorContextProvider = ({ children }: ChildrenProps ) => {
    const [ color, setColor ] = useState<ColorProps | null>(null);

    const updateColor = ( id: string ) => {
        let updatedColor = library.filter((item) => {
            return item.key === id
        })[0];
        setColor( updatedColor );
    }

    return (
        <ColorContext.Provider value={{ color, updateColor }}>
            { children }
        </ColorContext.Provider>
    )
}
