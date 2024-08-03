
import { ScrollView, TextInput, View } from "react-native"
import { Header } from "../components/Home.Header"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

import { library } from "../../data/data"
import { LibraryCard } from "../components/Library.Card"
import { LibraryHeader } from "../components/Library.Header"

export const Library = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            {/* <Header /> */}
            <LibraryHeader />

            <ScrollView
            style={{
                width: "100%",
                height: "auto",
            }}>
                <View style={{
                    width: "100%",
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <View style={{
                        width: "90%",
                        height: 46,
                        borderRadius: 30,
                        display: "flex",
                        paddingLeft: 16,
                        paddingRight: 16,
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.025)"
                    }}>
                        <Ionicons 
                            name="search-sharp" 
                            color={"gray"}
                            size={25}
                        />
                        <TextInput
                            style={{
                                flex: 1,
                                height: "100%",
                                // backgroundColor: "green",
                                marginLeft: 10,
                            }}
                            placeholder="Procure por cores"
                            placeholderTextColor={"gray"}>
                        </TextInput>
                    </View>
                </View>

                <View style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 16,
                }}>
                    {
                        library &&
                        library.map((item, index) => (
                            <LibraryCard 
                                id={ item.key }
                                base={ item.base }
                                name={ item.name }
                                icon={ item.icon }
                                colorCode={ item.colorCode }
                            />
                        ))
                    }
                </View>

            </ScrollView>
        </View>
    )
}