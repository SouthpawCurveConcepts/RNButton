import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainWindow } from "./src/features/mainwindow";

export default function App() {
  return (
    <MainWindow />

    // <View style={styles.container}>
    //    <Text>Replace this with a button!</Text>
    //    <StatusBar style="auto" />
    //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
