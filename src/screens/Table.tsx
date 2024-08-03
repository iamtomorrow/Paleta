import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { library } from "../../data/data"

export const Table = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />

            <ScrollView
            style={{
                width: "100%",
                height: "auto",
                padding: 14
            }}>
                <View style={{
                    width: "100%",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#000000"
                    }}>Altura de tom</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#000000"
                    }}>Fundo de clareamento</Text>
                </View>

                <View style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {
                        library &&
                        library.map(( item ) => (
                            <View style={{
                                width: "100%",
                                height: "auto",
                                marginTop: 10,
                                marginBottom: 10,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                                // backgroundColor: "red"
                            }}>

                                <TouchableOpacity style={{
                                    width: "50%",
                                    height: 30,
                                    backgroundColor: item.colorCode
                                }}>

                                </TouchableOpacity>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 14,
                                    fontWeight: "500",
                                    marginRight: 10,
                                    marginLeft: 10,
                                }}>{ item.base }</Text>

                                <TouchableOpacity style={{
                                    width: "50%",
                                    height: 30,
                                    backgroundColor: item.lighteningColor[0].colorCode
                                }}>

                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}