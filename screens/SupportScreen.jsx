import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Style,
  Button,
} from "react-native";
import { useFonts } from "expo-font";

const SupportScreen = () => {
  const [fontsLoaded] = useFonts({
    FredokaRegular: require("../assets/fonts/Fredoka-Regular.ttf"),
    FredokaBold: require("../assets/fonts/Fredoka-Bold.ttf"),
    FredokaMedium: require("../assets/fonts/Fredoka-Medium.ttf"),
    FredokaLight: require("../assets/fonts/Fredoka-Light.ttf"),
    FredokaSemiBold: require("../assets/fonts/Fredoka-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soporte</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fefae0",
  },
  title: {
    fontSize: 30,
    fontFamily: "FredokaBold",
    marginTop: 25,
    alignSelf: "flex-start",
    textAlign: "left",
  },
});

export default SupportScreen;
