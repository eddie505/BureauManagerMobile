import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Style,
  TextInput,
  Button,
} from "react-native";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    FredokaRegular: require("../assets/fonts/Fredoka-Regular.ttf"),
    FredokaBold: require("../assets/fonts/Fredoka-Bold.ttf"),
    FredokaMedium: require("../assets/fonts/Fredoka-Medium.ttf"),
    FredokaLight: require("../assets/fonts/Fredoka-Light.ttf"),
    FredokaSemiBold: require("../assets/fonts/Fredoka-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de autenticación
    // Si la autenticación es exitosa, navega a la pantalla principal
    navigation.navigate("MainApp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlew}>Bureau Manager</Text>
      <Text style={styles.title}>
        Por favor, ingrese su código departamental:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 123456"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        keyboardType="numeric"
        maxLength={10}
      />
      <TouchableOpacity style={styles.logbtn} onPress={handleLogin}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <LottieView
        style={{ flex: 1 }}
        source={require("../assets/door_ani.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "#fefae0",
  },
  titlew: {
    fontSize: 40,
    fontFamily: "FredokaBold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 50,
    color: "#000000",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "FredokaRegular",
    marginBottom: 20,
    marginTop: 15,
  },
  input: {
    height: 40,
    fontFamily: "FredokaLight",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  logbtn: {
    backgroundColor: "#1B6953",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontFamily: "FredokaMedium",
    textAlign: "center",
    fontSize: 17,
  },
});

export default LoginScreen;
