import { Text, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"

export const Search = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />

            <Text>Search</Text>
        </View>
    )
}