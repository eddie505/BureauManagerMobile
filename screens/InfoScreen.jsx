import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CryptoJS from "react-native-crypto-js";

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

      // Desencriptar los datos
      const bytes = CryptoJS.AES.decrypt(
        storedUserInfo,
        "nF&#C&EHqxC!E4eqzLxA"
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      // Mostrar los datos encriptados en la consola
      console.log("Datos encriptados:", storedUserInfo);

      // Mostrar los datos desencriptados en la consola
      console.log("Datos desencriptados:", decryptedData);

      if (setUserInfo) {
        setUserInfo(decryptedData);
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
      <View style={styles.box}>
        <Text style={styles.boldText}>Eres el inquilino No.</Text>
        <Text style={styles.text}>{userInfo.id_inquilino}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Tu condominio es el No.</Text>
        <Text style={styles.text}>{userInfo.id_condominio}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Tu departamento es el No.</Text>
        <Text style={styles.text}>{userInfo.id_departamento}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Tu nombre es:</Text>
        <Text style={styles.text}>{userInfo.nombre_inquilino}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Tus apellidos son:</Text>
        <Text style={styles.text}>
          {userInfo.apellino_paterno_inquilino}{" "}
          {userInfo.apellino_materno_inquilino}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Tu correo electrónico es:</Text>
        <Text style={styles.text}>{userInfo.correo_inquilino}</Text>
      </View>
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
  boldText: {
    fontSize: 20,
    fontFamily: "FredokaMedium",
    fontWeight: "bold",
    marginBottom: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
  },
});

export default InfoScreen;
