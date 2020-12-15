import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import ThingsTodo from "./ThingsTodo";

export default function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!todoText) {
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <>
      <ThingsTodo />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요."
          onChangeText={(text) => setTodoText(text)}
          value={todoText}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.text}>추가 +</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  textInput: {
    textAlign: "center",
    fontSize: 15,
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 16,
    borderRadius: 8,
    paddingLeft: 8,
  },
  text: {
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    backgroundColor: "#C3262F",
    borderRadius: 10,
    padding: 8,
  },
});
