import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoList from "../components/TodoList";

export default function ThingsTodo() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: "bold",
    padding: 3,
    width: 250,
    height: 30,
    borderBottomColor: "black",
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  listContainer: {
    height: 250,
  },
});
