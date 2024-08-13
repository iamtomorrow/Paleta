
import { View, Text, ScrollView } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useContext, useEffect } from "react"
import { GaleryContext } from "../../contexts/GaleryContext"
import { PhotoCard } from "../components/Galery.PhotoCard"

export const Galery = ( ) => {
    const GaleryContxt = useContext( GaleryContext );

    useEffect(( ) => {
        GaleryContxt?.updatePhotos( );
    }, [ ]);

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />

            <View style={{
                width: "100%",
                height: 60,
                paddingLeft: 16,
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "red"
            }}> 
                <Text style={{
                    fontSize: 24,
                }}>Galeria</Text>
            </View>

            <ScrollView style={{
                width: "100%",
                height: "auto"
            }}>
                <View style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center"
                }}>
                    {
                        GaleryContxt?.photos &&
                        GaleryContxt?.photos.map((item, index) => (
                            <PhotoCard
                                id={ item.id }
                                tags={ item.tags }
                                title={ item.title }
                                url={ item.url }
                                key={ item.id }
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}