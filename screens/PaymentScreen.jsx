import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CryptoJS from "react-native-crypto-js";

const PaymentScreen = () => {
  const [fontsLoaded] = useFonts({
    FredokaRegular: require("../assets/fonts/Fredoka-Regular.ttf"),
    FredokaBold: require("../assets/fonts/Fredoka-Bold.ttf"),
    FredokaMedium: require("../assets/fonts/Fredoka-Medium.ttf"),
    FredokaLight: require("../assets/fonts/Fredoka-Light.ttf"),
    FredokaSemiBold: require("../assets/fonts/Fredoka-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      const storedPaymentInfo = await AsyncStorage.getItem("@inquilino");

      // Desencriptar los datos
      const bytes = CryptoJS.AES.decrypt(
        storedPaymentInfo,
        "nF&#C&EHqxC!E4eqzLxA"
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      // Mostrar los datos encriptados en la consola
      console.log("Datos encriptados:", storedPaymentInfo);

      // Mostrar los datos desencriptados en la consola
      console.log("Datos desencriptados:", decryptedData);

      if (setPaymentInfo) {
        setPaymentInfo(decryptedData);
      }
    };
    fetchPaymentInfo();
  }, []);

  if (!paymentInfo) {
    return <Text> Cargando información de pagos...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagos asociados a tí </Text>
      <View style={styles.box}>
        <Text style={styles.boldText}>ID pagos:</Text>
        <Text style={styles.text}>{paymentInfo.id_info_pagos}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Adeudo:</Text>
        <Text style={styles.text}>${paymentInfo.adeudo}Mxn</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Total Pagado:</Text>
        <Text style={styles.text}>${paymentInfo.total_pagado}Mxn</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Cuota Base:</Text>
        <Text style={styles.text}>${paymentInfo.cuota_base}Mxn</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Cuota Extra:</Text>
        <Text style={styles.text}>${paymentInfo.cuota_extra} Mxn</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boldText}>Fecha de Pago:</Text>
        <Text style={styles.text}>{paymentInfo.fecha_pago}</Text>
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
    fontFamily: "FredokaBold",
    alignSelf: "flex-start",
    textAlign: "left",
    marginTop: 25,
  },
  boldText: {
    fontSize: 20,
    fontFamily: "FredokaBold",
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "FredokaMedium",
    marginTop: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});
export default PaymentScreen;
