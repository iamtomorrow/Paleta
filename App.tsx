
import { AppNavigator } from './src/navigation/AppNavigator';
import { ColorContextProvider } from './contexts/ColorContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContextProvider } from './contexts/NavigationContext';
import { UserContextProvider } from './contexts/UserContext';

export default function App() {
  return (
    <GestureHandlerRootView>
      <UserContextProvider>
        <NavigationContextProvider>
          <ColorContextProvider>
            <AppNavigator />
          </ColorContextProvider>
        </NavigationContextProvider>
      </UserContextProvider>
    </GestureHandlerRootView>
  );
}
