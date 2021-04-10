import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.contianer}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "700",
  },
});

export default ListItem;
