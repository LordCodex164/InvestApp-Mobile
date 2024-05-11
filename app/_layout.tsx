import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from '@/hooks/useColorScheme';
import {ClerkProvider, SignedIn, SignedOut, useSignIn, useSignUp} from "@clerk/clerk-expo"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    DMSansRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMSansExtraBold: require('../assets/fonts/DMSans-ExtraBold.ttf'),
    DMSansItalic: require('../assets/fonts/DMSans-Italic.ttf'),
    DMSansLight: require('../assets/fonts/DMSans-Light.ttf'),
    DMSansMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMSansExtraLight: require('../assets/fonts/DMSans-ExtraLight.ttf'),
    DMSansSemiBold: require('../assets/fonts/DMSans_18pt-SemiBold.ttf'),
    DMSansBold: require('../assets/fonts/DMSans_18pt-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme != 'dark' ? DarkTheme : DefaultTheme}>

      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{headerShown: false}}/>
      </Stack>
    </ThemeProvider>
  );
}
