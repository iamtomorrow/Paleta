
import { Text, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useCallback, useContext } from "react"
import { FavoritesContext } from "../../contexts/FavoritesContext"
import { LibraryCard } from "../components/Library.Card"
import { NavigationContext } from "../../contexts/NavigationContext"
import { useFocusEffect } from "@react-navigation/native"

export const Favorites = ( ) => {
    const FavoritesContxt = useContext( FavoritesContext );
    const NavigationContxt = useContext( NavigationContext );

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Favorites");
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
                }}>Favoritos</Text>
            </View>

            <View style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 16,
            }}>
                {
                    FavoritesContxt?.favorites &&
                    FavoritesContxt?.favorites.map(( item ) => (
                        <LibraryCard 
                            id={ item.key }
                            base={ item.base }
                            name={ item.name }
                            sample={ item.sample }
                            icon={ item.icon }
                            colorCode={ item.colorCode }
                        />
                    ))
                }
            </View>
        </View>
    )
}