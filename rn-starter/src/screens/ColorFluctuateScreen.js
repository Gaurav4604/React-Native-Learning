import React, { useState } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorFluctuateScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const REDUCE_INTENSITY = 5;

  const setColor = (color, change) => {
    switch (color) {
      case "Red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "Green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "Blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
    }
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ColorCounter
        color="Red"
        reduceColor={() => setColor("Red", -REDUCE_INTENSITY)}
        increaseColor={() => setColor("Red", REDUCE_INTENSITY)}
      />
      <ColorCounter
        color="Green"
        reduceColor={() => setColor("Green", -REDUCE_INTENSITY)}
        increaseColor={() => setColor("Green", REDUCE_INTENSITY)}
      />
      <ColorCounter
        color="Blue"
        reduceColor={() => setColor("Blue", -REDUCE_INTENSITY)}
        increaseColor={() => setColor("Blue", REDUCE_INTENSITY)}
      />

      <View
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
};

export default ColorFluctuateScreen;
