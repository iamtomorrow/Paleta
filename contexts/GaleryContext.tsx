import { createContext, useState } from "react";
import { ChildrenProps, GaleryPhotoProps } from "../Types/types";
import { API } from "../api/api";

interface GaleryContextProps {
    photos: GaleryPhotoProps[]
    updatePhotos: ( ) => void
}

export const GaleryContext = createContext<GaleryContextProps | null>(null);

export const GaleryContextProvider = ({ children }: ChildrenProps ) => {
    const [ photos, setPhotos ] = useState<GaleryPhotoProps[]>([]);

    const updatePhotos = async ( ) => {
        const phts = await API.getGalery( );
        setPhotos( phts );
    }

    return (
        <GaleryContext.Provider value={{ photos, updatePhotos }}>
            { children }
        </GaleryContext.Provider>
    )
}
