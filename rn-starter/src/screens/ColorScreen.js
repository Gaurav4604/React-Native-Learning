import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

const ColorScreen = () => {
  let [colorArray, setColorArray] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          // this says, take a copy of current array
          // and add another element to it
          setColorArray([...colorArray, randomRGB()]);
        }}
      />

      <FlatList
        data={colorArray}
        keyExtractor={(color) => {
          return color;
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  marginBottom: 10,
                  backgroundColor: item,
                }}
              />

              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
