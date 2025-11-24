import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { HeroUINativeProvider } from 'heroui-native';
import { useEffect } from "react";
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../global.css';


// Polyfill for setImmediate on web
if (typeof setImmediate === 'undefined') {
  // @ts-ignore
  global.setImmediate = (fn) => setTimeout(fn, 0);
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    "Jakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
});


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


    return (
    <GestureHandlerRootView style={styles.root}>
      <HeroUINativeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="/(root)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      
        </Stack>
        
      </HeroUINativeProvider>
    </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

