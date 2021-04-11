import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.menuIcon}>
          <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="white" size={35} />
          </View>
          <View style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color="white"
              size={35}
            />
          </View>
        </View>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    left: 30,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  menuIcon: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
  },
});

export default ViewImageScreen;
