import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import AppTextInput from "./components/AppTextInput";
import LoginScreen from "./screens/LoginScreen";
import AppButton from "./components/AppButton";

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <LoginScreen />
    </SafeAreaView>
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
