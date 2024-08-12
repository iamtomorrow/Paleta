
import { useContext } from "react"
import { Image, TouchableOpacity, Text, Dimensions, View } from "react-native"
import { ColorContext } from "../../contexts/ColorContext"
import { useNavigation } from "@react-navigation/native"

interface LibraryCardProps {
    id: string
    base: string
    name: string
    sample: string
    icon: string
    colorCode: string
}

export const LibraryCard = ({ id, base, name, sample, icon, colorCode }: LibraryCardProps ) => {
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
            borderRadius: 20,
            marginLeft: 10,
            marginBottom: 30,

            elevation: 32,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOffset: { width: 10, height: 120 },
        }}>
            <Image 
                source={{ uri: sample }} 
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                }}
            />
            <View style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingBottom: 20,
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: "500",
                    textAlign: "center",
                    color: "#ffffff"
                }}>{ base } { name }</Text>
            </View>
        </TouchableOpacity>
    )
}
