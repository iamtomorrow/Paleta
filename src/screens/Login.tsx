

import { useContext, useEffect, useState } from "react"
import { Image, View, Dimensions, StatusBar, TouchableOpacity, Text, TextInput } from "react-native"
import { NavigationContext } from "../../contexts/NavigationContext"
import Icon from "react-native-remix-icon"
import { Auth } from "../../auth/auth"
import { useNavigation } from "@react-navigation/native"
import { UserContext } from "../../contexts/UserContext"

export const Login = ( ) => {
    const navigation = useNavigation( );
    const NavigationContxt = useContext(NavigationContext );
    const UserContxt = useContext( UserContext );

    const [ name, setName ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    const [ loginBar, setLoginBar ] = useState<boolean>(true);
    const [ byLogin, setByLogin ] = useState<boolean>(false);
    const [ byEnter, setByEnter ] = useState<boolean>(false);
    const [ secureEntry, setSecureEntry ] = useState<boolean>(true);

    useEffect(( ) => {
        NavigationContxt.updateRoute("Login");   
    })

    const authByLogin = ( ) => {
        if ( name !== "" && password !== "" ) {

        }
    }

    const authByEnter = async ( ) => {
        if ( name !== "" ) {
            UserContxt?.addUser( name );
            navigation.reset({ index: 1, routes: [{ name: "Preload" }]} as never );
        }
    }

    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#ffffff"
        }}>
            <View style={{
                width: "100%",
                height: 160,
                // backgroundColor: "yellow",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Image 
                    source={ require("../../assets/images/logo.png") }
                    style={{
                        marginTop: StatusBar.currentHeight,
                        width: Dimensions.get("window").width / 3,
                        height: 50,
                    }}
                />
            </View>

            <View style={{
                width: "100%",
                height: "auto",
                padding: 14,
                // backgroundColor: "blue"
            }}>
                {
                    byLogin &&
                    <View style={{
                        width: "100%",
                        height: "auto",
                        padding: 30,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 12,
                            textTransform: "uppercase",
                            marginBottom: 20,
                        }}>Faça login no aplicativo</Text>

                        <View style={{
                            width: "100%",
                            height: 60,
                            borderRadius: 10,
                            marginTop: 10,
                            marginBottom: 10,
                            backgroundColor: "rgba(0, 0, 0, 0.03)"
                        }}>
                            <TextInput
                            placeholder="Email ou nome"
                            placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                            style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                flex: 1,
                                fontWeight: "500"
                            }}>

                            </TextInput>
                        </View>

                        <View style={{
                            width: "100%",
                            height: 60,
                            borderRadius: 10,
                            marginTop: 10,
                            marginBottom: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.03)"
                        }}>
                            <TextInput
                            secureTextEntry={ secureEntry }
                            placeholder="Senha"
                            placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                            style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                flex: 1,
                                fontWeight: "500"
                            }}>

                            </TextInput>

                            <TouchableOpacity 
                            onPress={ ( ) => setSecureEntry(prev => !prev) }
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // backgroundColor: "red",
                                marginRight: 10,
                            }}>
                                {
                                    secureEntry
                                    ? <Icon 
                                        name="eye-2-line"
                                        size={20}
                                    />
                                    : <Icon 
                                        name="eye-close-line"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: "100%",
                            height: 80,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            // backgroundColor: "red"
                        }}>
                            <TouchableOpacity 
                            onPress={ ( ) => setLoginBar(true) }
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#000000",
                                marginRight: 10,

                                elevation: 16,
                                shadowColor: "rgba(0, 0, 0, 0.2)",
                                shadowOffset: { width: 10, height: 60 },
                            }}>
                                <Icon 
                                    name="close-line"
                                    size={20}
                                    color="#ffffff"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#ffffff",
                                marginRight: 10,

                                elevation: 16,
                                shadowColor: "rgba(0, 0, 0, 0.2)",
                                shadowOffset: { width: 10, height: 60 },
                            }}>
                                <Icon 
                                    name="arrow-right-line"
                                    size={20}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {
                    byEnter &&
                    <View style={{
                        width: "100%",
                        height: "auto",
                        padding: 30,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 12,
                            textTransform: "uppercase",
                            marginBottom: 20,
                        }}>Apenas entre</Text>

                        <View style={{
                            width: "100%",
                            height: 60,
                            borderRadius: 10,
                            marginTop: 10,
                            marginBottom: 10,
                            backgroundColor: "rgba(0, 0, 0, 0.03)"
                        }}>
                            <TextInput
                            placeholder="Qual seu nome?"
                            placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                            style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                flex: 1,
                                fontWeight: "500"
                            }}
                            value={ name }
                            onChangeText={ (text) => setName(text)}>

                            </TextInput>
                        </View>

                        <View style={{
                            width: "100%",
                            height: 80,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            // backgroundColor: "red"
                        }}>
                            <TouchableOpacity 
                                onPress={ ( ) => setLoginBar(true) }
                                style={{
                                width: 50,
                                height: 50,
                                borderRadius: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#000000",
                                marginRight: 10,

                                elevation: 16,
                                shadowColor: "rgba(0, 0, 0, 0.2)",
                                shadowOffset: { width: 10, height: 60 },
                            }}>
                                <Icon 
                                    name="close-line"
                                    size={20}
                                    color="#ffffff"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={ authByEnter }
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#ffffff",
                                marginRight: 10,

                                elevation: 16,
                                shadowColor: "rgba(0, 0, 0, 0.2)",
                                shadowOffset: { width: 10, height: 60 },
                            }}>
                                <Icon 
                                    name="arrow-right-line"
                                    size={20}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>

            {
                loginBar &&
                <View style={{
                    width: "100%",
                    height: 100,
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}>
                    <TouchableOpacity 
                    onPress={ ( ) => { 
                        setByLogin(true);
                        setByEnter(false);
                        setLoginBar(false);
                    }}
                    style={{
                        width: Dimensions.get("window").width / 2.2,
                        backgroundColor: "#000000",
                        height: 46,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
    
                        elevation: 16,
                        shadowColor: "rgba(0, 0, 0, 0.2)",
                        shadowOffset: { width: 10, height: 60 },
                    }}>
                        <Text style={{
                            color: "#ffffff",
                            fontWeight: "500",
                            fontSize: 12,
                        }}>Login</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity 
                    onPress={ ( ) => { 
                        setByLogin(false);
                        setByEnter(true);
                        setLoginBar(false);
                    }}
                    style={{
                        width: Dimensions.get("window").width / 2.2,
                        backgroundColor: "#ffffff",
                        height: 46,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
    
                        elevation: 16,
                        shadowColor: "rgba(0, 0, 0, 0.2)",
                        shadowOffset: { width: 10, height: 60 },
                    }}>
                        <Text style={{
                            color: "#000000",
                            fontWeight: "500",
                            fontSize: 12,
                        }}>Apenas entrar</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}