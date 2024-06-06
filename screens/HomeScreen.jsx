import { View, StyleSheet, Text } from "react-native";
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
        En esta aplicación podrás ver toda la información relacionada a tus
        pagos y adeudos, así como información general de tu perfil.
      </Text>
      <Text style={styles.basicInfo}>
        Recuerda que si tienes alguna duda o problema, puedes dirigirte a la
        pestaña de ayuda.
      </Text>
      <Text style={styles.basicInfo}>
        Si necesitas asistencia inmediata, no dudes en contactarnos a través de
        nuestro correo de soporte:{" "}
        <Text style={styles.email}>atencion@bureaumanager.com</Text>
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
    textAlign: "justify",
    marginTop: 25,
  },
  basicInfo: {
    fontSize: 20,
    fontFamily: "FredokaRegular",
    alignSelf: "flex-start",
    textAlign: "left",
    marginTop: 25,
  },
  email: {
    fontSize: 20,
    fontFamily: "FredokaBold",
    color: "#007BFF",
  },
});

export default HomeScreen;
