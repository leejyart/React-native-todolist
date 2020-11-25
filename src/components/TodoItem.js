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
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <Text
          style={{
            textDecorationLine: todo?.done ? "line-through" : "none",
            paddingTop: 10,
            paddingRight: 20,
            color: "grey",
            fontSize: 15,
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRemove}>
        <Text style={styles.text}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    height: 20,
    width: 50,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    marginTop: 5,
    fontSize: 10,
  },
});
