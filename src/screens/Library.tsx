
import { ScrollView, TextInput, View } from "react-native"
import { Header } from "../components/Home.Header"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

import { LibraryCard } from "../components/Library.Card"
import { LibraryHeader } from "../components/Library.Header"
import { useCallback, useContext, useEffect, useState } from "react"
import { ColorProps } from "../../Types/types"
import { LibraryContext } from "../../contexts/LibraryContext"
import { NavigationContext } from "../../contexts/NavigationContext"
import { useFocusEffect } from "@react-navigation/native"

export const Library = ( ) => {
    const LibraryContxt = useContext( LibraryContext );
    const NavigationContxt = useContext( NavigationContext );

    const [ query, setQuery ] = useState<string>("");
    const [ filteredLibrary, setFilteredLibrary ] = useState<ColorProps[]>([ ]);

    useFocusEffect(
        useCallback(( ) => {
            NavigationContxt.updateRoute("Library");
            // LibraryContxt.getLibrary( );
            // setFilteredLibrary( LibraryContxt.library );
        }, [ ])
    )

    useEffect(( ) => {
        LibraryContxt.getLibrary( );
    }, [ ]);

    useEffect(( ) => {
        let filter = LibraryContxt.library.filter((item) => {
            return item.name.includes(query) || item.base.includes(query);
        })
        setFilteredLibrary( filter );
    }, [ query ])

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
                // zIndex: +30,
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
                            placeholder="Pesquisar por cor"
                            value={ query }
                            onChangeText={ (text) => setQuery(text) } 
                            placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                            style={{
                                paddingLeft: 10,
                                paddingRight: 10,
                                flex: 1,
                                fontWeight: "500"
                            }}>
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
                        filteredLibrary &&
                        filteredLibrary.map((item, index) => (
                            <LibraryCard 
                                id={ item.id }
                                key={ item.key }
                                base={ item.base }
                                name={ item.name }
                                sample={ item.sample }
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