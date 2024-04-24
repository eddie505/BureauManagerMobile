import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Style } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta es la home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fefae0",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
