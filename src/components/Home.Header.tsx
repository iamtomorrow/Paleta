
import { Ionicons } from "@expo/vector-icons"
import { Image, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { HeaderButton } from "./Header.Button"
import { useNavigation } from "@react-navigation/native"

export const Header = ( ) => {
    const navigation = useNavigation( );

    const updateContextAndNavigate = ( route: string ) => {
        navigation.navigate({ name: route } as never );
    }

    const toggleMenu = ( ) => {

    }

    return (
        <View style={{
            width: "100%",
            height: 110,
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
                    <TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <Ionicons 
                            name={"menu-sharp"} 
                            size={ 24 }
                            color={"#000000"}
                        />
                    </TouchableOpacity> 
                    <Image 
                        style={{
                            width: 100,
                            height: 30,
                        }}
                        source={require("../../assets/images/logo.png")}
                    />
                    <TouchableOpacity 
                    onPress={ ( ) => updateContextAndNavigate("Search") }
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <Ionicons 
                            name={"search-sharp"} 
                            size={ 24 }
                            color={"#000000"}
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}