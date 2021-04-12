import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import ListingEditScreen from "./screens/ListingEditScreen";
import MessagesScreen from "./screens/MessagesScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
