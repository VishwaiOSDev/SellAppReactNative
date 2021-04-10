import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/colors";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.accent,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
