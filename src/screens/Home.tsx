
import { ScrollView, Text, View, Image, Dimensions, Pressable, TouchableOpacity } from "react-native"
import { Header } from "../components/Home.Header"
import { HomeCard } from "../components/Home.Card"
import { useCallback, useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import Icon from "react-native-remix-icon"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { NavigationContext } from "../../contexts/NavigationContext"
import { LinearGradient } from "expo-linear-gradient"

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
                    height: 220,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                    // backgroundColor: "green"
                }}>
                    <LinearGradient 
                    colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 1)"]} 
                    start={{ x: 1, y: 0 }} end={{ x: 0, y: .8 }}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                    }}>
                        <Image 
                            source={{ uri: "https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                            style={{
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                                borderRadius: 20,
                            }}
                        />
                    </LinearGradient>

                    <View style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        paddingLeft: 20,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                        // backgroundColor: "red"
                    }}>
                        <Text style={{
                            color: "#ffffff",
                            fontSize: 26,
                            fontWeight: "500"
                        }}>Descubra seu tom</Text>
                        <Text style={{
                            marginTop: 4,
                            color: "rgba(256, 256, 256, 0.9)",
                            width: "70%",
                            fontSize: 12,
                        }}>Com nossa tecnologia de segmentação você descobre sua cor de cabelo e mais.</Text>

                        <Pressable style={{
                            maxWidth: "50%",
                            marginTop: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 8,
                            paddingBottom: 8,
                            borderWidth: 1,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 100,
                            borderColor: "rgba(256, 256, 256, 0.9)",
                        }}>
                            <Text style={{
                                color: "rgba(256, 256, 256, 0.9)",
                                fontSize: 12,
                                marginRight: 6,
                            }}>Saber mais</Text>
                            <Icon 
                                name="arrow-right-line"
                                size={20}
                                color="#ffffff"
                            />
                        </Pressable>
                    </View>
                </View>
                
                <View style={{
                    width: "100%",
                    height: "auto",
                    // backgroundColor: "blue",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}>
                    <HomeCard description="" icon="book-open-fill" title="Library" name="Biblioteca" />
                    <HomeCard description="" icon="apps-fill" title="Table" name="Tabela" />
                    <HomeCard description="" icon="image-fill" title="Galery" name="Galeria" />
                    <HomeCard description="" icon="chat-poll-fill" title="Quiz" name="Quiz" />
                    <HomeCard description="" icon="camera-lens-fill" title="Circle" name="Círculo" />
                </View>
            </ScrollView>
        </View>
    )
}
