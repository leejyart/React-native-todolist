import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

function Home({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#EFFFF9",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text style={styles.text}>DIY Todo-list!</Text>
        <View style={styles.btnContainer}>
          <Button
            color="white"
            fontWeight="bold"
            title="Start"
            onPress={() => navigation.navigate("Main")}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    width: 350,
    backgroundColor: "#B9F3E7",
    color: "#33BCB4",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },

  btnContainer: {
    backgroundColor: "black",
    opacity: 0.7,
    width: 100,
    marginLeft: 130,
    borderRadius: 20,
  },
});
