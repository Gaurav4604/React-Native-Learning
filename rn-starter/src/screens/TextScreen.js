import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [value, setValue] = useState("");

  return (
    <View>
      <Text>Enter name: </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(newValue) => setValue(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text>Hi, My name is: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    height: 25,
    borderWidth: 1,
  },
});

export default TextScreen;
