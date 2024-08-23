
import Icon from "react-native-remix-icon"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "../../hooks/useTheme"

interface HomeCardProps {
    icon: string,
    title: string
    name: string
    description: string
}

export const HomeCard = ({ icon, title, name, description }: HomeCardProps ) => {
    const theme = useTheme({ theme: "default" });
    const navigation = useNavigation( );

    const updateContextAndNavigate = ( route: string ) => {
        navigation.navigate({ name: route } as never);
    }

    return (
        <TouchableOpacity 
        onPress={ () => updateContextAndNavigate(title) }
        style={{
            width: Dimensions.get("window").width / 3.6,
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
            borderRadius: 10,
            padding: 10,
            // backgroundColor: "blue",
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: 10,
        }}>
            <View style={{
                width: Dimensions.get("window").width / 4.2,
                height: Dimensions.get("window").width / 4.2,
                borderWidth: 0,
                borderColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme?.secondary.surface
            }}>
                <Icon 
                    name={ icon }
                    color={ theme?.primary.icon }
                />
            </View>

            <Text style={{
                marginTop: 10,
                color: theme?.primary.text,
                fontSize: 14,
                fontWeight: "400"
            }}>{ name }</Text>
        </TouchableOpacity>
    )
}