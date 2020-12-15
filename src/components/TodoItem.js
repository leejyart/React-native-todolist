import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { removeTodo, toggleTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: todo?.done ? "gray" : "#33BCB4",
      }}
    >
      <Text
        style={{
          paddingLeft: 30,
          paddingBottom: 3,
          fontSize: 30,
          color: "white",
        }}
      >
        ▸
      </Text>
      <TouchableOpacity onPress={handleToggle}>
        <Text
          style={{
            textDecorationLine: todo?.done ? "line-through" : "none",
            paddingTop: 5,
            paddingRight: 20,
            paddingLeft: 15,
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRemove}>
        <Text style={styles.text}>DELETE✖️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: 300,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#33BCB4",
    opacity: 0.9,
    marginBottom: 10,
    alignContent: "center",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "white",
    marginTop: 7,
    marginRight: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: 25,
    width: 60,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    color: "black",
    marginLeft: 5,
    marginTop: 5,
    fontSize: 10,
    fontWeight: "bold",
  },
});
