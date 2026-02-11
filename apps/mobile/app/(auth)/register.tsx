import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import Animated, {
  SlideInRight,
  SlideOutRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function RegisterScreen() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleRegister = () => {
    setTimeout(() => {
      router.replace("/(app)");
    }, 100);
  };

  return (
    <Animated.View
      entering={SlideInRight.duration(260)}
      exiting={SlideOutRight.duration(180)}
      style={styles.container}
    >
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join us today</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#94a3b8"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#94a3b8"
        secureTextEntry
        style={styles.input}
      />

      <Animated.View style={animatedStyle}>
        <Pressable
          style={styles.button}
          onPressIn={() => (scale.value = withSpring(0.96))}
          onPressOut={() => (scale.value = withSpring(1))}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </Animated.View>

      <Pressable onPress={() => router.push("/login")}>
        <Text style={styles.footer}>
          Already have an account? <Text style={styles.link}>Login</Text>
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  input: {
    height: 52,
    borderRadius: 10,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1e293b",
    paddingHorizontal: 16,
    color: "#f8fafc",
  },
  button: {
    height: 52,
    borderRadius: 10,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginTop: 16,
    textAlign: "center",
    color: "#94a3b8",
  },
  link: {
    color: "#38bdf8",
    fontWeight: "500",
  },
});
