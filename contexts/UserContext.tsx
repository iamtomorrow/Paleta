
import { createContext, useState } from "react";
import { ChildrenProps, UserProps } from "../Types/types";
import { Auth } from "../auth/auth";

interface UserContextProps {
    user: UserProps | undefined
    addUser: ( name: string ) => void
    updateuser: ( ) => void
    removeUser: ( ) => void
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
    }

    return (
        <UserContext.Provider value={{
            user,
            addUser,
            updateuser,
            removeUser
        }}>
            { children }
        </UserContext.Provider>
    )
}