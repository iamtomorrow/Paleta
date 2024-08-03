
import Icon from "react-native-remix-icon"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Dimensions, Text, TouchableOpacity } from "react-native"

interface HomeCardProps {
    icon: string,
    name: string
    description: string
}

export const HomeCard = ({ icon, name, description }: HomeCardProps ) => {
    const navigation = useNavigation( );

    const updateContextAndNavigate = ( route: string ) => {
        navigation.navigate({ name: route } as never);
    }

    return (
        <TouchableOpacity 
        onPress={ () => updateContextAndNavigate(
            name === "Biblioteca" ? "Library" : "Table"
        ) }
        style={{
            width: Dimensions.get("window").width / 2.2,
            marginLeft: 10,
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 10,
            backgroundColor: "#ffffff",
            marginTop: 10,

            elevation: 16,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffset: { width: 10, height: 60 },
        }}>
            <Icon 
                name={ icon }
                color={"rgba(0, 0, 0, 1)"}
                size={36}
            />
            <Text style={{
                color: "#000000",
                fontSize: 18,
                fontWeight: "500"
            }}>{ name }</Text>
            {/* <Text style={{
                color: "#000000",
                fontSize: 10,
                fontWeight: "light",
                width: "100%",
                // backgroundColor: "red"
            }}>{  }</Text> */}

            <MaterialIcons
                name="arrow-forward"
                color={"#000000"}
                size={22}
            />
        </TouchableOpacity>
    )
}