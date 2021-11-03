import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterScreen = () => {
  // TODO: fix this
  let [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Button title="increase" onPress={() => setCounter(++counter)} />
      <Button title="decrease" onPress={() => setCounter(--counter)} />
      <Button title="reset" onPress={() => setCounter(0)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
