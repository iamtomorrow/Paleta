
import { AppNavigator } from './src/navigation/AppNavigator';
import { ColorContextProvider } from './contexts/ColorContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ColorContextProvider>
        <AppNavigator />
      </ColorContextProvider>
    </GestureHandlerRootView>
  );
}
