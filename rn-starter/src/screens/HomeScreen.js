import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Components Page"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text style={styles.btnText}>Go to List Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
      >
        <Text style={styles.btnText}>Go to Image Detail Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("CounterScreen");
        }}
      >
        <Text style={styles.btnText}>Go to Counter Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ColorScreen");
        }}
      >
        <Text style={styles.btnText}>Go to Color Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ColorFluctuateScreen");
        }}
      >
        <Text style={styles.btnText}>Go to Color Fluctuate Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    width: 120,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "rgb(0, 255, 0)",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default HomeScreen;
