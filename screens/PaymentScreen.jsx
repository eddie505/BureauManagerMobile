import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      if (setPaymentInfo) {
        setPaymentInfo(JSON.parse(storedPaymentInfo));
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
      <Text style={styles.text}>ID pagos: {paymentInfo.id_info_pagos}</Text>
      <Text style={styles.text}>Adeudo: {paymentInfo.adeudo}</Text>
      <Text style={styles.text}>Total Pagado: {paymentInfo.total_pagado}</Text>
      <Text style={styles.text}>Cuota Base: {paymentInfo.cuota_base}</Text>
      <Text style={styles.text}>
        Cuota Extra: ${paymentInfo.cuota_extra} Mxn
      </Text>
      <Text style={styles.text}>Fecha de Pago: {paymentInfo.fecha_pago}</Text>
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
  text: {
    fontSize: 20,
    fontFamily: "FredokaMedium",
    marginTop: 10,
  },
});
export default PaymentScreen;
