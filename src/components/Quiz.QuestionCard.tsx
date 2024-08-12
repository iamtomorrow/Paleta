
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

interface QuestionCardProps {
    _number: number
    title: string
    options: string[]
}

export const QuestionCard = ({ _number, title, options }: QuestionCardProps) => {
    return (
        <View style={{
            width: "90%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.015)",
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 20,
            paddingTop: 20,
            paddingBottom: 20,
        }}>
            <View style={{
                marginTop: 20,
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{
                    color: "#ffffff",
                    fontSize: 20,
                }}>{ _number }</Text>
            </View>

            <View style={{
                marginTop: 20,
                width: "100%",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 20,
                paddingRight: 20,
                // backgroundColor: "green"
            }}>
                <Text style={{
                    color: "#000000",
                    fontSize: 20,
                    textAlign: "center",
                }}>{ title }</Text>
            </View>

            <View style={{
                marginTop: 20,
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 20,
            }}>
                {
                    options &&
                    options.map((item) => (
                        <TouchableOpacity style={{
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingTop: 10,
                            paddingBottom: 10,
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: "rgba(0, 0, 0, 0.2)",
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 6,
                            marginRight: 6,
                            borderRadius: 20,
                        }}>
                            <Text style={{
                                color: "#000000",
                                fontSize: 16
                            }}>{ item }</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}