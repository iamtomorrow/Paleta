
import { ScrollView, Text, View, Image, Dimensions, Pressable, TouchableOpacity } from "react-native"
import { Header } from "../components/Home.Header"
import { HomeCard } from "../components/Home.Card"
import { useCallback, useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import Icon from "react-native-remix-icon"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { NavigationContext } from "../../contexts/NavigationContext"

export const Home = ( ) => {
    
    const NavigationContxt = useContext( NavigationContext );
    const navigation = useNavigation( );

    useEffect(( ) => {
        NavigationContxt.updateRoute("Home");
    }, [ ])

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Home");
        }, [ ])
    )

    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff"
        }}>
            <Header />

            <ScrollView 
            style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "red"
            }}>
                <View style={{
                    width: "100%",
                    height: Dimensions.get("window").height - 200,
                    flexDirection: "column",
                    padding: 20,
                    alignItems: "flex-start",
                    justifyContent: "center"
                    // backgroundColor: "yellow"
                }}>
                    <Text style={{
                        width: "100%",
                        fontSize: 70,
                        color: "#000000",
                        display: "flex",
                        flexWrap: "wrap",
                        fontWeight: "400",
                        letterSpacing: -2,
                    }}>
                        Explore a Biblioteca
                    </Text>
                    <Text style={{
                        width: "100%",
                        fontSize: 16,
                        color: "#000000",
                        display: "flex",
                        flexWrap: "wrap"
                    }}>
                        Obtenha informações sobre tons e fundos de clareamento.
                    </Text>
                    <TouchableOpacity 
                    onPress={ ( ) => navigation.navigate({ name: "Library" } as never)}
                    style={{
                        width: "50%",
                        height: 46,
                        borderWidth: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 20,
                        borderRadius: 30,
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#000000",
                            marginRight: 6,
                        }}>Acessar</Text>
                        <Icon 
                            name="arrow-right-line"
                            size={18}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: "100%",
                    height: Dimensions.get("window").height - 200,
                    flexDirection: "column",
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center"
                    // backgroundColor: "yellow"
                    // padding: 14,
                }}>
                    <Text style={{
                        width: "100%",
                        fontSize: 70,
                        color: "#000000",
                        display: "flex",
                        flexWrap: "wrap",
                        fontWeight: "400",
                        letterSpacing: -2,
                    }}>
                        Que Tal Fazer o Nosso Quiz?
                    </Text>
                    <Text style={{
                        width: "100%",
                        fontSize: 16,
                        color: "#000000",
                        display: "flex",
                        flexWrap: "wrap"
                    }}>
                        Descubra diferentes opções e aplique-as em sua coloração.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
