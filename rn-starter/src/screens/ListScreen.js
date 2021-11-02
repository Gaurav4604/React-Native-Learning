import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 18, key: "1" },
    { name: "Friend #2", age: 21, key: "2" },
    { name: "Friend #3", age: 25, key: "3" },
    { name: "Friend #4", age: 19, key: "4" },
    { name: "Friend #5", age: 20, key: "5" },
    { name: "Friend #6", age: 25, key: "6" },
    { name: "Friend #7", age: 23, key: "7" },
    { name: "Friend #8", age: 29, key: "8" },
  ];
  return (
    <FlatList
      //   horizontal (this is to make a horizontal list)
      showsVerticalScrollIndicator={false} // to disable scrollBar visibility
      data={friends}
      style={{
        padding: 10,
      }}
      keyExtractor={(friend) => {
        return friend.name;
      }}
      renderItem={({ item }) => {
        // destructure item out of the element (from renderItem)
        return (
          <Text key={item.name} style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    paddingVertical: 50,
    paddingLeft: 5,
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ListScreen;
