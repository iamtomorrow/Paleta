
import { ScrollView, Text, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useCallback, useContext, useEffect } from "react"
import { FavoritesContext } from "../../contexts/FavoritesContext"
import { LibraryCard } from "../components/Library.Card"
import { NavigationContext } from "../../contexts/NavigationContext"
import { useFocusEffect } from "@react-navigation/native"
import { PhotoCard } from "../components/Galery.PhotoCard"

export const Favorites = ( ) => {
    const FavoritesContxt = useContext( FavoritesContext );
    const NavigationContxt = useContext( NavigationContext );

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Favorites");
            FavoritesContxt?.getFavoriteColors( );
        }, [ ])
    )

    useEffect(( ) => {
        FavoritesContxt?.getFavoriteColors( );
        FavoritesContxt?.getFavoritePhotos( );
    }, [ ]);

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />

            <ScrollView style={{
                width: "100%",
                height: "auto"
            }}>
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
                flexDirection: "column",
                flexWrap: "wrap",
                padding: 16,
            }}>
                <View style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexWrap: "wrap"
                }}>
                    <View style={{
                        width: "100%",
                        height: 40,
                        display: "flex"
                    }}>
                        <Text style={{
                            fontSize: 18
                        }}>
                            { FavoritesContxt?.favoriteColors.length ? "Colors" : "" }
                        </Text>
                    </View>
                    <View>
                        {
                            FavoritesContxt?.favoriteColors &&
                            FavoritesContxt?.favoriteColors.map(( item ) => (
                                <LibraryCard 
                                    id={ item.id }
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

                <View style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexWrap: "wrap"
                }}>
                    <View style={{
                        width: "100%",
                        height: 40,
                        display: "flex"
                    }}>
                        <Text style={{
                            fontSize: 18
                        }}>
                            { FavoritesContxt?.favoritePhotos.length ? "Photos" : "" }
                        </Text>
                    </View>
                    <View>
                        {
                            FavoritesContxt?.favoritePhotos &&
                            FavoritesContxt?.favoritePhotos.map(( item ) => (
                                <PhotoCard 
                                    id={ item.id }
                                    tags={ item.tags }
                                    title={ item.title }
                                    url={ item.url }
                                    key={ item.id } 
                                />
                            ))
                        }
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}