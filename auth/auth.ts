
import AsyncStorage from "@react-native-async-storage/async-storage"
const TOKEN = "jh4dZsBhwCKXYZJFS4kj8XMutXTllal3Qe8hDbjjWAWQZfAeZpaPoY7dmtzCHvyFhoEsBX5KIG"

export const Auth = {
    getToken: async ( ) => {
        const token = await AsyncStorage.getItem("token");
        return token ? token : "";
    },

    authenticateToken: async ( token: string ) => {
        if ( token === JSON.stringify(TOKEN) ) {
            return true;
        }
        return false;
    },

    removeToken: async ( ) => {
        await AsyncStorage.removeItem("token");
    },

    setUserByName: async ( name: string ) => {
        const user = { name, token: TOKEN, }

        await AsyncStorage.setItem("token", JSON.stringify("jh4dZsBhwCKXYZJFS4kj8XMutXTllal3Qe8hDbjjWAWQZfAeZpaPoY7dmtzCHvyFhoEsBX5KIG"));
        await AsyncStorage.setItem("user", JSON.stringify( user ));
    },

    removeUser: async ( ) => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
    },

    getUser: async ( ) => {
        let user = await AsyncStorage.getItem("user");
        return user
        ? JSON.parse(user)
        : ""
    },
}