import { View, Image, Text } from "react-native"
import { Header } from "../components/Home.Header"
import { useCallback, useContext, useEffect, useState } from "react"
import { ColorContext } from "../../contexts/ColorContext"
import { LibraryHeader } from "../components/Library.Header"
import Icon from "react-native-remix-icon"
import { FavoritesContext } from "../../contexts/FavoritesContext"
import { NavigationContext } from "../../contexts/NavigationContext"
import { useFocusEffect } from "@react-navigation/native"

export const Color = ( ) => {
    const [ expandBar, setExpandBar ] = useState<boolean>(false);
    const [ toggleIcon, setToggleIcon ] = useState<boolean>(false);

    const ColorContxt = useContext( ColorContext );
    // const FavoritesContxt = useContext( FavoritesContext );
    const NavigationContxt = useContext( NavigationContext );

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Color");
        }, [ ])
    )

    useEffect(( ) => {
        console.log( ColorContxt.color ); 
    }, [ ]);

    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />
            
            <View style={{
                width: "100%",
                height: "100%",
                zIndex: -1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "absolute",
            }}>

                <Image 
                    source={{ uri: ColorContxt.color?.examples[0] }}
                    style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        // zIndex: 3,
                    }}
                />
            </View>

            <View 
            style={{
                width: "100%",
                height: "30%",
                borderTopEndRadius: 40,
                borderTopStartRadius: 40,
                borderBottomStartRadius: 0,
                borderBottomEndRadius: 0,
                // marginBottom: 20,
                backgroundColor: "rgba(0, 0, 0, 1)",
                padding: 20,
            }}>
                <View style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 26,
                        fontWeight: "500"
                    }}>{ ColorContxt.color?.base } </Text>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 26,
                        textTransform: "uppercase",
                    }}>{ ColorContxt.color?.name }</Text>
                </View>

                <View style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "blue"
                }}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 12,
                        fontWeight: "light"
                    }}>Fundo de clareamento </Text>
                    <View style={{
                        width: "50%",
                        height: 14,
                        backgroundColor: ColorContxt.color?.lighteningColor[0].colorCode
                    }}>

                    </View>
                </View>

                
                <View style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "blue"
                }}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 12,
                        fontWeight: "light"
                    }}>Neutralizante: </Text>
                    <View style={{
                        width: "50%",
                        height: 14,
                        backgroundColor: ColorContxt.color?.lighteningColor[0].colorCode
                    }}>

                    </View>
                </View>
            </View>
        </View>
    )
}