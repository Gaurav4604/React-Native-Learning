import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class BoxScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.viewStyle}>
          <Text style={[styles.textStyle, { flex: 1 }]}> Child #1 </Text>
          <Text style={[styles.textStyle, { flex: 0.5 }]}> Child #2 </Text>
          <Text style={styles.textStyle}> Child #3 </Text>
          <Text style={styles.textStyle}> Child #4 </Text>
        </View>

        <View
          style={{
            marginTop: 100,
            position: "absolute",
            width: 400,
            height: 200,
            borderColor: "red",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              top: "50%",
            }}
          >
            Hello there
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    alignItems: "stretch",
    flexDirection: "row",
  },
  textStyle: {
    borderWidth: 1,
    position: "absolute",
    borderColor: "red",
    margin: 10,
    alignSelf: "center",
    ...StyleSheet.absoluteFillObject,
  },
});

export default BoxScreen;
