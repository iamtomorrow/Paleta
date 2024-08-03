
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Search } from "../screens/Search";
import { Favorites } from "../screens/Favorites";
import { You } from "../screens/You";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-remix-icon"
import { Library } from "../screens/Library";
import { Color } from "../screens/Color";
import { Table } from "../screens/Table";
import { Preload } from "../screens/Preload";
import { Login } from "../screens/Login";
import { NavigationContext } from "../../contexts/NavigationContext";

const Stack = createNativeStackNavigator( );
const Tabs = createBottomTabNavigator( );

export const HomeStack = ( ) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Preload" component={ Preload }/>
            <Stack.Screen name="Login" component={ Login }/>
            <Stack.Screen name="Home" component={ Home }/>
            <Stack.Screen name="Search" component={ Search }/>
            <Stack.Screen name="Favorites" component={ Favorites } />
            <Stack.Screen name="You" component={ You } />
        </Stack.Navigator>
    )
}

export const AppNavigator = ( ) => {
    const NavigationContxt = useContext( NavigationContext );

    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        height: NavigationContxt.currentRoute === "Login" ||
                                NavigationContxt.currentRoute === "Preload" 
                                ? 0
                                : 60,
                        display: NavigationContxt.currentRoute === "Login" ||
                                NavigationContxt.currentRoute === "Preload" 
                                ? "none"
                                : "flex",
                        flexDirection: "row",
                        // alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 0,
                        borderColor: "rgba(0, 0, 0, 0)",
                    },
                    tabBarIcon: ( ) => {
                        let iconName: any;

                        if ( route.name === "Home" ) { iconName = "home-line" }
                        else if ( route.name === "Search" ) { iconName = "search-line" }
                        else if ( route.name === "Favorites" ) { iconName = "heart-line" }
                        else if ( route.name === "You" ) { iconName = "user-6-line" }

                        return <Icon 
                                name={ iconName }
                                size={ 24 }
                                color={"#000000"}
                            />
                    }
                })}
            >
                <Tabs.Screen 
                    name="Home" component={ HomeStack } 
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 10,
                            color: "#000000",
                            fontWeight: "600",
                            marginBottom: 10,
                        }
                    }}/>
                <Tabs.Screen 
                    name="Preload" component={ Preload }
                    options={{
                        tabBarItemStyle: {
                            display: "none"
                        }
                    }}
                />
                <Tabs.Screen 
                    name="Login" component={ Login }
                    options={{
                        tabBarItemStyle: {
                            display: "none"
                        }
                    }}
                />
                <Tabs.Screen 
                    name="Search" component={ Search } 
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 10,
                            color: "#000000",
                            fontWeight: "600",
                            marginBottom: 10,
                        }
                    }}/>
                <Tabs.Screen 
                    name="Favorites" component={ Favorites } 
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 10,
                            color: "#000000",
                            fontWeight: "600",
                            marginBottom: 10,
                        }
                    }}/>
                <Tabs.Screen 
                    name="You" component={ You } 
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 10,
                            color: "#000000",
                            fontWeight: "600",
                            marginBottom: 10,
                        }
                    }}/>
                <Tabs.Screen 
                    name="Library" component={ Library } 
                    options={{
                        tabBarItemStyle: {
                            display: "none"
                        },
                    }}/>
                <Tabs.Screen 
                    name="Color" component={ Color } 
                    options={{
                        tabBarItemStyle: {
                            display: "none"
                        },
                    }}/>
                <Tabs.Screen 
                    name="Table" component={ Table } 
                    options={{
                        tabBarItemStyle: {
                            display: "none"
                        },
                    }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}