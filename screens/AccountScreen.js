import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import ListItem from "../components/ListItem";

import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: colors.accent,
    },
  },
];

function AccountScreen(props) {
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.lightGrey,
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="vishwa300499@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
