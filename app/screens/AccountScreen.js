import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import ListItems from "../components/lists/ListItems";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/lists/ListItemSeperator";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messaging",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <ScreenView style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Qasid Ali"
          subTitle="rajaqasidali856@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              imageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItems
        title="Log Out"
        imageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f5f5",
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
