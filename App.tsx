import { useContext } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigations/RootNavigation';
import MainNavigator from './navigations/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { dark, light } from './theme';
import { ColorContext, ColorProvider } from './store/context';

export default function App() {
  const { theme } = useContext(ColorContext);
  // console.log(theme);

  return (
    <SafeAreaProvider>
      <ColorProvider>
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
          <NavigationContainer ref={navigationRef}>
            <MainNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </ColorProvider>
    </SafeAreaProvider>
  );
}
