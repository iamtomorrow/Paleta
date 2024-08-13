
import { Dimensions, View, Text, Image } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { ColorTriangle } from "../components/Circle.ColorTriangle"

export const Circle = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <LibraryHeader />

            <View style={{
                width: Dimensions.get("window").width / 1.2,
                height: Dimensions.get("window").width / 1.2,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image 
                    source={require("../../assets/images/star.png")}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </View>
        </View>
    )
}