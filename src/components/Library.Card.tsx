
import { useContext } from "react"
import { Image, TouchableOpacity, Text, Dimensions, View } from "react-native"
import { ColorContext } from "../../contexts/ColorContext"
import { useNavigation } from "@react-navigation/native"

interface LibraryCardProps {
    id: string
    base: string
    name: string
    icon: string
    colorCode: string
}

export const LibraryCard = ({ id, base, name, icon, colorCode }: LibraryCardProps ) => {
    const navigation = useNavigation( );
    const ColorContxt = useContext( ColorContext );

    const updateContextAndNavigate = ( route: string ) => {
        ColorContxt.updateColor( id );

        navigation.navigate({ name: route } as never);
    }

    return (
        <TouchableOpacity
        onPress={ ( ) => updateContextAndNavigate("Color") }
        style={{
            height: 220,
            width: Dimensions.get("window").width / 2.4,
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 18,
            borderRadius: 10,
            marginLeft: 10,
            marginTop: 10,

            elevation: 16,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffset: { width: 10, height: 60 },
        }}>
            <Image 
                width={90}
                height={120}
                source={{ uri: icon }} 
            />
            <Text style={{
                fontSize: 14,
                fontWeight: "500",
                textAlign: "center"
            }}>{ base } { name }</Text>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 10,
                backgroundColor: colorCode
            }}>

            </View>
        </TouchableOpacity>
    )
}
