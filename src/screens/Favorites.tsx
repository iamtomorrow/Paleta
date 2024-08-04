
import { Text, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useContext } from "react"
import { FavoritesContext } from "../../contexts/FavoritesContext"
import { LibraryCard } from "../components/Library.Card"

export const Favorites = ( ) => {
    const FavoritesContxt = useContext( FavoritesContext );

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
                display: "flex",
                justifyContent: "center",
                paddingLeft: 20,
            }}>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 20,
                }}>Seus favoritos</Text>
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
                            icon={ item.icon }
                            colorCode={ item.colorCode }
                        />
                    ))
                }
            </View>
        </View>
    )
}