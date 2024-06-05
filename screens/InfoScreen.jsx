import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InfoScreen = () => {
  const [fontsLoaded] = useFonts({
    FredokaRegular: require("../assets/fonts/Fredoka-Regular.ttf"),
    FredokaBold: require("../assets/fonts/Fredoka-Bold.ttf"),
    FredokaMedium: require("../assets/fonts/Fredoka-Medium.ttf"),
    FredokaLight: require("../assets/fonts/Fredoka-Light.ttf"),
    FredokaSemiBold: require("../assets/fonts/Fredoka-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedUserInfo = await AsyncStorage.getItem("@inquilino");
      if (setUserInfo) {
        setUserInfo(JSON.parse(storedUserInfo));
      }
    };
    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return <Text> Cargando información de usuario...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus datos</Text>
      <Text style={styles.text}>
        Eres el inquilino No. {userInfo.id_inquilino}
      </Text>
      <Text style={styles.text}>
        Tu condominio es el No. {userInfo.id_condominio}
      </Text>
      <Text style={styles.text}>
        Tu departamento es el No. {userInfo.id_departamento}
      </Text>
      <Text style={styles.text}>Tu nombre es: {userInfo.nombre_inquilino}</Text>
      <Text style={styles.text}>
        Tus apellidos son: {userInfo.apellino_paterno_inquilino}{" "}
        {userInfo.apellino_materno_inquilino}
      </Text>
      <Text style={styles.text}>
        Tu correo electrónico es: {userInfo.correo_inquilino}
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
    alignSelf: "flex-start",
    marginTop: 25,
    fontFamily: "FredokaBold",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "FredokaMedium",
    marginBottom: 10,
  },
});

export default InfoScreen;
