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
                padding: 20
            }}>
                <View style={{
                    width: "100%",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        width: "50%",
                        height: "100%",
                        display: "flex",
                        alignItems:"center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: "#000000",
                        }}>Altura de tom</Text>
                    </View>
                    
                    <View style={{
                        width: "50%",
                        height: "100%",
                        display: "flex",
                        alignItems:"center",
                        justifyContent: "center",
                        // backgroundColor: "blue"
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: "#000000",
                        }}>Fundo de clareamento</Text>
                    </View>
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
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}>

                                <View style={{
                                    width: "50%",
                                    height: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: "blue"
                                }}>
                                    <TouchableOpacity style={{
                                        width: "100%",
                                        height: "70%",
                                        backgroundColor: item.colorCode
                                    }}>

                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "500"
                                    }}>{ item.name }</Text>
                                </View>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 14,
                                    fontWeight: "500",
                                    marginRight: 50,
                                    marginLeft: 50,
                                }}>{ item.base }</Text>

                                <View style={{
                                    width: "50%",
                                    height: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // backgroundColor: "blue"
                                }}>
                                    <TouchableOpacity style={{
                                        width: "100%",
                                        height: "70%",
                                        backgroundColor: item.lighteningColor[0].colorCode
                                    }}>

                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: "500"
                                    }}>{ item.lighteningColor[0].name }</Text>
                                </View>

                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}