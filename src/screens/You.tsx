
import { Text, TouchableOpacity, View } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigation } from "@react-navigation/native"

export const You = ( ) => {
    const navigation = useNavigation( );
    const UserContxt = useContext( UserContext );

    const updateContextAndNavigate = ( route: string ) => {
        UserContxt?.removeUser( );
        navigation.navigate({ name: route } as never);
    }

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <LibraryHeader />
            
            <Text style={{
                color: "red"
            }}>Olá, { UserContxt?.user?.name }</Text>

            <TouchableOpacity
            onPress={ ( ) => updateContextAndNavigate("Preload") }>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}