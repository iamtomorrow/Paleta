
import { createContext, useState } from "react";
import { ChildrenProps, ColorProps } from "../Types/types";

interface FavoritesContextProps {
    favorites: ColorProps[]
    addToFavorites: ( color: ColorProps ) => void
    removeFromFavorites: ( key: string ) => void
}

export const FavoritesContext = createContext<FavoritesContextProps | null>(null);

export const FavoritesContextProvider = ({ children }: ChildrenProps ) => {
    const [ favorites, setFavorites ] = useState<ColorProps[]>([]);

    const addToFavorites = ( color: ColorProps ) => {
        let updatedFavorites = [color, ...favorites];
        setFavorites( updatedFavorites );
    }

    const removeFromFavorites = ( key: string ) => {
        let updatedFavorites = favorites.filter(( item ) => {
            return item.key !== key;
        })
        setFavorites( updatedFavorites );
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            { children }
        </FavoritesContext.Provider>
    )
}
