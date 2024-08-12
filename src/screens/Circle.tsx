
import { Dimensions, View, Text } from "react-native"
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
                <View style={{
                    width: "100%",
                    height: "100%",
                    borderWidth: 1,
                    borderRadius: Dimensions.get("window").width / 2.4,
                    borderColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                }}>
                    <ColorTriangle 
                        title="blue"
                        color="#0000FF"
                        rotation="0deg"
                        xPosition={ Dimensions.get("window").width / 2.4 - 50 }
                        yPosition={ -50 }
                    />
                    <ColorTriangle 
                        title="red"
                        color="rgb(256, 0, 0)"
                        rotation="0deg"
                        xPosition={ 0 }
                        yPosition={ Dimensions.get("window").width / 2.4 }
                    />
                    <ColorTriangle 
                        title="yellow"
                        color="yellow"
                        rotation="0deg"
                        xPosition={ Dimensions.get("window").width / 2.4 + 60 }
                        yPosition={ Dimensions.get("window").width / 2.4 }
                    />

                    {/* Secondary colors */}
                    <ColorTriangle 
                        title="violet"
                        color="#7F00FF"
                        rotation="180deg"
                        xPosition={ 0 }
                        yPosition={ Dimensions.get("window").width / 5.6 }
                    />
                    <ColorTriangle 
                        title="green"
                        color="rgb(0, 256, 0)"
                        rotation="180deg"
                        xPosition={ Dimensions.get("window").width / 2.4 + 60 }
                        yPosition={ Dimensions.get("window").width / 5.6 }
                    />
                    <ColorTriangle 
                        title="orange"
                        color="#FFA500"
                        rotation="180deg"
                        xPosition={ Dimensions.get("window").width / 2.4 - 50 }
                        yPosition={ Dimensions.get("window").width / 1.2 - 50 }
                    />

                    {/* thirdy colors */}
                    <ColorTriangle 
                        title="green-blue"
                        color="#0D98BA"
                        rotation="30deg"
                        xPosition={ Dimensions.get("window").width / 2.4 + 50 }
                        yPosition={ -50 }
                    />
                    <ColorTriangle 
                        title="beige"
                        color="#e8e9d7"
                        rotation="90deg"
                        xPosition={ Dimensions.get("window").width / 1.2 - 40 }
                        yPosition={ Dimensions.get("window").width / 5.6 + 50 }
                    />
                    <ColorTriangle 
                        title="yellow-orange"
                        color="#F6A001"
                        rotation="145deg"
                        xPosition={ Dimensions.get("window").width / 2.4 + 50 }
                        yPosition={ Dimensions.get("window").width / 1.2 - 50 }
                    />
                </View>
            </View>
        </View>
    )
}