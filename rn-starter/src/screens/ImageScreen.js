import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const rootPath = "../../assets/images";
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require(`${rootPath}/beach.jpg`)}
        score="9"
      />
      <ImageDetail
        title="Beach"
        imgSrc={require(`${rootPath}/forest.jpg`)}
        score="6"
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require(`${rootPath}/mountain.jpg`)}
        score="8"
      />
    </View>
  );
};

export default ImageScreen;
