import { View, Image, Text, Alert, TouchableOpacity } from "react-native"
import { useCallback, useContext, useEffect, useState } from "react"
import { ColorContext } from "../../contexts/ColorContext"
import { NavigationContext } from "../../contexts/NavigationContext"
import { useFocusEffect } from "@react-navigation/native"
import { ColorHeader } from "../components/Color.Header"

export const Color = ( ) => {
    const [ expandBar, setExpandBar ] = useState<boolean>(false);
    const [ toggleIcon, setToggleIcon ] = useState<boolean>(false);
    const [ expandFirstColorBar, setExpandFirstColorBar ] = useState<boolean>(false);
    const [ expandColorBar, setExpandColorBar ] = useState<boolean>(false);

    const ColorContxt = useContext( ColorContext );
    const NavigationContxt = useContext( NavigationContext );

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Color");
        }, [ ])
    )

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
            <ColorHeader />
            
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
                height: "36%",
                borderTopEndRadius: 0,
                borderTopStartRadius: 0,
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
                    alignItems: "flex-start",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 26,
                        fontWeight: "500",
                        textAlign: "center",
                    }}>{ ColorContxt.color?.base } </Text>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 26,
                        textTransform: "uppercase",
                        textAlign: "center"
                    }}>{ ColorContxt.color?.name }</Text>
                </View>

                <View style={{
                    width: "100%",
                    height: "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    // backgroundColor: "blue"
                }}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 12,
                        fontWeight: "light"
                    }}>Fundo de clareamento</Text>
                    <TouchableOpacity 
                    onPress={  ( ) => setExpandFirstColorBar(prev => !prev)}
                    style={{
                        width: expandFirstColorBar ? 120 : 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 4,
                        marginLeft: 4,
                        backgroundColor: ColorContxt.color?.lighteningColor[0].colorCode
                    }}>

                    </TouchableOpacity>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 12
                    }}>{ ColorContxt.color?.lighteningColor[0].name }</Text>
                </View>

                <View style={{
                    width: "100%",
                    height: "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    // backgroundColor: "blue"
                }}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 12,
                        fontWeight: "light"
                    }}>Neutralizante: </Text>
                    <View style={{
                        width: "auto",
                        height: "auto",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        {
                            ColorContxt.color?.neutrals && 
                            ColorContxt.color.neutrals.map((item) => (
                                <View style={{
                                    width: "auto",
                                    height: 62,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    marginRight: 4,
                                    marginLeft: 4,
                                }}>
                                    <TouchableOpacity 
                                    onPress={ ( ) => setExpandColorBar(prev => !prev)}
                                    style={{
                                        width: expandColorBar ? 120 : 40,
                                        height: 40,
                                        borderRadius: 20,
                                        backgroundColor: item.colorCode
                                    }}>

                                    </TouchableOpacity>
                                    <Text style={{
                                        color: "#ffffff",
                                        fontSize: 12
                                    }}>{ item.name }</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}