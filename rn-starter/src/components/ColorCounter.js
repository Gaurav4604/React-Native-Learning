import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
      <Text
        style={{
          color: props.color.toLowerCase(),
        }}
      >
        {props.color}
      </Text>
      <TouchableOpacity
        style={[
          {
            backgroundColor: props.color.toLowerCase(),
          },
          styles.button,
        ]}
        onPress={props.increaseColor}
      >
        <Text
          style={{
            color: "white",
          }}
        >{`More ${props.color}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            backgroundColor: props.color.toLowerCase(),
          },
          styles.button,
        ]}
        onPress={props.reduceColor}
      >
        <Text
          style={{
            color: "white",
          }}
        >{`Less ${props.color}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ColorCounter;
