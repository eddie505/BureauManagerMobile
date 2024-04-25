import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Style } from "react-native";
import { useFonts } from "expo-font";

const HomeScreen = () => {
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
      <Text style={styles.title}>¡Bienvenido a Bureau Manager Mobile!</Text>
      <Text style={styles.basicInfo}>
        {
          "En esta aplicación podrás ver toda la información relacionada a tus pagos y adeudos, así como información general de tu perfil.\n"
        }

        {
          "Recuerda que si tienes alguna duda o problema, puedes dirigirte a la pestaña de ayuda.\n"
        }
      </Text>
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
    alignSelf: "flex-start",
    textAlign: "ju",
    marginTop: 25,
  },
  basicInfo: {
    fontSize: 20,
    fontFamily: "FredokaRegular",
    alignSelf: "flex-start",
    textAlign: "left",
    marginTop: 25,
  },
});

export default HomeScreen;
