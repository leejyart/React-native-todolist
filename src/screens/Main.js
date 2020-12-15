import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AddTodo from "./AddTodo";
import DoneTodo from "./DoneTodo";

const TAB_OBJ = {
  1: <AddTodo />,
  2: <DoneTodo />,
};

function Main() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const handleIdx = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 📖 All Lists </Text>
      <View style={styles.menu}>
        <View
          style={{
            ...styles.button,
            borderBottomWidth: currentIdx === 1 ? 2 : 0,
            backgroundColor: currentIdx === 1 ? "grey" : "lightgrey",
            opacity: 0.8,
          }}
        >
          <TouchableOpacity onPress={() => handleIdx(1)}>
            <Text
              style={{
                ...styles.text,
                color: currentIdx === 1 ? "black" : "grey",
              }}
            >
              ✍️ To-Do
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.button,
            borderBottomWidth: currentIdx === 2 ? 2 : 0,
            backgroundColor: currentIdx === 2 ? "grey" : "lightgrey",
            opacity: 0.8,
          }}
        >
          <TouchableOpacity onPress={() => handleIdx(2)}>
            <Text
              style={{
                ...styles.text,
                color: currentIdx === 2 ? "black" : "grey",
              }}
            >
              ✔️ Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listView}>{TAB_OBJ[currentIdx]}</View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
  },

  menu: {
    flexDirection: "row",
    backgroundColor: "white",
  },

  button: {
    flex: 1,
    borderBottomColor: "black",
    backgroundColor: "white",
  },

  text: {
    paddingVertical: 13,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  listView: {
    flex: 1,
  },
});
