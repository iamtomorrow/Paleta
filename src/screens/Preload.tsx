import { useContext, useEffect } from "react"
import { Dimensions, Image, Text, View } from "react-native"
import { Auth } from "../../auth/auth";
import { useNavigation } from "@react-navigation/native";
import { NavigationContext } from "../../contexts/NavigationContext";

export const Preload = ( ) => {
    const navigation = useNavigation( );
    const NavigationContxt = useContext( NavigationContext );

    useEffect(( ) => {
        const checkToken = async ( ) => {
            const token = await Auth.getToken( );

            if ( token ) {
                let authToken = await Auth.authenticateToken( token );

                if ( authToken ) {
                    NavigationContxt.updateRoute("Home");
                    navigation.reset({ index: 1, routes: [{ name: "Home" }]} as never);
                } else {
                    Auth.removeToken( );
                    NavigationContxt.updateRoute("Login");
                    navigation.reset({ index: 1, routes: [{ name: "Login" }] } as never);
                }
            } else {
                console.log("WRONG");
                NavigationContxt.updateRoute("Login");
                navigation.reset({ index: 1, routes: [{ name: "Login"}] } as never);
            }
        }
        checkToken( );
    }, [ ]);

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Image 
                source={ require("../../assets/images/logo.png") }
                style={{
                    width: Dimensions.get("window").width / 2,
                    height: 70,
                }}
            />
        </View>
    )
}