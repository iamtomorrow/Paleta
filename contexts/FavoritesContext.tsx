
import { createContext, useState } from "react";
import { ChildrenProps, ColorProps, GaleryPhotoProps } from "../Types/types";
import { Storage } from "../api/storage";

interface FavoritesContextProps {
    loading: boolean
    favoriteColors: ColorProps[]
    favoritePhotos: GaleryPhotoProps[]
    addToFavoriteColors: ( color: ColorProps ) => void
    addToFavoritePhotos: ( photo: GaleryPhotoProps ) => void
    removeFromFavoriteColors: ( key: string ) => void
    removeFromFavoritePhotos: ( key: string ) => void
    getFavoriteColors: ( ) => void
    getFavoritePhotos: ( ) => void
}

export const FavoritesContext = createContext<FavoritesContextProps | null>(null);

export const FavoritesContextProvider = ({ children }: ChildrenProps ) => {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ favoriteColors, setFavoriteColors ] = useState<ColorProps[]>([]);
    const [ favoritePhotos, setFavoritePhotos ] = useState<GaleryPhotoProps[]>([]);

    const addToFavoriteColors = async ( color: ColorProps ) => {        
        setLoading( true );
        await Storage.Favorites.addToFavoriteColors( color );
        let favorites = await Storage.Favorites.getFavoriteColors( );
        setFavoriteColors( favorites );
        setLoading( false );
    }

    const removeFromFavoriteColors = async ( key: string ) => {   
        setLoading( true );
        
        console.log("REMOVING: ", key);
        await Storage.Favorites.removeFromFavoriteColors( key );
        let updatedFavorites = await Storage.Favorites.getFavoriteColors( );
        setFavoriteColors( updatedFavorites );

        setLoading( false );
    }

    const getFavoriteColors = async ( ) => {
        setLoading( true );
        let favorites = await Storage.Favorites.getFavoriteColors( );
        setFavoriteColors( favorites );
        setLoading( false );
    }

    const addToFavoritePhotos = async ( photo: GaleryPhotoProps ) => {
        setLoading( true );
        await Storage.Favorites.addToFavoritePhotos( photo );
        let favorites = await Storage.Favorites.getFavoritePhotos( );
        setFavoritePhotos( favorites );
        setLoading( false );
    }

    const removeFromFavoritePhotos = ( key: string ) => {
        setLoading( true );
        setLoading( false );
    }

    const getFavoritePhotos = async ( ) => {
        setLoading( true );
        let favorites = await Storage.Favorites.getFavoritePhotos( );
        setFavoritePhotos( favorites );
        setLoading( false );
    }

    return (
        <FavoritesContext.Provider value={{ 
            loading,
            favoriteColors, 
            favoritePhotos,
            addToFavoriteColors, 
            addToFavoritePhotos,
            removeFromFavoriteColors,
            removeFromFavoritePhotos,
            getFavoriteColors,
            getFavoritePhotos
        }}>
            { children }
        </FavoritesContext.Provider>
    )
}
