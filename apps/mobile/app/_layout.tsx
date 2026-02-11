import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isLoggedIn = false;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="(auth)" />
        ) : (
          <Stack.Screen name="(app)" />
        )}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
