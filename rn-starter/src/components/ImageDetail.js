import React from "react";
import { Image, Text, View } from "react-native";

const ImageDetail = ({ title, imgSrc, score }) => {
  return (
    <View>
      <Image source={imgSrc} />
      <Text>{title}</Text>
      <Text>{score}</Text>
    </View>
  );
};

export default ImageDetail;
