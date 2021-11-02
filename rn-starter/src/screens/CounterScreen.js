import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterScreen = () => {
  // TODO: fix this
  let [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="increase" onPress={() => setCounter(++counter)} />
      <Button title="decrease" onPress={() => setCounter(--counter)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
