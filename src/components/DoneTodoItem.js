import React from "react";
import {
  View,
  Text,
  CheckBox,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { doneTodo } from "../redux/actions";
import { withTheme } from "styled-components";

function DoneTodoItem(el) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={{ paddingLeft: 6, paddingTop: 2 }}>{el.idx + 1}</Text>
      </View>
      <Text style={styles.text}>{el.text}</Text>
      <View>
        <Text style={{ paddingTop: 10 }}>🔙</Text>
      </View>
    </View>
  );
}

export default DoneTodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: 300,
    height: 40,
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    marginBottom: 10,
    alignContent: "center",
    borderRadius: 10,
  },

  button: {
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 15,
    marginTop: 10,
    height: 20,
    width: 20,
    color: "gray",
  },

  button2: {
    backgroundColor: "white",
    borderRadius: 20,
    fontSize: 15,
    marginTop: 5,
    height: 30,
    width: 30,
    color: "gray",
  },

  text: {
    color: "black",
    fontWeight: "bold",
    paddingTop: 10,
  },

  listView: {
    flex: 9,
  },
});
