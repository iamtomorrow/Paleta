
import { createContext, useState } from "react";
import { ChildrenProps, UserProps } from "../Types/types";
import { Auth } from "../auth/auth";
import { Storage } from "../api/storage";

interface UserContextProps {
    user: UserProps | undefined
    addUser: ( name: string ) => void
    updateuser: ( ) => void
    removeUser: ( ) => void
    getUser: ( ) => void
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({ children }: ChildrenProps ) => {
    const [ user, setUser ] = useState<UserProps>();

    const addUser = async ( name: string ) => {
        await Auth.setUserByName( name );
        let user = await Auth.getUser( );
        setUser( user );
    }

    const updateuser = async ( ) => {
        let user = await Auth.getUser( );
        setUser( user );
    }

    const removeUser = async ( ) => {
        await Auth.removeToken( );
        await Auth.removeUser( );
        await Storage.Vanish.cleanFavorites( );
    }

    const getUser = async ( ) => {
        let usr = await Auth.getUser( );
        console.log( usr ); 
        setUser( usr );
    }

    return (
        <UserContext.Provider value={{
            user,
            addUser,
            updateuser,
            removeUser,
            getUser
        }}>
            { children }
        </UserContext.Provider>
    )
}