import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentsScreen from "./ComponentScreen";

const HomeScreen = () => {
  return <Text style={styles.text}>Hi There! This is taking a lot of ram</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
