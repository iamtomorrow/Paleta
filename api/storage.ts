
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorProps, GaleryPhotoProps } from "../Types/types";

const STORAGE_FAVORITE_PHOTOS_KEY = "FavoritePhotosContext";
const STORAGE_FAVORITE_COLORS_KEY = "FavoriteColorsContext";

export const Storage = {
    Vanish: {
        cleanFavorites: async ( ) => {
            try {
                await AsyncStorage.removeItem(STORAGE_FAVORITE_PHOTOS_KEY);
                await AsyncStorage.removeItem(STORAGE_FAVORITE_COLORS_KEY);
            } catch(err) {
                console.error("ERROR: ", err);
            }
        }
    },

    Favorites: {
        getFavoritePhotos: async ( ): Promise<GaleryPhotoProps[]> => {
            try {
                const favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_PHOTOS_KEY);

                if ( favorites ) {
                    return JSON.parse(favorites);
                } else {
                    return [];
                }
            } catch( err ) {
                console.log("ERROR trying to get Storage Favorite Photos Context.");
                return [];
            }
        },

        getFavoriteColors: async ( ): Promise<ColorProps[]> => {
            try {
                const favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_COLORS_KEY);

                if ( favorites ) {
                    // console.log("LETS GO: ", favorites);
                    return JSON.parse(favorites);
                } else {
                    return [];
                }
            } catch( err ) {
                console.log("ERROR trying to get Storage Favorite Colors Context.");
                return [];
            }
        },

        setFavoritePhotos: async ( ) => {
            try {
                const favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_PHOTOS_KEY);
                let updatedFavorites: any[] = favorites ? JSON.parse(favorites) : [];

                await AsyncStorage.setItem(STORAGE_FAVORITE_PHOTOS_KEY, JSON.stringify(updatedFavorites));
            } catch( err ) {
                console.error("ERROR trying to set Storage Favorite Photos Context.");
            }
        },

        setFavoriteColor: async ( ) => {
            try {
                const favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_COLORS_KEY);
                let updatedFavorites: any[] = favorites ? JSON.parse(favorites) : [];

                await AsyncStorage.setItem(STORAGE_FAVORITE_COLORS_KEY, JSON.stringify(updatedFavorites));
            } catch( err ) {
                console.error("ERROR trying to set Storage Favorite Colors Context.");
            }
        },

        addToFavoriteColors: async ( color: ColorProps ) => {
            try {
                const favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_COLORS_KEY);
                let favs: any[ ] = favorites ? JSON.parse(favorites) : [];

                let updatedFavorites = favs.filter((item) => {
                    return item.key !== color.key;
                })

                updatedFavorites.unshift( color );

                await AsyncStorage.setItem(STORAGE_FAVORITE_COLORS_KEY, JSON.stringify( updatedFavorites ));
                return [];
            } catch(err) {
                console.error("ERROR trying to add new color to: ", STORAGE_FAVORITE_COLORS_KEY);
            }
        },

        addToFavoritePhotos: async ( photo: GaleryPhotoProps ) => {
            try {
                const favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_PHOTOS_KEY);
                let updatedFavorites: any[ ] = favorites ? JSON.parse(favorites) : [];
                updatedFavorites.unshift( photo );

                await AsyncStorage.setItem(STORAGE_FAVORITE_PHOTOS_KEY, JSON.stringify( updatedFavorites ));
                return [];
            } catch(err) {
                console.error("ERROR: ", err);
            }
        },

        removeFromFavoriteColors: async ( key: string ) => {
            try {
                let favorites = await AsyncStorage.getItem(STORAGE_FAVORITE_COLORS_KEY);
                let fav: any[ ] = favorites ? JSON.parse( favorites ) : [];

                
                let updatedFavorites = fav.filter((item) => {
                    return item.key !== key;
                })

                await AsyncStorage.setItem(STORAGE_FAVORITE_COLORS_KEY, JSON.stringify( updatedFavorites ));

            } catch(err) {
                console.error("ERROR: ", err);
            }
        }
    }
}