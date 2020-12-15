import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import DoneTodoItem from "../components/DoneTodoItem";

function DoneTodo() {
  const Items = useSelector((store) => store.todos);
  const doneItems = Items.filter((item) => item.done === true);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.listView}>
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 20 }}>
            ▶︎ What I've done Today! ◀︎
          </Text>
          {doneItems.map((el, idx) => (
            <DoneTodoItem {...el} idx={idx} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default DoneTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 251)",
  },

  listView: {
    paddingTop: 100,
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});
