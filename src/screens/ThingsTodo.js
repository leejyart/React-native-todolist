import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoList from "../components/TodoList";

export default function ThingsTodo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      <View style={styles.listContainer}>
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    height: 300,
  },
});
