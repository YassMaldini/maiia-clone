import { useCallback, useMemo } from "react";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import getTheme from "../../utils/theme/theme";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Loading } from "../commons/Loading/Loading";
import Box from "../designSystem/Box/Box";
import RootStack from "./RootStack/RootStack";
import { StatusBar } from "expo-status-bar";

export default () => {

  const theme = useMemo(() => getTheme(), []);

  const navigationTheme = useMemo(() => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        ...theme.colors
      },
    };
  }, []);

  const [fontsLoaded] = useFonts({
    'SourceSans3-Regular': require('../../../assets/fonts/SourceSans3-Regular.ttf'),
    'SourceSans3-Italic': require('../../../assets/fonts/SourceSans3-Italic.ttf'),
    'SourceSans3-SemiBold': require('../../../assets/fonts/SourceSans3-SemiBold.ttf'),
    'Outfit-Bold': require('../../../assets/fonts/Outfit-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar translucent />
      <ThemeProvider {...{ theme }}>
        <BottomSheetModalProvider>
          <Box
            flex={1}
            onLayout={onLayoutRootView}>
            <RootStack />
          </Box>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}