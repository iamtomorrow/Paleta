import { Text, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useCallback, useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"
import { useFocusEffect } from "@react-navigation/native"

export const Search = ( ) => {
    const NavigationContxt = useContext( NavigationContext );

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Search");
        }, [ ])
    )

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />

            <View style={{
                width: "100%",
                height: 60,
                paddingLeft: 16,
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "red"
            }}> 
                <Text style={{
                    fontSize: 24,
                }}>Pesquisar</Text>
            </View>
        </View>
    )
}