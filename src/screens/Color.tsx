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
    const FavoritesContxt = useContext( FavoritesContext );
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
            {/* <ScrollView
            style={{
                width: "100%",
                height: "auto",
            }}>
                <View style={{
                    width: "100%",
                    height: Dimensions.get("window").height / 2,
                    // backgroundColor: "green"
                }}>
                    <View style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        {
                            toggleIcon 
                            ? <Image 
                                source={{ uri: ColorContxt.color?.sample }} 
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                            :<Image 
                                source={{ uri: ColorContxt.color?.icon }} 
                                style={{
                                    width: "60%",
                                    height: "80%"
                                }}
                        />
                        }
                    </View>
                </View>

                <View style={{
                    width: "100%",
                    height: 60,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <TouchableOpacity 
                    onPress={ ( ) => setToggleIcon( prev => !prev ) }
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        // backgroundColor: "green",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10
                    }}>
                        <MaterialIcons 
                            name="arrow-back-ios"
                            size={20}
                            color={"#000000"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={ ( ) => setToggleIcon( prev => !prev ) }
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        // backgroundColor: "green",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 10
                    }}>
                        <MaterialIcons 
                            name="arrow-forward-ios"
                            size={20}
                            color={"#000000"}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    padding: 14,
                    // backgroundColor: "green"
                }}>
                    <View style={{
                        width: "100%",
                        height: 100,
                        // backgroundColor: "yellow"
                    }}>
                        <View style={{
                            width: "100%",
                            height: "auto",
                            paddingBottom: 10,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                color: "#000000",
                                fontSize: 60,
                                lineHeight: 60,
                                // backgroundColor: "red"
                            }}>{ ColorContxt.color?.base }</Text>
                            <Text style={{
                                fontWeight: "light",
                                color: "#000000",
                                fontSize: 24,
                                lineHeight: 24,
                                width: "50%",
                                marginLeft: 4,
                                // backgroundColor: "blue",
                                // marginLeft: 10,
                                display: "flex",
                                flexWrap: "wrap",
                                textTransform: "uppercase"
                            }}>{ ColorContxt.color?.name }</Text>

                        </View>
                    </View>

                    <View style={{
                        width: "100%",
                        height: "auto",
                        marginTop: 10,
                        marginBottom: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        // backgroundColor: "yellow"
                    }}>
                        
                        <TouchableOpacity 
                            onPress={ ( ) => setExpandBar(true) }
                            style={{
                                width: "50%",
                                height: 30,
                                borderRadius: 4,
                                backgroundColor: ColorContxt.color?.colorCode
                            }}>

                        </TouchableOpacity>

                        <View style={{
                            width: 20,
                        }}>

                        </View>

                        <Text style={{
                            color: "#000000",
                            fontSize: 12,
                            marginTop: 10,
                            marginBottom: 10,
                            fontWeight: "500"
                        }}>Fundo de clareamento</Text> 
                        <TouchableOpacity style={{
                            width: "50%",
                            height: 30,
                            borderRadius: 4,
                            backgroundColor: ColorContxt.color?.lighteningColor[0]?.colorCode
                        }}>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    width: "100%",
                    height: 420,
                    display: "flex",
                    justifyContent: "center",
                    // backgroundColor: "green",
                }}>
                    <ScrollView 
                    horizontal={true}
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingTop: 14,
                        paddingBottom: 14,
                        // padding: 14,
                    }}>
                        {
                            ColorContxt.color?.examples &&
                            ColorContxt.color.examples.map((item) => (
                                <Image 
                                    source={{ uri: item }} 
                                    height={400}
                                    width={400}
                                    style={{
                                        marginRight: 14,
                                        marginLeft: 14,
                                    }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{
                    width: "100%",
                    height: 120,
                    display: "flex",
                    padding: 14,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    // backgroundColor: "blue"
                }}>
                    <TouchableOpacity 
                    onPress={ ( ) => FavoritesContxt?.addToFavorites( ColorContxt.color as ColorProps ) }
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "50%",
                        minWidth: "45%",
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: "#000000"
                    }}>
                        <Text style={{
                            color: "#ffffff",
                            fontSize: 14,
                            marginRight: 6,
                        }}>Favoritar</Text>
                        <Icon 
                            name="heart-line"
                            size={18}
                            color="#ffffff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "50%",
                        minWidth: "45%",
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: "#000000"
                    }}>
                        <Text style={{
                            color: "#ffffff",
                            fontSize: 14,
                        }}>Ver mais</Text>
                        <MaterialIcons
                            name="arrow-forward"
                            color={"#ffffff"}
                            size={18}
                            style={{
                                marginLeft: 6,
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </ScrollView> */}
        </View>
    )
}