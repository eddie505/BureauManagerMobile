import { View, Text, StyleSheet } from "react-native";
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
      <Text style={styles.title}>Preguntas frecuentes</Text>
      <Text style={styles.question}>¿Cómo inicio sesión?</Text>
      <Text style={styles.answer}>
        Para iniciar sesión, necesitas tu código de inquilino el cual te lo
        proporciona tu administrador, este mismo es único en su tipo, asi que no
        lo compartas con nadie.
      </Text>
      <Text style={styles.question}>¿Qué hago si mis datos son erroneos?</Text>
      <Text style={styles.answer}>
        Para cualquier corrección/aclaración relacionada a tus datos, te
        recomendamos ponerte en contacto con nosotros al correo:{" "}
        <Text style={styles.email}>atencion@bureaumanager.com</Text>
        {""} Y nuestro equipo se encargará de evaluar tu caso.
      </Text>
      <Text style={styles.question}>¿Puedo hacer mis pagos aquí?</Text>
      <Text style={styles.answer}>
        No, Bureau Manager for Clients solo tiene el propósito de que tú como
        inquilino puedas visualizar información útil para tí, como tus pagos,
        adeudos y demas datos utiles para tu perfil.{" "}
      </Text>
      <Text style={styles.question}>
        ¿Otros inquilinos pueden ver mi información?
      </Text>
      <Text style={styles.answer}>
        No, Solo tú y nuestro equipo tiene acceso a tus datos de residencia,
        puedes quedarte tranquilo debido a que otros inquilons vean tus datos.{" "}
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
    marginTop: 25,
    alignSelf: "flex-start",
    textAlign: "left",
  },
  email: {
    fontSize: 18,
    fontFamily: "FredokaBold",
    marginTop: 15,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "#007BFF",
  },
  question: {
    fontSize: 20,
    fontFamily: "FredokaSemiBold",
    marginTop: 10,
    alignSelf: "flex-start",
    textAlign: "left",
  },

  answer: {
    fontSize: 18,
    fontFamily: "FredokaRegular",
    marginTop: 5,
    alignSelf: "flex-start",
    textAlign: "left",
  },
});

export default SupportScreen;
