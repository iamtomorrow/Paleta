
import { Ionicons } from "@expo/vector-icons"
import { Image, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { HeaderButton } from "./Header.Button"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-remix-icon"
import { useContext } from "react"
import { NavigationContext } from "../../contexts/NavigationContext"

export const LibraryHeader = ( ) => {
    const navigation = useNavigation( );
    const NavigationContxt = useContext( NavigationContext );

    const updateContextAndNavigate = ( route: string ) => {
        NavigationContxt.updateRoute(route);
        navigation.navigate({ name: route } as never );
    }

    const goBack = ( ) => {
        // console.log( "History: ", NavigationContxt.routeHistory );
        NavigationContxt.updateRoute( NavigationContxt.routeHistory[0] );
        navigation.goBack( );
    }

    return (
        <View style={{
            width: "100%",
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // zIndex: -3,
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

                    {/* <Text style={{
                        color: "red"
                    }}>{ NavigationContxt.currentRoute }</Text> */}

                    <TouchableOpacity 
                    onPress={ ( ) => updateContextAndNavigate("Favorites") }
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "rgba(0, 0, 0, 0.2)",
                        backgroundColor: "#000"
                    }}>
                        <Icon 
                            name="heart-line"
                            color="#ffffff"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}