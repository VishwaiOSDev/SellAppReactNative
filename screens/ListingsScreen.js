import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
});

export default ListingsScreen;
