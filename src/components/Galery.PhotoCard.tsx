
import { Dimensions, Image, View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-remix-icon"

interface PhotoCardProps {
    id: string
    title: string
    url: string
    tags: string[]
}

export const PhotoCard = ({ id, title, url, tags }: PhotoCardProps ) => {
    return (
        <View style={{
            width: Dimensions.get("window").width / 2 - 30,
            height: 260,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginLeft: 14,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 30,
            // backgroundColor: "blue"
        }}>
            <Image 
                style={{
                    width: "100%",
                    height: "80%",
                    borderRadius: 20,
                }}
                source={{ uri: url }}
            />
            <View style={{
                width: "100%",
                height: 60,
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "red",
                paddingTop: 8,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    {
                        tags.map((item) => (
                            <Text style={{
                                fontSize: 10,
                                fontWeight: "500"
                            }}> #{item}</Text>
                        ))
                    }
                </View>
                <TouchableOpacity 
                onPress={ ( ) => {} }
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.2)",
                    // backgroundColor: "#000"
                }}>
                    <Icon 
                        name="heart-line"
                        color="#000000"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}