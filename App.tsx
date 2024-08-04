
import { AppNavigator } from './src/navigation/AppNavigator';
import { ColorContextProvider } from './contexts/ColorContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContextProvider } from './contexts/NavigationContext';
import { UserContext, UserContextProvider } from './contexts/UserContext';
import { useContext, useEffect } from 'react';
import { LibraryContextProvider } from './contexts/LibraryContext';
import { FavoritesContextProvider } from './contexts/FavoritesContext';

export default function App() {
  const UserContxt = useContext( UserContext );

  useEffect(( ) => {
    UserContxt?.updateuser( );
  }, [ ]);

  return (
    <GestureHandlerRootView>
      <FavoritesContextProvider>
        <LibraryContextProvider>
          <UserContextProvider>
            <NavigationContextProvider>
              <ColorContextProvider>
                <AppNavigator />
              </ColorContextProvider>
            </NavigationContextProvider>
          </UserContextProvider>
        </LibraryContextProvider>
      </FavoritesContextProvider>
    </GestureHandlerRootView>
  );
}
