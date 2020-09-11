import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const friends = [
  {
    name: "Friend 1",
    age: 30,
    id: "1",
  },
  {
    name: "Friend 2",
    age: 30,
    id: "2",
  },
  {
    name: "Friend 3",
    age: 30,
    id: "3",
  },
  {
    name: "Friend 4",
    age: 30,
    id: "4",
  },
  {
    name: "Friend 5",
    age: 30,
    id: "5",
  },
  {
    name: "Friend 6",
    age: 30,
    id: "6",
  },
];

export default function ListScreen() {
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator = {true}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <Text style={styles.textHeader}>{item.name}</Text>
            <Text style={styles.textHeader}>{item.age}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fa12ac",
  },
  listItem: {
    marginVertical: 100,
  },
});
