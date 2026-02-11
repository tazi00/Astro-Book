import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import type { User } from "@astrobook/types";

export default function HomeScreen() {
  const user: User = {
    id: "1",
    email: "[EMAIL_ADDRESS]",
  };
  return (
    <Animated.View
      entering={SlideInRight.duration(260)}
      style={styles.container}
    >
      <Text style={styles.title}>🏠 Homee </Text>
      <Text style={styles.subtitle}>You are logged in now</Text>
      <Text style={styles.subtitle}>{user.email}</Text>

      <Pressable style={styles.button} onPress={() => router.replace("/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f8fafc",
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    marginVertical: 16,
  },
  button: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#dc2626",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
