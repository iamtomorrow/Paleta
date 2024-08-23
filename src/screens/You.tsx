
import { Text, TouchableOpacity, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useCallback, useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useFocusEffect, useNavigation } from "@react-navigation/native"

import Icon from "react-native-remix-icon"
import { NavigationContext } from "../../contexts/NavigationContext"

export const You = ( ) => {
    const navigation = useNavigation( );
    const UserContxt = useContext( UserContext );
    const NavigationContxt = useContext( NavigationContext );

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("You");
        }, [ ])
    )

    const updateContextAndNavigate = ( route: string ) => {
        UserContxt?.removeUser( );
        navigation.navigate({ name: route } as never);
    }

    useEffect(( ) => {
        UserContxt?.getUser( );
    }, [ ])

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />
            
            <View style={{
                width: "100%",
                height: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor: "blue",
            }}>
                <View style={{
                    width: 140,
                    height: 140,
                    borderRadius: 200,
                    backgroundColor: "rgba(0, 0, 0, 0.05)"
                }}>

                </View>
                <Text style={{
                    marginTop: 16,
                    color: "#000000",
                    fontSize: 20,
                    fontWeight: "500"
                }}>{ UserContxt?.user?.name }</Text>
            </View>

            <View style={{
                width: "100%",
                height: 100,
                display: "flex",
            }}>
                
            </View>

            <View style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 20
                // backgroundColor: "red"
            }}>
                <TouchableOpacity
                onPress={ ( ) => updateContextAndNavigate("Preload") }
                style={{
                    width: "90%",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <Icon 
                        name="download-line"
                        size={18}
                    />
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 14,
                        fontWeight: "500"
                    }}>Modo offline e downloads</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    width: "90%",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <Icon 
                        name="earth-line"
                        size={18}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500",
                        marginLeft: 10,
                    }}>Idioma</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    width: "90%",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <Icon 
                        name="shield-star-line"
                        size={18}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500",
                        marginLeft: 10,
                    }}>Privacidade</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={ ( ) => updateContextAndNavigate("Preload") }
                style={{
                    width: "90%",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>
                    <Icon 
                        name="logout-box-line"
                        size={18}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500",
                        marginLeft: 10,
                    }}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}