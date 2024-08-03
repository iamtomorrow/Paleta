
import { Ionicons } from "@expo/vector-icons"
import { Image, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { HeaderButton } from "./Header.Button"
import { useNavigation } from "@react-navigation/native"
import Icon from "react-native-remix-icon"

export const LibraryHeader = ( ) => {
    const navigation = useNavigation( );

    const updateContextAndNavigate = ( route: string ) => {
        navigation.navigate({ name: route } as never );
    }

    return (
        <View style={{
            width: "100%",
            height: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red"
            backgroundColor: "rgba(0, 0, 0, 0)"
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
                    <TouchableOpacity 
                    onPress={ ( ) => navigation.goBack( ) }
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <Icon 
                            name="arrow-left-line"
                            color="#000000"
                            size={24}
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
                    onPress={ ( ) => updateContextAndNavigate("Favorites") }
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <Icon 
                            name="heart-line"
                            color="#000000"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}