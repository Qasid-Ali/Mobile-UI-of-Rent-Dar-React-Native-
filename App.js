import React from "react";

import { View, StyleSheet, TextInput, Card } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import CategoryNavigator from "./app/navigation/CategoryNavigator";
import AddItemListing from "./app/screens/AddItemListing";

export default function App() {
  return (
    <AddItemListing />
    // <NavigationContainer theme={navigationTheme}>
    //   <AuthNavigator />
    // </NavigationContainer>
    // <ScreenView>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectedItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput placeholder="Email" icon="email" />
    // </ScreenView>
    // <ListingsScreen />

    // <ScreenView>
    //   <ListItems title="Mu sdsdsd" imageComponent={<Icon name="email" />} />
    //   <ListItems
    //     title="Mu sdsdsd"
    //     subTitle="muy aasasasas"
    //     imageComponent={<Icon name="trash-can" />}
    //   />
    // </ScreenView>
    //<ListingDetailScreen />
    // <View style={styles.backgroundCard}>
    //   <AddCard
    //     title="Aasasas"
    //     subTitle="$1000"
    //     image={require("./app/assets/chair.jpg")}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  // backgroundCard: {
  //   backgroundColor: "#f8f4f4",
  //   padding: 20,
  //   paddingTop: 100,
  // },
});
