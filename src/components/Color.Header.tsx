
import { ColorProps } from "../../Types/types"
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-remix-icon"
import { useFocusEffect } from "@react-navigation/native"
import { useContext, useEffect, useState, useCallback} from "react"
import { NavigationContext } from "../../contexts/NavigationContext"
import { FavoritesContext } from "../../contexts/FavoritesContext"
import { ColorContext } from "../../contexts/ColorContext"

export const ColorHeader = ( ) => {
    const [ favorites, setFavorites ] = useState<ColorProps[]>([]);

    const navigation = useNavigation( );
    const NavigationContxt = useContext( NavigationContext );
    const FavoritesContxt = useContext( FavoritesContext );
    const ColorContxt = useContext( ColorContext );

    const goBack = ( ) => {
        NavigationContxt.updateRoute("Library");
        navigation.navigate({ name: "Library" } as never);
    }

    useFocusEffect(
        useCallback(( ) => {
            setFavorites( FavoritesContxt?.favoriteColors as ColorProps[] );
        }, [ ])
    )

    const addToFavorites = ( color: ColorProps ) => {
        ColorContxt.checkFavorite( );

        if ( !ColorContxt.isFavorite ) {
            FavoritesContxt?.addToFavoriteColors( color );
        } else {
            FavoritesContxt?.removeFromFavoriteColors( color.key );
        }
        FavoritesContxt?.getFavoriteColors( )
    }


    return (
        <View style={{
            width: "100%",
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red"
            backgroundColor: "rgba(0, 0, 0, 0)"
        }}>
            <View style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: 16,
                paddingRight: 16,
                justifyContent: "space-between",
                //backgroundColor: "yellow",
                marginTop: StatusBar.currentHeight,
            }}>
                <View style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // backgroundColor: "green"
                }}>
                    <TouchableOpacity 
                    onPress={ goBack }
                    style={{
                        width: "auto",
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        flexDirection: "row",
                        paddingLeft: 12,
                        paddingRight: 16,
                        borderColor: "rgba(0, 0, 0, 0.2)"
                        // backgroundColor: "red"
                    }}>
                        <Icon 
                            name="arrow-left-line"
                            color="#000000"
                            size={20}
                        />
                        <Text style={{
                            marginLeft: 4,
                            color: "#000000",
                            fontSize: 12,
                            fontWeight: "500"
                        }}>Voltar</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    onPress={ ( ) => addToFavorites( ColorContxt.color as ColorProps ) }
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "rgba(0, 0, 0, 0.2)",
                        backgroundColor: `${ ColorContxt.isFavorite ? "#ffffff" : "#000000"}`
                    }}>
                        <Icon 
                            name="heart-line"
                            color={`${ ColorContxt.isFavorite ? "#000000" : "#ffffff"}`}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}