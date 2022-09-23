import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigation";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Nunito_200ExtraLight as Nunito200,
  Nunito_300Light as Nunito300,
  Nunito_400Regular as Nunito400,
  Nunito_500Medium as Nunito500,
  Nunito_600SemiBold as Nunito600,
  Nunito_700Bold as Nunito700,
  Nunito_800ExtraBold as Nunito800,
  Nunito_900Black as Nunito900,
  Nunito_200ExtraLight_Italic as NunitoItalic200,
  Nunito_300Light_Italic as NunitoItalic300,
  Nunito_400Regular_Italic as NunitoItalic400,
  Nunito_500Medium_Italic as NunitoItalic500,
  Nunito_600SemiBold_Italic as NunitoItalic600,
  Nunito_700Bold_Italic as NunitoItalic700,
  Nunito_800ExtraBold_Italic as NunitoItalic800,
  Nunito_900Black_Italic as NunitoItalic900,
} from "@expo-google-fonts/nunito";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback } from "react";
import { UserProvider } from "./src/context/User.context";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito200,
    Nunito300,
    Nunito400,
    Nunito500,
    Nunito600,
    Nunito700,
    Nunito800,
    Nunito900,
    NunitoItalic200,
    NunitoItalic300,
    NunitoItalic400,
    NunitoItalic500,
    NunitoItalic600,
    NunitoItalic700,
    NunitoItalic800,
    NunitoItalic900,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <UserProvider>
            <MainNavigator />
          </UserProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
