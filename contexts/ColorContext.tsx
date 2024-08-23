
import { createContext, SetStateAction, useContext, useState } from "react";
import { ChildrenProps, ColorProps } from "../Types/types";
import { API } from "../api/api";
import { FavoritesContext } from "./FavoritesContext";

interface ColorContextProps {
    color: ColorProps | null
    isFavorite: boolean
    updateColor: ( id: number ) => void
    checkFavorite: ( ) => void
}

const ColorContextinitialParams = {
    color: {
        id: 0,
        key: "",
        base: "",
        name: "",
        description: "",
        icon: "",
        sample: "",
        colorCode: "",
        lighteningColor: [],
        examples: [],
        neutrals: [],
    },
    isFavorite: false,
    updateColor: ( ) => { },
    checkFavorite: ( ) => { },
}

export const ColorContext = createContext<ColorContextProps>( ColorContextinitialParams );

export const ColorContextProvider = ({ children }: ChildrenProps ) => {
    const [ color, setColor ] = useState<ColorProps | null>(null);
    const [ isFavorite, setIsFavorite ] = useState<boolean>( false );

    const FavoriteContxt = useContext( FavoritesContext );

    const updateColor = async ( id: number ) => {
        let library = await API.getLibrary( );
        let updatedColor = library[id -1];
        setColor( prev => ({
            ...prev,
            id: updatedColor.id,
            key: updatedColor.key,
            base: updatedColor.base,
            name: updatedColor.name,
            description: updatedColor.description,
            icon: updatedColor.icon,
            sample: updatedColor.sample,
            colorCode: updatedColor.colorCode,
            lighteningColor: updatedColor.lighteningColor,
            examples: updatedColor.examples,
            neutrals: updatedColor.neutrals,
        }));

        let fav = FavoriteContxt?.favoriteColors.filter((item) => {
            // console.log( item.key, " === ", updatedColor.key );
            return item.key === updatedColor.key;
        })
        fav?.length && fav?.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
    }

    const checkFavorite = ( ) => {
        let fav = FavoriteContxt?.favoriteColors.filter((item) => {
            return color?.key === item.key;
        })
        fav?.length && fav?.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
    }

    return (
        <ColorContext.Provider value={{ color, isFavorite, updateColor, checkFavorite }}>
            { children }
        </ColorContext.Provider>
    )
}
