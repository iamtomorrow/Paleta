
import { Ionicons } from "@expo/vector-icons"
import { Image, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { HeaderButton } from "./Header.Button"
import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import Icon from "react-native-remix-icon"
import { NavigationContext } from "../../contexts/NavigationContext"

export const Header = ( ) => {
    const NavigationContxt = useContext( NavigationContext );
    const navigation = useNavigation( );

    const updateContextAndNavigate = ( route: string ) => {
        NavigationContxt.updateRoute(route);
        navigation.navigate({ name: route } as never );
    }

    const toggleMenu = ( ) => {

    }

    return (
        <View style={{
            width: "100%",
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red",
            // backgroundColor: "rgba(0, 0, 0, 0)"
        }}>
            <View style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: 12,
                paddingRight: 12,
                justifyContent: "space-between",
                // backgroundColor: "yellow",
                marginTop: StatusBar.currentHeight,
            }}>
                <View style={{
                    width: "100%",
                    
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // backgroundColor: "green"
                }}>
                    <Image 
                        style={{
                            width: 100,
                            height: 30,
                        }}
                        source={require("../../assets/images/logo.png")}
                    /> 
                    
                    {/* <Text style={{
                        color: "red"
                    }}>{ NavigationContxt.currentRoute }</Text> */}

                    <View style={{
                        width: "auto",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row-reverse",
                        // backgroundColor: "red"
                    }}>
                        <TouchableOpacity 
                        onPress={ ( ) => updateContextAndNavigate("Search") }
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            backgroundColor: "#000000"
                        }}>
                            <Icon 
                                name={"notification-line"} 
                                size={ 20 }
                                color={"#ffffff"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={ ( ) => updateContextAndNavigate("Search") }
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 6,
                            // backgroundColor: "red"
                        }}>
                            <Ionicons 
                                name={"search-sharp"} 
                                size={ 20 }
                                color={"#000000"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}