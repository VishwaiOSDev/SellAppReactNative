import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
} from "react-native";

import AppButton from "./components/AppButton";
import Card from "./components/Card";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <AppTextInput
        placeholder="Email"
        icon="email"
        keyboardType="email-address"
        autoCorrect={false}
      />
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
